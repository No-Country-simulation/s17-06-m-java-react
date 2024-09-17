package com.payout.bank_account_service.feingClient;

import com.payout.bank_account_service.dto.GenericResponse;
import com.payout.bank_account_service.dto.UserBasic;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name = "auth-service", url = "localhost:7075/user")
public interface UserClient {

    @GetMapping("/{id}")
    UserBasic findByUserId(@PathVariable("id") Long userId);

    @GetMapping("/{id}")
    GenericResponse<UserBasic> readById(@PathVariable("id") Long id,
                             @RequestHeader("Authorization") String token);

    //************************************
    @GetMapping("/api/users/me")
    Long getUserIdFromToken(@RequestHeader("Authorization") String token);

    @GetMapping("/{id}")
    UserBasic getUserById(@PathVariable Long id);
}
