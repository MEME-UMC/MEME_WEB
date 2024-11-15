import { Box, Stack, Typography } from '@mui/material';
import { Row } from '../../../../components/Row';
import { JImage } from '../../../../components/JImage';
import { TypeButton } from './TypeButton';

type Props = {
  type: string;
  onSelectType: (type: string) => void;
};

export const Step3Part1 = ({ type, onSelectType }: Props) => {
  return (
    <Stack alignItems={'start'} px={2}>
      <Typography fontWeight={600} py={4}>
        아티스트인가요, 모델인가요?
      </Typography>
      <Stack width={1} alignItems={'center'} gap={4}>
        <TypeButton
          isActive={type === 'artist'}
          onClick={() => onSelectType('artist')}
        >
          <Row justifyContent={'space-between'} width={200}>
            <Stack>
              <Typography fontWeight={600} fontSize={16}>
                메이크업 아티스트
              </Typography>
              <Typography fontWeight={400} fontSize={12}>
                사업자 등록 번호가 필요해요.
              </Typography>
            </Stack>
            <JImage image="palette" />
          </Row>
        </TypeButton>
        <TypeButton
          isActive={type === 'model'}
          onClick={() => onSelectType('model')}
        >
          <Row justifyContent={'space-between'} width={200}>
            <Box position={'relative'} width={90} height={70}>
              <Box position={'absolute'} left={0}>
                <JImage image="hi-man"></JImage>
              </Box>
              <Box position={'absolute'} right={0} bottom={0}>
                <JImage image="hi-woman"></JImage>
              </Box>
            </Box>
            <Typography fontWeight={600} fontSize={16} pr={3}>
              모델
            </Typography>
          </Row>
        </TypeButton>
      </Stack>
    </Stack>
  );
};
