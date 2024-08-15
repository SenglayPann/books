import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from '../hooks/useBooksContext';

function BookShow( { book } ) {
    const { deleteBookById } = useBooksContext();

    const [showEdit, setShowEdit] = useState(false);
    const handleDelete = () => {
        deleteBookById(book.id);
    };

    const handleEdit = () => {
        setShowEdit(!showEdit)
    };

    let content = <h3>{book.title}</h3>

    if (showEdit) {
        content = <BookEdit bookId={book.id} title={ book.title } handleEdit={ handleEdit }/>;
    }

    return(
        <div className="book-show">
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEdit}>edit</button>
                <button className="delete" onClick={ handleDelete }>delete</button>
            </div>
        </div>
    )
}

export default BookShow;