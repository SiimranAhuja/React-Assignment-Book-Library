import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import './ViewBook.scss'

const ViewBook = () => {

    const { id } = useParams();

    const books = useSelector((state) => state.books);

    const existingBook = books.filter(f => f.id == id);

    const { title, author, description } = existingBook[0];

    return (
        <div className="container">
            <h3 className="heading">Selected Book</h3>
        <div className="card card-content">
            <div className="card-body">
                <h5 className="card-title">Title: {title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary my-4">Description: {description}</h6>
                <p className="card-text">By: {author}</p>
            </div>
            <Link to={'/'} className="btn btn-primary mb-4">Back to Home</Link>
        </div>
        </div>
    )
}

export default ViewBook;