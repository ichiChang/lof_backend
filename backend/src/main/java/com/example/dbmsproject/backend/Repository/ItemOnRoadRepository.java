package com.example.dbmsproject.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.dbmsproject.backend.Model.ItemOnRoad;
import com.example.dbmsproject.backend.Model.Place;
import com.example.dbmsproject.backend.Model.User;

import java.util.Collection;
import java.util.List;

public interface ItemOnRoadRepository extends JpaRepository<ItemOnRoad, Long> {
    Collection<ItemOnRoad> findByUser(User user);

    Collection<ItemOnRoad> findByName(String name);

    List<ItemOnRoad> findByNameContaining(String name);

    Collection<ItemOnRoad> findByType(String type);

    Collection<ItemOnRoad> findByPickUpPlaceIn(Collection<Place> pickUpPlaces);
}
