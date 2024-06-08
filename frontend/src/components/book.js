import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




const BookList = ({ books, setReadingList }) => {
  const addToReadingList = (book) => {
    setReadingList((prevList) => [...prevList, book]);
  };

  return (
    <div>
      {books.map((book) => (
        <Card key={book.title}>
          <CardMedia
            image={book.coverPhotoURL}
            title={book.title}
            style={{ height: 140 }}
          />
          <CardContent>
            <Typography variant="h5">{book.title}</Typography>
            <Typography variant="subtitle1">{book.author}</Typography>
            <Button onClick={() => addToReadingList(book)}>Add</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BookList;
