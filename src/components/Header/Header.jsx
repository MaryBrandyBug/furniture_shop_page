import React from 'react';
import styles from './Header.module.scss';
import { Navbar } from '../Navbar';
import { ShopButton } from '../ShopButton';
import textHeader from './data';

export default function Header() {
  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles.header__content}>
        <h1 className={`${styles.header__content__text} bold-font-style`}>{textHeader}</h1>
        <ShopButton sectionStyle={styles.header__content__btn} fontParams="bold-font-style" />
      </div>
    </header>
  );
}
