import { useState } from "react";
import Itm from "./Itm";
const Items = ({ items }) => {
  let [activeItem, setActiveItems] = useState([]);
  let onBuyButton = (item, event) => {
    let newItems = [...activeItem, item];
    setActiveItems(newItems);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Itm
          key={item}
          foodItem={item}
          bought={activeItem.includes(item)}
          handleBuyButton={(event) => onBuyButton(item, event)}
        ></Itm>
      ))}
    </ul>
  );
};
export default Items;
