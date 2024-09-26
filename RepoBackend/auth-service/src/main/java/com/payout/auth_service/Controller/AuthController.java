package com.payout.auth_service.Controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import java.util.Date;
import org.springframework.http.HttpStatus;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;
import com.payout.auth_service.Auth.JwtRequest;
import com.payout.auth_service.Auth.JwtResponse;
import com.payout.auth_service.Auth.JwtTokenUtil;
import com.payout.auth_service.Config.Tfa.TwoFactorAuthenticationService;
import com.payout.auth_service.Dto.UserDto;
import com.payout.auth_service.Model.User;
import com.payout.auth_service.Service.UserService;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;
    @Qualifier("defaultMapper")
    private final ModelMapper modelMapper;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenUtil jwtTokenUtil;
    private final UserDetailsService userDetailsService;
    private final TwoFactorAuthenticationService twoFactorAuthenticationService;

    @PostMapping("/register")
    public ResponseEntity<UserDto> save(@Valid @RequestBody UserDto userDto) throws Exception {
        User user = userService.save(convertToEntity(userDto));
        return new ResponseEntity<>(convertToDto(user), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody JwtRequest req) throws Exception {
        ResponseEntity<String> authResult = authenticate(req.getEmail(), req.getPassword(), req.getCode());
        if (!authResult.getBody().equals("Authentication successful")) {
            return authResult;
        }
        final UserDetails userDetails = userDetailsService.loadUserByUsername(req.getEmail());
        final String token = jwtTokenUtil.generateToken(userDetails);
        final Date expiresAt = jwtTokenUtil.getExpirationDateFromToken(token);
        Long idUser = userService.findOneByEmail(req.getEmail()).getIdUser();
        String email = userService.findOneByEmail(req.getEmail()).getEmail();
        return new ResponseEntity<>(new JwtResponse(token, idUser, email, expiresAt), HttpStatus.OK);
    }

    private ResponseEntity<String> authenticate(String username, String password, String code) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
            User user = userService.findOneByEmail(username);
            if (user != null && Boolean.TRUE.equals(user.getTfa()) && code == null) {
                return ResponseEntity.accepted().body("2FA: True");
            } else if (user != null && Boolean.TRUE.equals(user.getTfa()) && code != null) {
                verifycodeTfa(user.getTfaSecret(), code);
            }

        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
        return ResponseEntity.ok().body("Authentication successful");
    }

    public void verifycodeTfa(String secret, String code) {
        if (twoFactorAuthenticationService.isOtpNotValid(secret, code)) {
            throw new RuntimeException("Invalid code");
        }
    }

    @GetMapping("/validate")
    public ResponseEntity<String> validate(@RequestParam String token) {
        String validToken = jwtTokenUtil.validateExternal(token);
        return ResponseEntity.ok().header("Authorization", "Bearer " + validToken).body(validToken);
    }

    private UserDto convertToDto(User obj) {
        return modelMapper.map(obj, UserDto.class);
    }

    private User convertToEntity(UserDto dto) {
        return modelMapper.map(dto, User.class);
    }
}
