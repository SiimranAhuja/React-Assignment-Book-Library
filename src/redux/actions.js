import { ADD_BOOK, REMOVE_BOOK, TOGGLE_READ_STATUS, UPDATE_BOOK } from "./actionTypes";

export const addBook = (book) => ({
    type: ADD_BOOK,
    payload: book
});

export const removeBook = (id) => ({
    type: REMOVE_BOOK,
    payload: id
});

export const updateBook = (book) => ({
    type: UPDATE_BOOK,
    payload: book
});

export const toggleReadStatus = (id) => ({
    type: TOGGLE_READ_STATUS,
    payload: id
});