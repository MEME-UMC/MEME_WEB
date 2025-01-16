'use client';
import { MotionWrapper } from '@/components/MotionWrapper';
import { Row } from '@/components/Row';
import {
  Button,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { SpecializationItem } from '../../profile/setup/components/SpecializationItem';
import { useRef, useState } from 'react';
import { COLORS } from '@/styles/colors';
import { AppBar } from '@/components/AppBar';
import { JIcon } from '@/components/JIcon';
import { JButton } from '@/components/JButton';
import { ImageThumb } from '../components/ImageThumb';

const category = {
  daily: '데일리 메이크업',
  actor: '배우 메이크업',
  interview: '면접 메이크업',
  party: '파티/이벤트 메이크업',
  wedding: '웨딩 메이크업',
  special: '특수 메이크업',
  studio: '스튜디오 메이크업',
  etc: '기타 (속눈썹, 퍼스널컬러)',
};

const Page = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [formData, setFormData] = useState({
    category: [] as string[],
    makeupName: '',
    price: '',
    information: '',
  });
  const [images, setImages] = useState<File[]>([]);

  const isButtonDisabled = !(
    images.length > 0 &&
    formData.category.length > 0 &&
    formData.makeupName.trim() &&
    formData.price.trim() &&
    formData.information.trim()
  );

  const toggleCategory = (key: string) => {
    setFormData((prev) => {
      const isSelected = prev.category.includes(key);
      return {
        ...prev,
        category: isSelected
          ? prev.category.filter((item) => item !== key)
          : [...prev.category, key],
      };
    });
  };

  const FileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      setImages((prevImages) => [...prevImages, ...newFiles]);
    }
  };

  const SelectImageDelete = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <MotionWrapper>
      <Stack height={'100%'}>
        <Stack flex={1}>
          <AppBar title='포트폴리오 추가' backIcon />
          <Stack px={3}>
            <Typography fontSize={14} fontWeight={400} mt={3} mb={'4.5px'}>
              사진 등록 (최대 3장)
            </Typography>
            <Row justifyContent={'flex-start'} gap={1}>
              {images.length !== 3 && (
                <JButton
                  onClick={() => fileInputRef.current?.click()}
                  sx={{
                    width: '80px',
                    height: '80px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: `1px solid ${COLORS.gray300}`,
                    borderRadius: '5px',
                  }}
                >
                  <JIcon icon='gallery' />
                  <input
                    ref={fileInputRef}
                    type='file'
                    multiple
                    hidden
                    accept='image/*'
                    onChange={FileChange}
                  />
                </JButton>
              )}

              <ImageThumb images={images} onDelete={SelectImageDelete} />
            </Row>
            <Typography fontSize={14} fontWeight={400} mt={'22px'} mb={'10px'}>
              카테고리
            </Typography>
            <Row flexWrap={'wrap'} gap={2} justifyContent={'flex-start'}>
              {Object.entries(category).map(([key, value]) => (
                <SpecializationItem
                  key={key}
                  text={value}
                  onClick={() => toggleCategory(key)}
                  isActive={formData.category.includes(key)}
                />
              ))}
            </Row>
            <Typography fontSize={14} fontWeight={400} mt={'22px'} mb={'5px'}>
              메이크업명
            </Typography>
            <OutlinedInput
              id='makeupName'
              placeholder='메이크업명을 입력해주세요'
              onChange={handleChange}
              value={formData.makeupName}
              sx={{
                height: '41px',
                borderRadius: '9px',
                fontSize: '14px',
              }}
              aria-describedby='outlined-weight-helper-text'
              inputProps={{
                'aria-label': 'weight',
              }}
            />
            <Typography fontSize={14} fontWeight={400} mt={'22px'} mb={'5px'}>
              가격
            </Typography>
            <OutlinedInput
              id='price'
              placeholder='가격을 입력해주세요'
              onChange={handleChange}
              value={formData.price}
              sx={{
                height: '41px',
                borderRadius: '9px',
                fontSize: '14px',
              }}
              aria-describedby='outlined-weight-helper-text'
              inputProps={{
                'aria-label': 'weight',
              }}
            />
            <Typography fontSize={14} fontWeight={400} mt={'22px'} mb={'5px'}>
              정보
            </Typography>
            <TextField
              id='information'
              onChange={handleChange}
              value={formData.information}
              multiline
              rows={10}
              variant='outlined'
              placeholder='모델에게 보여줄 메이크업 정보를 작생해주세요.'
              sx={{ fontSize: '14px' }}
              fullWidth
            />
          </Stack>
        </Stack>
        <Stack p={3}>
          <Button variant='contained' disabled={isButtonDisabled}>
            등록하기
          </Button>
        </Stack>
      </Stack>
    </MotionWrapper>
  );
};
export default Page;
