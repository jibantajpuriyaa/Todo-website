import React from 'react'
import './Inputfield.css'

const Inputfield = () => {
  return (
    <center>
    <div className='inputfield-main'>
      <input placeholder='enter your todo here'/>
      <button> Add</button>
    </div>
    </center>
  )
}

export default Inputfield
