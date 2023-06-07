package com.example.dbmsproject.backend.Controller;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.dbmsproject.backend.Service.ItemOnRoadService;

import jakarta.validation.Valid;

import com.example.dbmsproject.backend.Model.ItemOnRoad;
import com.example.dbmsproject.backend.Model.User;

@RestController
@RequestMapping("/api/itemonroads")
@CrossOrigin(origins = "http://localhost:3000")
public class ItemOnRoadController {

    @Autowired
    private ItemOnRoadService itemOnRoadService;

    // C

    @PostMapping("")
    public ResponseEntity<ItemOnRoad> createItemOnRoad(@Valid @RequestBody ItemOnRoad itemOnRoad) {
        ItemOnRoad result = itemOnRoadService.saveItemOnRoad(itemOnRoad);
        return ResponseEntity.ok().body(result);
    }
    // R
    /*
     * 查詢全部
     */

    @GetMapping("")
    public Collection<ItemOnRoad> itemonroads() {
        return itemOnRoadService.getItemOnRoads();
    }
    /*
     * 依id查詢
     */

    @GetMapping("/id/{id}")
    public Optional<ItemOnRoad> getItemOnRoadById(@PathVariable Long id) {
        Optional<ItemOnRoad> item = itemOnRoadService.findById(id);
        return item;
    }
    /*
     * 依使用者查詢
     */

    @GetMapping("/user")
    public Collection<ItemOnRoad> getItemOnRoadsByUser(@RequestBody User user) {
        return itemOnRoadService.findByUser(user);
    }

    /*
     * 依name查詢
     */

    @GetMapping("/name/{name}")
    public Collection<ItemOnRoad> getItemOnRoadByName(@PathVariable String name) {
        Collection<ItemOnRoad> item = itemOnRoadService.findByName(name);
        return item;
    }

    // U

    @PutMapping("/{id}")
    public ResponseEntity<String> updateItemOnRoad(@PathVariable Long id, @Valid @RequestBody ItemOnRoad request) {
        boolean rlt = itemOnRoadService.updateItemOnRoad(id, request);
        if (!rlt) {
            return ResponseEntity.badRequest().body("錯誤");
        }
        return ResponseEntity.ok().body("成功更新物品");
    }

    // D

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteItem(@PathVariable Long id) {
        Boolean rlt = itemOnRoadService.deleteItemOnRoad(id);
        if (!rlt) {
            return ResponseEntity.badRequest().body("Id 不存在");
        }
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("");
    }
}
