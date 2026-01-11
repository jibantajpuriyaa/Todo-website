import React from 'react'
import Heading from '../component/Heading';
import Inputfield from '../component/Inputfield';
import Itemlist from '../component/Itemlist';
import './Home.css'

const Home = () => {
  return (
    <center>

    <div className='todo-card'>
      <Heading />
      <Inputfield />
      <Itemlist />
    </div>
    
    </center>
  )
}

export default Home;
