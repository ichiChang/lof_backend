package com.example.dbmsproject.backend.Service;

import java.util.Collection;
import java.util.Optional;

import com.example.dbmsproject.backend.Model.User;

public interface UserService {
    public User saveUser(User user);

    public Collection<User> getUsers();

    public Optional<User> findById(Long id);

    public Boolean findIfEmailExist(String email);

    public Boolean updateUser(Long id, User user);

    public Boolean deleteUser(Long id);

    public Long findByEmail(String email);
}
