package com.example.dbmsproject.backend.Service.impl;

import java.text.SimpleDateFormat;
import java.util.Collection;
import java.util.Date;
import java.util.Optional;
import java.util.TimeZone;

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
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        df.setTimeZone(TimeZone.getTimeZone("Asia/Taipei"));
        String date = df.format(new Date());
        user.setCreateDate(date);
        userRepository.save(user);
        return user;
    }

    @Override
    public Collection<User> getUsers() {
        return userRepository.findAll();
    }
    @Override
    public Optional<User> findById(Long id) {
        Optional<User> user = userRepository.findById(id);
        return user;
    }
    @Override
    public Boolean updateUser(Long id, User user) {
        Optional<User> isExistUser = userRepository.findById(id);
        if (! isExistUser.isPresent()) {
            return false;
        }
        User newUser = isExistUser.get();
        userRepository.save(newUser);
        return true;
    }

    @Override
    public Boolean deleteUser(Long id) {
        Optional<User> findUser = userRepository.findById(id);
        if(!findUser.isPresent()){
            return false;
        }
        userRepository.deleteById(id);
        return true;
    }

    
    
}
