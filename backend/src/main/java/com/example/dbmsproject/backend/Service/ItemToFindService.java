package com.example.dbmsproject.backend.Service;

import java.util.Collection;
import java.util.Optional;

import com.example.dbmsproject.backend.Model.ItemToFind;

public interface ItemToFindService {
    public ItemToFind saveItemToFind(ItemToFind itemToFind, Long userID);

    public Collection<ItemToFind> getItemToFinds();

    public Collection<ItemToFind> findByUser(Long userId);

    public Collection<ItemToFind> findByName(String name);

    public Collection<ItemToFind> findByType(String type);

    public Collection<ItemToFind> findByPlace(String placeName);

    public Optional<ItemToFind> findById(Long id);

    public Boolean updateItemToFind(Long id, ItemToFind itemToFind);

    public Boolean deleteItemToFind(Long id);
}
