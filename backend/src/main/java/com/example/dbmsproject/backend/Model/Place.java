package com.example.dbmsproject.backend.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Data
@Table(name = "PLACE")
@AllArgsConstructor
public class Place {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int pid;
    @Column(name = "NAME" , nullable = false)
    private String name;
    @Column(name = "FLOOR" , nullable = false)
    private String floor;
    @Column(name = "CLASSROOM" , nullable = true)
    private String classroom;
}
