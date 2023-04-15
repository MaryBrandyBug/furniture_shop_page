import React from 'react';
import styles from './SofaBlock.module.scss';
import { ShopButton } from '../ShopButton';

export default function SofaBlock() {
  return (
    <div className={styles.block}>
      <img src="images/yellowSofa.png" alt="canapé jaune exquis" />
      <div className={styles.smoller_block}>
        <img src="images/greenSofa.png" alt="vert sablé" />
        <div className={styles.smoller_block__links}>
          <p className={`${styles.smoller_block__subscription} block-links`}>Cut / vert sablé</p>
          <ShopButton fontParams="regular-font-style" />
        </div>
      </div>
    </div>
  );
}
