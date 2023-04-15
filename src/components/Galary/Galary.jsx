import React from 'react';
import styles from './Galary.module.scss';
import { ProductionBlock } from '../ProductionBlock';
import { PhotoBlock } from '../PhotoBlock';
import { HeaderBlock } from '../HeaderBlock';
import {
  sofaBlockText, benchBlockText, chairBlockText, chairBlockLink,
} from './data';

export default function Galary() {
  return (
    <div className={styles.galary}>
      <ProductionBlock />
      <PhotoBlock photoPath1="images/yellowSofa.png" alt1="canapé jaune exquis" photoPath2="images/greenSofa.png" alt2="vert sablé" text={sofaBlockText} />
      <HeaderBlock photoPath="images/benches.png" alt="les bancs Galta" text={benchBlockText} />
      <PhotoBlock photoPath1="images/twoChairs.png" alt1="chaises" photoPath2="images/chair.png" alt2="chaise minimaliste" text={chairBlockText} linkText={chairBlockLink} />
    </div>
  );
}
