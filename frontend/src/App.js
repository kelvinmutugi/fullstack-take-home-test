import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import SearchBar from './components/booksearch';
import BookList from './components/book';
import ReadingList from './components/readinglist';
/*import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      turquoise: '#5ACCCC',
      white: '#FFFFFF',
      steelBlue: '#335C6E',
      yellow: '#FABD33',
    },
    secondary: {
      Turquoiselight: '#CFFAFA',
      Orangered: '#F76434',
      Orangepastel: '#FFE6DC',
      Teal: '#4AAO88',
      Yellowdark: '#FAADOO',
      Turquoisedark1: '#53C2C2',
      Turquoisedark2: '#28B8B8',
    },
  },
  typography: {
  fontFamily: "Mulish",
  }
});*/

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
  if (error) return <p>Error: {error.message}</p>;

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
