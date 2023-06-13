package com.example.dbmsproject.backend.Service.impl;

import java.text.SimpleDateFormat;
import java.util.Collection;
import java.util.Date;
import java.util.Optional;
import java.util.TimeZone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dbmsproject.backend.Model.ItemOnRoad;
import com.example.dbmsproject.backend.Model.Place;
import com.example.dbmsproject.backend.Model.User;
import com.example.dbmsproject.backend.Repository.ItemOnRoadRepository;
import com.example.dbmsproject.backend.Service.ItemOnRoadService;
import com.example.dbmsproject.backend.Service.PlaceService;
import com.example.dbmsproject.backend.Service.UserService;

@Service
public class ItemOnRoadServiceImpl implements ItemOnRoadService {

    @Autowired
    ItemOnRoadRepository itemOnRoadRepository;

    @Autowired
    UserService userService;

    @Autowired
    PlaceService placeService;

    @Override
    public ItemOnRoad saveItemOnRoad(ItemOnRoad itemOnRoad, Long userID) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        df.setTimeZone(TimeZone.getTimeZone("Asia/Taipei"));
        String date = df.format(new Date());
        String newpick = itemOnRoad.getPick_up_time().substring(0, 10);
        itemOnRoad.setPick_up_time(newpick);
        itemOnRoad.setPostTime(date);
        User user = userService.findById(userID).get();
        itemOnRoad.setUser(user);
        Place originPickUpPlace = itemOnRoad.getPickUpPlace();
        Place originNowPlace = itemOnRoad.getNowPlace();
        if (!originPickUpPlace.getFloor().equals("")) {
            originPickUpPlace.setFloor(originPickUpPlace.getFloor() + "樓");
        }
        if (!originNowPlace.getFloor().equals("")) {
            originNowPlace.setFloor(originNowPlace.getFloor() + "樓");
        }
        itemOnRoad.setNowPlace(originNowPlace);
        itemOnRoad.setPickUpPlace(originPickUpPlace);
        itemOnRoadRepository.save(itemOnRoad);
        return itemOnRoad;
    }

    @Override
    public Collection<ItemOnRoad> getItemOnRoads() {
        Collection<ItemOnRoad> output = itemOnRoadRepository.findAll();
        return output;
    }

    @Override
    public Optional<ItemOnRoad> findById(Long id) {
        Optional<ItemOnRoad> item = itemOnRoadRepository.findById(id);
        return item;
    }

    @Override
    public Collection<ItemOnRoad> findByUser(Long userID) {
        User user = userService.findById(userID).get();
        return itemOnRoadRepository.findByUser(user);
    }

    @Override
    public Collection<ItemOnRoad> findByName(String name) {
        Collection<ItemOnRoad> output = itemOnRoadRepository.findByNameContaining(name);
        return output;
    }

    @Override
    public Boolean updateItemOnRoad(Long id, ItemOnRoad itemOnRoad) {
        Optional<ItemOnRoad> isExistItem = itemOnRoadRepository.findById(id);
        if (!isExistItem.isPresent()) {
            return false;
        }
        ItemOnRoad newItem = isExistItem.get();
        itemOnRoadRepository.save(newItem);
        return true;
    }

    @Override
    public Boolean deleteItemOnRoad(Long id) {
        Optional<ItemOnRoad> isExistItem = itemOnRoadRepository.findById(id);
        if (!isExistItem.isPresent()) {
            return false;
        }
        itemOnRoadRepository.deleteById(id);
        return true;
    }

    @Override
    public Collection<ItemOnRoad> findByType(String type) {
        Collection<ItemOnRoad> result = itemOnRoadRepository.findByType(type);
        return result;
    }

    @Override
    public Collection<ItemOnRoad> findByPlace(String placeName) {
        Collection<Place> places = placeService.findByName(placeName);
        Collection<ItemOnRoad> result = itemOnRoadRepository.findByPickUpPlaceIn(places);
        return result;

    }

}
