import React, { useContext, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { Alltheseitem } from "./store/TodoItems.store";

export default function AddTodo() {
  const { handleClick } = useContext(Alltheseitem);

  const [textUpdate, settextUpdate] = useState("");
  const [dateUpdate, setdateUpdate] = useState("");

  const handleaddbtn = () => {
    if (!textUpdate || !dateUpdate) return; // simple validation
    handleClick(textUpdate, dateUpdate);
    setdateUpdate("");
    settextUpdate("");
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        <h4 className="text-center mb-4">Add New Todo</h4>

        <div className="row g-3 align-items-center">
          {/* Todo Input */}
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Enter todo item..."
              value={textUpdate}
              onChange={(e) => settextUpdate(e.target.value)}
            />
          </div>

          {/* Date Input */}
          <div className="col-md-4">
            <input
              type="date"
              className="form-control"
              value={dateUpdate}
              onChange={(e) => setdateUpdate(e.target.value)}
            />
          </div>

          {/* Button */}
          <div className="col-md-3 d-grid">
            <button
              type="button"
              className="btn btn-success d-flex align-items-center justify-content-center gap-2"
              onClick={handleaddbtn}
            >
              <IoIosAddCircle size={22} />
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
