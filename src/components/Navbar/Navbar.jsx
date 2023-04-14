import React from 'react';
import './Navbar.scss';
import { leftPartMenuData, rightPartMenuData, rightPartDataLang } from './data';

export default function Navbar() {
  const leftPartMenu = leftPartMenuData.map((item) => <span className="menu__item">{item}</span>);
  const rightPartMenu = rightPartMenuData.map((item) => <span className="menu__item">{item}</span>);
  const rightPartLang = rightPartDataLang.map((item) => <span className="menu__item lang_menu">{item}</span>);
  return (
    <div className="header__navbar">
      <div className="navbar_logo">
        <img src="/images/VectorK.png" alt="" />
        <img src="/images/VectorA.png" alt="" />
        <img src="/images/VectorN.png" alt="" />
        <img src="/images/VectorN.png" alt="" />
      </div>
      <div className="navbar__menu">
        <div className="navbar__menu__part">
          {leftPartMenu}
        </div>
        <div className="navbar__menu__part">
          {rightPartLang}
          {rightPartMenu}
        </div>
      </div>
    </div>
  );
}
