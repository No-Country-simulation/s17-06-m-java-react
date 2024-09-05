package com.payout.transaction_service.transaction_service.service;

import com.payout.transaction_service.transaction_service.client.BankServiceClient;
import com.payout.transaction_service.transaction_service.domain.Transaction;
import com.payout.transaction_service.transaction_service.domain.TransactionDetail;
import com.payout.transaction_service.transaction_service.model.dto.TransactionDTO;
import com.payout.transaction_service.transaction_service.model.dto.TransactionDetailDTO;
import com.payout.transaction_service.transaction_service.repository.TransactionDetailRepository;
import com.payout.transaction_service.transaction_service.repository.TransactionRepository;
import com.payout.transaction_service.transaction_service.utilities.InsufficientFundsException;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TransactionServiceImpl implements TransactionService {

    private final TransactionRepository transactionRepository;
    private final TransactionDetailRepository transactionDetailRepository;
    private final ModelMapper modelMapper;
    private final BankServiceClient bankServiceClient;

    @Override
    public TransactionDTO createTransaction(TransactionDTO transactionDto) {
        Transaction transaction = convertToEntity(transactionDto);
        Transaction savedTransaction = transactionRepository.save(transaction);
        return convertToDto(savedTransaction);
    }

    @Override
    public List<TransactionDTO> getTransactions() {
        return transactionRepository.findAll()
                .stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public TransactionDTO getTransactionById(Long idTransaction) {
        Transaction transaction = transactionRepository.findById(idTransaction)
                .orElseThrow(() -> new RuntimeException("Transacción no encontrada"));
        return convertToDto(transaction);
    }

    @Override
    @Transactional
    public TransactionDetailDTO processTransaction(Long idSourceAccount, Long idTargetAccount, Double amount, String type) {
        /*// 1. Verificar y actualizar los saldos de las cuentas
        bankServiceClient.updateAccountBalances(idSourceAccount, idTargetAccount, amount);

        // 2. Crear y guardar la transacción
        Transaction transaction = new Transaction();
        transaction.setIdSourceAccount(idSourceAccount);
        transaction.setIdTargetAccount(idTargetAccount);
        transaction.setAmount(amount);
        transaction.setType(type);
        transaction.setCreateAt(LocalDateTime.now());

        Transaction savedTransaction = transactionRepository.save(transaction);

        // 3. Crear y guardar los detalles de la transacción
        TransactionDetail detail = new TransactionDetail();
        detail.setTransaction(savedTransaction);
        detail.setAmount(amount);
        detail.setFinalAmount(accountService.getFinalAmount(idTargetAccount));
        detail.setCreateAt(LocalDateTime.now());
        detail.setCurrencySource(accountService.getCurrency(idSourceAccount));
        detail.setCurrencyTarget(accountService.getCurrency(idTargetAccount));

        TransactionDetail savedDetail = transactionDetailRepository.save(detail);

        return convertToDto(savedDetail);*/
        return null;
    }

    @Override
    public Transaction processTransaction(Transaction transaction) {
        // Verificar el saldo de la cuenta origen
        Double sourceAccountBalance = bankServiceClient.getAccountBalance(transaction.getIdSourceAccount());

        if (sourceAccountBalance >= transaction.getAmount()) {
            // Descontar el monto de la cuenta origen
            bankServiceClient.debitAccount(transaction.getIdSourceAccount(), transaction.getAmount());

            // Acreditar el monto a la cuenta destino
            bankServiceClient.creditAccount(transaction.getIdTargetAccount(), transaction.getAmount());

            // Guardar la transacción
            transaction.setCreateAt(new Timestamp(System.currentTimeMillis()).toLocalDateTime());
            Transaction savedTransaction = transactionRepository.save(transaction);

            // Crear y guardar el detalle de la transacción
            TransactionDetail transactionDetail = new TransactionDetail();
            transactionDetail.setTransaction(savedTransaction);
            transactionDetail.setAmount(transaction.getAmount());
            transactionDetail.setFinalAmount(transaction.getAmount()); // Suponiendo que no hay comisiones
            transactionDetail.setCreateAt(new Timestamp(System.currentTimeMillis()).toLocalDateTime());
            transactionDetailRepository.save(transactionDetail);

            return savedTransaction;
        } else {
            throw new InsufficientFundsException("Fondos insuficientes en la cuenta de origen.");
        }
    }

    // Convertir entidades a DTOs
    private TransactionDTO convertToDto(Transaction transaction) {
        return modelMapper.map(transaction, TransactionDTO.class);
    }

    private TransactionDetailDTO convertToDto(TransactionDetail transactionDetail) {
        return modelMapper.map(transactionDetail, TransactionDetailDTO.class);
    }

    // Convertir DTOs a entidades
    private Transaction convertToEntity(TransactionDTO transactionDto) {
        return modelMapper.map(transactionDto, Transaction.class);
    }
}