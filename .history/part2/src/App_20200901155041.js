import React, { setState } from "react";
import Note from "./components/Note.js";

const App = (props) => {
  console.log(props);
  const [notes, setNotes] = setState(props.notes);
  const [newNote, setNewNote] = setState("a new note here");
  const addNote = (e) => {
    e.preventDefault();
    console.log("button clicked", e.target);
  };
  return (
    <div>
      <ul>
        {notes.map((note) => (
          <Note note={note} key={note.id}></Note>
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value="newNote"></input>
        <button type="submit">save</button>
      </form>
    </div>
  );
};
export default App;
