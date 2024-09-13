package com.payout.transaction_service.transaction_service.model.dto;

import lombok.Data;

@Data
public class UserBasic {
    private Long idUser;
    private String firstName;
    private String lastName;
    private String email;
}