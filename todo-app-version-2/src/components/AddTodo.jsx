import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useContext } from "react";
import { TodoItemsStore } from "../store/TodoItemsStore";

function AddTodo({}) {
  const { handleNewTodo } = useContext(TodoItemsStore);
  const [todoname, setTodoname] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleNameChange = (event) => {
    setTodoname(event.target.value);
  };
  const handleDateChnage = (event) => {
    setDueDate(event.target.value);
  };
  const handleButtonClicked = () => {
    handleNewTodo(todoname, dueDate);
    setTodoname("");
    setDueDate("");
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter your todo"
            onChange={handleNameChange}
            value={todoname}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChnage} value={dueDate} />
        </div>
        <div className="col-2">
          <button className="btn btn-success" onClick={handleButtonClicked}>
            <IoMdAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
