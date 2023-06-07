const express = require("express");
const {
  getAllbooks,
  getBookDetails,
} = require("../controllers/book.controller");

const bookRoutes = express.Router();

bookRoutes.get("/", getAllbooks); 
bookRoutes.get("/:id", getBookDetails); 

module.exports = bookRoutes;
