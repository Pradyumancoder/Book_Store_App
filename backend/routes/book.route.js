const express = require("express");
const {
  getAllbooks,
  getBookDetails,
} = require("../controllers/book.controller");

// Create an instance of Express Router for book routes
const bookRoutes = express.Router();

// Define routes
bookRoutes.get("/", getAllbooks); // Route for retrieving all books
bookRoutes.get("/:id", getBookDetails); // Route for retrieving details of a specific book

// Export the bookRoutes object
module.exports = bookRoutes;
