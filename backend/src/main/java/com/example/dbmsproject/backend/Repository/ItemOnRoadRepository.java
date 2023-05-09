package com.example.dbmsproject.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.dbmsproject.backend.Model.ItemOnRoad;

public interface ItemOnRoadRepository extends JpaRepository<ItemOnRoad,Long>{
    
}
