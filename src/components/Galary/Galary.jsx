import React from 'react';
import styles from './Galary.module.scss';
import { ProductionBlock } from '../ProductionBlock';
import { SofaBlock } from '../SofaBlock';
import { BenchBlock } from '../BenchBlock';

export default function Galary() {
  return (
    <div className={styles.galary}>
      <ProductionBlock />
      <SofaBlock />
      <BenchBlock />
    </div>
  );
}
