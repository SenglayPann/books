import { useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import useBooksContext from './hooks/useBooksContext';

function App() {
  const { fetchAllBooks } = useBooksContext();
  useEffect(() => {
    fetchAllBooks();
  }, [fetchAllBooks]);

  return (
    <div>
      <BookList/>
      <BookCreate/>
    </div>
  )
}

export default App;
