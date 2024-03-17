import styles from "./Itm.module.css";
const Itm = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li
      key={foodItem}
      className={`list-group-item ${styles.kg} ${bought && "active"}`}
    >
      {foodItem}
      <button
        type="button"
        className={`${styles.kg} btn btn-outline-success`}
        onClick={handleBuyButton}
      >
        Success
      </button>
    </li>
  );
};
export default Itm;
