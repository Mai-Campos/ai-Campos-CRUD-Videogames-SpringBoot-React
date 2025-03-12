import React from 'react';
import './FooterStyles.css'; 

const FooterComponent = () => {
    return (
        <footer className="bg-dark text-white text-center py-3 footer">
            <div className="container">
                <p className="mb-0">CRUD for videogame management developed by Maikol Campos Rodriguez</p>
            </div>
        </footer>
    );
};

export default FooterComponent;