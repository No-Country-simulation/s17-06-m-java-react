package com.payout.auth_service.Service.Impl;

import java.util.List;
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

    @Override
    public User findOneByEmail(String email) {
        return userRepository.findOneByEmail(email);
    }

    @Override
    public List<User> findByEmailLike(String email) {
        return userRepository.findByEmailLike("%" + email + "%");
    }
}
