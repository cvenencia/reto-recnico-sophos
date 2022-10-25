package com.example.retosophos.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.retosophos.models.GameModel;
import com.example.retosophos.services.GameService;

@RestController
@RequestMapping("/game")
public class GameController {
    @Autowired
    GameService gameService;

    @GetMapping(path = "/{id}")
    public GameModel getMostRentedGame(@PathVariable("id") Long id) {
        return gameService.getGameById(id);
    }

}
