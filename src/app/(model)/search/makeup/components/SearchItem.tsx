import { JButton } from '@/components/JButton';
import { JImage } from '@/components/JImage';
import { Stack, Typography } from '@mui/material';
import React from 'react';

type SearchItemProps = {
  src:
    | 'search-page-01'
    | 'search-page-02'
    | 'search-page-03'
    | 'search-page-04'
    | 'search-page-05'
    | 'search-page-06'
    | 'search-page-07'
    | 'search-page-08';
  text: string;
  onClick: () => void;
};
const SearchItem = ({ src, text, onClick }: SearchItemProps) => {
  return (
    <JButton sx={{ width: '95px' }} onClick={onClick}>
      <Stack width={'100%'} gap={'10px'}>
        <Stack
          justifyContent={'center'}
          alignItems={'center'}
          height={90}
          boxShadow={' -5px -5px 30px 0px #FF633E99 inset'}
          borderRadius={'20px'}
        >
          <JImage image={src} />
        </Stack>
        <Typography fontSize={12} fontWeight={400} textAlign={'center'}>
          {text}
        </Typography>
      </Stack>
    </JButton>
  );
};

export default SearchItem;
