package com.payout.auth_service.Service;

import java.util.List;

import com.payout.auth_service.Model.User;

public interface UserService extends ICrud<User, Long> {
    User findOneByEmail(String email);

    List<User> findByEmailLike(String email);
}
