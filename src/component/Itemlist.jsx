import React, { useContext } from 'react'
import './Itemlist.css'
import { datasontex } from '../store/Datastore'

const Itemlist = () => {
  const {data ,deleteData} = useContext(datasontex)
  return (
    <>
    <center>

    <p> List</p>
      {data.map((item)=>{
        return (<div  className='itemlist-main'>
          <div className="list-item">{item.name}</div>
         <button onClick={()=>deleteData(item.name)} className="list-btn">Delete</button>
        </div>); 
      })}
   
    </center>
      </>
   
  )
}

export default Itemlist
