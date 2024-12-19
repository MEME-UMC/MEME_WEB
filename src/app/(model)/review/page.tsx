'use client';
import { AppBar } from '@/components/AppBar';
import { JIcon } from '@/components/JIcon';
import { MotionWrapper } from '@/components/MotionWrapper';
import { Row } from '@/components/Row';
import { COLORS } from '@/styles/colors';
import { Stack, Typography } from '@mui/material';
import { TabItem, Tabs } from '../makeup/[id]/components/Tabs';
import { useState } from 'react';
import { ReviewList } from './components/ReviewList';
import { WritingReviewItem } from './components/WritingReviewItem';
import { useRouter } from 'next/navigation';
import { Modal } from '@/components/Modal/Modal';
import { ModalContent } from '@/components/Modal/ModalContent';

const Page = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [optionActive, setOptionActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const imgurl =
    'https://s3-alpha-sig.figma.com/img/d7a7/b248/17b77881449ff376a9851c5e2b13660c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NLIoBEBzsRnzMwJEnxBDWnCAlepb4e0oH02LSEEcEX0lHlLKhxLdEfRFfy5ud0cljPp0il5Et5jHtpqb3XZE6P28S5cXn9tWrtfNf8xbLT7eeea-lEVkicnBkQDIOY0jWU-AkpvvV7aqIHorWGNFE6z4e9IpPFUDqrKa~BXYthjfYEjkBgJ-AswEPdy~BirvdOZ96U~f2llzaqAx080L~bCd1WJstue8ZpU6z4Gla8-abPDgK~LTLg0dxmcHkGJ8pfqtr77BmjviGMVIcAhjQ4R--4nEMWrhJWOmzsb9EOWln31de3u3tzsL3SS1IxHreIgy1Sg5UOPI1GckazmLFw__';

  const tabs = [
    {
      label: '리뷰쓰기(2)',
      content: (
        <ReviewList>
          <WritingReviewItem
            type="writing"
            reservationDate={' 예약일 2024. 02. 16 금'}
            imgUrl={imgurl}
            artistName={'아티스트명'}
            title={'메이크업명'}
            location={'장소명'}
            onClick={() => router.push('review/write')}
          />
        </ReviewList>
      ),
    },
    {
      label: '작성한 리뷰(1)',
      content: (
        <ReviewList>
          <WritingReviewItem
            type="written"
            reservationDate={' 예약일 2024. 02. 16 금'}
            imgUrl={imgurl}
            artistName={'아티스트명'}
            title={'메이크업명'}
            location={'장소명'}
            isActive={optionActive}
            onClickIsActive={() => setOptionActive(!optionActive)}
            onClick={() => router.push('review/edit')}
            onRemoveItem={() => setIsOpen(!isOpen)}
          />
          <WritingReviewItem
            type="written"
            reservationDate={' 예약일 2024. 02. 16 금'}
            imgUrl={imgurl}
            artistName={'아티스트명'}
            title={'메이크업명'}
            location={'장소명'}
            isActive={optionActive}
            onClickIsActive={() => setOptionActive(!optionActive)}
            onClick={() => router.push('review/edit')}
            onRemoveItem={() => setIsOpen(!isOpen)}
          />
        </ReviewList>
      ),
    },
  ];

  return (
    <MotionWrapper>
      <AppBar title="나의 리뷰" backIcon />
      <Stack px={3} mt={2}>
        <Row
          gap={1}
          justifyContent={'flex-start'}
          borderBottom={`1px solid ${COLORS.gray300}`}
          pb={3}
        >
          <Stack
            width={42}
            height={42}
            borderRadius={'50% '}
            bgcolor={COLORS.primary}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Stack sx={{ scale: '30%' }}>
              <JIcon icon="userIconBig" />
            </Stack>
          </Stack>
          <Stack>
            <Typography fontSize={12} fontWeight={400}>
              모델
            </Typography>
            <Typography fontSize={14} fontWeight={600}>
              김차차
            </Typography>
          </Stack>
        </Row>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab}>
          {tabs.map((tab, index) => (
            <TabItem key={index} onClick={() => setActiveTab(index)}>
              {tab.label}
            </TabItem>
          ))}
        </Tabs>
        <Stack mt={3}>{tabs[activeTab].content}</Stack>
      </Stack>
      <Modal isOpen={isOpen}>
        <ModalContent type="confirm" onClose={() => setIsOpen(false)}>
          <Typography fontSize={17} fontWeight={700} textAlign={'center'}>
            리뷰를 삭제하시겠습니까?
          </Typography>
          <Typography fontSize={13} fontWeight={500} textAlign={'center'}>
            삭제한 리뷰는 복구할 수 없어요.
          </Typography>
        </ModalContent>
      </Modal>
    </MotionWrapper>
  );
};
export default Page;
