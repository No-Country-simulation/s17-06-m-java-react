package com.payout.bank_account_service.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserBasic {
    private Long idUser;
    private String email;
    UserDetail userDetail;
}