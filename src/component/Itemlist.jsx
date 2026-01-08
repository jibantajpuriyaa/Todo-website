import React, { useContext } from 'react'
import './Itemlist.css'
import { datasontex } from '../store/Datastore'

const Itemlist = () => {
  const {data, setData} = useContext(datasontex)
  return (
    <>
    <center>

    <p> List</p>
      {data.map((item)=>{
        return <h1>{item.itemName}</h1>
      })}
   
    </center>
      </>
   
  )
}

export default Itemlist
