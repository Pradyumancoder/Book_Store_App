const mongoose = require("mongoose");

// Define the Mongoose schema for the "book" collection
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter the book title"],
    trim: true,
  },
  author: {
    type: String,
    required: [true, "Please enter the book author"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Please enter the price"],
    maxLength: [4, "Year can't exceed 4 characters"],
  },
  image: [String],
  category: {
    type: String,
    required: [true, "Please enter the book category"],
  },
  description: {
    type: String,
    required: [true, "Please enter the book description"],
  },
  createdAt: { type: Date, default: Date.now },
});

// Create the Mongoose model for the "book" collection using the bookSchema
const bookModel = mongoose.model("book", bookSchema);

// Export the bookModel to be used in other parts of the application
module.exports = bookModel;
