import React from 'react';
import styles from './ShopButton.module.scss';

// eslint-disable-next-line react/prop-types
export default function ShopButton({ sectionStyle, fontParams }) {
  return (
    <button className={`${styles['shop-link__button']} ${fontParams} ${sectionStyle || ''}`} type="button">shop</button>
  );
}
