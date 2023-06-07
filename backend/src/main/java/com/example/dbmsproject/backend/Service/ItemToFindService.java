package com.example.dbmsproject.backend.Service;

import java.util.Collection;
import java.util.Optional;

import com.example.dbmsproject.backend.Model.ItemToFind;
import com.example.dbmsproject.backend.Model.User;

public interface ItemToFindService {
    public ItemToFind saveItemToFind(ItemToFind itemToFind);

    public Collection<ItemToFind> getItemToFinds();

    public Collection<ItemToFind> findByUser(User user);

    public Collection<ItemToFind> findByName(String name);

    public Optional<ItemToFind> findById(Long id);

    public Boolean updateItemToFind(Long id, ItemToFind itemToFind);

    public Boolean deleteItemToFind(Long id);
}
