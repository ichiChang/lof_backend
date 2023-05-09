package com.example.dbmsproject.backend.Service.impl;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dbmsproject.backend.Model.User;
import com.example.dbmsproject.backend.Repository.UserRepository;
import com.example.dbmsproject.backend.Service.UserService;

@Service
public class UserServiceImpl implements UserService{
    
    @Autowired
    UserRepository userRepository;

    @Override
    public User saveUser(User user){
        user.setCreateDate(new Date());
        userRepository.save(user);
        return user;
    }
}
