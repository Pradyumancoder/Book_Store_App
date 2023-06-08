import axios from "axios";
import {
  GET_BOOKS_ERROR,
  GET_BOOKS_LOADING,
  GET_BOOKS_SUCCESS,
  GET_BOOK_DETAILS_ERROR,
  GET_BOOK_DETAILS_LOADING,
  GET_BOOK_DETAILS_SUCCESS,
  GET_FILTER_BOOKS_ERROR,
  GET_FILTER_BOOKS_LOADING,
  GET_FILTER_BOOKS_SUCCESS,
  GET_SEARCH_BOOKS_ERROR,
  GET_SEARCH_BOOKS_LOADING,
  GET_SEARCH_BOOKS_SUCCESS,
} from "./books.ActionType";

const baseURL = "https://witty-puffer.cyclic.app/book";

export const getBooks = () => async (dispatch) => {
  dispatch({ type: GET_BOOKS_LOADING });
  try {
    let res = await axios.get(`${baseURL}`);
    let { books } = res.data;
    dispatch({ type: GET_BOOKS_SUCCESS, payload: books });
  } catch (error) {
    dispatch({ type: GET_BOOKS_ERROR });
  }
};

export const getBookDetail = (id) => async (dispatch) => {
  dispatch({ type: GET_BOOK_DETAILS_LOADING });
  try {
    let res = await axios.get(`${baseURL}/${id}`);
    const { book } = res.data;
    dispatch({ type: GET_BOOK_DETAILS_SUCCESS, payload: book });
  } catch (error) {
    dispatch({ type: GET_BOOK_DETAILS_ERROR });
  }
};

export const getSearchBooks = (query) => async (dispatch) => {
  dispatch({ type: GET_SEARCH_BOOKS_LOADING });
  try {
    dispatch({ type: GET_SEARCH_BOOKS_SUCCESS, payload: query });
  } catch (error) {
    dispatch({ type: GET_SEARCH_BOOKS_ERROR });
  }
};
export const getBooksbyFilter = (category) => async (dispatch) => {
  dispatch({ type: GET_FILTER_BOOKS_LOADING });
  try {
    dispatch({ type: GET_FILTER_BOOKS_SUCCESS, payload: category });
  } catch (error) {
    dispatch({ type: GET_FILTER_BOOKS_ERROR });
  }
};

