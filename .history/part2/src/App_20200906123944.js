import React, { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("input a new note");
  const [showAll, setShowAll] = useState(true);
  const addNote = (e) => {
    e.preventDefault();
    const newNoteObject = {
      contend: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };
    setNotes(notes.concat(newNoteObject));
    setNewNote("");
  };
  const handleNoteChange = (e) => {
    setNewNote(e.target.value);
  };
  const handleNoteChange = (e) => {
    setShowAll(!showAll);
  };
  const notesToShow = showAll
    ? notes
    : notes.filter((item) => item.important === true);
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={handleNoteChange}>
          show{showAll ? "showALL" : "important"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => {
          <Note note={note} key={note.id}></Note>;
        })}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange="handleNoteChange"></input>
        <button type="submit"></button>
      </form>
    </div>
  );
};
