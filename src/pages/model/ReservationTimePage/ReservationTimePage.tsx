import { Stack, Typography } from '@mui/material';
import { MotionWrapper } from '../../../components/MotionWrapper';
import { AppBar } from '../../../components/AppBar';
import { Row } from '../../../components/Row';
import { JTextField } from './components/JTextField';
import { COLORS } from '../../../core/colors';
import { TimeItem } from './components/TimeItem';
import { useState } from 'react';
import { OptionButton } from './components/OptionButton';
import { JButton } from '../../../components/JButton';
import { useJNavigate } from '../../../core/routes';

const optionButtons = [
  { label: '샵으로 갈게요', value: 'shop' },
  { label: '직접 방문해주세요', value: 'artist' },
];

type LocationSectionProps = { type: string; visitType?: string };
const LocationSection = ({ type, visitType }: LocationSectionProps) => {
  const isShop = type === 'shop';
  const fontSize = visitType === 'both' ? 14 : 18;
  return (
    <Stack gap={1}>
      <Typography sx={{ fontSize }} fontWeight={600}>
        {isShop
          ? '메이크업 받을 장소를 확인해주세요.'
          : '메이크업 받을 장소를 입력해주세요.'}
      </Typography>
      {!isShop && (
        <Typography fontSize={14} fontWeight={500} color={`${COLORS.red_etc}`}>
          아티스트 방문 가능 지역: 서울 동작구, 영등포구
        </Typography>
      )}
      <JTextField
        placeholder={
          isShop ? '메이크업 샵 이름' : '정확한 위치를 입력해주세요.'
        }
      />
    </Stack>
  );
};

type BothOptionsProps = {
  onOptionSelect: (type: string) => void;
  selectedOption: string | null;
  visitType: string;
};
const BothOptions = ({
  onOptionSelect,
  selectedOption,
  visitType,
}: BothOptionsProps) => (
  <Stack gap={2}>
    <Typography fontSize={18} fontWeight={600}>
      메이크업 받을 장소를 선택해주세요.
    </Typography>
    <Row gap={1}>
      {optionButtons.map(({ label, value }) => (
        <OptionButton
          key={value}
          label={label}
          selected={selectedOption === value}
          onClick={() => onOptionSelect(value)}
        />
      ))}
    </Row>
    {selectedOption && (
      <LocationSection type={selectedOption} visitType={visitType} />
    )}
  </Stack>
);
export const ReservationTimePage = () => {
  const [visitType, setVisitType] = useState('both'); // 'shop', 'artist', 'both'
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const navigate = useJNavigate();

  const handleOptionSelect = (type: string) => {
    setSelectedOption(type);
    setVisitType('both');
  };

  return (
    <MotionWrapper>
      <AppBar title={'예약하기'} backIcon />
      <Stack py={'36px'}>
        <Stack px={3}>
          {visitType === 'both' ? (
            <BothOptions
              onOptionSelect={handleOptionSelect}
              selectedOption={selectedOption}
              visitType={visitType}
            />
          ) : (
            <LocationSection type={visitType} />
          )}

          <Stack gap={2} mt={'36px'}>
            <Typography fontSize={18} fontWeight={600}>
              예약 정보를 알려주세요.
            </Typography>
            <Typography fontSize={14} fontWeight={500}>
              예약 날짜를 선택해주세요.
            </Typography>
          </Stack>
          <Stack mt={'32px'}>
            <Typography fontSize={14} fontWeight={500} mb={2}>
              예약 가능 시간을 입력해주세요.
            </Typography>
            <Stack gap={2}>
              <Stack gap={1}>
                <Typography fontSize={14}>오전</Typography>
                <Row
                  gap={'7px'}
                  flexWrap={'wrap'}
                  justifyContent={'flex-start'}
                >
                  <TimeItem />
                  <TimeItem />
                  <TimeItem />
                  <TimeItem />
                </Row>
              </Stack>
              <Stack gap={1}>
                <Typography fontSize={14}>오후</Typography>
                <Row
                  gap={'7px'}
                  flexWrap={'wrap'}
                  justifyContent={'flex-start'}
                >
                  <TimeItem />
                  <TimeItem />
                  <TimeItem />
                  <TimeItem />
                  <TimeItem />
                  <TimeItem />
                  <TimeItem />
                  <TimeItem />
                  <TimeItem />
                  <TimeItem />
                  <TimeItem />
                  <TimeItem />
                </Row>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack padding={'24px 21px'}>
          <JButton
            onClick={() => {
              alert(
                '0월 0일 00시에 예약하시겠습니까?\n\n아티스트가 예약 확인 후 확정되면\n알림을 통해 알려드립니다!'
              );
              navigate('/reservation/complete');
            }}
            sx={{
              height: '49px',
              background: `${COLORS.primary}`,
              borderRadius: '10px',
            }}
          >
            <Typography lineHeight={3} color="#FFF" fontSize={14}>
              예약하기
            </Typography>
          </JButton>
        </Stack>
      </Stack>
    </MotionWrapper>
  );
};
