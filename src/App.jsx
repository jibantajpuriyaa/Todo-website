import React from 'react'
import './App.css'
import Home from './pages/home'
import Datastore from './store/Datastore'

const App = () => {
  return (
  <>
  <Datastore>
  <Home />
  </Datastore>
  </>
  )
}

export default App
