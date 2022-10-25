package com.example.retosophos.services;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.retosophos.repositories.ProtagonistRepository;
import com.example.retosophos.repositories.ProtagonistRepository.GameProtagonist;

@Service
public class ProtagonistService {
    @Autowired
    ProtagonistRepository protagonistRepository;

    public Collection<GameProtagonist> getGameProtagonists() {
        return protagonistRepository.getGameProtagonists();
    }

}
