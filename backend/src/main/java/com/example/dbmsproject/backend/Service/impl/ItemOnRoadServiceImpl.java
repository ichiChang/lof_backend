package com.example.dbmsproject.backend.Service.impl;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dbmsproject.backend.Model.ItemOnRoad;
import com.example.dbmsproject.backend.Model.User;
import com.example.dbmsproject.backend.Repository.ItemOnRoadRepository;
import com.example.dbmsproject.backend.Service.ItemOnRoadService;

@Service
public class ItemOnRoadServiceImpl implements ItemOnRoadService{

    @Autowired
    ItemOnRoadRepository itemOnRoadRepository;

    @Override
    public ItemOnRoad saveItemOnRoad(ItemOnRoad itemOnRoad) {
        itemOnRoadRepository.save(itemOnRoad);
        return itemOnRoad;
    }

    @Override
    public Collection<ItemOnRoad> getItemOnRoads() {
        return itemOnRoadRepository.findAll();
    }

    @Override
    public Optional<ItemOnRoad> findById(Long id) {
       Optional<ItemOnRoad> item = itemOnRoadRepository.findById(id);
       return item;
    }

    @Override
    public Collection<ItemOnRoad> findByUser(User user) {
        return itemOnRoadRepository.findByUser(user);
    }

    @Override
    public Boolean updateItemOnRoad(Long id, ItemOnRoad itemOnRoad) {
        Optional<ItemOnRoad> isExistItem = itemOnRoadRepository.findById(id);
        if(!isExistItem.isPresent()){
            return false;
        }
        ItemOnRoad newItem = isExistItem.get();
        itemOnRoadRepository.save(newItem);
        return true;
    }

    @Override
    public Boolean deleteItemOnRoad(Long id) {
        Optional<ItemOnRoad> isExistItem = itemOnRoadRepository.findById(id);
        if(!isExistItem.isPresent()){
            return false;
        }
        itemOnRoadRepository.deleteById(id);
        return true;
    }

    @Override
    public Collection<ItemOnRoad> findByType(String type) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findByType'");
    }

    @Override
    public Collection<ItemOnRoad> findByName(String name) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findByName'");
    }
    
}
