package com.example.dbmsproject.backend.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "CONTACT")
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cid;

    @Column(name = "PHONE_NUM", nullable = false)
    @NotEmpty
    private String phone_number;

    @Column(name = "EMAIL", nullable = false)
    @Email(message = "電子郵件格式錯誤")
    private String email;

    @Column(name = "LINEID", nullable = true)
    private String line_id;

    @Column(name = "FBURL", nullable = true)
    private String fb_url;

}
