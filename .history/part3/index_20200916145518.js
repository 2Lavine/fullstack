const express = require("express");
const app = express();
const cors = require("cors");
const generateId = () => {
  const maxId =
    notes.length > 0 ? Math.max(...notes.map((note) => note.id)) : 0;
  return maxId + 1;
};
require("dotenv").config();
const Note = require("./note");
const PORT = process.env.PORT;
app.use(cors());
app.use(express.static("build"));

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
  Note.findById(request.params.id)
    .then((note) => {
      if (note) res.json(note);
      else res.status(404).end();
    })
    .catch((err) => {
      console.log("error", error.message);
      res.status(404).end();
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
  const note = new Note({
    content: body.content,
    date: new Date(),
    important: body.important || false,
  });
  note.save().then((saveNote) => {
    res.json(saveNote);
  });
});
app.listen(PORT, () => {
  console.log("12321");
});
