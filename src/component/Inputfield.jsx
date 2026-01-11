import React, { useContext, useState } from "react";
import "./Inputfield.css";
import { datasontex } from "../store/Datastore";

const Inputfield = () => {
  const { addData } = useContext(datasontex);
  const [itemName, setItemName] = useState("");
  const inpthandler = (e) => {
    setItemName(e.target.value);
    if (e.key === "Enter") {
     addData(itemName, setItemName);
    }
  };

  return (
    <center>
      <div className="inputfield-main">
        <div className="inputfield-area">
          <input
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            onKeyDown={inpthandler}
            placeholder="enter your todo here"
            required
          />
          <button onClick={() => addData(itemName, setItemName)}> Add</button>
        </div>
      </div>
    </center>
  );
};

export default Inputfield;
