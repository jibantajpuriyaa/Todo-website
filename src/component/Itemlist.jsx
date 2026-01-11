import React, { useContext } from 'react'
import './Itemlist.css'
import { RxCrossCircled } from "react-icons/rx";
import { datasontex } from '../store/Datastore'

const Itemlist = () => {
  const {data ,deleteData} = useContext(datasontex)
  return (
    <>
    <center>

    <p> List</p>
      {data.map((item)=>{
        return (<div  className='itemlist-main'>
          <div className="circle"></div>
          <div className="list-item">{item.name}</div>
         <div onClick={()=>deleteData(item.name)} className="list-btn"><RxCrossCircled /></div>
        </div>); 
      })}
   
    </center>
      </>
   
  )
}

export default Itemlist
