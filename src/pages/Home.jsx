import React, { useState } from 'react';
import '../assets/home.css'; 
import sedekah from '../assets/sedekah.webp'; 
import logoh from '../assets/Home.png'; 
import { Link } from 'react-router-dom'; 

const Home = () => {
  const [likes, setLikes] = useState(10);  
  const [shares, setShares] = useState(1); 

  const handleLike = () => setLikes(likes + 1); 
  const handleShare = () => setShares(shares + 1);  

  return (
    <div>
      <header>
        <div className="navbar">
          <div className="navbar-left">
            <a href="#" className="home-link">
              <img src={logoh} alt="Home Icon" className="home-icon" />
              Home
            </a>
            <button className="category-button">sedekah</button>
          </div>
          <h1>Sedekah Indah</h1>
          <div className="navbar-right">
          <Link to="/login">
              <button className="nav-button">Masuk</button>
            </Link>
            <Link to="/register">
              <button className="nav-button">Daftar</button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <div className="content">
          <img src={sedekah} alt="Sedekah Image" className="content-image" />
          <div className="reaction-buttons">
            <button className="like-button" onClick={handleLike}>
              {likes} 👍
            </button>
            <button className="share-button" onClick={handleShare}>
              {shares} ➡
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
