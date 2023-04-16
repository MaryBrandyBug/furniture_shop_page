import React from 'react';
import styles from './Subscription.module.scss';

export default function Subscription() {
  return (
    <div className={styles.subscription_container}>
      <div className={styles.subscription_text}>
        <p className="regular-font-style">Abonnez-vous à notre newsletter</p>
        <p className="regular-font-style">pour recevoir nos offres et suivre notre actualité.</p>
      </div>
      <div className={styles.subscription_link}>
        <div>
          <p className="regular-font-style">S&apos;abonner</p>
        </div>
      </div>
    </div>
  );
}
