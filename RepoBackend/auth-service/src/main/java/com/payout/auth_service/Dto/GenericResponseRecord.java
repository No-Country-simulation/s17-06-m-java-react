package com.payout.auth_service.Dto;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.List;

@JsonInclude(JsonInclude.Include.NON_NULL)
public record GenericResponseRecord<T>(
        int status,
        String message,
        List<T> data) {
}
