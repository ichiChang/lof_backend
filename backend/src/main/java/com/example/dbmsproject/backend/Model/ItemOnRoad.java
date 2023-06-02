package com.example.dbmsproject.backend.Model;

import java.util.Date;

import org.springframework.data.annotation.CreatedDate;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ITEM_ON_ROAD")
public class ItemOnRoad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long iid;

    @Column(name = "NAME", nullable = false)
    @NotEmpty
    private String name;
    
    @Column(name = "TYPE", nullable = false)
    @NotEmpty
    private String type;

    @Column(name = "PHOTO", nullable = true)
    private String photo;

    @Column(name = "REMARK", nullable = true)
    private String remark;

    @Column(name = "PICK_UP_TIME", nullable = false)
    @NotEmpty
    private String pick_up_time;

    @Column(name = "POST_TIME", nullable = false)
    @NotNull
    private String postTime;
    
    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "USER_ID",nullable = false, referencedColumnName = "uid")
    @NotNull
    private User user;
   
    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "PICK_UP_PLACE_ID", nullable = false, referencedColumnName = "pid")
    @NotNull
    private Place pickUpPlace;

    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "NOW_PLACE_ID", nullable = false, referencedColumnName = "pid")
    @NotNull
    private Place nowPlace;
}
