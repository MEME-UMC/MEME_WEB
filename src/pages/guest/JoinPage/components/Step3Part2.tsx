import { FormHelperText, Input, Stack, Typography } from '@mui/material';
import { JButton } from '../../../../components/JButton';
import { COLORS } from '../../../../core/colors';

type Props = {
  name: string;
  onName: (name: string) => void;
  nickname: string;
  onNickname: (nickname: string) => void;
};

export const Step3Part2 = ({ name, onName, nickname, onNickname }: Props) => {
  return (
    <Stack alignItems={'start'} px={2} gap={10}>
      <Stack width={1} pt={6}>
        <Typography fontWeight={600} mb={2}>
          이름을 입력해주세요.
        </Typography>
        <Input
          sx={{ width: 1 }}
          placeholder="이름을 입력해 주세요."
          value={name}
          onChange={(e) => onName(e.target.value)}
        />
      </Stack>
      <Stack width={1}>
        <Typography fontWeight={600} mb={2}>
          닉네임을 입력해 주세요.
        </Typography>
        <Input
          sx={{ width: 1 }}
          endAdornment={
            <JButton
              sx={{
                backgroundColor: COLORS.gray100,
                borderRadius: 8,
                py: 0.5,
                width: 90,
              }}
            >
              <Typography fontSize={12}>중복확인</Typography>
            </JButton>
          }
          placeholder="닉네임은 최대 15자 작성 가능합니다."
          value={nickname}
          onChange={(e) => onNickname(e.target.value)}
        />
        <FormHelperText>사용 가능한 닉네임입니다.</FormHelperText>
      </Stack>
    </Stack>
  );
};
