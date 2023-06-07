package com.example.dbmsproject.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.dbmsproject.backend.Model.ItemToFind;
import com.example.dbmsproject.backend.Model.Place;
import com.example.dbmsproject.backend.Model.User;

import java.util.Collection;
import java.util.List;

public interface ItemToFindRepository extends JpaRepository<ItemToFind, Long> {
    Collection<ItemToFind> findByUser(User user);

    Collection<ItemToFind> findByType(String type);

    List<ItemToFind> findByNameContaining(String name);

    Collection<ItemToFind> findByLastSeenPlace(Place lastSeenPlace);

    Collection<ItemToFind> findByName(String name);
}
