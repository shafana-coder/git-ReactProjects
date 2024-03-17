import "bootstrap/dist/css/bootstrap.min.css";
import Items from "./Component/Items";
import ErrorMessage from "./Component/ErrorMessage";
import "./App.css";
import Container from "./Component/Container";
import FoodInput from "./Component/FoodInput";
import { useState } from "react";
function App() {
  let [foodItems, setFoodItems] = useState([
    "daal",
    "atta",
    "meat",
    "egg",
    "milk",
  ]);
  const onkeydown = (event) => {
    if (event.key == "Enter") {
      let newFoodItems = event.target.value;
      let newItems = [...foodItems, newFoodItems];
      setFoodItems(newItems);
    }
  };
  return (
    <Container>
      <h1 className="head">Healthy Foods</h1>
      <FoodInput handleKeyDown={onkeydown}></FoodInput>

      <Items items={foodItems}></Items>
      <ErrorMessage items={foodItems}></ErrorMessage>
    </Container>
  );
}
export default App;
