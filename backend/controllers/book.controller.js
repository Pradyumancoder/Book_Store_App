const catchAsyncErrors = require("../middleware/catchAsyncError");
const bookModel = require("../models/bookModels");

//get All books
const getAllbooks = catchAsyncErrors(async (req, res, next) => {
  const { q, page, limit } = req.query;

  // Create an empty filter object
  let filterObj = {};

  // If the 'q' query parameter is present, add search criteria to the filter object
  if (q) {
    const regex = new RegExp(q, "i");
    filterObj = {
      $or: [
        { title: { $regex: regex } },
        { author: { $regex: regex } },
        { description: { $regex: regex } },
      ],
    };
  }

  // Query the database using the search criteria
  const books = await bookModel
    .find(filterObj)
    .skip((page - 1) * limit)
    .limit(limit);

  // Get the total count of  based on the search criteria
  const bookCount = await bookModel.countDocuments();

  res.status(201).json({ success: true, books, bookCount });
});

// Get Book Details
const getBookDetails = catchAsyncErrors(async (req, res, next) => {
  const book = await bookModel.findById(req.params.id);

  
  if (!book) {
    return res.status(404).json({
      success: false,
      message: "Book not found",
    });
  }

  res.status(200).json({
    success: true,
    book,
  });
});

module.exports = {
  getAllbooks,
  getBookDetails,
};
