import React, { useContext } from 'react'
import { useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { Alltheseitem } from './store/TodoItems.store';


export default function AddTodo() {
  const {handleClick} = useContext(Alltheseitem)
  const [textUpdate,settextUpdate] =useState("")
    const [dateUpdate,setdateUpdate] =useState("")
    const handleaddbtn =()=>{
      handleClick(textUpdate,dateUpdate)
      setdateUpdate("")
      settextUpdate("")
    }
  return (
    <div>
<div className="container text-center">
  <div className="row">
    <div className="col">
      <input type="text" placeholder='todo items' value={textUpdate}   onChange={(e)=>settextUpdate(e.target.value)}/>
    </div>
    <div className="col">
      <input type="date" name="" id=""  value={dateUpdate} onChange={(e)=>setdateUpdate(e.target.value)} />
    </div>
    <div className="col">
      <button type="button"className =" btn btn-success"  onClick={handleaddbtn}/*{()=>handleClick(textUpdate,dateUpdate,settextUpdate,setdateUpdate)}*/><IoIosAddCircle />
      </button> 
    </div>
  </div>
</div>
    </div>
  )
}
