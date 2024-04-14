package com.example.dbmsproject.backend.Model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "USER")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long uid;

    @Column(name = "NAME", nullable = false)
    @NotEmpty
    private String name;

    @Column(name = "CREATE_DATE")
    private String createDate;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "CON_ID", referencedColumnName = "cid")
    private Contact contact;

    public User(String name) {
        this.name = name;
    }
}
