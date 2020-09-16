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
  });
