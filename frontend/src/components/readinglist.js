import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';

const ReadingList = ({ readingList, setReadingList }) => {
  const removeFromReadingList = (title) => {
    setReadingList((prevList) => prevList.filter(book => book.title !== title));
  };

  return (
    <List>
      {readingList.map((book) => (
        <ListItem key={book.title}>
          <ListItemText primary={book.title} secondary={book.author} />
          <Button onClick={() => removeFromReadingList(book.title)}>Remove</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ReadingList;
