import { createContext, useState, useCallback } from "react";
import axios  from 'axios';

const BooksContext = createContext();

function BooksProvider({ children }) {

    const [books, setBooks] = useState([]);

    const fetchAllBooks = useCallback(async () => {
        const res = await axios.get('http://localhost:3001/books');
        setBooks(res.data);
    }, []);

    const createBook = async (title) => {
        const res = await axios.post('http://localhost:3001/books', {
        title: title
        });

        const updatedBooks = [
        ...books,
        res.data
        ];

        setBooks(updatedBooks);
    };

    const deleteBookById = async (id) => {

        await axios.delete(`http://localhost:3001/books/${id}`);
        setBooks(books.filter(book => book.id !== id));
    };

    const saveEditBooks = async (bookId, newTitle) => {
        
        const res =  await axios.put(`http://localhost:3001/books/${bookId}`,

        {
            title: newTitle
        }
        );

        setBooks(books.map(book => {
        if (book.id === bookId) {
            return {...book, ...res.data}
        }

        return book
        }));

    };

    const valuesToShare = {
        books,
        deleteBookById,
        saveEditBooks,
        fetchAllBooks,
        createBook
    }

    return (
        <BooksContext.Provider value={ valuesToShare }>
            { children }
        </BooksContext.Provider>
    )
}

export { BooksProvider };

export default BooksContext;