package com.example.dbmsproject.backend.Model;


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
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ITEM_TO_FIND")
public class ItemToFind {
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

    @Column(name = "POST_TIME", nullable = false)
    @NonNull
    private String postTime;

    @Column(name = "LAST_SEEN_TIME",nullable = true)
    private String lastSeenTime;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "USER_ID",nullable = false, referencedColumnName = "uid")
    @NonNull
    private User user;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "LAST_SEEN_PLACE_ID", nullable = true, referencedColumnName = "pid")
    private Place lastSeenPlace;

    
}
