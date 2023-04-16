import React from 'react';
import styles from './Menu.module.scss';
import data from './data';

export default function Menu() {
  const menuItems = data.map((item) => <div><p className={`${styles.galary__menu__item} regular-font-style`}>{item}</p></div>);
  return (
    <div className={styles.galary__menu}>
      {menuItems}
    </div>
  );
}
