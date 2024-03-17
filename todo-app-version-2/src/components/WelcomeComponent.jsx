import { TodoItemsStore } from "../store/TodoItemsStore";
import { useContext } from "react";
const WelcomeComponent = () => {
  const todoContect = useContext(TodoItemsStore);
  const final = todoContect.curTodo;
  return final.length == 0 && <h1>U ARE FREE NOW...ENJOY YOUR DAY</h1>;
};
export default WelcomeComponent;
