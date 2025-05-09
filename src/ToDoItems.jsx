// import todoitems from './App'
// import TodoItem from './TodoItem'
import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Alltheseitem } from "./store/TodoItems.store";

const ToDoItems =()=>{
   const {addItem,handleDelete}  = useContext(Alltheseitem)
  
  return (<>

  {addItem.map((items,index)=>(
   
    <div className="container text-center" key={index}>
  <div className="row">
    <div className="col mt-1">
      {items.name}
    </div>
    <div className="col mt-1">
      {items.dueDate}
    </div>
    <div className="col mt-1" >
      <button type="button" className='btn btn-danger'onClick={()=>handleDelete(items)} ><MdDeleteOutline />
      </button>
    </div>
  </div>
</div>
   
 ) )}

  </>
  )
}

export default ToDoItems;