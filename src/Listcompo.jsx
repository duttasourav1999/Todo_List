import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
function Listcompo(props) {
  const [line, setLine] = useState(false);

  function cutIt() {
    setLine(true);
  }
  return (
    <div className="todo_style">
      <span onClick={cutIt}>
        <DeleteIcon
          className="deleteIcon"
          onClick={() => props.del(props.id)}
        />
      </span>
      <li style={{ textDecoration: line ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default Listcompo;
