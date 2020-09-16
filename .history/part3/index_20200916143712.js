const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Note = require("./models/note");
const PORT = process.env.PORT;
require("dotenv").config();
app.use(cors());
app.use(express.static("build"));

const generateId = () => {
  const maxId =
    notes.length > 0 ? Math.max(...notes.map((note) => note.id)) : 0;
  return maxId + 1;
};
app.use(express.json());
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});
app.get("/api/notes", (req, res) => {
  Note.find({}).then((notes) => {
    res.json(notes);
  });
});
app.get("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  Note.find({}).then((notes) => {
    const note = notes.find((note) => note.id == id);
    console.log(note);
    if (note) res.json(note);
    else res.status(404).end();
  });
});
app.delete("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  notes = notes.filter((note) => note.id != id);
  res.status(204).end();
});
app.post("/api/notes", (req, res) => {
  const body = req.body;
  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(),
  };
  notes = notes.concat(note);
  console.log(note, "helloworld");
  res.json(note);
});
app.listen(PORT, () => {
  console.log("12321");
});
