import { Box, Stack, Typography } from '@mui/material';
import { Row } from '../../../../components/Row';

import { JButton } from '../../../../components/JButton';
import { useJNavigate } from '../../../../core/routes';
import { JIcon } from '../../../../components/JIcon';

type NotificationItemProps = {
  isRead: boolean;
};

export const NotificationItem = ({ isRead }: NotificationItemProps) => {
  const navigate = useJNavigate();
  return (
    <JButton
      onClick={() => {
        navigate('/notification', { replace: true });
      }}
    >
      <Stack
        px={2}
        py={2}
        borderBottom={1}
        borderColor={'#D9D9D9'}
        sx={{
          width: '100%',
          background: isRead ? '#FFF' : '#FF985E1A',
        }}
      >
        <Row justifyContent={'top'} alignItems={'top'}>
          <Box width={30} height={30} marginRight={1}>
            <JIcon icon="noticeCircle" />
          </Box>
          <Stack>
            <Typography
              fontSize={14}
              fontWeight={600}
              color="#222"
              lineHeight={'30px'}
            >
              메이크업 추천드려요
            </Typography>
            <Typography fontSize={10} fontWeight={500} color="#5C5C5C">
              OO님, 메이크업 필요하지 않으세요? 지금 나에게 딱 맞는 메이크업을
              예약 해보세요!
            </Typography>
          </Stack>
        </Row>
      </Stack>
    </JButton>
  );
};
