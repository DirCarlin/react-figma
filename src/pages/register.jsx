import React, { useState } from 'react';
import '../assets/register.css';
import { Link } from 'react-router-dom'; 

const Regis = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Kata sandi tidak cocok!");
    } else {
      alert("Akun berhasil dibuat!");
    }
  };

  return (
    <div className="signup-container">
      <h2>Membuat Akun</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Masukan email" 
          required 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Masukan Kata Sandi" 
          required 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Ulangi Kata Sandi" 
          required 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
        />
        <div className="button-group">
            <Link to='/'>
          <button type="submit">Home</button>
          </Link>
          <Link to='/login'>
          <button className="login-link" type="submit">Login</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Regis;
