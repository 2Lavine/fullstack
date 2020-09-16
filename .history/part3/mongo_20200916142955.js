const mongoose = require("mongoose");
const url = process.env.MONGODB_URI;
console.log("connecting", url);
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((reuslt) => {
    console.log("connected", result);
  })
  .catch((err) => {
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
    delete returnedObject._-v;
    delete returnedObject._id;
  },
});
