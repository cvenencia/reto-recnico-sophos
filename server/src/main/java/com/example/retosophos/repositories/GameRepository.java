package com.example.retosophos.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.retosophos.models.GameModel;

public interface GameRepository extends CrudRepository<GameModel, Long> {

}
