const express = require("express");
const app = express();
const port = 8000;
const connectDB = require("./db/dbConnection");
const User = require("./db/user");
const cors = require("cors");

//Middleware for parsing json
app.use(express.json());

//Enable CORS
app.use(cors());

connectDB();

//Registration
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const checkUser = await User.findOne({ username });

    if (checkUser) {
      return res.status(400).json({
        error: "Username already exists",
      });
    }

    console.log(req.body);
    const user = new User({
      username,
      password,
    });
    await user.save();
    res.status(201).json({
      message: "registration successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "registration failed",
    });
  }
});

//Login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({
        error: "Invalid username or Password",
      });
    }
    if (password !== user.password) {
      return res.status(401).json({
        error: "Invalid username or Password",
      });
    }

    res.status(200).json({
      message: "login successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "login failed",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
