const express = require("express");
const { mongoose } = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

// Creating get request 
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

// Creating the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Routes
app.use("/user", require("./routes/userRouter"));


//Connect mongodb
const URI = process.env.MONGODB_URI;
mongoose
  .connect(URI)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => console.log(err));
