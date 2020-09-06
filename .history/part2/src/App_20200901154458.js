import React, { setState } from "react";
import Note from "./components/Note.js";

const App = ({ notes }) => {
  const [notes, setNotes] = setState(notes);
  const addNote = (e) => {
    e.preventDefault();
    console.log("button clicked", e.target);
  };
  return (
    <ul>
      {notes.map((note) => (
        <Note note={note} key={note.id}></Note>
      ))}
    </ul>
    <form onSubmit={addNote}>
        <input></input>
        <button type="submit">save</button>
    </form>
  );
};
export default App;
