const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const Song = require("./song")
const User = require("./model"); // Import the user model

const uri = "mongodb+srv://deshwardeshwar5:deshwardeshwar5@cluster0.wa4krm9.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB!");
});

const app = express();

app.use(cors());
app.use(express.json()); // Add this line to parse JSON requests

app.get("/", (req, res) => {
  res.send("SERVER WORKING");
});

app.post("/upload/song", async (req,res)=>{
  const {title,artist,album,duration,image,song} = req.body;
try{
  const newsong = new Song({
    title,artist,album,duration,image,song
  });
  const savedsong = await newsong.save();
  console.log('Song added successfully:', savedsong);
  res.status(200).json(savedsong);
}catch(error){
res.send("error");
}});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ username });

    // If the user is not found
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // Check if the password matches
    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid password." });
    }

    // User authentication successful
    res.status(200).json({ message: "Login successful." });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'An error occurred during login.' });
  }
});

app.get('/allsongs', async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).json(songs);
  } catch (error) {
    console.error('Error while fetching songs:', error);
    res.status(500).json({ error: 'Failed to fetch songs.' });
  }
});


// Route for creating a new user
app.post("/users", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = new User({
      username,
      email,
      password,
    });

    const savedUser = await newUser.save();
    console.log('User added successfully:', savedUser);
    res.status(200).json(savedUser);
  } catch (error) {
    console.error('Error while saving user:', error);
    res.status(500).json({ error: 'Failed to save user.' });
  }
});


app.listen(8500, () => {
  console.log("Listening at port 8500");
});
