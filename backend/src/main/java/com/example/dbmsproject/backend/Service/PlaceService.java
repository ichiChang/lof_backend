package com.example.dbmsproject.backend.Service;

import java.util.Collection;

import com.example.dbmsproject.backend.Model.Place;

public interface PlaceService {
    public Collection<Place> findByName(String name);
}
