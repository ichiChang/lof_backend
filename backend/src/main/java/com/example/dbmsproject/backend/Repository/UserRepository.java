package com.example.dbmsproject.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.dbmsproject.backend.Model.User;

public interface UserRepository extends JpaRepository<User,Integer> {
    
}
