package com.videogame_management.service;

import com.videogame_management.model.VideoGame;
import java.util.List;


public interface VideoGameService {
    List<VideoGame> getAll();
    VideoGame save(VideoGame videoGame);
    VideoGame update(Long id,VideoGame videoGame);
    String delete(Long id);
    VideoGame getById(Long id);
}
