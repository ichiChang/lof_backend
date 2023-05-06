package com.example.dbmsproject.backend.Model;

import java.sql.Timestamp;
import java.util.Date;

import jakarta.persistence.Column;

public class ItemOnRoad extends Item{
    @Column(name = "PICK_UP_TIME", nullable = false)
    private Date pick_up_time;
   
    @Column(name = "PICK_UP_PLACEID", nullable = false)
    private Long pick_up_place_id;
    @Column(name = "NOW_PLACEID", nullable = false)
    private Long now_place_id;
}
