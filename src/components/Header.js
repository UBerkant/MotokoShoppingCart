import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Motoko Alışveriş Sepeti</h1>
      <nav>
        <ul>
          <li><a href="#home">Anasayfa</a></li>
          <li><a href="#products">Ürünler</a></li>
          <li><a href="#contact">İletişim</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
