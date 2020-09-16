// mongodb+srv://katemic:<password>@cluster0.x2hus.mongodb.net/<dbname>?retryWrites=true&w=majority
const mongoose = require("mongoose");
if (process.argv.length < 3) {
  console.log("please input password");
  process.exit(1);
}
const password = process.argv[2];
const dbname = "myFirstPorject";
const url = `mongodb+srv://katemic:${password}@cluster0.x2hus.mongodb.net/${dbname}?retryWrites=true&w=majority`;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const noteschema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});
const Note = mongoose.model("Note", noteschema);
const note = new Note({
  content: "html is coming?",
  date: new Date(),
  important: Math.random() < 0.5,
});
note.save().then((res) => {
  console.log("successfully saved");
  mongoose.connection.close();
});
Note.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
