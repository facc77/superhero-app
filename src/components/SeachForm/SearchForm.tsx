import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useAppDispatch } from '../../app/hooks';
import { setSearchValue } from '../../app/reducers/HeroReducer';

const SearchForm: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (search === '') {
      return;
    }
    localStorage.setItem('search', search);
    dispatch(setSearchValue(search));
    navigate('/searchResults');
  };

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    localStorage.setItem('search', e.target.value);
  };
  return (
    <Box component='form' onSubmit={handleSubmit}>
      <Box
        component='input'
        placeholder='Busca héroes!'
        onChange={onNameChange}
        sx={{
          fontFamily: 'Bebas Neue',
          width: '12rem',
          padding: '0.5rem',
          fontSize: ' 1rem',
        }}
      />
      <Box
        component='button'
        type='submit'
        sx={{
          color: '#1976d2',
          position: 'relative',
          right: '2.5rem',
          top: '0.5rem',
          '&:hover': { cursor: 'pointer' },
          '&:active': { color: '#000' },
          transition: '250ms',
          border: 0,
          backgroundColor: 'transparent',
        }}
      >
        <SearchOutlinedIcon />
      </Box>
    </Box>
  );
};

export default SearchForm;
