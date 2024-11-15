/* eslint-disable react-refresh/only-export-components */
import { Box } from '@mui/system';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

const ImageLoadingContext = createContext<{
  loadedImageCount: number;
  addLoadedImage: () => void;
}>({
  loadedImageCount: 0,
  addLoadedImage: () => {},
});

type Props = {
  count: number;
  children: ReactNode;
};
export const ImageLoadingLayer = ({ children, count }: Props) => {
  const [loadedImageCount, setLoadedImages] = useState(0);

  const addLoadedImage = useCallback(() => {
    setLoadedImages((prev) => prev + 1);
  }, []);

  const isCompleted = loadedImageCount >= count;

  return (
    <ImageLoadingContext.Provider value={{ loadedImageCount, addLoadedImage }}>
      {!isCompleted && <Box />}
      <Box display={isCompleted ? 'flex' : 'none'} width={1} height={1}>
        {children}
      </Box>
    </ImageLoadingContext.Provider>
  );
};

export const useImageLoading = () => useContext(ImageLoadingContext);
