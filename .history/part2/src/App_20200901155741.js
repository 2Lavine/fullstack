import React, { useState } from "react";
import Note from "./components/Note.js";

const App = (props) => {
  console.log(props);
  const [notes, setNotes] = useState(props.notes);
  console.log(notes);
  const [newNote, setNewNote] = useState("a new note here");
  const addNote = (e) => {
    e.preventDefault();
    console.log("button clicked", e.target);
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random(),
      id: notes.length + 1,
    };
    setNotes(notes.concat(nodeObject));
    setNewNote("");
  };
  const handleNoteChange = (e) => {
    console.log(e.target.value);
    setNewNote(e.target.value);
  };

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <Note note={note} key={note.id}></Note>
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}></input>
        <button type="submit">save</button>
      </form>
    </div>
  );
};
export default App;