//required libraries
const express = require("express");
const path = require("path");
// const PORT = process.env.PORT || 3001;
// initialize express
const app = express();
const mongoose = require("mongoose");
var axios = require("axios");
var db = require("./models");

// var PORT = 3000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/googlebooks", { useNewUrlParser: true });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);
// A GET route for scraping the echoJS website
app.get("/scrape", function (req, res) {
  // First, we grab the body of the html with axios
  axios.get("https://www.nytimes.com/section/nyregion").then(function (response) {




    // Send every other request to the React app
    // Define any API routes before this runs
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });

    app.listen(PORT, () => {
      console.log(`🌎 ==> API server now on port ${PORT}!`);
    });


