import React from 'react';
import Header from './../components/Header';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <section className={styles.hero}>
        <div className="hero-content">
          <h1>Have yourself a round one</h1>
          <h2>Premium circles at everyday prices</h2>
          <button type="button">View more</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
