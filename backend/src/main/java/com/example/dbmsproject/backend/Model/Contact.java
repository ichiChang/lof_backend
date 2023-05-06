package com.example.dbmsproject.backend.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "CONTACT")
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cid;
    @Column(name = "PHONE_NUM", nullable = false)
    private int phone_number;
    @Column(name = "EMAIL", nullable = false)
    private String email;
    @Column(name = "LINEID", nullable = true)
    private String line_id;
    @Column(name = "FBURL", nullable = true)
    private String fb_url;
}
