package com.payout.transaction_service.transaction_service.client;

import com.payout.transaction_service.transaction_service.model.dto.GenericResponse;
import com.payout.transaction_service.transaction_service.model.dto.UserBasic;
import org.springframework.cloud.openfeign.FeignClient;
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