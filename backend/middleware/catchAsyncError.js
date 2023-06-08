/* 
  The catchAsyncErrors function is a higher-order function that takes another function (theFunc) as input.
  It returns a new function that handles async errors in a middleware-like manner.
*/

const catchAsyncErrors = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch((err) => {

  // If the error is due to a duplicate email (code 11000), return a 400 response with an appropriate error message.

    if (err.code === 11000 && err.keyPattern && err.keyPattern.email === 1) {
      return res.status(400).json({
        success: false,
        error: "Email already exists. Please use a different email.",
      });
    }

        // For other errors, return a 400 response with a generic error message.

    res.status(400).send({ msg: "Something went wrong", err: err.message });
  });
};

module.exports = catchAsyncErrors;
