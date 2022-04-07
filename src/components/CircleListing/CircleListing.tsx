import { ReactComponent as CircleSVG } from '../../resources/circle.svg';
import styles from './CircleListing.module.css';

const upperCaseFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const CircleListing = (props: { color: string }) => {
  return (
    <div className={styles['circle-listing']}>
      <CircleSVG className={styles[props.color]} />
      <h2>{upperCaseFirstLetter(props.color)}</h2>
      <p>$24.99</p>
    </div>
  );
};
export default CircleListing;
