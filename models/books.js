const mongoose = require("mongoose");
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const bookSchema = new Schema({
    // `title` 'authors' thumbnail, link  is required and of type String
    title: { type: String, required: true },
    authors: [{ type: String, required: true }],
    synopsis: String,
    thumbnail: { type: String },
    link: String
});

// This creates our model from the above schema, using mongoose's model method
const Book = mongoose.model("Book", bookSchema);

// Export the Book model
module.exports = Book;