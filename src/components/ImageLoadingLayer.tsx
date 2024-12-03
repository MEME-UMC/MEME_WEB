'use client';
import { Box } from '@mui/material';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';

const ImageLoadingContext = createContext<{
  loadedImageCount: number;
  addLoadedImage: () => void;
  isCompleted: boolean | string;
  addCount: () => void;
}>({
  loadedImageCount: 0,
  addLoadedImage: () => {},
  isCompleted: true,
  addCount: () => {},
});

type Props = {
  children: ReactNode;
};
export const ImageLoadingLayer = ({ children }: Props) => {
  const count = useRef(0);
  const [loadedImageCount, setLoadedImages] = useState(0);

  const addCount = useCallback(() => {
    count.current += 1;
  }, []);

  const addLoadedImage = useCallback(() => {
    setLoadedImages((prev) => prev + 1);
  }, []);

  const isCompleted = useMemo(() => {
    if (count.current === 0) {
      return false;
    }
    return loadedImageCount >= count.current;
  }, [count, loadedImageCount]);

  console.log(loadedImageCount, count.current, isCompleted);

  return (
    <ImageLoadingContext.Provider
      value={{ loadedImageCount, addLoadedImage, isCompleted, addCount }}
    >
      {!isCompleted && <Box />}
      <Box display={isCompleted ? 'flex' : 'none'} width={1} height={1}>
        {children}
      </Box>
    </ImageLoadingContext.Provider>
  );
};

export const useImageLoading = () => useContext(ImageLoadingContext);
