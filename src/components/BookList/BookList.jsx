import React, { useState } from "react";
import { toggleReadStatus, removeBook } from "../../redux/actions.js";
import { connect } from "react-redux";
import './BookList.scss';
import { Link } from "react-router-dom";

const BookList = ({ books, toggleReadStatus, removeBook }) => {
    const [filter, setFilter] = useState('');

    let filteredBooks = books.filter((book) => {
        if(filter === ""){
            return true;
        }
        else if (filter === 'read') {
            return book.isRead === true
        }
        else if(filter === 'not read') {
            return book.isRead === false;
        }
        else {
            return false;
        }
      });

    return (
        <div>
            <div className="header">
                <select className="form-select form-select-lg mt-2 dropdown" aria-label="Large select example" value={filter} onChange={e => setFilter(e.target.value)}>
                    <option defaultValue={'All'} value="">All</option>
                    <option value="read">Read</option>
                    <option value="not read">Not Read</option>
                </select>
                <h1 className="heading">Your Book Library</h1>
                <Link to="/add" className="btn btn-primary">Add Books</Link>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 m-3 p-4">
                {filteredBooks.map((book, index) => (
                    <div key={index} className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{book.title}</h5>
                                <p className="card-text">{book.description}</p>
                                <small className="text-muted">By: {book.author}</small>
                            </div>
                            <div className="card-footer">
                                <Link to={`/view/${book.id}`} className="btn btn-info">Read More</Link>
                                <button onClick={() => toggleReadStatus(book.id)} className="btn btn-secondary ms-1">
                                    {book.isRead ? 'Mark as Unread' : 'Mark as Read'}
                                </button>
                                <Link to={`/edit/${book.id}`} className="btn btn-primary ms-1">Edit</Link>
                                <button onClick={() => removeBook(book.id)} className="btn btn-danger ms-1">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

const mapStateToProps = state => ({
    books: state.books
});

const mapDispatchToProps = {
    toggleReadStatus,
    removeBook
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);