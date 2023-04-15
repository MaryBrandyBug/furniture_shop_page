import React from 'react';
import styles from './BenchBlock.module.scss';
import blockText from './data';
import { ShopButton } from '../ShopButton';

export default function BenchBlock() {
  return (
    <div className={styles.block}>
      <img src="images/benches.png" alt="les bancs Galta" />
      <div className={styles.block__text}>
        <p className={`${styles.block__text__header} bold-font-style card-header`}>{blockText}</p>
        <ShopButton />
      </div>
    </div>
  );
}
