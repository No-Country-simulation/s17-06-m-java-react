package com.payout.transaction_service.transaction_service.client;

import com.payout.transaction_service.transaction_service.model.dto.TransactionDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "auth-service", url = "localhost:7073")
public interface UserClient {

    @GetMapping("/user/{userId}")
    List<TransactionDTO> findByUserId(@PathVariable("userId") Long userId);

}