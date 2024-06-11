import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';

// The component receives readingList and setReadingList as props
const ReadingList = ({ readingList, setReadingList }) => {
  
  // Function to remove a book from the reading list by its title
  const removeFromReadingList = (title) => {
    // Update the reading list state by filtering out the book with the matching title
    setReadingList((prevList) => prevList.filter(book => book.title !== title));
  };

  return (
    // Use the List component to display the list of books
    <List>
      {/* Iterate over the readingList and render each book as a ListItem */}
      {readingList.map((book) => (
        // Use the book's title as the key for each ListItem
        <ListItem key={book.title}>
          {/* Display the book's title and author using ListItemText */}
          <ListItemText 
            primary={book.title} // Set the main text to the book's title
            secondary={book.author} // Set the secondary text to the book's author
          />
          {/* Button to remove the book from the reading list */}
          <Button 
            onClick={() => removeFromReadingList(book.title)} // Call removeFromReadingList when clicked
          >
            Remove Book
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ReadingList;
