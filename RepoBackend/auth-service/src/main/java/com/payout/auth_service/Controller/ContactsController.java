package com.payout.auth_service.Controller;

import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import java.util.*;
import org.springframework.http.HttpStatus;
import com.payout.auth_service.Auth.JwtTokenDecoder;
import com.payout.auth_service.Dto.UserBasic;
import com.payout.auth_service.Dto.UserContactsDto;
import com.payout.auth_service.Model.User;
import com.payout.auth_service.Model.UserContacts;
import com.payout.auth_service.Service.UserContactsService;
import com.payout.auth_service.Service.UserService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/contacts")
@RequiredArgsConstructor
public class ContactsController {

    private final UserContactsService userContactsService;
    private final UserService userService;
    @Qualifier("defaultMapper")
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<UserBasic>> read(@Valid @RequestHeader("Authorization") String token) throws Exception {
        Long userId = JwtTokenDecoder.getUserId(token);
        List<UserBasic> userBasicList = new ArrayList<>();
        userContactsService.findByUser(userId).forEach(userContact -> {
            userBasicList.add(convertToDtoBasic(userService.findByIdUser(userContact.getUserContact().getIdUser())));
        });
        return ResponseEntity.ok(userBasicList);
    }

    @PostMapping
    public ResponseEntity<UserContactsDto> create(@Valid @RequestHeader("Authorization") String token,
            @RequestBody UserContactsDto usercontacts)
            throws Exception {
        Long userId = JwtTokenDecoder.getUserId(token);
        if (userContactsService.findByUserIdUserAndUserContactIdUser(userId,
                usercontacts.getUserContact().getIdUser()) != null) {
            throw new Exception("User already exists in contacts");
        }
        UserContacts obj = userContactsService.save(convertToEntity(usercontacts, userId));
        return new ResponseEntity<>(convertToDto(obj), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<UserBasic> delete(@Valid @RequestHeader("Authorization") String token,
            @PathVariable("id") Long id)
            throws Exception {
        Long userId = JwtTokenDecoder.getUserId(token);
        Long idUserContact = userContactsService.findByUserIdUserAndUserContactIdUser(userId, id).getIdUserContact();
        userContactsService.delete(idUserContact);
        return ResponseEntity.noContent().build();
    }

    private UserBasic convertToDtoBasic(User obj) {
        return modelMapper.map(obj, UserBasic.class);
    }

    private UserContacts convertToEntity(UserContactsDto usercontacts, Long idUser) {
        usercontacts.setUser(convertToDtoBasic(userService.findByIdUser(idUser)));
        return modelMapper.map(usercontacts, UserContacts.class);
    }

    private UserContactsDto convertToDto(UserContacts usercontacts) {
        return modelMapper.map(usercontacts, UserContactsDto.class);
    }

}
