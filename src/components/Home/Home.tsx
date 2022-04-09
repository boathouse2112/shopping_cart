import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles['hero-content']}>
          <h1>Have yourself a round one</h1>
          <h2>Premium circles at everyday prices</h2>
          <button type="button" className={styles.button}>
            View more
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
