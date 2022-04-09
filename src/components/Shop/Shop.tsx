import CircleListing from '../CircleListing';
import styles from './Shop.module.css';

const Shop = () => {
  return (
    <div className={styles.shop}>
      <section className={styles['shop-content']}>
        <h1 className={styles.h1}>Circles</h1>
        <div className={styles.listings}>
          <CircleListing color="red" />
          <CircleListing color="blue" />
          <CircleListing color="yellow" />
          <CircleListing color="green" />
          <CircleListing color="purple" />
          <CircleListing color="pink" />
        </div>
      </section>
    </div>
  );
};

export default Shop;
