// in  this component  book is displayed using a card and displays the title, author and as well adds a button thats adds the book to the reading list 
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const BookList = ({ books, setReadingList }) => {
  const addToReadingList = (book) => {
    setReadingList((prevList) => [...prevList, book]);
  };

  return (
    <div>
      <Grid container spacing={2}>
        {books.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
         <CardMedia
           component="img"
            image={book.coverPhotoURL}
            style={{ height: 194 }}
          />
          <CardContent>  
            <Typography variant="h6">{book.title}</Typography>
            <Typography variant="subtitle1">{book.author}</Typography>
              <Button onClick={() => addToReadingList(book)} variant="contained" color='primary'> Add to Reading List</Button>
         </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>


    </div>
  );
};

export default BookList;
