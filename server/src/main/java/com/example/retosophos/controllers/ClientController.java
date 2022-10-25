package com.example.retosophos.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.retosophos.services.ClientService;

@RestController
@RequestMapping("/client")
public class ClientController {
    @Autowired
    ClientService clientService;

}
