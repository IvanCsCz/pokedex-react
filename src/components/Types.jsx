import styles from './Types.module.css';

const Types = ({ name, typeName }) => {
  const typeColor = typeName.toLowerCase();
  return (
    <span className={`${styles.type} ${styles[`${typeColor}`]}`}>{name}</span>
  );
};

export default Types;
