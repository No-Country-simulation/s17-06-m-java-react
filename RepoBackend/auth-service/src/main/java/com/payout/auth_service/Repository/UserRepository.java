package com.payout.auth_service.Repository;

import com.payout.auth_service.Model.User;

public interface UserRepository extends GenericRepository<User, Long> {
    User findOneByEmail(String email);
}
