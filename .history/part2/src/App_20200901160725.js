import React, { useState } from "react";
import Note from "./components/Note.js";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("a new note here");
  const [showAll, setShowAll] = useState(true);
  const addNote = (e) => {
    e.preventDefault();
    console.log("button clicked", e.target);
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };
    setNotes(notes.concat(noteObject));
    setNewNote("");
  };
  const handleNoteChange = (e) => {
    console.log(e.target.value);
    setNewNote(e.target.value);
  };
  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);
  console.log(notesToShow);
  return (
    <div>
      <ul>
        {notesToShow.map((note) => (
          <Note note={note} key={note.id}></Note>
        ))}
      </ul>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {!showAll ? "all" : "important"}
        </button>
      </div>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}></input>
        <button type="submit">save</button>
      </form>
    </div>
  );
};
export default App;
