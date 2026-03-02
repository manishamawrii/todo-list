import React, { useContext, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { Alltheseitem } from "./store/TodoItems.store";
import "./AddTodo.css";

export default function AddTodo() {
  const { handleClick } = useContext(Alltheseitem);

  const [textUpdate, settextUpdate] = useState("");
  const [dateUpdate, setdateUpdate] = useState("");

  const handleaddbtn = () => {
    if (!textUpdate || !dateUpdate) return;
    handleClick(textUpdate, dateUpdate);
    setdateUpdate("");
    settextUpdate("");
  };

  return (
    <div className="todo-wrapper">
      <div className="todo-card">
        <h2 className="todo-title"> Add New Todo</h2>

        <div className="todo-form">
          {/* Text Input */}
          <input
            type="text"
            className="todo-input"
            placeholder="Enter your task..."
            value={textUpdate}
            onChange={(e) => settextUpdate(e.target.value)}
          />

          {/* Date Input */}
          <input
            type="date"
            className="todo-input"
            value={dateUpdate}
            onChange={(e) => setdateUpdate(e.target.value)}
          />

          {/* Button */}
          <button className="todo-button" onClick={handleaddbtn}>
            <IoIosAddCircle size={24} />
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}