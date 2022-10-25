package com.example.retosophos.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "protagonist")
public class ProtagonistModel {

    @Id
    private Long id;
    @Column(name = "protagonist_name")
    private String protagonistName;
    @Column(name = "game_id")
    private Long gameId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProtagonistName() {
        return protagonistName;
    }

    public void setProtagonistName(String protagonistName) {
        this.protagonistName = protagonistName;
    }

    public Long getGameId() {
        return gameId;
    }

    public void setGameId(Long gameId) {
        this.gameId = gameId;
    }
}
