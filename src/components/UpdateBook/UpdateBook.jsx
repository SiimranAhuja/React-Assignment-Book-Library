import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateBook } from "../../redux/actions";

const UpdateBook = () => {

    const { id } = useParams();
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Find the existing book
    const existingBook = books.find((book) => book.id === parseInt(id, 10));

    // Initialize state with default values
    const [uTitle, setTitle] = useState('');
    const [uAuthor, setAuthor] = useState('');
    const [uDescription, setDescription] = useState('');
    const [uIsRead, setIsRead] = useState(false);

    useEffect(() => {
        if (existingBook) {
            setTitle(existingBook.title);
            setAuthor(existingBook.author);
            setDescription(existingBook.description);
            setIsRead(existingBook.isRead);
        }
    }, [existingBook]);

    const handleUpdate = (event) => {
        event.preventDefault();
        if (existingBook) {
            dispatch(updateBook({
                id: parseInt(id, 10),
                title: uTitle,
                author: uAuthor,
                description: uDescription,
                isRead: uIsRead
            }));
            navigate('/');
        }
    };

    if (!existingBook) {
        return <div>Book not found</div>;
    }

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <h1 className="text-align-center">Update Book</h1>
                <form onSubmit={handleUpdate}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="enter title of book" value={uTitle} onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Author</label>
                        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="enter author name" value={uAuthor} onChange={e => setAuthor(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="enter description of book" value={uDescription} onChange={e => setDescription(e.target.value)} />
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={uIsRead} checked={uIsRead} onChange={e => setIsRead(true)} />
                        <label className="form-check-label">
                            Read
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value={uIsRead} checked={!uIsRead} onChange={e => setIsRead(false)} />
                        <label className="form-check-label">
                            Not Read
                        </label>
                    </div>
                    <br />
                    <button className="btn btn-info">Update</button>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    updateBook
};

export default connect(null, mapDispatchToProps)(UpdateBook);