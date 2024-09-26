package com.payout.auth_service.Auth;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class AuthService {

    public boolean hasAccess(String token) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        String username = auth.getName();
        log.info("User: " + username + " has access to the resource");
        auth.getAuthorities().forEach(authority -> log.info("Authority: " + authority.getAuthority()));

        return true;
    }
}
