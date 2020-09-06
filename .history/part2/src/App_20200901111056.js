import React from "react";
import Note from "./components/Note.js";

const App = ({ notes }) => {
  return (
    <ul>
      {notes.map((note) => (
        <Note note={note} key={note.id}></Note>
      ))}
    </ul>
  );
};
export default App;
