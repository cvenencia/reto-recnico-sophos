package com.example.retosophos.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.retosophos.models.GameModel;
import com.example.retosophos.repositories.GameRepository;

@Service
public class GameService {
    @Autowired
    GameRepository gameRepository;

    public GameModel getGameById(Long id) {
        return gameRepository.findById(id).orElse(null);
    }

}
