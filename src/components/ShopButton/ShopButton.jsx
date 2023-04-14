import React from 'react';
import styles from './ShopButton.module.scss';

// eslint-disable-next-line react/prop-types
export default function ShopButton({ sectionStyle }) {
  return (
    <button className={`${styles['shop-link__button']} bold-font-style ${sectionStyle || ''}`} type="button">shop</button>
  );
}
