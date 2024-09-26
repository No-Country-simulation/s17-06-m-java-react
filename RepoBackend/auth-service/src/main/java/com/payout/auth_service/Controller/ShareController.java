package com.payout.auth_service.Controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.payout.auth_service.Dto.GenericResponse;
import com.payout.auth_service.Dto.UserBasic;
import com.payout.auth_service.Model.User;
import com.payout.auth_service.Service.UserService;
import java.util.*;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/share")
@RequiredArgsConstructor
public class ShareController {
    private final UserService userService;
    @Qualifier("defaultMapper")
    private final ModelMapper modelMapper;

    @GetMapping("/{email}")
    public ResponseEntity<GenericResponse<UserBasic>> shareEmail(@Valid @PathVariable("email") String email)
            throws Exception {
        UserBasic user = convertToDtoBasic(userService.findOneByEmail(email));
        return ResponseEntity.ok(new GenericResponse<>(200, "success", Arrays.asList(user)));
    }

    private UserBasic convertToDtoBasic(User obj) {
        return modelMapper.map(obj, UserBasic.class);
    }
}
