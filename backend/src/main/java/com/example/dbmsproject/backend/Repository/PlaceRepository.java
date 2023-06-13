package com.example.dbmsproject.backend.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.dbmsproject.backend.Model.Place;

public interface PlaceRepository extends JpaRepository<Place, Long> {
    List<Place> findByNameContaining(String name);
}
