package com.example.dbmsproject.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.dbmsproject.backend.Model.ItemOnRoad;
import com.example.dbmsproject.backend.Model.Place;
import com.example.dbmsproject.backend.Model.User;

import java.util.Collection;
import java.util.List;



public interface ItemOnRoadRepository extends JpaRepository<ItemOnRoad,Long>{
    Collection<ItemOnRoad> findByUser(User user);
    Collection<ItemOnRoad> findByPickUpPlace(Place pickUpPlace);
    Collection<ItemOnRoad> findByName(String name);
    Collection<ItemOnRoad> findByType(String type);
}
