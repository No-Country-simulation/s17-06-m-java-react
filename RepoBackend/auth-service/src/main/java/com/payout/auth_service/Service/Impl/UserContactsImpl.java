package com.payout.auth_service.Service.Impl;

import java.util.*;
import org.springframework.stereotype.Service;
import com.payout.auth_service.Model.UserContacts;
import com.payout.auth_service.Repository.GenericRepository;
import com.payout.auth_service.Repository.UserContactsRepository;
import com.payout.auth_service.Service.UserContactsService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserContactsImpl extends CrudImpl<UserContacts, Long> implements UserContactsService {

    private final UserContactsRepository userContactsRepository;

    @Override
    protected GenericRepository<UserContacts, Long> getRepository() {
        return userContactsRepository;
    }

    @Override
    public List<UserContacts> findByUser(Long idUser) {
        return userContactsRepository.findByUser_IdUser(idUser);
    }

    @Override
    public UserContacts updateExternal(UserContacts t, Long id) throws Exception {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateExternal'");
    }

    @Override
    public UserContacts findByUserIdUserAndUserContactIdUser(Long idUser, Long idContacts) {
        return userContactsRepository.findByUser_IdUserAndUserContact_IdUser(idUser, idContacts);
    }

}
