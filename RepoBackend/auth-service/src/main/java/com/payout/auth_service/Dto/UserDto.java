package com.payout.auth_service.Dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserDto {

    private Long idUser;

    @NotNull
    private String email;

    @NotNull
    private String password;

    private Integer phone;

    private Integer status;

    private Boolean tfa;

    private String tfaSecret;

    private String secretImageUri;

    @JsonManagedReference
    private UserDetailDto userDetail;
}
