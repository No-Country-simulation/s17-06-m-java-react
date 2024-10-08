package com.payout.auth_service.Repository;

import com.payout.auth_service.Model.User;
import java.util.List;

public interface UserRepository extends GenericRepository<User, Long> {
    User findOneByEmail(String email);

    List<User> findByEmailLike(String email);

    User findByIdUser(Long idUser);
}
