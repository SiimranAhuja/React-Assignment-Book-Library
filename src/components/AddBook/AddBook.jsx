import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../../redux/actions";

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [isRead, setIsRead] = useState();

    const books = useSelector((state)=> state.books);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addBook({id: books[books.length - 1].id + 1, title, author, description, isRead}));
        navigate('/');
    }
    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <h1 className="text-align-center">Add Books</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" name={title} className="form-control" id="exampleFormControlInput1" placeholder="enter title of book" onChange={e => setTitle(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Author</label>
                        <input type="text" name={author} className="form-control" id="exampleFormControlInput2" placeholder="enter author name" onChange={e => setAuthor(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input type="text" name={description} className="form-control" id="exampleFormControlInput3" placeholder="enter description of book" onChange={e => setDescription(e.target.value)}/>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={isRead} onChange={e => setIsRead(true)}/>
                        <label className="form-check-label">
                            Read
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value={isRead} onChange={e => setIsRead(false)}/>
                        <label className="form-check-label">
                            Not Read
                        </label>
                    </div>
                    <br/>
                    <button className="btn btn-info">Submit</button>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    addBook
  };
  
  export default connect(null, mapDispatchToProps)(AddBook);