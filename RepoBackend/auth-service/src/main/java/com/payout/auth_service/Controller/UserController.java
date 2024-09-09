package com.payout.auth_service.Controller;

import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import java.util.Arrays;
import com.payout.auth_service.Auth.JwtTokenDecoder;
import com.payout.auth_service.Config.Tfa.TwoFactorAuthenticationService;
import com.payout.auth_service.Dto.GenericResponse;
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

    private final TwoFactorAuthenticationService twoFactorAuthenticationService;

    @PutMapping
    public ResponseEntity<UserDto> update(@Valid @RequestHeader("Authorization") String token, @RequestBody UserDto dto)
            throws Exception {
        Long userId = JwtTokenDecoder.getUserId(token);
        User user = userService.updateExternal(convertToEntity(dto), userId);
        if (user.getTfa()) {
            String secretImageUri = twoFactorAuthenticationService.generateQrCodeImageUri(user.getTfaSecret());
            UserDto userDto = convertToDto(user);
            userDto.setSecretImageUri(secretImageUri);
            return ResponseEntity.ok(userDto);
        }
        UserDto userDto = convertToDto(user);
        return ResponseEntity.ok(userDto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<GenericResponse<UserDto>> readById(@PathVariable("id") Long id) throws Exception {
        UserDto dto = convertToDto(userService.readById(id));

        return ResponseEntity.ok(new GenericResponse<>(200, "success", Arrays.asList(dto)));
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
        user.setTfa(userDto.getTfa());
        user.setTfaSecret(userDto.getTfaSecret());

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
