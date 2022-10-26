package com.example.retosophos.repositories;

import java.util.Collection;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.retosophos.models.GameModel;

public interface GameRepository extends CrudRepository<GameModel, Long> {

    public interface GameAndProtagonist {
        public String getProtagonistName();

        public Long getId();

        public String getTitle();

        public String getProducer();

        public String getDirector();

        public String getLaunchDate();
    }

    @Query(value = "SELECT g.id, g.title, g.producer, g.director, g.launch_date launchDate, p.protagonist_name protagonistName FROM game g JOIN protagonist p ON g.id=p.game_id WHERE LOWER(g.director) LIKE LOWER(?1) AND LOWER(g.producer) LIKE LOWER(?2) AND LOWER(p.protagonist_name) LIKE LOWER(?3)", nativeQuery = true)
    public Collection<GameAndProtagonist> getGamesWithProtagonists(String director, String producer,
            String protagonistName);
}
