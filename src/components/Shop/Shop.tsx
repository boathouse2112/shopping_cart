import CircleListing from '../CircleListing';
import Header from '../Header';
import styles from './Shop.module.css';

const Shop = () => {
  return (
    <div className={styles.shop}>
      <Header />
      <section className={styles['shop-content']}>
        <h1 className={styles.h1}>Circles</h1>
        <div className={styles.listings}>
          <CircleListing />
          <CircleListing />
          <CircleListing />
          <CircleListing />
          <CircleListing />
          <CircleListing />
        </div>
      </section>
    </div>
  );
};

export default Shop;
