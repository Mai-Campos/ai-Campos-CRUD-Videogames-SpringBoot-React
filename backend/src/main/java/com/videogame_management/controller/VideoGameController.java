package com.videogame_management.controller;

import com.videogame_management.model.VideoGame;
import com.videogame_management.service.VideoGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class VideoGameController {

    @Autowired
    VideoGameService videoGameService;

    @GetMapping("/videogames")
    public List<VideoGame> getVideoGames(){
        return  videoGameService.getAll();
    }

    @PostMapping("/videogames")
    public VideoGame createVideoGame(@RequestBody VideoGame videoGame){
        return videoGameService.save(videoGame);
    }

    @PutMapping("/videogames/{id}")
    public VideoGame updateVideoGame(@PathVariable Long id, @RequestBody VideoGame videoGame){
        return videoGameService.update(id,videoGame);
    }

    @DeleteMapping("/videogames/{id}")
    public void deleteVideoGame(@PathVariable Long id){
         videoGameService.delete(id);
    }

    @GetMapping("/videogames/{id}")
    public VideoGame getVideoGameById(@PathVariable Long id){
        return videoGameService.getById(id);
    }
}
