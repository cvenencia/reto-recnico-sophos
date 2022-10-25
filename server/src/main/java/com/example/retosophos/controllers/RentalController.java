package com.example.retosophos.controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.retosophos.models.RentalModel;
import com.example.retosophos.repositories.RentalRepository.ClientRentGame;
import com.example.retosophos.services.RentalService;

@RestController
@RequestMapping("/rental")
public class RentalController {
    @Autowired
    RentalService rentalService;

    @GetMapping(path = "/overdue-clients")
    public Collection<ClientRentGame> getOverdueClients() {
        return rentalService.getOverdueClients();
    }

    @PostMapping(path = "/claim")
    public RentalModel claimRental(@RequestBody Long id) {
        return rentalService.claimRental(id);
    }
}
