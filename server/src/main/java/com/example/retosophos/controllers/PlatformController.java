package com.example.retosophos.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.retosophos.services.PlatformService;

@RestController
@RequestMapping("/platform")
public class PlatformController {
    @Autowired
    PlatformService platformService;

}
