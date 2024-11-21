import { Stack, Typography } from '@mui/material';
import { SearchBar } from './components/SearchBar';

export const SearchMakeupPage = () => {
  return (
    <Stack>
      <SearchBar />
      <Typography>최근 검색어</Typography>
      <Typography>카테고리로 찾기</Typography>
      <Typography>데일리 메이크업</Typography>
      <Typography>관심 아티스트로 찾기</Typography>
    </Stack>
  );
};
