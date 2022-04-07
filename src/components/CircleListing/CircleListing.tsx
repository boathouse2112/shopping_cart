import { Link } from 'react-router-dom';
import { ReactComponent as CircleSVG } from '../../resources/circle.svg';
import styles from './CircleListing.module.css';

const upperCaseFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const CircleListing = (props: { color: string }) => {
  return (
    <Link to={`/shop/${props.color}`} className={styles['circle-listing']}>
      <CircleSVG className={styles[props.color]} />
      <h2>{upperCaseFirstLetter(props.color)}</h2>
      <p>$24.99</p>
    </Link>
  );
};
export default CircleListing;
