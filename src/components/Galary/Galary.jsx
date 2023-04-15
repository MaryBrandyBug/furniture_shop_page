import React from 'react';
import styles from './Galary.module.scss';
import { ProductionBlock } from '../ProductionBlock';
import SofaBlock from '../SofaBlock/SofaBlock';

export default function Galary() {
  return (
    <div className={styles.galary}>
      <ProductionBlock />
      <SofaBlock />
    </div>
  );
}
