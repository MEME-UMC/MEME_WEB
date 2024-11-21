import { Typography } from '@mui/material';
import { Row } from '../../../../components/Row';
import { JButton } from '../../../../components/JButton';
import { COLORS } from '../../../../core/colors';
import { JIcon } from '../../../../components/JIcon';
import { useJNavigate } from '../../../../core/routes';

export const SearchBar = () => {
  const navigate = useJNavigate();
  return (
    <Row paddingX={2} py={2}>
      <JButton
        onClick={() => {
          navigate('/search/makeup/keyword');
        }}
        sx={{
          border: 2,
          borderColor: COLORS.primary,
          borderRadius: 6,
        }}
      >
        <Row justifyContent={'space-between'} flex={1} px={2} py={1}>
          <Typography color={COLORS.gray300}>
            원하는 메이크업을 검색해보세요!
          </Typography>
          <JIcon icon="search" />
        </Row>
      </JButton>
    </Row>
  );
};
