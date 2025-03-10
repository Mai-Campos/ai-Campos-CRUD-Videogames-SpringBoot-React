package com.videogame_management.controller;

import com.videogame_management.model.VideoGame;
import com.videogame_management.service.VideoGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/videogames")
public class VideoGameController {

    @Autowired
    VideoGameService videoGameService;

    @GetMapping
    public List<VideoGame> getVideoGames(){
        return  videoGameService.getAll();
    }

    @PostMapping("/save")
    public VideoGame createVideoGame(@RequestBody VideoGame videoGame){
        return videoGameService.save(videoGame);
    }

    @PatchMapping("/{id}")
    public VideoGame updateVideoGame(@PathVariable Long id, @RequestBody VideoGame videoGame){
        return videoGameService.update(id,videoGame);
    }

    @DeleteMapping("/{id}")
    public String deleteVideoGame(@PathVariable Long id){
        return videoGameService.delete(id);
    }

    @GetMapping("/{id}")
    public VideoGame getVideoGameById(@PathVariable Long id){
        return videoGameService.getById(id);
    }
}
