import { ADD_BOOK, REMOVE_BOOK, TOGGLE_READ_STATUS, UPDATE_BOOK } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
                books: [...state.books, action.payload]
            };

        case REMOVE_BOOK:
            return {
                ...state,
                books: state.books.filter(book => book.id !== action.payload)
            };

        case TOGGLE_READ_STATUS:
            return {
                ...state,
                books: state.books.map(book =>
                    book.id === action.payload
                        ? { ...book, isRead: !book.isRead }
                        : book
                )
            };
        case UPDATE_BOOK:
            return {
                ...state,
                books: state.books.map(book =>
                    book.id === action.payload.id ? { ...action.payload } : book
                )
            };

        default:
            return state;
    }
};

export default reducer;