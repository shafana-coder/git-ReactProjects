import { useState } from "react";
import styles from "./Buttons.module.css";

const Buttons = ({ itm, ButtonCl }) => {
  let ButtonClick = () => {};
  return (
    <div className={styles.buttonsContainer}>
      {itm.map((i) => (
        <button className={styles.buttons} key={i} value={i} onClick={ButtonCl}>
          {i}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
