package com.example.retosophos.models;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "rental")
public class RentalModel {

    @Id
    private Long id;
    @Column(name = "client_id")
    private Long clientId;
    @Column(name = "game_copy_id")
    private Long gameCopyId;
    @Column(name = "rental_date")
    private Timestamp rentalDate;
    @Column(name = "return_date")
    private Timestamp returnDate;
    private double price;
    private int returned;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    public Long getGameCopyId() {
        return gameCopyId;
    }

    public void setGameCopyId(Long gameCopyId) {
        this.gameCopyId = gameCopyId;
    }

    public Timestamp getRentalDate() {
        return rentalDate;
    }

    public void setRentalDate(Timestamp rentalDate) {
        this.rentalDate = rentalDate;
    }

    public Timestamp getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(Timestamp returnDate) {
        this.returnDate = returnDate;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getReturned() {
        return returned;
    }

    public void setReturned(int returned) {
        this.returned = returned;
    }

}
