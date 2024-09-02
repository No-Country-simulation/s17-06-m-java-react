package com.payout.auth_service.Dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserDetailDto {

    private Long idUserDetail;

    @NotNull
    private String dni;

    @NotNull
    private String name;

    @NotNull
    private String lastName;

    private String address;

    private Timestamp createdAt;

    private Timestamp updatedAt;

    @JsonManagedReference
    private UserDto user;

}
