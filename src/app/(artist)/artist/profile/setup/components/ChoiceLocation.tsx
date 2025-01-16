import { Row } from '@/components/Row';
import { Button, Stack, Typography } from '@mui/material';
import { LocationButton } from './LocationButton';
import { useState } from 'react';

type Props = {
  onNext: () => void;
};

const location = {
  all: '전체',
  gangNam: '강남구',
  gangDong: '강동구',
  gangBuk: '강북구',
  gangSeo: '강서구',
  mapo: '마포구',
  gwangJin: '광진구',
  guRO: '구로구',
  geumCheon: '금천구',
  noWon: '노원구',
  doBong: '도봉구',
  dongDaeMoon: '동대문구',
  seoDaeMoon: '서대문구',
  seoCho: '서초구',
  seongDong: '성동구',
};

const ChoiceLocation = ({ onNext }: Props) => {
  const [selectLocation, setSelectLocation] = useState<string | null>(null);

  const isButtonDisabled = !selectLocation?.trim();
  return (
    <Stack height={'100%'} px={2}>
      <Stack flex={1}>
        <Typography fontSize={14} textAlign={'center'} mt={8} mb={5}>
          활동 가능 지역을 선택해주세요. (서울 지역만 선택가능)
        </Typography>
        <Row flexWrap={'wrap'} gap={2} justifyContent={'flex-start'}>
          {Object.entries(location).map(([key, value]) => (
            <LocationButton
              key={key}
              text={value}
              onClick={() => setSelectLocation(key)}
              active={selectLocation === key}
            />
          ))}
        </Row>
      </Stack>
      <Button variant='contained' onClick={onNext} disabled={isButtonDisabled}>
        다음
      </Button>
    </Stack>
  );
};

export default ChoiceLocation;
