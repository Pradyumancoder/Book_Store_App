const express = require("express");
const { getAllUsers, registerUser, userLogin } = require("../controllers/user.controller");

const userRoutes = express.Router();

userRoutes.get("/", getAllUsers); 
userRoutes.post("/register", registerUser); 
userRoutes.post("/login", userLogin); 
module.exports = userRoutes;
