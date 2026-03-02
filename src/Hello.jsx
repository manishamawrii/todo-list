import React, { useContext } from 'react'
import { Alltheseitem } from './store/TodoItems.store'

export default function Hello(){
  const {addItem} = useContext(Alltheseitem)
  console.log(addItem)

 
  return (
    <div>
   {addItem?.length==0?  <p className='text-center fs-2 fw-bold mt-2'  >Hello enter something</p>:"" }
    </div>
  )
}
