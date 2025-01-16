import { ShadowButton } from '@/app/(model)/profile/edit/components/ShadowButton';
import { JIcon } from '@/components/JIcon';
import { Row } from '@/components/Row';
import { COLORS } from '@/styles/colors';
import {
  Button,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { SelectBox } from './SelectBox';

type Props = {
  onNext: () => void;
};

const WriteProfile = ({ onNext }: Props) => {
  const [formData, setFormData] = useState({
    nickName: '',
    gender: '',
    phone: '',
    email: '',
    instagram: '',
    introduce: '',
  });
  const [selectOpen, setSelectOpen] = useState(false);

  const isButtonDisabled = !(
    formData.nickName.trim() &&
    formData.gender.trim() &&
    formData.phone.trim() &&
    formData.email.trim() &&
    formData.introduce.trim()
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleGenderSelect = (selectedGender: string) => {
    setFormData((prev) => ({ ...prev, gender: selectedGender }));
  };
  return (
    <Stack height={'100%'} mt={4} px={2}>
      <Stack flex={1}>
        <Stack alignItems={'center'}>
          <Stack
            width={94}
            height={94}
            bgcolor={COLORS.primary}
            borderRadius={'50%'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Stack sx={{ scale: '60%' }}>
              <JIcon icon='userIconBig' />
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Typography mt={'12px'} mb={1} fontSize={14}>
            닉네임
          </Typography>
          <OutlinedInput
            id='nickName'
            placeholder='닉네임을 입력해주세요'
            onChange={handleChange}
            value={formData.nickName}
            sx={{
              height: '41px',
              borderRadius: '9px',
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
          <Typography
            color={COLORS.red_etc}
            fontSize={12}
            fontWeight={400}
            mt={0.5}
          >
            닉네임은 최대 15자 작성 가능합니다.
          </Typography>
        </Stack>
        <Stack>
          <Typography mt={2} mb={1} fontSize={14}>
            성별
          </Typography>
          <Row gap={2}>
            <ShadowButton
              isActive={formData.gender === '여성'}
              onClick={() => handleGenderSelect('여성')}
            >
              <Typography fontSize={14}>여성</Typography>
            </ShadowButton>
            <ShadowButton
              isActive={formData.gender === '남성'}
              onClick={() => handleGenderSelect('남성')}
            >
              <Typography fontSize={14}>남성</Typography>
            </ShadowButton>
          </Row>
        </Stack>
        <Stack>
          <Typography mt={3} mb={'3px'} fontSize={14}>
            전화번호 입력
          </Typography>
          <OutlinedInput
            id='phone'
            placeholder='전화번호 입력을 해주세요.'
            onChange={handleChange}
            value={formData.phone}
            sx={{
              height: '41px',
              borderRadius: '9px',
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
        <Stack>
          <Typography mt={3} mb={'3px'} fontSize={14}>
            이메일 입력
          </Typography>
          <OutlinedInput
            id='email'
            placeholder='컨텍할 수 있는 이메일을 입력해주세요.'
            value={formData.email}
            onChange={handleChange}
            sx={{
              height: '41px',
              borderRadius: '9px',
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
        <Stack>
          <Typography mt={3} mb={'3px'} fontSize={14}>
            인스타그램 아이디 입력(선택)
          </Typography>
          <OutlinedInput
            id='instagram'
            placeholder='컨택할 수 있는 인스타그램 아이디를 입력해주세요.'
            onChange={handleChange}
            value={formData.instagram}
            sx={{
              height: '41px',
              borderRadius: '9px',
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
        <Stack>
          <Typography mt={3} mb={'3px'} fontSize={14}>
            자기소개 (최대 250자)
          </Typography>
          <TextField
            id='introduce'
            onChange={handleChange}
            value={formData.introduce}
            multiline
            rows={10}
            variant='outlined'
            placeholder='여기에 자기소개를 작성해주세요.'
            sx={{ fontSize: '14px' }}
            fullWidth
          />
        </Stack>
        <Stack>
          <Typography mt={3} mb={1} fontSize={14}>
            총 경력 기간
          </Typography>
          <SelectBox
            isOpen={selectOpen}
            onClick={() => setSelectOpen(!selectOpen)}
          />
        </Stack>
      </Stack>
      <Button variant='contained' onClick={onNext} disabled={isButtonDisabled}>
        다음
      </Button>
    </Stack>
  );
};

export default WriteProfile;
