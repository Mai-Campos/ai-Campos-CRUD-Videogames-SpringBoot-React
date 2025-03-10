package com.videogame_management.service;

import com.videogame_management.model.VideoGame;
import com.videogame_management.repository.VideoGameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VideoGameServiceImpl implements VideoGameService{

    @Autowired
    VideoGameRepository videoGameRepository;


    @Override
    public List<VideoGame> getAll() {
        return  videoGameRepository.findAll();
    }

    @Override
    public VideoGame save(VideoGame videoGame) {
       return videoGameRepository.save(videoGame);
    }

    @Override
    public VideoGame update(Long id,VideoGame videoGame) {
        if (!videoGameRepository.existsById(id)) {
            throw new RuntimeException("Videojuego con ID " + id + " no existe");
        }

        VideoGame existingVideoGame = videoGameRepository.findById(id).get();
        existingVideoGame.setName(videoGame.getName());
        existingVideoGame.setCategory(videoGame.getCategory());
        existingVideoGame.setPlatform(videoGame.getPlatform());

        return videoGameRepository.save(existingVideoGame);
    }

    @Override
    public String delete(Long id) {
        if (!videoGameRepository.existsById(id)) {
            throw new RuntimeException("Videojuego con ID " + id + " no existe");
        }

        videoGameRepository.deleteById(id);
        return "Record deleted successfully";
    }

    @Override
    public VideoGame getById(Long id) {
        if (!videoGameRepository.existsById(id)) {
            throw new RuntimeException("Videojuego con ID " + id + " no existe");
        }

        VideoGame videoGame = videoGameRepository.findById(id).get();
        return  videoGame;
    }
}
