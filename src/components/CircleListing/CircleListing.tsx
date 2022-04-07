import { ReactComponent as CircleSVG } from '../../resources/circle.svg';
import styles from './CircleListing.module.css';

const CircleListing = () => {
  return (
    <div className={styles['circle-listing']}>
      <CircleSVG className={styles.circle} />
      <h2>Red</h2>
      <p>$24.99</p>
    </div>
  );
};
export default CircleListing;
