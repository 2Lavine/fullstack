import React from "react";

const Note = ({ note, toggleImportance }) => (
  <li>
    {note.content}
    <button onClick={toggleImportance}></button>
  </li>
);

export default Note;
