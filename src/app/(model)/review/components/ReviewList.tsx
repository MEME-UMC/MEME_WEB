import { Stack } from '@mui/material';
import React, { ReactNode } from 'react';

type WritingReviewProps = { children: ReactNode };
export const ReviewList = ({ children }: WritingReviewProps) => {
  return <Stack gap={2}>{children}</Stack>;
};
