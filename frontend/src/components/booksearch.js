// SearchBar.js
import React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

// The component receives setSearchTerm as a prop to update the search term in the parent component
const SearchBar = ({ setSearchTerm }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
      }}// centering my search bar
    >
      <TextField
        label="Search..."
        variant="outlined"
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          width: '450px', // Width of the search bar
          height: '100px',
          [`& fieldset`]: {
            borderRadius: '10px', // Rounded corners
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
