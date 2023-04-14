import React from 'react';
import './Header.scss';
import { Navbar } from '../Navbar';
import { ShopButton } from '../ShopButton';
import textHeader from './data';

export default function Header() {
  return (
    <header className="header">
      <Navbar />
      <div className="header__content">
        <h1 className="header__content__text bold-font-style">{textHeader}</h1>
        <ShopButton sectionStyle="header__content__btn" />
      </div>

    </header>
  );
}
