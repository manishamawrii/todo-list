import { createContext } from "react";

import { useReducer } from "react";
export const Alltheseitem = createContext();

  const AlltheseitemProvider= ({children})=>{
const myAdditem = (state, action)=>{
  if(action.type==="NEW_ADD"){
   return[...state, {name : action.payload.textUpdate ,dueDate: action.payload.dateUpdate}
   ]}
  else if (action.type==='NEW_DELETE'){
    const updatedArray = state.filter(item=>item!==action.payload.indexeltoDel)
    return updatedArray
  }
  else {
    return state; // Default: return current state
  }
 
}



// const [addItem,setAddItem]= useState([])
const [addItem, dispatch] = useReducer(myAdditem,[])
 const handleClick=(textUpdate,dateUpdate)=>{
  const newItemAction=
  {
    type: "NEW_ADD",
    payload: {
      textUpdate,
      dateUpdate
    }
  }
  dispatch(newItemAction)
 }
 const handleDelete=(indexeltoDel)=>{
  const deleteItemAction = {
    type: "NEW_DELETE",
    payload: {
      indexeltoDel
    }
  }
  dispatch(deleteItemAction)
  }

  return (
 <Alltheseitem.Provider
  value={{addItem, handleClick, handleDelete } }

  >{children}</Alltheseitem.Provider>
  )

}
export default AlltheseitemProvider;