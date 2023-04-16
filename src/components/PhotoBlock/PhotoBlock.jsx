import React from 'react';
import styles from './PhotoBlock.module.scss';
import { ShopButton } from '../ShopButton';

export default function PhotoBlock({
  photoPath1, alt1, photoPath2, alt2, text, linkText,
}) {
  return (
    <div className={styles.block}>
      {linkText
        ? (
          <div className={styles.block__photo}>
            <img src={photoPath1} alt={alt1} />
            <p className={`${styles.block__photo__link} regular-font-style block-links`}>{linkText}</p>
          </div>
        )
        : <img src={photoPath1} alt={alt2} />}
      <div className={styles.smoller_block}>
        <img src={photoPath2} alt={alt2} />
        <div className={styles.smoller_block__links}>
          <p className={`${styles.smoller_block__link} block-links`}>{text}</p>
          <ShopButton fontParams="regular-font-style" />
        </div>
      </div>
    </div>
  );
}
