import { Row } from '@/components/Row';
import {
  Button,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';
import { SpecializationItem } from './SpecializationItem';
import { MakeupLocationItem } from './MakeupLocationItem';
import { COLORS } from '@/styles/colors';
import { useState } from 'react';

type Props = {
  onPrev: () => void;
  onNext: () => void;
};

const specialization = {
  daily: '데일리 메이크업',
  actor: '배우 메이크업',
  interview: '면접 메이크업',
  party: '파티/이벤트 메이크업',
  wedding: '웨딩 메이크업',
  special: '특수 메이크업',
  studio: '스튜디오 메이크업',
  etc: '기타 (속눈썹, 퍼스널컬러)',
};

const makeupLocation = {
  shop: '제가 다니는 샵에서 진행해요',
  visit: '직접 방문해서 진행해요',
  etc: '둘 다 상관없어요',
};

const ChocieSpecialization = ({ onPrev, onNext }: Props) => {
  const [formData, setFormData] = useState({
    Specialization: [] as string[],
    location: [] as string[],
    address: '',
  });

  const toggleSpecialization = (key: string) => {
    setFormData((prev) => {
      const isSelected = prev.Specialization.includes(key);
      return {
        ...prev,
        Specialization: isSelected
          ? prev.Specialization.filter((item) => item !== key)
          : [...prev.Specialization, key],
      };
    });
  };

  const toggleLocation = (key: string) => {
    setFormData((prev) => {
      const isSelected = prev.location.includes(key);
      return {
        ...prev,
        location: isSelected
          ? prev.location.filter((item) => item !== key)
          : [...prev.location, key],
      };
    });
  };
  const isButtonDisabled = !(
    formData.Specialization &&
    formData.location &&
    formData.address
  );

  return (
    <Stack height={'100%'} px={2}>
      <Stack flex={1}>
        <Typography fontSize={14} mt={6} mb={'27px'}>
          전문분야를 선택해주세요. (다중 선택 가능)
        </Typography>
        <Row flexWrap={'wrap'} gap={2} justifyContent={'flex-start'}>
          {Object.entries(specialization).map(([key, value]) => (
            <SpecializationItem
              key={key}
              text={value}
              onClick={() => toggleSpecialization(key)}
              isActive={formData.Specialization.includes(key)}
            />
          ))}
        </Row>
        <Typography fontSize={14} mt={5} mb={1}>
          메이크업장소
        </Typography>
        <Stack gap={'4px'}>
          {Object.entries(makeupLocation).map(([key, value]) => (
            <MakeupLocationItem
              key={key}
              text={value}
              onClick={() => toggleLocation(key)}
              isActive={formData.location.includes(key)}
            />
          ))}
        </Stack>
        <Typography fontSize={14} mt={'30px'} mb={'5px'}>
          샵의 위치를 입력해주세요.
        </Typography>
        <OutlinedInput
          id='address'
          placeholder='여기에 입력해주세요.'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData((prev) => ({
              ...prev,
              address: e.target.value,
            }))
          }
          value={formData.address}
          sx={{
            borderRadius: 2,
            height: '41px',
            fontSize: '14px',
          }}
          endAdornment={
            <InputAdornment
              position='end'
              sx={{
                '& .MuiTypography-root': {
                  color: COLORS.red_etc,
                },
              }}
            ></InputAdornment>
          }
          aria-describedby='outlined-weight-helper-text'
          inputProps={{
            'aria-label': 'weight',
          }}
        />
      </Stack>
      <Button variant='contained' onClick={onNext} disabled={isButtonDisabled}>
        다음
      </Button>
    </Stack>
  );
};
export default ChocieSpecialization;
