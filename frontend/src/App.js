import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import SearchBar from './components/booksearch';
import BookList from './components/book';
import ReadingList from './components/readinglist';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [searchTerm, setSearchTerm] = useState('');
  const [readingList, setReadingList] = useState([]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const filteredBooks = data.books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      <BookList books={filteredBooks} setReadingList={setReadingList} />
      <ReadingList readingList={readingList} setReadingList={setReadingList} />
    </div>
  );
};

export default App;
