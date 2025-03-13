
import React, { useEffect, useState } from 'react';
import VideoGameService from '../services/VideogameService';
import { Link } from 'react-router-dom';
import './VideoGameListComponentStyles.css'


const VideoGamesListComponent = () => {

   const [videoGames,setVideoGames] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');

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

const filteredVideoGames = videoGames.filter(videoGame =>
    videoGame.name.toLowerCase().includes(searchTerm.toLowerCase())
);

const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
};

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

            <div class="group">
                <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                <input placeholder="Search By Name" type="search" class="input" value={searchTerm}
                    onChange={handleInputChange} />
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
                    {filteredVideoGames.length > 0 ? (
                        filteredVideoGames.map(videoGame => (
                            <tr key={videoGame.id}>
                                <td>{videoGame.id}</td>
                                <td>{videoGame.name}</td>
                                <td>{videoGame.category}</td>
                                <td>{videoGame.platform}</td>
                                <td>{videoGame.rating}</td>
                                <td>
                                    <Link className='btn btn-secondary' to={`/update-videogame/${videoGame.id}`}>Update</Link>
                                    <span style={{ margin: '0 10px' }}></span>
                                    <button style={{ marginLeft: "10px" }} className='btn btn-danger' onClick={() => deleteVideoGames(videoGame.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">No se encontraron resultados</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default VideoGamesListComponent;