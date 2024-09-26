package com.payout.auth_service.Service;

import com.payout.auth_service.Model.UserContacts;
import java.util.List;

public interface UserContactsService extends ICrud<UserContacts, Long> {
    List<UserContacts> findByUser(Long idUser);

    UserContacts findByUserIdUserAndUserContactIdUser(Long idUser, Long idContacts);
}
