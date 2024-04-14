package com.example.dbmsproject.backend.Service;

import java.util.Optional;

import com.example.dbmsproject.backend.Model.Contact;

public interface ContactService {
    public Boolean findIfEmailExist(String email);

    Optional<Contact> findByEmail(String email);
}
