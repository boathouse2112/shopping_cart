import CircleListing from '../CircleListing';
import Header from '../Header';
import styles from './Shop.module.css';

const Shop = () => {
  return (
    <div>
      <Header />
      <section className={styles.shop}>
        <h1>Circles</h1>
        <div>
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
