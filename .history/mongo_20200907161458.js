mongodb+srv://katemic:<password>@cluster0.x2hus.mongodb.net/<dbname>?retryWrites=true&w=majority
const mongoose = require("mongoose");
if (process.argv.length < 3) {
  console.log(123);
  process.exit(1);
}
const password = argv[2];
const dbname = "myFirstPorject"
const url =`mongodb+srv://katemic:${password}@cluster0.x2hus.mongodb.net/${dbname}?retryWrites=true&w=majority`;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
