package com.example.dbmsproject.backend.Model;

import java.util.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long uid;

    @Column(name = "NAME" , nullable = false)
    private String name;

    @Column(name = "CREATE_DATE")
    private Date createDate;

    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "CON_ID", referencedColumnName = "cid")
    private Contact contact;
    
    public User(String name){
        this.name = name;
    }
}
