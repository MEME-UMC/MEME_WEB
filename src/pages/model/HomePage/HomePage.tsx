import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';

export const HomePage = () => {
  const [reservation] = useState([
    {
      name: '메이크업명',
      at: new Date(2024, 4, 8, 13),
      artist: '김제니',
      location: '서울시 종로구',
      price: 100000,
    },
  ]);

  return (
    <Stack pt={1}>
      <Header />
      <SearchBar />
      <Typography>OOO 님, 환영합니다!</Typography>
      {reservation.length > 0 && (
        <Typography>아티스트와의 약속 놓치지 마세요!</Typography>
      )}
    </Stack>
  );
};
