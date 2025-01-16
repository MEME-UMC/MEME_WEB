import { COLORS } from '@/styles/colors';
import { Stack, Typography } from '@mui/material';

type SelectBoxProps = { isOpen: boolean; onClick: () => void };
export const SelectBox = ({ isOpen, onClick }: SelectBoxProps) => {
  return (
    <Stack
      component={'button'}
      position={'relative'}
      height={'41px'}
      px={'13px'}
      bgcolor={COLORS.white}
      border={`1px solid ${COLORS.gray300}`}
      borderRadius={'10px'}
      justifyContent={'center'}
      onClick={onClick}
    >
      <Typography fontSize={14} color={COLORS.gray400}>
        선택해주세요.
      </Typography>
      {isOpen === true && (
        <Stack
          position={'absolute'}
          width={'100%'}
          left={0}
          bottom={'100%'}
          bgcolor={COLORS.white}
        >
          <Typography>1년</Typography>
        </Stack>
      )}
    </Stack>
  );
};
