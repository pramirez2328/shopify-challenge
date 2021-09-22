import React from "react";
import "./Undo.css";
function Undo({ id, buttonId, undoId, undo }) {
  return (
    <button className="undo" onClick={() => undo(id, buttonId, undoId)}>
      UNDO
    </button>
  );
}

export default Undo;
