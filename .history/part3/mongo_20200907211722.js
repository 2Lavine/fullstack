const mongoose = require("mongoose");
const password = "Huang0329";
const dbname = "myFirstPorject";
const url = `mongodb+srv://katemic:${password}@cluster0.x2hus.mongodb.net/${dbname}?retryWrites=true&w=majority`;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const noteschema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});
const Note = mongoose.model("Note", noteschema);

export default Note;
