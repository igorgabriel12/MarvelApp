import React from 'react';

import colors from '@utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {Container, Button, ButtonLabel, CenterContent} from './styles';

const OnboardingFooterNavigation = ({
  leftLabel,
  rightLabel,
  currentPage,
  handlePageChange,
  indexOfFinalPage,
}) => {
  return (
    <Container>
      {currentPage > 0 && (
        <Button onPress={() => handlePageChange(currentPage - 1)}>
          <Icon
            size={25}
            name={'chevron-back-outline'}
            color={colors.primary.darkRed}
          />
          <ButtonLabel>{leftLabel}</ButtonLabel>
        </Button>
      )}
      <CenterContent></CenterContent>
      <Button
        onPress={() =>
          handlePageChange(
            currentPage < indexOfFinalPage ? currentPage + 1 : currentPage,
          )
        }>
        <ButtonLabel>{rightLabel}</ButtonLabel>
        <Icon
          size={25}
          name={'chevron-forward-outline'}
          color={colors.primary.darkRed}
        />
      </Button>
    </Container>
  );
};

export default OnboardingFooterNavigation;
