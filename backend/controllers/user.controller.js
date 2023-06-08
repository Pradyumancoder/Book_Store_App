const catchAsyncErrors = require("../middleware/catchAsyncError");
const userModel = require("../models/userModels");
const sendToken = require("../utils/jswToken");
const bcrypt = require("bcrypt");


// Register a new user
const registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please fill the Credentials",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 5);

  const user = await userModel.create({
    name,
    email,
    password: hashedPassword,
  });

  sendToken(res, 201, user);
});
 
// user login
const userLogin = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please fill in both Email and Password",
    });
  }

  const userExists = await userModel.findOne({ email });
  if (!userExists) {
    return res.status(401).json({
      success: false,
      message: "User Not Exists! You have to Sign Up",
    });
  }

  const isPassword = await userExists.comparePassword(password);

  if (!isPassword) {
    return res.status(401).json({
      success: false,
      message: "Invalid Email or Password",
    });
  }

  sendToken(res, 200, userExists);
});

// Get all users
const getAllUsers = catchAsyncErrors(async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      message: "sucess route complete",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving users",
    });
  }
});

// Export the functions
module.exports = {
  getAllUsers,
  registerUser,
  userLogin,
};
