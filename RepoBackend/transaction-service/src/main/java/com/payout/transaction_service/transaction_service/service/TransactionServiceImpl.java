package com.payout.transaction_service.transaction_service.service;

import com.payout.transaction_service.transaction_service.client.BankAccountClient;
import com.payout.transaction_service.transaction_service.client.UserClient;
import com.payout.transaction_service.transaction_service.domain.TransactionPayout;
import com.payout.transaction_service.transaction_service.domain.TransactionDetailPayout;
import com.payout.transaction_service.transaction_service.enums.CurrencyType;
import com.payout.transaction_service.transaction_service.enums.TransactionType;
import com.payout.transaction_service.transaction_service.model.dto.*;
import com.payout.transaction_service.transaction_service.repository.TransactionDetailRepository;
import com.payout.transaction_service.transaction_service.repository.TransactionRepository;
import com.payout.transaction_service.transaction_service.utilities.InsufficientFundsException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class TransactionServiceImpl implements TransactionService {

    private final TransactionRepository transactionRepository;
    private final TransactionDetailRepository transactionDetailRepository;
    private final ModelMapper modelMapper;
    private final BankAccountClient bankServiceClient;
    private final UserClient userClient;

    @Override
    public List<TransactionResponse> getTransactionHistory(Long userId) {
        // Consultar el historial de transacciones desde el repositorio
        List<TransactionPayout> transactions = transactionRepository.findByUserId(userId);
        List<TransactionResponse> transactionResponses = transactions.stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
        // Convertir las transacciones a DTOs o Responses
        return transactionResponses;
    }

    private TransactionResponse convertToResponse(TransactionPayout transaction) {
        return TransactionResponse.builder()
                .userId(transaction.getUserId())
                .userName(transaction.getSourceUserFullName())
                .transactionId(transaction.getIdTransaction())
                .sourceAccountId(transaction.getIdSourceAccount())
                .targetAccountId(transaction.getIdTargetAccount())
                .amount(transaction.getAmount())
                .balance(transaction.getAmount())
                .targetAccountCvu(transaction.getTargetCvu())
                .targetAccountAlias(transaction.getTargetAlias())
                .createdAt(LocalDateTime.now())
                .type(transaction.getType())
                .build();
    }

    @Override
    public TransactionResponse performTransaction(String token, Long userId, String sourceAccountIdentifier, String targetAccountIdentifier, Double amount, String currencySource, String currencyTarget) {
        // Consultar la información del usuario desde el auth-service
        GenericResponse<UserBasic> genericResponse = userClient.readById(0L,token);
        Long idUser = genericResponse.getData().get(0).getIdUser();
        GenericResponse<UserBasic> genericResponseData = userClient.readById(idUser,token);
        UserBasic user = genericResponseData.getData().get(0);
        // Verificar si el sourceAccountIdentifier es CVU (numérico) o alias (alfanumérico)
        BankBasic sourceAccount = identifyAccount(sourceAccountIdentifier);
        UserBasic target = bankServiceClient.getAllBankAccountsByIdentifier(token, targetAccountIdentifier);

        // Verificar si el targetAccountIdentifier es CVU o alias
        BankBasic targetAccount = identifyAccount(targetAccountIdentifier);

        // Obtener el saldo de la cuenta fuente
        Double balance = sourceAccount.getBalance();

        // Verificación de saldo
        if (balance < amount) {
            throw new InsufficientFundsException("Insufficient balance to carry out the transaction");
        }

        // Crear la transacción
        TransactionPayout transaction = new TransactionPayout();
        transaction.setIdSourceAccount(sourceAccount.getIdBankAccount());
        transaction.setIdTargetAccount(targetAccount.getIdBankAccount());
        transaction.setAmount(amount);
        transaction.setSourceCvu(sourceAccount.getCvu());
        transaction.setTargetCvu(targetAccount.getCvu());
        transaction.setCreatedAt(LocalDateTime.now());
        transaction.setType(TransactionType.TRANSFERENCIA);
        transaction.setSourceAlias(sourceAccount.getAlias());
        transaction.setTargetAlias(targetAccount.getAlias());
        transaction.setSourceUserFullName(user.getUserDetail().getName()+" "+user.getUserDetail().getLastName());
        transaction.setUserId(idUser);
        transaction.setCreatedAt(LocalDateTime.now());
        transaction.setTargetUserFullName(target.getUserDetail().getName()+" "+target.getUserDetail().getLastName());
        transactionRepository.save(transaction);

        // Crear y guardar los detalles de la transacción
        TransactionDetailPayout transactionDetail = new TransactionDetailPayout();
        transactionDetail.setTransaction(transaction);
        transactionDetail.setAmount(amount);
        transactionDetail.setFinalAmount(amount);  // Si hubiera comisión, ajusta aquí
        transactionDetail.setCreatedAt(LocalDateTime.now());
        transactionDetail.setCurrencySource(String.valueOf(CurrencyType.valueOf(currencySource)));
        transactionDetail.setCurrencyTarget(String.valueOf(CurrencyType.valueOf(currencyTarget)));
        transactionDetailRepository.save(transactionDetail);

        // Actualizar el saldo de las cuentas fuente y destino
        bankServiceClient.updateAccountBalance(sourceAccount.getIdBankAccount(), balance - amount);
        bankServiceClient.updateAccountBalance(targetAccount.getIdBankAccount(), targetAccount.getBalance() + amount);

        // Crear la respuesta de la transacción
        return TransactionResponse.builder()
                .userName(user.getUserDetail().getName() + " " + user.getUserDetail().getLastName())
                .transactionId(transaction.getIdTransaction())
                .sourceAccountId(sourceAccount.getIdBankAccount())
                .targetAccountId(targetAccount.getIdBankAccount())
                .amount(amount)
                .balance(balance - amount)  // Saldo luego de la transacción
                .targetAccountCvu(targetAccount.getCvu())
                .targetAccountAlias(targetAccount.getAlias())
                .createdAt(LocalDateTime.now())
                .userId(idUser)
                .build();
    }

    @Override
    public UserBasic getUserInfo(Long userId) {
        return userClient.findByUserId(userId);
    }

    @Override
    public Double getBalance(String accountIdentifier) {
        // Identificar si es CVU o alias
        BankBasic account = identifyAccount(accountIdentifier);
        // Obtener el balance de la cuenta
        return account.getBalance();
    }

    private BankBasic identifyAccount(String accountIdentifier) {
        // Si el identificador es completamente numérico y tiene 22 dígitos, es un CVU
        if (accountIdentifier.matches("\\d{19}")) {
            return bankServiceClient.findByCvu(Long.parseLong(accountIdentifier));
        } else {
            // Si no, se considera un alias
            return bankServiceClient.findByAlias(accountIdentifier);
        }
    }

    // Convertir entidades a DTOs
    private TransactionDTO convertToDto(TransactionPayout transaction) {
        return modelMapper.map(transaction, TransactionDTO.class);
    }

    // Convertir DTOs a entidades
    private TransactionPayout convertToEntity(TransactionDTO transactionDto) {
        return modelMapper.map(transactionDto, TransactionPayout.class);
    }
}