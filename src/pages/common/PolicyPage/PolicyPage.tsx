import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { JIcon } from '../../../components/JIcon';
import { Row } from '../../../components/Row';
import { useState } from 'react';
import { PolicyCheckbox } from './components/PolicyCheckbox';
import { COLORS } from '../../../core/colors';
import { useJNavigate } from '../../../core/routes';

export const PolicyPage = () => {
  const [isOkayPrivacyPolicy, setIsOkayPrivacyPolicy] = useState(false);
  const [isOkayTermsOfService, setIsOkayTermsOfService] = useState(false);
  const isEveryOkay = isOkayPrivacyPolicy && isOkayTermsOfService;
  const navigate = useJNavigate();

  const handleEveryOkay = () => {
    if (isEveryOkay) {
      setIsOkayPrivacyPolicy(false);
      setIsOkayTermsOfService(false);
    } else {
      setIsOkayPrivacyPolicy(true);
      setIsOkayTermsOfService(true);
    }
  };

  return (
    <Stack flex={1} justifyContent={'space-between'}>
      <Stack px={2} pt={4}>
        <Row px={1} justifyContent={'start'}>
          <Typography fontWeight={400}>
            메메를 사용하기 위해
            <br />
            이용 약관에 동의해주세요.
          </Typography>
        </Row>
        <Row justifyContent={'start'} pt={4}>
          <PolicyCheckbox
            isChecked={isEveryOkay}
            onClick={handleEveryOkay}
            label="전체 동의"
            isBold
          />
        </Row>
        <Row px={1} py={1}>
          <Box bgcolor={COLORS.gray300} height={'1px'} width={'100%'} />
        </Row>
        <Row justifyContent={'space-between'}>
          <PolicyCheckbox
            isChecked={isOkayPrivacyPolicy}
            onClick={() => {
              setIsOkayPrivacyPolicy(!isOkayPrivacyPolicy);
            }}
            label="개인정보 처리방침 (필수)"
          />
          <IconButton color="primary">
            <JIcon icon="rightArrow" />
          </IconButton>
        </Row>
        <Row justifyContent={'space-between'}>
          <PolicyCheckbox
            isChecked={isOkayTermsOfService}
            onClick={() => {
              setIsOkayTermsOfService(!isOkayTermsOfService);
            }}
            label="서비스 이용약관 (필수)"
          />
          <IconButton color="primary">
            <JIcon icon="rightArrow" />
          </IconButton>
        </Row>
      </Stack>

      <Stack padding={2}>
        <Button
          variant="contained"
          disabled={!isEveryOkay}
          onClick={() => {
            navigate('/join');
          }}
        >
          다음
        </Button>
      </Stack>
    </Stack>
  );
};
