package com.example.retosophos.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.retosophos.services.PlatformGameService;

@RestController
@RequestMapping("/platform-game")
public class PlatformGameController {
    @Autowired
    PlatformGameService platformGameService;

}
