package com.payout.bank_account_service.services;

import com.payout.bank_account_service.Exceptions.BankAccountNotFoundException;
import com.payout.bank_account_service.dto.GenericResponse;
import com.payout.bank_account_service.dto.UserBasic;
import com.payout.bank_account_service.feingClient.UserClient;
import com.payout.bank_account_service.models.BankAccount;
import com.payout.bank_account_service.repositories.BankAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Random;

/**
 * Servicio para gestionar la lógica de negocio relacionada con las cuentas bancarias.
 */
@Service
public class BankAccountService {


    @Autowired
    private BankAccountRepository bankAccountRepository;

    @Autowired
    private UserClient userClient;
    private final Random random = new Random();


    private final String[] adjetivos = {
            "valiente", "silencioso", "astuto", "poderoso", "rapido",
            "leal", "feroz", "arillante", "audaz", "amable",
            "salvaje", "agudo", "veloz", "sabio", "afortunado",
            "intrépido", "sereno", "noble"
    };

    private final String[] sustantivos = {
            "tigre", "aguila", "dragon", "lobo", "cóndor",
            "León", "Serpiente", "Tiburón", "pantera",
            "buho", "fenix", "halcon", "jaguar", "rayo",
            "montaña", "rio", "estrella", "sol", "luna"
    };

    private final String[] colores = {
            "rojo", "azul", "verde", "amarillo", "blanco",
            "negro", "morado", "gris", "naranja", "carmesi",
            "dorado", "plateado", "turquesa", "violeta",
            "celeste", "coral", "cian", "magenta", "ocre"
    };

    public List<BankAccount> getAllBankAccounts() {
        return bankAccountRepository.findAll();
    }

    public List<BankAccount> getAllBankAccountsByIdUser(Long iduser){
        return bankAccountRepository.findAllByIdUser(iduser);
    }

    public Optional<BankAccount> getBankAccountById(Long id) {
        return bankAccountRepository.findById(id);
    }

    public BankAccount createBankAccount(BankAccount bankAccount) {
        bankAccount.setCreatedAt(LocalDateTime.now());
        bankAccount.setUpdatedAt(LocalDateTime.now());
        bankAccount.setBankAccount(generarNumeroAleatorio(3L,19));
        bankAccount.setCvu(generarNumeroAleatorio(7L,19));
        bankAccount.setBalance(0.0);
        bankAccount.setAlias(this.generarAliasAleatorio());
        return bankAccountRepository.save(bankAccount);
    }

    public BankAccount updateBankAccount(Long id, BankAccount bankAccount) {
        Optional<BankAccount> existingAccount = bankAccountRepository.findById(id);
        if (existingAccount.isPresent()) {
            BankAccount updatedAccount = existingAccount.get();
            updatedAccount.setIdBank(bankAccount.getIdBank());
            updatedAccount.setBankAccount(bankAccount.getBankAccount());
            updatedAccount.setTypeAccount(bankAccount.getTypeAccount());
            updatedAccount.setIdCurrency(bankAccount.getIdCurrency());
            updatedAccount.setLinkData(bankAccount.getLinkData());
            updatedAccount.setBalance(bankAccount.getBalance()); // Actualiza el balance
            updatedAccount.setUpdatedAt(LocalDateTime.now());
            return bankAccountRepository.save(updatedAccount);
        } else {
            throw new RuntimeException("Bank Account not found");
        }
    }

    public void deleteBankAccount(Long id) {
        bankAccountRepository.deleteById(id);
    }

    public Double getBalanceById(Long accountId) {
        BankAccount account = bankAccountRepository.findById(accountId)
                .orElseThrow(() -> new RuntimeException("Account not found"));
        return account.getBalance();
    }

    public void updateBalance(Long accountId, Double newBalance) {
        BankAccount account = bankAccountRepository.findById(accountId)
                .orElseThrow(() -> new RuntimeException("Account not found with ID: " + accountId));
        account.setBalance(newBalance);
        bankAccountRepository.save(account);
    }

    public BankAccount findByAlias(String alias) {
        Optional<BankAccount> optionalBankAccount = bankAccountRepository.findByAlias(alias);
        if (optionalBankAccount.isEmpty()){
            throw new BankAccountNotFoundException("Account not found with alias: " + alias);
        }
        return optionalBankAccount.get();
        //return bankAccountRepository.findByAlias(alias)
                //.orElseThrow(() -> new RuntimeException("Account not found with alias: " + alias));
    }

    public BankAccount findByCvu(Long cvu) {
        //desplegaaaa
        return bankAccountRepository.findByCvu(cvu)
                .orElseThrow(() -> new BankAccountNotFoundException("Account not found with CVU: " + cvu));
    }

    private long generarNumeroAleatorio(Long primerDigito,int longitud) {
        long numero = primerDigito;
        //StringBuilder numero = new StringBuilder(primerDigito.toString());
        for (int i = 1; i < longitud; i++) {
            numero = numero * 10 + random.nextInt(10);
            //numero.append(random.nextInt(10));
        }
        //return Long.parseLong(numero.toString());
        return numero;
    }

    private String generarAliasAleatorio() {
        String adjetivo = adjetivos[random.nextInt(adjetivos.length)];
        String sustantivo = sustantivos[random.nextInt(sustantivos.length)];
        String color = colores[random.nextInt(colores.length)];
        return adjetivo + "." + sustantivo + "." + color;
    }

    public List<BankAccount> getAllByToken(String token) {
        GenericResponse<UserBasic> genericResponse = userClient.readById(0L,token);
        return bankAccountRepository.findAllByIdUser(genericResponse.getData().get(0).getIdUser());
    }

    public UserBasic getAllBankAccountsByIdentifier(String identifier,String token) {
        if (identifier.matches("\\d{19}")) {
             Optional<BankAccount> optionalBankaAccout = bankAccountRepository.findByCvu(Long.parseLong(identifier));
             if(optionalBankaAccout.isEmpty()){
                 throw new BankAccountNotFoundException("Account not found with CVU: " + identifier);
             }
             GenericResponse<UserBasic> genericResponse = userClient.readById(optionalBankaAccout.get().getIdUser(), token);
                return genericResponse.getData().get(0);
        } else {
            // Si no, se considera un alias
            Optional<BankAccount> optionalBankaAccout = bankAccountRepository.findByAlias(identifier);
            if(optionalBankaAccout.isEmpty()){
                throw new BankAccountNotFoundException("Account not found with alias: " + identifier);
            }
            GenericResponse<UserBasic> genericResponse = userClient.readById(optionalBankaAccout.get().getIdUser(), token);
            return genericResponse.getData().get(0);
        }
    }
}