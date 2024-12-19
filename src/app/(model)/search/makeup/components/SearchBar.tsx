import { JButton } from '@/components/JButton';
import { JIcon } from '@/components/JIcon';
import { Row } from '@/components/Row';
import { COLORS } from '@/styles/colors';
import { Input, Stack } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

type searchBarProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue?: string;
};
export const SearchBar = ({ handleChange, searchValue }: searchBarProps) => {
  const router = useRouter();
  return (
    <Row
      mb={4}
      paddingX={4}
      height={48}
      width={'100%'}
      boxSizing={'border-box'}
    >
      <JButton
        sx={{
          width: 40,
          height: 40,
          justifyContent: 'center',
          borderRadius: '50%',
          mr: 1,
        }}
        onClick={() => {
          router.back();
        }}
      >
        <JIcon icon="leftArrow" />
      </JButton>
      <Stack
        width={'100%'}
        sx={{
          border: 1,
          borderColor: COLORS.primary,
          borderRadius: 20,
        }}
      >
        <Row justifyContent={'space-between'} flex={1} px={2} py={0.5}>
          <Input
            onChange={handleChange}
            value={searchValue}
            disableUnderline
            fullWidth
            sx={{
              fontSize: '14px',
              fontWeight: 500,
              '& input::placeholder': {
                color: COLORS.primary,
                opacity: 1,
              },
            }}
            placeholder="원하는 메이크업을 검색해보세요."
          />
          <JIcon icon="search" />
        </Row>
      </Stack>
    </Row>
  );
};
