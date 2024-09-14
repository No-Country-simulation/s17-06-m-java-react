package com.payout.auth_service.Repository;

import com.payout.auth_service.Model.UserContacts;
import java.util.*;

public interface UserContactsRepository extends GenericRepository<UserContacts, Long> {
    List<UserContacts> findByUser_IdUser(Long idUser);

    UserContacts findByUser_IdUserAndUserContact_IdUser(Long userId, Long userContactId);
}
