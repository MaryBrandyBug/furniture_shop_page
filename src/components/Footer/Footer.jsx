import React from 'react';
import styles from './Footer.module.scss';
import data from './data';

export default function Footer() {
  const footerMenu = data.map((item) => (
    <div className={styles.footer__links}>
      <p className="regular-font-style ">{item.theme}</p>
      <br />
      {item.topics.map((topic) => <p className={`${styles.footer__links__item} regular-font-style`}>{topic}</p>)}
    </div>
  ));
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer__all_links_container}>
        {footerMenu}
      </div>
      <div className={styles.footer__references}>
        <p>© Kann Design 2021</p>
        <p>Gestion des cookies</p>
      </div>
    </div>
  );
}
