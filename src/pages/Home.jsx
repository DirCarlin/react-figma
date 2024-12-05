import React, { useState } from 'react';
import '../assets/home.css'; 

const Home = () => {
  const [likes, setLikes] = useState(1000);  
  const [shares, setShares] = useState(1000); 

  const handleLike = () => setLikes(likes + 1); 
  const handleShare = () => setShares(shares + 1);  

  return (
    <div>
      <header>
        <div className="navbar">
          <div className="navbar-left">
            <a href="#" className="home-link">
              <img src="Home.png" alt="Home Icon" className="home-icon" />
              Home
            </a>
            <button className="category-button">sedekah</button>
          </div>
          <h1>Sedekah Indah</h1>
          <div className="navbar-right">
            <button className="nav-button">Masuk</button>
            <button className="nav-button">Daftar</button>
          </div>
        </div>
      </header>

      <main>
        <div className="content">
          <img src="sedekah.webp" alt="Sedekah Image" className="content-image" />
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
