import React from 'react';
import styles from './HeaderBlock.module.scss';
import { ShopButton } from '../ShopButton';

export default function HeaderBlock({ photoPath, alt, text }) {
  return (
    <div className={styles.block}>
      <img src={photoPath} alt={alt} />
      <div className={styles.block__text}>
        <p className={`${styles.block__text__header} bold-font-style card-header`}>{text}</p>
        <ShopButton />
      </div>
    </div>
  );
}
