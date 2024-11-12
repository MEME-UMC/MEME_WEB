import { Stack, Typography } from '@mui/material';
import { Row } from '../../../../components/Row';
import { JButton } from '../../../../components/JButton';
import { COLORS } from '../../../../core/colors';
import Counter from '../../../../components/Counter';
import ReservationBedge from './ReservationBedge';

type reservationListItemProps = {
  onClick: () => void;
};
const ReservationListItem = ({ onClick }: reservationListItemProps) => {
  return (
    <Stack>
      <JButton onClick={onClick}>
        <Row
          width={'100%'}
          justifyContent={'start'}
          alignItems={'flex-start'}
          gap={'13px'}
          py={'14px'}
          borderBottom={1}
          borderColor={'#D9D9D9'}
        >
          <Stack width={'100%'} maxWidth={'120px'} overflow="hidden">
            <Stack sx={{ position: 'relative', paddingBottom: '100%' }}>
              <Stack
                sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundImage:
                    'url(https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg?crop=16:9&width=960&enable=upscale&quality=100)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  overflow: 'hidden',
                }}
              >
                <Typography display={'none'}>alt내용 입니다</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack gap={'2px'}>
            <ReservationBedge />
            <Typography fontSize={'10px'}>차차 아티스트</Typography>
            <Row gap={1}>
              <Row gap={'1px'}>
                <Typography
                  width={'19px'}
                  border={`1px solid ${COLORS.primaryLight}`}
                  borderRadius={'50%'}
                  textAlign={'center'}
                  lineHeight={'19px'}
                  fontSize={'10px'}
                >
                  샵
                </Typography>
                <Typography fontSize={'10px'}>서울 강남구</Typography>
              </Row>
              <Row gap={'1px'}>
                <Typography
                  border={`1px solid ${COLORS.primaryLight}`}
                  borderRadius={'60px'}
                  lineHeight={'19px'}
                  fontSize={'10px'}
                  px={'5px'}
                >
                  방문
                </Typography>
                <Typography fontSize={'10px'}>서울 강남구</Typography>
              </Row>
            </Row>
            <Typography fontSize={'14px'} fontWeight={600}>
              메이크업명
            </Typography>
            <Row justifyContent={'left'}>
              <Counter fontSize={16} targetNumber={'100,000'} />
              <Typography>원</Typography>
            </Row>
            <Stack fontSize={'10px'}>⭐️ 4.74 (리뷰 수)</Stack>
          </Stack>
        </Row>
      </JButton>
    </Stack>
  );
};

export default ReservationListItem;
