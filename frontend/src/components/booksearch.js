import React from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <TextField
      label="Search Books"
      onChange={(e) => setSearchTerm(e.target.value)}
      fullWidth
    />
  );
};

export default SearchBar;
