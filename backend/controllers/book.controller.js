const catchAsyncErrors = require("../middleware/catchAsyncError");
const bookModel = require("../models/bookModels");

const getAllbooks = catchAsyncErrors(async (req, res, next) => {
  const { q, page, limit } = req.query;

  
  let filterObj = {};

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

 
  const books = await bookModel
    .find(filterObj)
    .skip((page - 1) * limit)
    .limit(limit);


  const bookCount = await bookModel.countDocuments();

  res.status(201).json({ success: true, books, bookCount });
});

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
