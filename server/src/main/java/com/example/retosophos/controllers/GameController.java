package com.example.retosophos.controllers;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.retosophos.models.GameModel;
import com.example.retosophos.repositories.GameRepository.GameAndProtagonist;
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

    @GetMapping()
    public Collection<GameAndProtagonist> getGamesWithProtagonists(
            @RequestParam("director") Optional<String> paramDirector,
            @RequestParam("producer") Optional<String> paramProducer,
            @RequestParam("protagonist_name") Optional<String> paramProtagonistName) {

        String director = String.join("", "%", paramDirector.orElse(""), "%");
        String producer = String.join("", "%", paramProducer.orElse(""), "%");
        String protagonistName = String.join("", "%", paramProtagonistName.orElse(""), "%");
        return gameService.getGamesWithProtagonists(
                director,
                producer,
                protagonistName);
    }

}
