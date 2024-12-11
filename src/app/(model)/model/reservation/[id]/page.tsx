'use client';

import { AppBar } from '@/components/AppBar';
import { JButton } from '@/components/JButton';
import { Modal } from '@/components/Modal/modal';
import { ModalContent } from '@/components/Modal/ModalContent';
import { MotionWrapper } from '@/components/MotionWrapper';
import { Row } from '@/components/Row';
import { SquareImage } from '@/components/SquareImage';
import { COLORS } from '@/styles/colors';
import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
// import { useRouter } from 'next/navigation';

const Page = () => {
  // const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MotionWrapper>
      <AppBar title="예약 관리" backIcon />
      <Stack p={3}>
        <Stack alignItems={'center'} gap={2}>
          <Box
            width={75}
            height={75}
            borderRadius={'50%'}
            sx={{ background: COLORS.primary }}
            overflow={'hidden'}
          >
            <Link href={'/artist/profile'}>
              <SquareImage
                url={
                  'https://github.com/MEME-UMC/MEME_WEB/blob/main/src/assets/sample-makeup.png?raw=true'
                }
              />
            </Link>
          </Box>
          <Typography fontSize={18} fontWeight={600}>
            아티스트 차차
          </Typography>
        </Stack>
        <Stack my={6} gap={'12px'}>
          <Row justifyContent={'flex-start'}>
            <Typography width={'100px'} fontSize={14}>
              전화번호
            </Typography>
            <Typography fontSize={16} fontWeight={500}>
              010-1234-5678
            </Typography>
          </Row>
          <Row justifyContent={'flex-start'}>
            <Typography width={'100px'} fontSize={14}>
              이메일
            </Typography>
            <Typography fontSize={16} fontWeight={500}>
              meme@naver.com
            </Typography>
          </Row>
        </Stack>
        <Stack
          gap={2}
          padding={'16px 20px'}
          sx={{ background: COLORS.gray100 }}
          borderRadius={'10px'}
        >
          <Typography fontSize={14} fontWeight={600} color={COLORS.primary}>
            메이크업 정보
          </Typography>
          <Stack
            px={2}
            py={3}
            gap={'14px'}
            borderRadius={'10px'}
            sx={{ background: COLORS.white }}
          >
            <Stack>
              <Row justifyContent={'flex-start'}>
                <Typography fontSize={14} width={'100px'}>
                  메이크업명
                </Typography>
                <Typography fontSize={14} fontWeight={500}>
                  메이크업명
                </Typography>
              </Row>
            </Stack>
            <Stack>
              <Row justifyContent={'flex-start'}>
                <Typography fontSize={14} width={'100px'}>
                  메이크업 분야
                </Typography>
                <Typography fontSize={14} fontWeight={500}>
                  메이크업 분야
                </Typography>
              </Row>
            </Stack>
            <Stack>
              <Row justifyContent={'flex-start'}>
                <Typography fontSize={14} width={'100px'}>
                  장소
                </Typography>
                <Typography fontSize={14} fontWeight={500}>
                  강남 메이크업샵
                </Typography>
              </Row>
            </Stack>
            <Stack>
              <Row justifyContent={'flex-start'}>
                <Typography fontSize={14} width={'100px'}>
                  날짜
                </Typography>
                <Typography fontSize={14} fontWeight={500}>
                  4월 13일 (토)
                </Typography>
              </Row>
            </Stack>
            <Stack>
              <Row justifyContent={'flex-start'}>
                <Typography fontSize={14} width={'100px'}>
                  시간
                </Typography>
                <Typography fontSize={14} fontWeight={500}>
                  오후 0시 0분
                </Typography>
              </Row>
            </Stack>
            <Stack>
              <Row justifyContent={'flex-start'}>
                <Typography fontSize={14} width={'100px'}>
                  가격
                </Typography>
                <Typography fontSize={14} fontWeight={500}>
                  100,000원
                </Typography>
              </Row>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Row
        position={'relative'}
        width={'100%'}
        justifyContent={'space-between'}
        bottom={0}
        left={0}
        gap={'13px'}
      >
        <JButton
          onClick={() => setIsOpen(!isOpen)}
          sx={{
            width: '50%',
            background: COLORS.red_etc,
            borderRadius: '10px',
            lineHeight: '49px',
            color: COLORS.white,
            fontSize: '14px',
          }}
        >
          예약 취소하기
        </JButton>
        <JButton
          sx={{
            width: '50%',
            background: '#000',
            borderRadius: '10px',
            lineHeight: '49px',
            color: COLORS.white,
            fontSize: '14px',
          }}
        >
          포트폴리오 보러가기
        </JButton>
      </Row>
      <Modal isOpen={isOpen}>
        <ModalContent type="confirm" onClose={() => setIsOpen(false)}>
          <Typography fontSize={17} fontWeight={700} textAlign={'center'}>
            예약을 취소하시겠습니까?
          </Typography>
          <Typography fontSize={13} fontWeight={500} textAlign={'center'}>
            클릭시 예약이 취소되며, 모델에게 취소 알림이 전송됩니다.
          </Typography>
        </ModalContent>
      </Modal>
    </MotionWrapper>
  );
};
export default Page;
