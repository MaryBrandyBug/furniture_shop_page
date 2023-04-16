import React from 'react';
import styles from './Navbar.module.scss';
import { leftPartMenuData, rightPartMenuData, rightPartDataLang } from './data';

export default function Navbar() {
  const leftPartMenu = leftPartMenuData.map((item) => <span className={`${styles.menu__item} regular-font-style`}>{item}</span>);
  const rightPartMenu = rightPartMenuData.map((item) => <span className={`${styles.menu__item} regular-font-style`}>{item}</span>);
  const rightPartLang = rightPartDataLang.map((item) => <span className={`${styles.menu__item__lang} ${styles[item.class] || ''} regular-font-style`}>{item.lang}</span>);
  return (
    <div className={styles.header__navbar}>
      <div className={styles.navbar_logo}>
        <img src="/images/VectorK.png" alt="" />
        <img src="/images/VectorA.png" alt="" />
        <img src="/images/VectorN.png" alt="" />
        <img src="/images/VectorN.png" alt="" />
      </div>
      <div className={styles.navbar__menu}>
        <div className={styles.navbar__menu__part}>
          {leftPartMenu}
        </div>
        <div className={styles.navbar__menu__part}>
          {rightPartLang}
          {rightPartMenu}
        </div>
      </div>
    </div>
  );
}
