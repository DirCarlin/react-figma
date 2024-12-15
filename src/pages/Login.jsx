import React, { useState } from 'react';
import '../assets/login.css';

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <h2>Masuk Kedalam Akun</h2>
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
        <button type="submit">MASUK</button>
      </form>
      <p>
        Belum Punya Akun? <a href="#">DAFTAR</a>
      </p>
    </div>
  );
};

export default login;
