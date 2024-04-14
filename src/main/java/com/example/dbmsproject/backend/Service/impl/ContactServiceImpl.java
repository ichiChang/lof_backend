package com.example.dbmsproject.backend.Service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dbmsproject.backend.Model.Contact;
import com.example.dbmsproject.backend.Repository.ContactRepository;
import com.example.dbmsproject.backend.Service.ContactService;

@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    ContactRepository contactRepository;

    @Override
    public Boolean findIfEmailExist(String email) {
        Optional<Contact> isExistContact = contactRepository.findByEmail(email);
        if (!isExistContact.isPresent()) {
            return false;
        }
        return true;
    }

    @Override
    public Optional<Contact> findByEmail(String email) {
        Optional<Contact> isExistContact = contactRepository.findByEmail(email);
        if (!isExistContact.isPresent()) {
            return null;
        }
        return isExistContact;
    }

}
