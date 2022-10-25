package com.example.retosophos.repositories;

import java.util.Collection;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.example.retosophos.models.ProtagonistModel;

public interface ProtagonistRepository extends CrudRepository<ProtagonistModel, Long> {
    public interface GameProtagonist {
        public String getTitle();

        public String getProtagonistName();
    }

    @Query(value = "SELECT g.title, p.protagonist_name FROM game g JOIN protagonist p on g.id=p.game_id", nativeQuery = true)
    public Collection<GameProtagonist> getGameProtagonists();
}
