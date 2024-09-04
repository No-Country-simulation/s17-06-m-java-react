package com.payout.auth_service.Controller;

import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;

import com.payout.auth_service.Auth.JwtTokenDecoder;
import com.payout.auth_service.Dto.UserDto;
import com.payout.auth_service.Model.User;
import com.payout.auth_service.Model.UserDetail;
import com.payout.auth_service.Service.UserService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    @Qualifier("defaultMapper")
    private final ModelMapper modelMapper;

    @PutMapping
    public ResponseEntity<UserDto> update(@Valid @RequestHeader("Authorization") String token, @RequestBody UserDto dto)
            throws Exception {
        Long userId = JwtTokenDecoder.getUserId(token);
        User user = userService.updateExternal(convertToEntity(dto), userId);
        return ResponseEntity.ok(convertToDto(user));
    }

    private UserDto convertToDto(User obj) {
        return modelMapper.map(obj, UserDto.class);
    }

    // private User convertToEntityAuth(UserDto dto) {
    // return modelMapper.map(dto, User.class);
    // }

    public User convertToEntity(UserDto userDto) {
        User user = new User();
        user.setIdUser(userDto.getIdUser());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        user.setPhone(userDto.getPhone());
        user.setStatus(userDto.getStatus());

        if (userDto.getUserDetail() != null) {
            UserDetail userDetail = new UserDetail();
            userDetail.setIdUserDetail(userDto.getUserDetail().getIdUserDetail());
            userDetail.setDni(userDto.getUserDetail().getDni());
            userDetail.setName(userDto.getUserDetail().getName());
            userDetail.setLastName(userDto.getUserDetail().getLastName());
            userDetail.setAddress(userDto.getUserDetail().getAddress());
            userDetail.setUser(user);
            user.setUserDetail(userDetail);
        }

        return user;
    }

}
