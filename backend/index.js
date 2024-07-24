//import libraries
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//setting up Express app
const app = express();
const port = 5000;

//middleware configuration
app.use(cors());
app.use(express.json());

//connect to database named jfmblog
mongoose.connect('mongodb://localhost:27017/jfmblog');

//get data from the tutorials collection
const tutorialSchema = new mongoose.Schema({
  name: String,
  list: [{
    id: String,
    title: String,
    image_link: String,
  }],
});
const tutorialsCollection = mongoose.model('tutorials', tutorialSchema);
app.get('/api/get-tutorials', async (req, res) => {
  try {
    const tutorials = await tutorialsCollection.find();
    res.status(200).json(tutorials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get data from the albums collection
const albumSchema = new mongoose.Schema({
  name: String,
  time: String,
  path: String,
  images: [{
    style: String,
    link: String,
  }],
});
const albumsCollection = mongoose.model('albums', albumSchema);
app.get('/api/get-albums', async (req, res) => {
  try {
    const albums = await albumsCollection.find();
    res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//start listening
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
