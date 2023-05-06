package com.example.dbmsproject.backend.Model;

import java.sql.Timestamp;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "ITEM_TO_FIND")
public class ItemToFind  extends Item{

    @Column(name = "LAST_SEEN_TIME",nullable = true)
    private Date lastSeenTime;
    @Column(name = "LAST_SEEN_PLACEID", nullable = true)
    private Long lastSeenPlaceId;
}
