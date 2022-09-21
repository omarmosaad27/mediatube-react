import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constant';
import { SearchBar } from './SearchBar';
export const Navbar = () => {
  return (
    <Stack
      direction={'row'}
      alignItems="center"
      p={2}
      sx={{
        position: 'sticky',
        background: '#000',
        top: '0',
        justifyContent: 'space-between',
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          sx={{ color: 'white' }}
          fontSize={{ xs: '1rem', md: '1.3rem' }}
          fontWeight={'bold'}
        >
          MediaTube
        </Typography>
        <img src={logo} alt="logo" height={30} />
      </Link>
      <SearchBar />
    </Stack>
  );
};
