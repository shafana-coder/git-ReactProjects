import Buttons from "./Buttons";
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ items, OnButtonClick }) => {
  return (
    <div className={styles.buttonsContainer}>
      <Buttons itm={items} ButtonCl={OnButtonClick}></Buttons>
    </div>
  );
};
export default ButtonsContainer;
