import { createContext, useState } from "react";

export const datasontex = createContext([{
  itemName: "buy book"
},{
  itemName: "buy copy"
},])


import React from 'react'

const Datastore = ({children}) => {
  const [data, setData] = useState({});

  return (
    <datasontex.Provider value={{data, setData}}>
      {children}
    </datasontex.Provider>
  )
}

export default Datastore



