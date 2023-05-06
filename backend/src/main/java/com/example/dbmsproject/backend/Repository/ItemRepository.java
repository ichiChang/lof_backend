package com.example.dbmsproject.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.dbmsproject.backend.Model.Item;

public interface ItemRepository extends JpaRepository<Item,Integer>{
    
}
