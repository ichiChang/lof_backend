package com.example.dbmsproject.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.dbmsproject.backend.Model.Place;

public interface PlaceRepository extends JpaRepository<Place,Long>{
    
}
