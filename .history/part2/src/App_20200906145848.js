import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import Axios from "axios";
import noteService from "./services/note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("input a new note");
  const [showAll, setShowAll] = useState(true);
  const hook = () => {
    noteService.getAll().then((res) => {
      setNotes(res.data);
    });
  };
  useEffect(hook, []);
  const addNote = (e) => {
    e.preventDefault();
    const newNoteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };
    noteService.create(newNoteObject).then((res) => {
      setNotes(notes.concat(res.data));
      setNewNote("");
    });
  };
  const handleNoteChange = (e) => {
    console.log(e.target.value);
    setNewNote(e.target.value);
  };
  const handleNoteShow = (e) => {
    setShowAll(!showAll);
    console.log(notesToShow);
  };
  const toggleImportanceOf = (id) => {
    console.log("importance of " + id + " needs to be toggled");
    const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find((item) => item.id === id);
    const changedNote = { ...note, important: !note.important };
    noteService.update(id, changedNote).then((res) => {
      setNotes(notes.map((note) => (note.id !== id ? note : res.data)));
    });
  };
  const notesToShow = showAll
    ? notes
    : notes.filter((item) => item.important === true);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={handleNoteShow}>
          show{showAll ? "showALL" : "important"}
        </button>
      </div>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}></input>
        <button type="submit">submit</button>
      </form>
      <ul>
        {notesToShow.map((note) => (
          <Note
            note={note}
            key={note.id}
            toggleImportance={() => toggleImportanceOf(note.id)}
          ></Note>
        ))}
      </ul>
    </div>
  );
};

export default App;
