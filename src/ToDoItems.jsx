import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Alltheseitem } from "./store/TodoItems.store";
import "./todo.css";

const ToDoItems = () => {
  const { addItem, handleDelete } = useContext(Alltheseitem);

  return (
    <div className="todo-list-wrapper">
      <div className="todo-list-card">
        <h2 className="todo-list-title">📝 Your Todo List</h2>

        {addItem.length === 0 ? (
          <p className="empty-message">No todos added yet</p>
        ) : (
          <div className="todo-items-container">
            {addItem.map((items, index) => (
              <div key={index} className="todo-item">
                <div className="todo-left">
                  <span className="todo-name">{items.name}</span>
                  <span className="todo-date">{items.dueDate}</span>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(items)}
                >
                  <MdDeleteOutline size={22} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ToDoItems;