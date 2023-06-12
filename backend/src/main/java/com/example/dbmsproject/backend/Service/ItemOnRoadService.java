package com.example.dbmsproject.backend.Service;

import java.util.Collection;
import java.util.Optional;

import com.example.dbmsproject.backend.Model.ItemOnRoad;

public interface ItemOnRoadService {
    public ItemOnRoad saveItemOnRoad(ItemOnRoad itemOnRoad, Long userID);

    public Optional<ItemOnRoad> findById(Long id);

    public Collection<ItemOnRoad> findByUser(Long userID);

    public Collection<ItemOnRoad> findByType(String type);

    public Collection<ItemOnRoad> findByName(String name);

    public Collection<ItemOnRoad> getItemOnRoads();

    public Boolean updateItemOnRoad(Long id, ItemOnRoad itemOnRoad);

    public Boolean deleteItemOnRoad(Long id);

}
