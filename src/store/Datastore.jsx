import { createContext, useState } from "react";

export const datasontex = createContext({
  data: [],
  addData: () => {},
  deleteData: () => {}
});

const Datastore = ({ children }) => {
  const [data, setData] = useState([]);

  const addData = (inputData, setItemName) => {
    if(inputData.length != 0){ 
       setData(prev => [...prev, { name: inputData }]);
    setItemName("");
  }
  
  };

  const deleteData = (name) => {
    setData(prev => prev.filter(item => item.name !== name));
  };

  return (
    <datasontex.Provider value={{ data, addData, deleteData }}>
      {children}
    </datasontex.Provider>
  );
};

export default Datastore;
