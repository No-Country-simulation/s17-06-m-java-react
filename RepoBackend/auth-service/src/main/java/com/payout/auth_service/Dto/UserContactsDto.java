package com.payout.auth_service.Dto;

import java.sql.Timestamp;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserContactsDto {

    private Long idUserContact;

    @NotNull
    private UserBasic user;

    @NotNull
    private UserBasic userContact;

    private Timestamp createdAt;

}
