package com.videogame_management.repository;

import com.videogame_management.model.VideoGame;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VideoGameRepository extends JpaRepository<VideoGame,Long> {
    List<VideoGame> findByNameContainingIgnoreCase(String name);

}
