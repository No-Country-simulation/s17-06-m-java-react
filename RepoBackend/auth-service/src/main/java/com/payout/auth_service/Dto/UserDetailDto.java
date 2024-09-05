package com.payout.auth_service.Dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserDetailDto {

    private Long idUserDetail;

    private Integer dni;

    private String name;

    private String lastName;

    private String address;

    @JsonBackReference
    private UserDto user;

}
