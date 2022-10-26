package com.example.retosophos.repositories;

import java.sql.Timestamp;
import java.util.Collection;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.retosophos.models.ClientModel;

public interface ClientRepository extends CrudRepository<ClientModel, Long> {

    public interface ClientBalance {
        public Long getId();

        public String getFullName();

        public int getReturned();

        public String getTitle();

        public double getPrice();

        public Timestamp getRentalDate();

        public Timestamp getReturnDate();
    }

    @Query(value = "SELECT c.id, c.first_name || ' ' || c.last_name fullName, r.returned, g.title, r.price, r.rental_date rentalDate, r.return_date returnDate FROM client c JOIN rental r ON c.id=r.client_id JOIN game_copy gc ON gc.id=r.game_copy_id JOIN platform_game pg ON gc.platform_game_id=pg.id JOIN game g ON pg.game_id=g.id WHERE c.id=?1", nativeQuery = true)
    public Collection<ClientBalance> getBalance(Long id);
}