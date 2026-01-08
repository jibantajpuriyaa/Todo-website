import React, { useContext, useState } from 'react'
import './Inputfield.css'
import { datasontex } from '../store/Datastore'

const Inputfield = () => {
 const {addData} = useContext(datasontex);
 const [itemName, setItemName] = useState("");

  return (
    <center>
    <div className='inputfield-main'>
      <input value={itemName} onChange={(e)=>{setItemName(e.target.value)}} placeholder='enter your todo here' required/>
      <button onClick={()=>addData(itemName, setItemName)}> Add</button>
    </div>
    </center>
  )
}

export default Inputfield
