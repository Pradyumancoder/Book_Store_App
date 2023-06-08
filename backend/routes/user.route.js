const express = require("express");
const { getAllUsers, registerUser, userLogin } = require("../controllers/user.controller");

// Create an instance of Express Router for user routes
const userRoutes = express.Router();

// Define routes
userRoutes.get("/", getAllUsers); // Route for retrieving all users
userRoutes.post("/register", registerUser); // Route for registering a new user
userRoutes.post("/login", userLogin); // Route for user login

// Export the userRoutes object
module.exports = userRoutes;
