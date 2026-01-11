import { createContext, useReducer, useState } from "react";

export const datasontex = createContext({
  data: [],
  addData: () => {},
  deleteData: () => {},
  lineInData: () => {},
});

const dataIteamReducer = (currentstate, action) => {
  if (action.type == "NEW_ITEM") {
    return [
      ...currentstate,
      {
        name: action.payload.inputData,
        line: false,
      },
    ];
  } else if (action.type == "DELETE_ITEM") {
    let newtodo = currentstate;
    newtodo = currentstate.filter(
      (item) => item.name !== action.payload.inputData
    );
    return newtodo;
  } else if (action.type == "LINE") {
   
    let newitem = currentstate.map(item =>
        item.name === action.payload.inputData
          ? { ...item, line: !item.line } 
          : item
      );
    return newitem;
  }
  console.log(currentstate);
};

const Datastore = ({ children }) => {
  const [data, dispatchData] = useReducer(dataIteamReducer, []);
  //const [data, setData] = useState([]);

  const addData = (inputData, setItemName) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        inputData,
        line: false,
      },
    };
    if (inputData.length != 0) {
      dispatchData(newItemAction);
    }
    setItemName("");
  };

  const deleteData = (inputData) => {
    const newItemAction = {
      type: "DELETE_ITEM",
      payload: {
        inputData,
      },
    };
    dispatchData(newItemAction);
  };

  const lineInData = (inputData) => {
    const addLineInItem = {
      type: "LINE",
      payload: {
        inputData,
        line:true
      },
    };
    dispatchData(addLineInItem);
  };

  return (
    <datasontex.Provider value={{ data, addData, deleteData, lineInData }}>
      {children}
    </datasontex.Provider>
  );
};

export default Datastore;
