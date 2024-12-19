'use client';
import { MotionWrapper } from '@/components/MotionWrapper';
import { Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { RatingStar } from '../components/RatingStar';
import { COLORS } from '@/styles/colors';
import { JIcon } from '@/components/JIcon';
import { Row } from '@/components/Row';
import { AppBar } from '@/components/AppBar';
import { ImageThumb } from '../components/ImageThumb';
import { Modal } from '@/components/Modal/Modal';
import { ModalContent } from '@/components/Modal/ModalContent';

const Page = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const FileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      setImages((prevImages) => [...prevImages, ...newFiles]);
    }
  };

  const SelectImageDelete = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <MotionWrapper>
      <AppBar title="나의 리뷰" backIcon />
      <Stack height={'calc(100% - (48px + 78px)) '} px={2} pt={'78px'}>
        <Stack flex={1}>
          <Typography
            fontSize={20}
            fontWeight={400}
            textAlign="center"
            component="p"
          >
            <Typography
              display="inline"
              fontSize={20}
              fontWeight={600}
              component="span"
            >
              아티스트명
            </Typography>
            의
          </Typography>
          <Typography
            fontSize={20}
            fontWeight={400}
            textAlign="center"
            component="p"
          >
            <Typography
              display="inline"
              fontSize={20}
              fontWeight={600}
              component="span"
            >
              메이크업명
            </Typography>
            은 어땠나요?
          </Typography>
          <Stack
            justifyContent={'center'}
            borderBottom={`1px solid ${COLORS.gray400}`}
            gap={1}
            pb={2}
          >
            <RatingStar
              rating={rating}
              onClickStar={(selectedRating: number | null) =>
                setRating(selectedRating)
              }
            />
            <Typography
              fontSize={14}
              textAlign={'center'}
              fontWeight={500}
              color={COLORS.gray300}
            >
              별점을 선택해 주세요
            </Typography>
          </Stack>
          <Stack py={5} gap={1}>
            <Typography fontSize={16} fontWeight={600} textAlign={'center'}>
              메이크업 후기를 남겨주세요
            </Typography>
            <Button
              component="label"
              variant="contained"
              sx={{ fontWeight: 400 }}
            >
              <input
                type="file"
                multiple
                hidden
                accept="image/*"
                onChange={FileChange}
              />
              <Row gap={1}>
                <JIcon icon="camera" />
                <Typography fontSize={14} fontWeight={400}>
                  사진 업로드
                </Typography>
              </Row>
            </Button>
            {images.length > 0 && (
              <Stack>
                <ImageThumb images={images} onDelete={SelectImageDelete} />
                <Typography
                  fontSize={14}
                  fontWeight={400}
                  color={COLORS.red_etc}
                >
                  무관한 사진/동영상을 첨부한 리뷰는 통보없이 삭제될 수
                  있습니다.
                </Typography>
              </Stack>
            )}
            <TextField
              multiline
              rows={10}
              variant="outlined"
              placeholder="여기에 내용을 작성해주세요."
              fullWidth
            />
          </Stack>
        </Stack>
        <Stack pb={2}>
          <Button variant="contained" onClick={() => setIsOpen(true)}>
            등록하기
          </Button>
        </Stack>
      </Stack>
      <Modal isOpen={isOpen}>
        <ModalContent type="confirm" onClose={() => setIsOpen(false)}>
          <Typography fontSize={17} fontWeight={700} textAlign={'center'}>
            리뷰를 등록하시겠습니까?
          </Typography>
        </ModalContent>
      </Modal>
    </MotionWrapper>
  );
};

export default Page;
