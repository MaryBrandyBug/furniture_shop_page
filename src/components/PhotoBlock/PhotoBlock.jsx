import React from 'react';
import styles from './PhotoBlock.module.scss';
import { ShopButton } from '../ShopButton';

export default function PhotoBlock({
  photoPath1, alt1, photoPath2, alt2, text,
}) {
  return (
    <div className={styles.block}>
      <img src={photoPath1} alt={alt1} />
      <div className={styles.smoller_block}>
        <img src={photoPath2} alt={alt2} />
        <div className={styles.smoller_block__links}>
          <p className={`${styles.smoller_block__subscription} block-links`}>{text}</p>
          <ShopButton fontParams="regular-font-style" />
        </div>
      </div>
    </div>
  );
}
