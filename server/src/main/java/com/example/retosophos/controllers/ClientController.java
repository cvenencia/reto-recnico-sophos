package com.example.retosophos.controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.retosophos.models.ClientModel;
import com.example.retosophos.repositories.ClientRepository.ClientBalance;
import com.example.retosophos.services.ClientService;

@RestController
@RequestMapping("/client")
public class ClientController {
    @Autowired
    ClientService clientService;

    @GetMapping(path = "/{id}")
    public ClientModel getClientById(@PathVariable("id") Long id) {
        return clientService.getClientById(id);
    }

    @GetMapping(path = "/{id}/balance")
    public Collection<ClientBalance> getBalance(@PathVariable("id") Long id) {
        return clientService.getBalance(id);
    }
}
