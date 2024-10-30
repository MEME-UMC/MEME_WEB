/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import { Box, BoxProps } from '@mui/material';

export const MotionWrapper = ({ ...props }: BoxProps) => {
  return (
    <Box
      component={motion.div as any}
      flex={1}
      initial={{ opacity: 0, y: 50 }} // 페이지가 처음 나타날 때 아래에서 위로 올라오는 애니메이션
      animate={{ opacity: 1, y: 0 }} // 나타난 후 정상 위치
      exit={{ opacity: 0, y: -50 }} // 페이지가 사라질 때 위로 사라지는 애니메이션
      transition={{ duration: 0.5 }} // 애니메이션 지속 시간
      {...props}
    />
  );
};
