package com.example.dbmsproject.backend.Service.impl;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dbmsproject.backend.Model.Place;
import com.example.dbmsproject.backend.Repository.PlaceRepository;
import com.example.dbmsproject.backend.Service.PlaceService;

@Service
public class PlaceServiceImpl implements PlaceService {

    @Autowired
    PlaceRepository placeRepository;

    @Override
    public Collection<Place> findByName(String name) {
        Collection<Place> result = placeRepository.findByNameContaining(name);
        return result;
    }

}
