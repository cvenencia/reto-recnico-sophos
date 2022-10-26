package com.example.retosophos.services;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.retosophos.models.GameModel;
import com.example.retosophos.repositories.GameRepository;
import com.example.retosophos.repositories.GameRepository.GameAndProtagonist;

@Service
public class GameService {
    @Autowired
    GameRepository gameRepository;

    public GameModel getGameById(Long id) {
        return gameRepository.findById(id).orElse(null);
    }

    public Collection<GameAndProtagonist> getGamesWithProtagonists(String director, String producer,
            String protagonistName) {
        return gameRepository.getGamesWithProtagonists(director, producer, protagonistName);
    }

}
