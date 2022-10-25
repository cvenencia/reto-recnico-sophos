package com.example.retosophos.controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.retosophos.repositories.ProtagonistRepository.GameProtagonist;
import com.example.retosophos.services.ProtagonistService;

@RestController
@RequestMapping("/protagonist")
public class ProtagonistController {
    @Autowired
    ProtagonistService protagonistService;

    @GetMapping(path = "/all")
    public Collection<GameProtagonist> getGameProtagonists() {
        return protagonistService.getGameProtagonists();
    }
}
