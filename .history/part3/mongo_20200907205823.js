// mongodb+srv://katemic:<password>@cluster0.x2hus.mongodb.net/<dbname>?retryWrites=true&w=majority
const mongosse = require("mongoose");
if (processs.argv.length < 3) {
  console.log("please input password");
  process.exit(1);
}
const password = process.argv[2];
const dbname = "myFirstPorject";
const url = `mongodb+srv://katemic:${password}@cluster0.x2hus.mongodb.net/${dbname}?retryWrites=true&w=majority`;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const noteschema = new mongosse.Schema({
  content: String,
  date: Date,
  important: Boolean,
});
const Note = noteschema.model("Note", noteschema);
const note = new Note({
  content: "html is coming?",
  date: new Date(),
  important: Math.random() < 0.5,
});
Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})