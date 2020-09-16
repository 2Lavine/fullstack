// mongodb+srv://katemic:<password>@cluster0.x2hus.mongodb.net/<dbname>?retryWrites=true&w=majority
const mongoose = require("mongoose");
if (process.argv.length < 3) {
  console.log(123);
  process.exit(1);
}
const password = process.argv[2];
const dbname = "myFirstPorject";
const url =`mongodb+srv://katemic:${password}@cluster0.x2hus.mongodb.net/${dbname}?retryWrites=true&w=majority`;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
  })
  
  const Note = mongoose.model('Note', noteSchema)
  
  const note = new Note({
    content: 'HTML is Easy',
    date: new Date(),
    important: true,
  })
  
  note.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
  })