import React from "react";
import { useState } from "react";
import "./Todolist3.css";
import Button from "@mui/material/Button";
import Item from "antd/es/list/Item";
import Listcompo from "./Listcompo";

function Todolist3() {
  const [item, setitem] = useState("");

  const [newitem, setNewItem] = useState([]);
  function itemeventhandler(e) {
    setitem(e.target.value);
  }

  const handleclick = () => {
    setNewItem((olditems) => {
      return [...olditems, item];
    });

    setitem("");
  };

  function handledelete(id) {
    setNewItem((olditems) => {
      return olditems.filter((delitem, index) => {
        return index != id;
      });
    });
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />

          <h1>TODO LIST</h1>
          <br />

          <input
            type="text"
            placeholder="Add An item"
            onChange={itemeventhandler}
            value={item}
          />
          <Button className="newBtn" color="success" onClick={handleclick}>
            +
          </Button>
          <br />
          <ol>
            {newitem.map((item, index) => {
              return (
                <Listcompo
                  d
                  key={index}
                  text={item}
                  id={index}
                  del={handledelete}
                />
              );
            })}
          </ol>
        </div>
      </div>
      ;
    </>
  );
}

export default Todolist3;
