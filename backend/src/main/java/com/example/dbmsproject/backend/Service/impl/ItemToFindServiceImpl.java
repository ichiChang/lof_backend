package com.example.dbmsproject.backend.Service.impl;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dbmsproject.backend.Model.ItemToFind;
import com.example.dbmsproject.backend.Model.User;
import com.example.dbmsproject.backend.Repository.ItemToFindRepository;
import com.example.dbmsproject.backend.Service.ItemToFindService;

@Service
public class ItemToFindServiceImpl implements ItemToFindService{

    @Autowired
    ItemToFindRepository itemToFindRepository;

    @Override
    public ItemToFind saveItemToFind(ItemToFind itemToFind) {
        itemToFindRepository.save(itemToFind);
        return itemToFind;
    }

    @Override
    public Collection<ItemToFind> getItemToFinds() {
        return itemToFindRepository.findAll();
    }

    @Override
    public Collection<ItemToFind> findByUser(User user) {
        return itemToFindRepository.findByUser(user);
    }

    @Override
    public Optional<ItemToFind> findById(Long id) {
        Optional<ItemToFind> item = itemToFindRepository.findById(id);
        return item;
    }

    @Override
    public Boolean updateItemToFind(Long id, ItemToFind itemToFind) {
        Optional<ItemToFind> isExistItem = itemToFindRepository.findById(id);
        if(!isExistItem.isPresent()){
            return false;
        }
        ItemToFind newItem = isExistItem.get();
        itemToFindRepository.save(newItem);
        return true;
    }

    @Override
    public Boolean deleteItemToFind(Long id) {
        Optional<ItemToFind> isExistItem = itemToFindRepository.findById(id);
        if(!isExistItem.isPresent()){
            return false;
        }
        itemToFindRepository.deleteById(id);
        return true;
    }

    
    
}
