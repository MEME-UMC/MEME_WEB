import { Stack, Typography } from '@mui/material';
import { Row } from '../../../../components/Row';
import { JButton } from '../../../../components/JButton';

const ReservationListItem = () => {
  return (
    <Stack>
      <JButton>
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
          <Stack gap={'4px'}>
            <Stack flexDirection={'row'}>
              <Typography
                lineHeight={'19px'}
                px={1}
                fontSize={'10px'}
                color="#222"
                textAlign={'center'}
                sx={{ background: '#FFC8B0' }}
                borderRadius={'5px'}
              >
                면접 메이크업
              </Typography>
            </Stack>
            <Typography fontSize={'10px'} color="#222">
              차차 아티스트
            </Typography>
            <Row gap={1}>
              <Row gap={'1px'}>
                <Typography
                  width={'19px'}
                  border={'1px solid #FF985E'}
                  borderRadius={'50%'}
                  textAlign={'center'}
                  lineHeight={'19px'}
                  fontSize={'10px'}
                  color="#222"
                >
                  샵
                </Typography>
                <Typography fontSize={'10px'} color="#222">
                  서울 강남구
                </Typography>
              </Row>
              <Row gap={'1px'}>
                <Typography
                  border={'1px solid #FF985E'}
                  borderRadius={'60px'}
                  lineHeight={'19px'}
                  fontSize={'10px'}
                  color="#222"
                  px={'5px'}
                >
                  방문
                </Typography>
                <Typography fontSize={'10px'} color="#222">
                  서울 강남구
                </Typography>
              </Row>
            </Row>
            <Typography fontSize={'14px'} fontWeight={600} color="#222">
              메이크업명
            </Typography>
            <Typography fontSize={'12px'} fontWeight={600} color="#222">
              100,000원
            </Typography>
            <Stack fontSize={'10px'} color="#222">
              ⭐️ 4.74 (리뷰 수)
            </Stack>
          </Stack>
        </Row>
      </JButton>
    </Stack>
  );
};

export default ReservationListItem;
