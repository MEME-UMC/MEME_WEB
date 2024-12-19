import { JButton } from '@/components/JButton';
import { JIcon } from '@/components/JIcon';
import { Row } from '@/components/Row';
import { SquareImage } from '@/components/SquareImage';
import { COLORS } from '@/styles/colors';
import { Stack, Typography } from '@mui/material';
import React from 'react';
import { Option, OptionItem } from './Option';

type WritingReviewItemProps = {
  type: 'writing' | 'written';
  reservationDate: string;
  imgUrl: string;
  artistName: string;
  title: string;
  location: string;
  isActive?: boolean;
  onClickIsActive?: () => void;
  onClick: () => void;
  onRemoveItem?: () => void;
};
export const WritingReviewItem = ({
  type,
  reservationDate,
  imgUrl,
  artistName,
  title,
  location,
  isActive,
  onClickIsActive,
  onClick,
  onRemoveItem,
}: WritingReviewItemProps) => {
  return (
    <Stack>
      <Typography px={1} fontSize={14} fontWeight={500}>
        {reservationDate}
      </Typography>
      <Row
        width={'100%'}
        justifyContent={'flex-start'}
        gap={'10px'}
        p={'11px 16px'}
        bgcolor={COLORS.gray100}
        boxSizing={'border-box'}
        borderRadius={'10px'}
      >
        <Stack width={66} borderRadius={'7px'} overflow={'hidden'}>
          <SquareImage url={imgUrl} />
        </Stack>

        <Stack width={'calc(100% - 169px)'}>
          <Typography
            fontSize={12}
            fontWeight={400}
            color={COLORS.gray800}
            noWrap
          >
            {artistName}
          </Typography>
          <Typography fontWeight={600} noWrap>
            {title}
          </Typography>
          <Typography
            fontSize={10}
            fontWeight={400}
            color={COLORS.gray800}
            noWrap
          >
            {location}
          </Typography>
        </Stack>
        {type === 'writing' ? (
          <Stack
            width={81}
            borderRadius={'20px'}
            border={`1px solid ${COLORS.primary}`}
            ml={'auto'}
            overflow={'hidden'}
          >
            <JButton
              onClick={onClick}
              sx={{
                lineHeight: '30px',
                fontSize: '12px',
                color: COLORS.primary,
              }}
            >
              리뷰쓰기
            </JButton>
          </Stack>
        ) : (
          <Stack position={'relative'} ml={'auto'}>
            <JButton
              onClick={onClickIsActive}
              sx={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
              }}
            >
              <JIcon icon="option" />
            </JButton>
            <Option isActive={isActive}>
              <OptionItem onClick={onClick}>수정하기</OptionItem>
              <OptionItem onClick={onRemoveItem}>삭제하기</OptionItem>
            </Option>
          </Stack>
        )}
      </Row>
    </Stack>
  );
};
