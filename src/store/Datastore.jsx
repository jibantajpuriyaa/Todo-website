import { createContext, useReducer, useState } from "react";

export const datasontex = createContext({
  data: [],
  addData: () => {},
  deleteData: () => {}
});

const dataIteamReducer=(currentstate, action)=>{
        
          if(action.type == 'NEW_ITEM'){
             return[
                       ...currentstate,{
                        name:action.payload.inputData,
                       }
             ]
          }else if(action.type == 'DELETE_ITEM'){
            let newtodo= currentstate;
            newtodo = currentstate.filter(item =>  item.name!== action.payload.inputData);
            return newtodo;
          }
       
        
}

const Datastore = ({ children }) => {
  const [data, dispatchData] = useReducer(dataIteamReducer, []);
  //const [data, setData] = useState([]);

  const addData=(inputData,setItemName)=>{
    const newItemAction={
            type:"NEW_ITEM",
            payload:{
              inputData,
            }
    }
    if(inputData.length != 0){
      dispatchData(newItemAction);
    }
    setItemName("");
  }
   
 const deleteData=(inputData)=>{
    const newItemAction={
            type:"DELETE_ITEM",
            payload:{
              inputData,
            }
    }
    dispatchData(newItemAction);
  }
  

  return (
    <datasontex.Provider value={{ data ,addData  ,deleteData}}>
      {children}
    </datasontex.Provider>
  );
};

export default Datastore;
