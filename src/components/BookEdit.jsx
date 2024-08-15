import { useState } from "react";
import useBooksContext from '../hooks/useBooksContext';

function BookEdit({bookId, title, handleEdit }) {
    const { saveEditBooks } = useBooksContext();
    const [newTitle, setNewTitle] = useState(title);

    const handleChange = (e) => {
        setNewTitle(e.target.value);
    };

    const handleSaveEdit = (e) => {
        e.preventDefault();
        saveEditBooks(bookId, newTitle);
        handleEdit();
    };

    return(
        <form className="book-edit">
            <label>Title</label>
            <input className="input" value={newTitle} onChange={handleChange}/>
            <button className="button is-primary" onClick={ handleSaveEdit }>save</button>
        </form>
    )
}

export default BookEdit;