package com.example.dbmsproject.backend.Controller;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dbmsproject.backend.Model.ItemToFind;
import com.example.dbmsproject.backend.Model.User;
import com.example.dbmsproject.backend.Service.ItemToFindService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ItemToFindController {

    @Autowired
    ItemToFindService itemToFindService;

    // C

    @PostMapping("/itemtofinds")
    public ResponseEntity<ItemToFind> createItemToFind(@Valid @RequestBody ItemToFind itemtofind) {
        ItemToFind result = itemToFindService.saveItemToFind(itemtofind);
        return ResponseEntity.ok().body(result);
    }

    // R
    /*
     * 查詢全部
     */

    @GetMapping("/itemtofinds")
    public ResponseEntity<Collection<ItemToFind>> itemToFinds() {
        Collection<ItemToFind> result = itemToFindService.getItemToFinds();
        return ResponseEntity.ok().body(result);
    }
    /*
     * 依id查詢
     */

    @GetMapping("/itemtofinds/id/{id}")
    public Optional<ItemToFind> getItemToFind(@PathVariable Long id) {
        Optional<ItemToFind> result = itemToFindService.findById(id);
        return result;
    }

    /*
     * 依name查詢
     */

    @GetMapping("/itemtofinds/name/{name}")
    public Collection<ItemToFind> getItemToFindByName(@PathVariable String name) {
        Collection<ItemToFind> result = itemToFindService.findByName(name);
        return result;
    }

    /*
     * 依使用者查詢
     */

    @GetMapping("/itemtofinds/user")
    public ResponseEntity<Collection<ItemToFind>> getItemToFindsByUser(@RequestBody User user) {
        Collection<ItemToFind> result = itemToFindService.findByUser(user);
        return ResponseEntity.ok().body(result);
    }

}
