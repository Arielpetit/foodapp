package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Menu;
import com.example.demo.service.MenuService;

import java.util.List;

@RestController
@RequestMapping("/api/restaurants/{restaurantId}/menus")
public class MenuController {

    @Autowired
    private MenuService menuService;

    @GetMapping
    public List<Menu> getAllMenusForRestaurant(@PathVariable Long restaurantId) {
        return menuService.getAllMenusForRestaurant(restaurantId);
    }

    @PostMapping
    public Menu addMenuToRestaurant(@PathVariable Long restaurantId, @RequestBody Menu menu) {
        return menuService.addMenuToRestaurant(restaurantId, menu);
    }
}
