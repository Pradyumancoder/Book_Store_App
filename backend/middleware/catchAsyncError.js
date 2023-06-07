const catchAsyncErrors = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch((err) => {
    if (err.code === 11000 && err.keyPattern && err.keyPattern.email === 1) {
      return res.status(400).json({
        success: false,
        error: "Email already exists. Please use a different email.",
      });
    }

    res.status(400).send({ msg: "Something went wrong", err: err.message });
  });
};

module.exports = catchAsyncErrors;
