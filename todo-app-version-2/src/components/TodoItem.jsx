import { useContext } from "react";
import { TodoItemsStore } from "../store/TodoItemsStore";
function TodoItem({ todoNmae, todoDate }) {
  const { curTodo } = useContext(TodoItemsStore);
  const { handleDelete } = useContext(TodoItemsStore);
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">{todoNmae}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDelete(todoNmae)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
