import React from 'react';
import styles from './Galary.module.scss';
import { ProductionBlock } from '../ProductionBlock';

export default function Galary() {
  return (
    <div className={styles.galary}>
      <ProductionBlock />
    </div>
  );
}
