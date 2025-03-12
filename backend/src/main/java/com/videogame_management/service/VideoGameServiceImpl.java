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
        if(videoGame.getName() != null){
            existingVideoGame.setName(videoGame.getName());
        }

        if(videoGame.getCategory() != null){
            existingVideoGame.setCategory(videoGame.getCategory());
        }

        if(videoGame.getPlatform() != null){
            existingVideoGame.setPlatform(videoGame.getPlatform());
        }

        if(videoGame.getRating() != 0){
            existingVideoGame.setRating(videoGame.getRating());
        }

        return videoGameRepository.save(existingVideoGame);
    }

    @Override
    public void delete(Long id) {
        if (!videoGameRepository.existsById(id)) {
            throw new RuntimeException("Videojuego con ID " + id + " no existe");
        }
        videoGameRepository.deleteById(id);
    }

    @Override
    public VideoGame getById(Long id) {
        if (!videoGameRepository.existsById(id)) {
            throw new RuntimeException("Videojuego con ID " + id + " no existe");
        }

        VideoGame videoGame = videoGameRepository.findById(id).get();
        return videoGame;
    }
}
