package com.example.dbmsproject.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.dbmsproject.backend.Model.Contact;

public interface ContactRepository extends JpaRepository<Contact,Long>{
    
}
