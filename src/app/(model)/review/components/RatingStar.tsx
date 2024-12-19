import { JButton } from '@/components/JButton';
import { JIcon } from '@/components/JIcon';
import { Row } from '@/components/Row';
import React from 'react';

type RatingStarProps = {
  rating: number | null;
  onClickStar: (rating: number) => void;
};
export const RatingStar = ({ rating, onClickStar }: RatingStarProps) => {
  const starArr = ['1', '2', '3', '4', '5'];
  return (
    <Row gap={1}>
      {starArr.map((_, index) => (
        <JButton
          key={index}
          onClick={() => onClickStar(index + 1)}
          sx={{
            width: '37px',
            height: '37px',
            borderRadius: '50%',
          }}
        >
          <JIcon
            icon={rating !== null && index < rating ? 'star2' : 'star-gray2'}
          />
        </JButton>
      ))}
    </Row>
  );
};
