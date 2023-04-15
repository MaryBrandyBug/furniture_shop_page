import React from 'react';
import styles from './ProductionBlock.module.scss';
import blockText from './data';

export default function ProductionBlock() {
  return (
    <div className={styles.block}>
      <div className={styles.block__text}>
        <p className={`${styles.block__text__header} bold-font-style card-header`}>{blockText}</p>
        <p className={`${styles.block__text__link} regular-font-style block-links`}>Lire l&apos;article</p>
      </div>
      <img src="images/production.png" alt="la fabrication Kann" />
    </div>
  );
}
