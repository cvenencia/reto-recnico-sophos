package com.example.retosophos.controllers;

import java.util.Collection;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.retosophos.models.RentalModel;
import com.example.retosophos.repositories.RentalRepository.ClientRentGame;
import com.example.retosophos.repositories.RentalRepository.FrequentClient;
import com.example.retosophos.repositories.RentalRepository.RentedGameCount;
import com.example.retosophos.repositories.RentalRepository.SalesOfDay;
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
    public RentalModel claimRental(@RequestBody Map<String, Long> payload) {
        return rentalService.claimRental(payload.get("id"));
    }

    @GetMapping(path = "/most-frequent")
    public FrequentClient getMostFrequentClient() {
        return rentalService.getMostFrequentClient();
    }

    @GetMapping(path = "/most-rented")
    public RentedGameCount getMostRentedGame() {
        return rentalService.getMostRentedGame();
    }

    @GetMapping(path = "/sales")
    public Collection<SalesOfDay> getSalesOfDay(@RequestParam("date") String date) {
        return rentalService.getSalesOfDay(date);
    }

    @GetMapping(path = "/least-rented-by-age-group")
    public RentedGameCount getLeastRentedGameByAge(@RequestParam("startAge") int startAge,
            @RequestParam("finishAge") int finishAge) {
        return rentalService.getLeastRentedGameByAge(startAge, finishAge);
    }
}
