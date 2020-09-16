const express = require("express");
const app = express();
const cors = require("cors");
const generateId = () => {
  const maxId =
    notes.length > 0 ? Math.max(...notes.map((note) => note.id)) : 0;
  return maxId + 1;
};
const errorHandler = (error, req, res, next) => {
  console.error(error.message);
  if (error.name === "CastError" && error.kind === "ObjectId") {
    return response.status(400).send({ error: "malformatted id" });
  }
  next(error);
};
require("dotenv").config();
const Note = require("./note");
const PORT = process.env.PORT;
app.use(errorHandler);
app.use(cors());
app.use(express.static("build"));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});
app.get("/api/notes", (req, res, next) => {
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
      next(err);
    });
});
app.delete("/api/notes/:id", (req, res, next) => {
  Note.findByIdAndRemove(req.params.id)
    .then((res) => res.status(204).end)
    .catch((error) => next(error));
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
app.put("/api/notes/:id", (request, response, next) => {
  const body = request.body;

  const note = {
    content: body.content,
    important: body.important,
  };

  Note.findByIdAndUpdate(request.params.id, note, { new: true })
    .then((updatedNote) => {
      response.json(updatedNote);
    })
    .catch((error) => next(error));
});
app.listen(PORT, () => {
  console.log("12321");
});
