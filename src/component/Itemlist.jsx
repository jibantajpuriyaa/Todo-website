import React, { useContext } from 'react'
import './Itemlist.css'
import { RxCrossCircled } from "react-icons/rx";
import { datasontex } from '../store/Datastore'
import image from '../assets/check.png'

const Itemlist = () => {
  const {data ,deleteData,lineInData} = useContext(datasontex);
  console.log(data.line)
  return (
    <>
    <center>

    <p> List</p>
      {data.map((item)=>{
        return (<div  className='itemlist-main'>
          <div onClick={()=>lineInData(item.name)} className={`circle ${item.line == true ? "bg-orange" : null}`}>
             {item.line == true ? <img  src={image}/>: null}
          </div>
          <div className={`list-item ${item.line == true ? 'line':null}`}>{item.name}</div>
         <div onClick={()=>deleteData(item.name)} className="list-btn"><RxCrossCircled /></div>
        </div>); 
      })}
   
    </center>
      </>
   
  )
}

export default Itemlist
