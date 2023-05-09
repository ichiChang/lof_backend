package com.example.dbmsproject.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.dbmsproject.backend.Model.ItemToFind;

public interface ItemToFindRepository extends JpaRepository<ItemToFind,Long>{
    
}
