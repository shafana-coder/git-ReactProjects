import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import { TodoItemsStore } from "./store/TodoItemsStore";
import WelcomeComponent from "./components/WelcomeComponent";
function App() {
  const todoItems = [
    // {
    //   name: "Buy Milk",
    //   dueDate: "20-01-2024",
    // },
    // {
    //   name: "College",
    //   dueDate: "20-01-2024",
    // },
  ];
  const [curTodo, setTodo] = useState(todoItems);
  const handleNewTodo = (itemName, itemDueDate) => {
    console.log(`${itemName} ${itemDueDate} `);
    const newTodoItems = [
      ...curTodo,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];
    setTodo(newTodoItems);
  };
  const handleDelete = (TodoitemName) => {
    const newTodo = curTodo.filter((item) => item.name != TodoitemName);
    console.log(`item deleted ${TodoitemName}`);
    setTodo(newTodo);
  };

  return (
    <TodoItemsStore.Provider value={{ curTodo, handleNewTodo, handleDelete }}>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeComponent></WelcomeComponent>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsStore.Provider>
  );
}

export default App;
