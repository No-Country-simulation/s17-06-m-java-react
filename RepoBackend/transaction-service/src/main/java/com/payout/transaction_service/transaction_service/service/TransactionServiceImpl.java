package com.payout.transaction_service.transaction_service.service;

import com.payout.bank_account_service.dto.BankAccountDTO;
import com.payout.bank_account_service.models.BankAccount;
import com.payout.transaction_service.transaction_service.client.BankAccountClient;
import com.payout.transaction_service.transaction_service.client.UserClient;
import com.payout.transaction_service.transaction_service.domain.Transaction;
import com.payout.transaction_service.transaction_service.domain.TransactionDetail;
import com.payout.transaction_service.transaction_service.enums.CurrencyType;
import com.payout.transaction_service.transaction_service.http.TransactionResponse;
import com.payout.transaction_service.transaction_service.model.dto.TransactionDTO;
import com.payout.transaction_service.transaction_service.model.dto.UserBasic;
import com.payout.transaction_service.transaction_service.repository.TransactionDetailRepository;
import com.payout.transaction_service.transaction_service.repository.TransactionRepository;
import com.payout.transaction_service.transaction_service.utilities.InsufficientFundsException;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TransactionServiceImpl implements TransactionService {

    private final TransactionRepository transactionRepository;
    private final TransactionDetailRepository transactionDetailRepository;
    private final ModelMapper modelMapper;
    private final BankAccountClient bankServiceClient;
    private final UserClient userClient;

    @Override
    public TransactionDTO createTransaction(TransactionDTO transactionDto) {
        /*Transaction transaction = convertToEntity(transactionDto);
        Transaction savedTransaction = transactionRepository.save(transaction);
        return convertToDto(savedTransaction);*/

        //****************************************************
        // Comprobar si es alias o CVU para obtener la cuenta destino
        BankAccount targetAccount;
        if (transactionDto.getAlias() != null && !transactionDto.getAlias().isEmpty()) {
            // Buscar la cuenta por alias
            targetAccount = bankAccountService.findByAlias(transactionDto.getAlias());
        } else if (transactionDto.getCvu() != null) {
            // Buscar la cuenta por CVU
            targetAccount = bankAccountService.findByCvu(transactionDto.getCvu());
        } else {
            throw new IllegalArgumentException("Debe proporcionar un alias o CVU para la transacción.");
        }

        // Convertir DTO a entidad Transaction
        Transaction transaction = convertToEntity(transactionDto);

        // Asignar el ID de la cuenta destino
        transaction.setIdTargetAccount(targetAccount.getId());

        // Guardar la transacción
        Transaction savedTransaction = transactionRepository.save(transaction);

        // Retornar el DTO con la transacción guardada
        return convertToDto(savedTransaction);
    }

    @Override
    public List<TransactionDTO> getTransactionsByAccountId(Long accountId) {
        List<Transaction> transactions = transactionRepository.findByIdSourceAccountOrIdTargetAccount(accountId, accountId);
        return transactions.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<TransactionDTO> getTransactionHistory(Long accountId) {
        List<Transaction> transactions = transactionRepository.findByIdSourceAccountOrIdTargetAccount(accountId, accountId);
        return transactions.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public TransactionResponse performTransaction(String token, Long userId, String sourceAccountIdentifier, String targetAccountIdentifier, Double amount, String currencySource, String currencyTarget) {
        // Consultar la información del usuario desde el auth-service
        UserBasic user = userClient.findByUserId(userId);

        // Verificar si el sourceAccountIdentifier es CVU (numérico) o alias (alfanumérico)
        BankAccountDTO sourceAccount = identifyAccount(sourceAccountIdentifier);

        // Verificar si el targetAccountIdentifier es CVU o alias
        BankAccountDTO targetAccount = identifyAccount(targetAccountIdentifier);

        // Obtener el saldo de la cuenta fuente
        Double balance = sourceAccount.getBalance();

        // Verificación de saldo
        if (balance < amount) {
            throw new InsufficientFundsException("Insufficient balance to carry out the transaction");
        }

        // Crear la transacción
        Transaction transaction = new Transaction();
        transaction.setIdSourceAccount(sourceAccount.getId());
        transaction.setIdTargetAccount(targetAccount.getId());
        transaction.setAmount(amount);
        transaction.setCreateAt(LocalDateTime.now());
        transactionRepository.save(transaction);

        // Crear y guardar los detalles de la transacción
        TransactionDetail transactionDetail = new TransactionDetail();
        transactionDetail.setIdTransactionDetail(transaction.getIdTransaction());
        transactionDetail.setAmount(amount);
        transactionDetail.setFinalAmount(amount);  // Si hubiera comisión, ajusta aquí
        transactionDetail.setCreateAt(LocalDateTime.now());
        transactionDetail.setCurrencySource(CurrencyType.valueOf(currencySource));
        transactionDetail.setCurrencyTarget(CurrencyType.valueOf(currencyTarget));
        transactionDetailRepository.save(transactionDetail);

        // Actualizar el saldo de las cuentas fuente y destino
        bankServiceClient.updateAccountBalance(sourceAccount.getId(), balance - amount);
        bankServiceClient.updateAccountBalance(targetAccount.getId(), targetAccount.getBalance() + amount);

        // Crear la respuesta de la transacción
        return TransactionResponse.builder()
                .userName(user.getFirstName() + " " + user.getLastName())
                .transactionId(transaction.getIdTransaction())
                .sourceAccountId(sourceAccount.getId())
                .targetAccountId(targetAccount.getId())
                .amount(amount)
                .balance(balance - amount)  // Saldo luego de la transacción
                .targetAccountCvu(targetAccount.getCvu())
                .targetAccountAlias(targetAccount.getAlias())
                .build();
    }

    @Override
    public UserBasic getUserInfo(Long userId) {
        return userClient.findByUserId(userId);
    }

    @Override
    public Double getBalance(String accountIdentifier) {
        // Identificar si es CVU o alias
        BankAccountDTO account = identifyAccount(accountIdentifier);
        // Obtener el balance de la cuenta
        return account.getBalance();
    }

    private BankAccountDTO identifyAccount(String accountIdentifier) {
        // Si el identificador es completamente numérico y tiene 22 dígitos, es un CVU
        if (accountIdentifier.matches("\\d{22}")) {
            return bankServiceClient.findByCvu(Long.parseLong(accountIdentifier));
        } else {
            // Si no, se considera un alias
            return bankServiceClient.findByAlias(accountIdentifier);
        }
    }

    // Convertir entidades a DTOs
    private TransactionDTO convertToDto(Transaction transaction) {
        return modelMapper.map(transaction, TransactionDTO.class);
    }

    // Convertir DTOs a entidades
    private Transaction convertToEntity(TransactionDTO transactionDto) {
        return modelMapper.map(transactionDto, Transaction.class);
    }
}