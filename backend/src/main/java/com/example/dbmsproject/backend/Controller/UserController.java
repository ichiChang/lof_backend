package com.example.dbmsproject.backend.Controller;


import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.dbmsproject.backend.Repository.UserRepository;
import com.example.dbmsproject.backend.Service.UserService;
import com.example.dbmsproject.backend.Model.User;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository  userRepository;

    @Autowired
    private UserService userService;
    //C
    /*
     新增一筆
     */
    @PostMapping("/member")
    public ResponseEntity<User> createUser( @RequestBody User user)throws Exception{
        User result = userService.saveUser(user);
        return ResponseEntity.ok().body(result);
    }
    //R
    /*
     查詢全部
     */
    @GetMapping("/users")
    public Collection<User> users(){
        return userRepository.findAll();
    }

    /*
     依id查詢
     */
    @GetMapping("/user/{id}")
    public ResponseEntity<?> getUser(@PathVariable Long id){
        Optional<User> user = userRepository.findById(id);
        return user.map(response -> ResponseEntity.ok().body(response))
        .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


    
}
