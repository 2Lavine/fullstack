import React, { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("input a new note");

  const addNote = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => {
          <Note note={note} key={note.id}></Note>;
        })}
      </ul>
      <form onSubmit={addNote}>
        <input></input>
        <button type="submit"></button>
      </form>
    </div>
  );
};
