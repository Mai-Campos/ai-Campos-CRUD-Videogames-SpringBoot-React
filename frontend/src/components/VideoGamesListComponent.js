
import React, { useEffect, useState } from 'react';
import VideoGameService from '../services/VideogameService';
import { Link } from 'react-router-dom';


const VideoGamesListComponent = () => {

   const [videoGames,setVideoGames] = useState([]);

   useEffect(()=>{
    listVideoGames();
   },[]);

   const listVideoGames = () =>{
    VideoGameService.getAllVideoGames()
        .then(response => {
            setVideoGames(response.data);
        })
        .catch(error => {
            console.log(error);
        });
}

const deleteVideoGames = (idVideoGame) =>{
    VideoGameService.deleteVideoGame(idVideoGame).then((response) =>{
        listVideoGames();
    }).catch(error =>{
        console.log(error);
    })
}

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center">
                <h2>Videogames List</h2>   
                <Link to="/save"  className='btn btn-outline-secondary'>Add Videogame</Link>
                

            </div>
            
            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Platform</th>
                        <th>Rating</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {videoGames.map(videoGames => (
                        <tr key={videoGames.id}>
                            <td>{videoGames.id}</td>
                            <td>{videoGames.name}</td>
                            <td>{videoGames.category}</td>
                            <td>{videoGames.platform}</td>
                            <td>{videoGames.rating}</td>
                            <td>
                                <Link className='btn btn-secondary' to={`/update-videogame/${videoGames.id}`}>Update</Link>
                                <span style={{ margin: '0 10px' }}></span> 
                                <button style={{marginLeft:"10px"}} className='btn btn-danger' onClick={()=> deleteVideoGames(videoGames.id)}>Delete</button>
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VideoGamesListComponent;