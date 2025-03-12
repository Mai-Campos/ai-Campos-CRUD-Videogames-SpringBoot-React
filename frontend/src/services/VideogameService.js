import axios from "axios";

const VideoGames_BASE_REST_API_URL = "http://localhost:8080/api/v1/videogames"; 

class VideoGameService{  

    getAllVideoGames(){  
        return axios.get(VideoGames_BASE_REST_API_URL); 
    }

    createVideoGame(videoGame){
        return axios.post(VideoGames_BASE_REST_API_URL, videoGame); 
    }

    getVideoGameById(idVideoGame){
        return axios.get(VideoGames_BASE_REST_API_URL +  '/' + idVideoGame)
    }

    updateVideoGameById(idVideoGame, videoGame){
        return axios.put(VideoGames_BASE_REST_API_URL + '/' + idVideoGame,videoGame)
    }

    deleteVideoGame(idVideoGame){
        return axios.delete(VideoGames_BASE_REST_API_URL + "/" + idVideoGame)
    }
}

export default new VideoGameService();