/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import { Box, BoxProps } from '@mui/material';

export const MotionWrapper = ({ ...props }: BoxProps) => {
  return (
    <Box
      component={motion.div as any}
      flex={1}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      {...props}
    />
  );
};
