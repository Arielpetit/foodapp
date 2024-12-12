package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Menu;
import com.example.demo.entity.Restaurant;
import com.example.demo.repository.MenuRepository;
import com.example.demo.repository.RestaurantRepository;

import java.util.List;

@Service
public class MenuService {

    @Autowired
    private MenuRepository menuRepository;

    @Autowired
    private RestaurantRepository restaurantRepository;

    public List<Menu> getAllMenusForRestaurant(Long restaurantId) {
        Restaurant restaurant = restaurantRepository.findById(restaurantId)
                .orElseThrow(() -> new RuntimeException("Restaurant not found"));
        return restaurant.getMenus();
    }

    public Menu addMenuToRestaurant(Long restaurantId, Menu menu) {
        Restaurant restaurant = restaurantRepository.findById(restaurantId)
                .orElseThrow(() -> new RuntimeException("Restaurant not found"));
        menu.setRestaurant(restaurant);
        return menuRepository.save(menu);
    }
}
