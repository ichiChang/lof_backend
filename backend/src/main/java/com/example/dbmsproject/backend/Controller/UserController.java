package com.example.dbmsproject.backend.Controller;


import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.dbmsproject.backend.Service.UserService;

import jakarta.validation.Valid;

import com.example.dbmsproject.backend.Model.User;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {

    
    @Autowired
    private UserService userService;
    //C
    /*
     新增一筆
     */
    @PostMapping("/users")
    public ResponseEntity<User> createUser(@Valid @RequestBody User user)throws Exception{
        User result = userService.saveUser(user);
        return ResponseEntity.ok().body(result);
    }
    //R
    /*
     查詢全部
     */
    @GetMapping("/users")
    public ResponseEntity users(){
        Collection<User> users = userService.getUsers();
        return ResponseEntity.ok().body(users);
    }
    /*
     依id查詢
     */
    @GetMapping("/users/{id}")
    public Optional<User> getUser(@PathVariable Long id){
        Optional<User> user = userService.findById(id);
        return user;
    }
    
    //U
    /*
     更新使用者資料
     */
    @PutMapping("/users/{id}")
    public ResponseEntity updateUser(@PathVariable Long id, @Valid @RequestBody User request){
        Boolean rlt = userService.updateUser(id, request);
        if(!rlt){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("錯誤");
        }
        return ResponseEntity.status(HttpStatus.OK).body("成功更新使用者");
    }
    //D
    /*
     依id刪除
     */
    @DeleteMapping("/users/{id}")
    public ResponseEntity deleteUser(@PathVariable Long id){
        Boolean rlt = userService.deleteUser(id);
        if (!rlt) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Id 不存在");
        }
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("");
    }

    
}
