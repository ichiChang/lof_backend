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

@Service
public class ItemOnRoadServiceImpl implements ItemOnRoadService {

    @Autowired
    ItemOnRoadRepository itemOnRoadRepository;

    @Override
    public ItemOnRoad saveItemOnRoad(ItemOnRoad itemOnRoad) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        df.setTimeZone(TimeZone.getTimeZone("Asia/Taipei"));
        String date = df.format(new Date());
        String newpick = itemOnRoad.getPick_up_time().substring(0, 10);
        itemOnRoad.setPick_up_time(newpick);
        itemOnRoad.setPostTime(date);
        itemOnRoadRepository.save(itemOnRoad);
        return itemOnRoad;
    }

    @Override
    public Collection<ItemOnRoad> getItemOnRoads() {
        Collection<ItemOnRoad> output = itemOnRoadRepository.findAll();
        for (ItemOnRoad itemOnRoad : output) {
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
        }
        return output;
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
    public Collection<ItemOnRoad> findByName(String name) {
        Collection<ItemOnRoad> output = itemOnRoadRepository.findByNameContaining(name);
        for (ItemOnRoad itemOnRoad : output) {
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
        }
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
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findByType'");
    }

}
