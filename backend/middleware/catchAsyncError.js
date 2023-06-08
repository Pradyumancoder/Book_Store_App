const catchAsyncErrors = (theFunc) => (req, res, next) => {
  // Wrap theFunc in a Promise to handle asynchronous operations
  Promise.resolve(theFunc(req, res, next)).catch((err) => {
    // Handle duplicate key error
    if (err.code === 11000 && err.keyPattern && err.keyPattern.email === 1) {
      return res.status(400).json({
        success: false,
        error: "Email already exists. Please use a different email.",
      });
    }

    // If it's not a duplicate key error, handle it with the default error handler
    res.status(400).send({ msg: "Something went wrong", err: err.message });
  });
};

module.exports = catchAsyncErrors;
