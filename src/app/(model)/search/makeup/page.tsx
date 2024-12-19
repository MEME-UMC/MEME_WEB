'use client';

import { MotionWrapper } from '@/components/MotionWrapper';
import { SearchBar } from './components/SearchBar';
import { Stack, Typography } from '@mui/material';
import SearchItem from './components/SearchItem';
import { Row } from '@/components/Row';
import { JButton } from '@/components/JButton';
import { KeyWordItem } from './components/KeyWordItem';
import { ArtistItem } from './components/ArtistItem';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ReserVationList } from './[keyword]/components/ReserVationList';
import { DrawerItem } from './[keyword]/components/DrawerItem';
import { Drawer } from './[keyword]/components/Drawer';

const Page = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <>
      <MotionWrapper>
        <Stack mt={2}>
          <SearchBar handleChange={handleChange} searchValue={searchValue} />
        </Stack>
        <Stack px={3}>
          <Stack>
            {searchValue !== '' ? (
              <ReserVationList
                drawerOpen={() => setIsDrawerOpen(true)}
                onClick={() => router.push('/makeup/0')}
              />
            ) : (
              <Stack>
                <Row justifyContent={'space-between'}>
                  <Typography fontSize={14} fontWeight={400} mb={1}>
                    최근검색어
                  </Typography>
                  <Stack>
                    <JButton sx={{ fontSize: '12px', color: '#888' }}>
                      전체 삭제
                    </JButton>
                  </Stack>
                </Row>
                <Row
                  mb={4}
                  justifyContent={'flex-start'}
                  gap={1}
                  overflow={'auto'}
                >
                  <KeyWordItem text="특수 메이크업" />
                  <KeyWordItem text="면접 메이크업" />
                </Row>
                <Typography fontSize={14} fontWeight={400} mb={1}>
                  카테고리로 찾기
                </Typography>
                <Row
                  flexWrap={'wrap'}
                  columnGap={2.6}
                  rowGap={1}
                  justifyContent={'flex-start'}
                  alignItems={'flex-start'}
                >
                  <SearchItem
                    onClick={() => router.push(`makeup/daily`)}
                    src="search-page-01"
                    text="데일리 메이크업"
                  />
                  <SearchItem
                    onClick={() => router.push(`makeup/actor`)}
                    src="search-page-02"
                    text="배우 메이크업"
                  />
                  <SearchItem
                    onClick={() => router.push(`makeup/interview`)}
                    src="search-page-03"
                    text="면접 메이크업"
                  />
                  <SearchItem
                    onClick={() => router.push(`makeup/party`)}
                    src="search-page-04"
                    text="파티/이벤트 메이크업"
                  />
                  <SearchItem
                    onClick={() => router.push(`makeup/wedding`)}
                    src="search-page-05"
                    text=" 웨딩 메이크업"
                  />
                  <SearchItem
                    onClick={() => router.push(`makeup/special`)}
                    src="search-page-06"
                    text="특수 메이크업"
                  />
                  <SearchItem
                    onClick={() => router.push(`makeup/studio`)}
                    src="search-page-07"
                    text="스튜디오 메이크업"
                  />
                  <SearchItem
                    onClick={() => router.push(`makeup/etc`)}
                    src="search-page-08"
                    text="기타 (속눈썹, 퍼스널 컬러)"
                  />
                </Row>

                <Stack>
                  <Typography fontSize={14} fontWeight={400} mb={1}>
                    관심 아티스트로 찾기
                  </Typography>
                  <Row justifyContent={'flex-start'} alignItems={'flex-start'}>
                    <ArtistItem
                      onClick={() => router.push('/artist/profile')}
                      text="아티스트 차차"
                    />
                  </Row>
                </Stack>
              </Stack>
            )}
          </Stack>
        </Stack>
      </MotionWrapper>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <DrawerItem text="리뷰순" />
        <DrawerItem text="가격 낮은 순" />
        <DrawerItem text="가격 높은 순" />
      </Drawer>
    </>
  );
};
export default Page;
