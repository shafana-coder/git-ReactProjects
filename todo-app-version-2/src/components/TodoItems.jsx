import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsStore } from "../store/TodoItemsStore";
function TodoItems({}) {
  const { curTodo } = useContext(TodoItemsStore);

  return (
    <div className={styles.row}>
      {curTodo.map((item) => (
        <TodoItem
          key={item.name}
          todoNmae={item.name}
          todoDate={item.dueDate}
        ></TodoItem>
      ))}
    </div>
  );
}
export default TodoItems;
