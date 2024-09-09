package com.payout.auth_service.Service.Impl;

import java.util.*;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.beans.PropertyDescriptor;

import com.payout.auth_service.Config.Tfa.TwoFactorAuthenticationService;
import com.payout.auth_service.Exception.ModelNotFoundException;
import com.payout.auth_service.Model.User;
import com.payout.auth_service.Model.UserDetail;
import com.payout.auth_service.Repository.GenericRepository;
import com.payout.auth_service.Repository.UserRepository;
import com.payout.auth_service.Service.ICrud;

public abstract class CrudImpl<T, ID> implements ICrud<T, ID> {

    protected abstract GenericRepository<T, ID> getRepository();

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TwoFactorAuthenticationService twoFactorAuthenticationService;

    @Override
    public T save(T t) throws Exception {
        if (t instanceof User) {
            User user = (User) t;
            UserDetail userDetail = user.getUserDetail();
            String encryptedPassword = passwordEncoder.encode(user.getPassword());
            user.setPassword(encryptedPassword);
            user.setTfa(false);
            if (userDetail != null) {
                userDetail.setUser(user);
            }
        }
        return getRepository().save(t);
    }

    @Override
    public T update(T t, ID id) throws Exception {
        Optional<T> entity = getRepository().findById(id);
        T oldEntity = entity.orElseThrow(() -> new ModelNotFoundException("ID NOT FOUND: " + id));
        BeanUtils.copyProperties(t, oldEntity, getNullPropertyNames(t));
        return getRepository().save(oldEntity);
    }

    public User updateExternal(User newUser, Long id) throws Exception {
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new ModelNotFoundException("ID NOT FOUND: " + id));

        if (newUser.getEmail() != null) {
            existingUser.setEmail(newUser.getEmail());
        }
        if (newUser.getPassword() != null) {
            existingUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
        }
        if (newUser.getPhone() != null) {
            existingUser.setPhone(newUser.getPhone());
        }
        if (newUser.getTfa() != null) {
            existingUser.setTfa(newUser.getTfa());
        }
        UserDetail newUserDetail = newUser.getUserDetail();
        if (newUserDetail != null) {
            UserDetail existingUserDetail = existingUser.getUserDetail();
            if (existingUserDetail == null) {
                existingUserDetail = new UserDetail();
                existingUser.setUserDetail(existingUserDetail);
                existingUserDetail.setUser(existingUser);
            }
            if (newUserDetail.getDni() != null) {
                existingUserDetail.setDni(newUserDetail.getDni());
            }
            if (newUserDetail.getAddress() != null) {
                existingUserDetail.setAddress(newUserDetail.getAddress());
            }
            if (newUserDetail.getName() != null) {
                existingUserDetail.setName(newUserDetail.getName());
            }
            if (newUserDetail.getLastName() != null) {
                existingUserDetail.setLastName(newUserDetail.getLastName());
            }
        }

        if (newUser.getTfa() != null && newUser.getTfa() == true) {
            existingUser.setTfaSecret(twoFactorAuthenticationService.generateNewSecret());
        } else if (newUser.getTfa() != null && newUser.getTfa() == false) {
            existingUser.setTfaSecret("");
            existingUser.setTfa(false);
        }
        return userRepository.save(existingUser);
    }

    @Override
    public List<T> readAll() throws Exception {
        return getRepository().findAll();
    }

    @Override
    public T readById(ID id) throws Exception {
        return getRepository().findById(id).orElseThrow(() -> new ModelNotFoundException("ID NOT FOUND: " + id));
    }

    @Override
    public void delete(ID id) throws Exception {
        getRepository().findById(id).orElseThrow(() -> new ModelNotFoundException("ID NOT FOUND: " + id));
        getRepository().deleteById(id);
    }

    private String[] getNullPropertyNames(Object source) {
        final BeanWrapper src = new BeanWrapperImpl(source);
        PropertyDescriptor[] pds = src.getPropertyDescriptors();

        Set<String> emptyNames = new HashSet<String>();
        for (PropertyDescriptor pd : pds) {
            Object srcValue = src.getPropertyValue(pd.getName());
            if (srcValue == null)
                emptyNames.add(pd.getName());
        }
        String[] result = new String[emptyNames.size()];
        return emptyNames.toArray(result);
    }

}
