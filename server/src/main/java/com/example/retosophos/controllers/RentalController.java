package com.example.retosophos.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.retosophos.services.RentalService;

@RestController
@RequestMapping("/rental")
public class RentalController {
    @Autowired
    RentalService rentalService;

}
