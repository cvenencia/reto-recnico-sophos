package com.example.retosophos.services;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.example.retosophos.models.RentalModel;
import com.example.retosophos.repositories.RentalRepository;
import com.example.retosophos.repositories.RentalRepository.ClientRentGame;
import com.example.retosophos.repositories.RentalRepository.FrequentClient;
import com.example.retosophos.repositories.RentalRepository.RentedGameCount;
import com.example.retosophos.repositories.RentalRepository.SalesOfDay;

@Service
public class RentalService {
    @Autowired
    RentalRepository rentalRepository;

    @Value("${data.rentalDays}")
    private int rentalDays;

    @Value("${data.currentDate}")
    private String currentDate;

    public Collection<ClientRentGame> getOverdueClients() {
        return rentalRepository.getOverdueClients(rentalDays, currentDate);
    }

    public RentalModel claimRental(Long id) {
        RentalModel rental = rentalRepository.findById(id).orElse(null);
        if (rental == null)
            return null;
        if (rental.getReturned() == 1)
            return rental;
        rental.setReturned(1);
        return rentalRepository.save(rental);
    }

    public FrequentClient getMostFrequentClient() {
        return rentalRepository.getMostFrequentClient();
    }

    public RentedGameCount getMostRentedGame() {
        return rentalRepository.getMostRentedGame();
    }

    public Collection<SalesOfDay> getSalesOfDay(String date) {
        return rentalRepository.getSalesOfDay(date);
    }

    public RentedGameCount getLeastRentedGameByAge(int startAge, int finishAge) {
        return rentalRepository.getLeastRentedGameByAge(startAge, finishAge);
    }

}
