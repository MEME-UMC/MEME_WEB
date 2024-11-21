import { Stack, Typography } from '@mui/material';
import { JButton } from '../../../../components/JButton';
import { COLORS } from '../../../../core/colors';
import { JIcon } from '../../../../components/JIcon';
import { Row } from '../../../../components/Row';

type Props = {
  onNext: () => void;
};

export const Step2 = ({ onNext }: Props) => {
  return (
    <Stack px={2}>
      <Typography pt={6} fontSize={18} fontWeight={600}>
        이메일을 찾았어요!
      </Typography>
      <Typography fontSize={14} pt={1} pb={2}>
        지금 바로 로그인 해보세요
      </Typography>
      <JButton
        sx={{
          borderColor: COLORS.gray300,
          borderWidth: 2,
          borderStyle: 'solid',
          borderRadius: 4,
          py: 2,
          px: 3,
        }}
        onClick={onNext}
      >
        <Row flex={1} justifyContent={'space-between'}>
          <Stack>
            <Typography fontSize={14} fontWeight={600}>
              로그인하러 가기
            </Typography>
            <Typography fontSize={12}>me**@naver.com</Typography>
          </Stack>
          <JIcon icon="rightArrow" />
        </Row>
      </JButton>
    </Stack>
  );
};
