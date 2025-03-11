import React from 'react';

const VideoGamesList = () => {
    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center">
                <h2>Video Games List</h2>
                <button type="button" class="btn btn-outline-secondary">Add Video Game</button>

            </div>
            
            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Plataforma</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    );
};

export default VideoGamesList;