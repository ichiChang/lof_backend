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
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Entity
@Data
@AllArgsConstructor
@Table(name = "ITEM_TO_FIND")
public class ItemToFind {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long iid;

    @Column(name = "NAME", nullable = false)
    private String name;
    
    @Column(name = "TYPE", nullable = false)
    private String type;

    @Column(name = "PHOTO", nullable = true)
    private String photo;

    @Column(name = "REMARK", nullable = true)
    private String remark;

    @Column(name = "POST_DATE", nullable = false, columnDefinition = "timestamp not null default current_timestamp")
    @CreatedDate
    private Date createTime;

    @Column(name = "LAST_SEEN_TIME",nullable = true)
    private Date lastSeenTime;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "USER_ID",nullable = false, referencedColumnName = "uid")
    private User user;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "LAST_SEEN_PLACE_ID", nullable = true, referencedColumnName = "pid")
    private Place lastSeenPlace;
}
