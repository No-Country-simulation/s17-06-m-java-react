package com.payout.auth_service.Service.Impl;

import org.springframework.stereotype.Service;
import com.payout.auth_service.Model.User;
import com.payout.auth_service.Repository.GenericRepository;
import com.payout.auth_service.Repository.UserRepository;
import com.payout.auth_service.Service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserImpl extends CrudImpl<User, Long> implements UserService {

    private final UserRepository userRepository;

    @Override
    protected GenericRepository<User, Long> getRepository() {
        return userRepository;
    }
}
