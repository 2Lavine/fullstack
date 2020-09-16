const mongoose = require("mongoose");
// require('dotenv').config()
const url = process.env.MONGODB_URI;
mongoose.set("useFindAndModify", false);
console.log("connecting", url);
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("connected", result);
  })
  .catch((err) => {
    console.log(url);
    console.log("err", err.message);
  });
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
  date: Date,
});
noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject.__v;
    delete returnedObject._id;
  },
});
module.exports = mongoose.model("Note", noteSchema);
