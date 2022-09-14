import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SearchForm = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (search === '') {
      return;
    }
    localStorage.setItem('search', search);
    navigate('/searchResults');
  };

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <Box
      component='form'
      onSubmit={handleSubmit} /* sx={{ padding: '2rem' }} */
    >
      <TextField
        id='outlined-basic'
        label='Buscar'
        variant='outlined'
        color='secondary'
        onChange={onNameChange}
      />
      <Button type='submit'>Enviar</Button>
    </Box>
  );
};

export default SearchForm;
