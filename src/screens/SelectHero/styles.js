import colors from '@utils/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Headder = styled.View`
  flex: 1;
  margin: 15px;
  max-height: 80px;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  elevation: 5;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${({applyFilter}) =>
    applyFilter ? colors.primary.darkRed : colors.secondary.grayScale};
`;

export const TitleSearch = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-vertical: 5px;
  margin-horizontal: 5px;
  color: ${colors.common.white};
`;

export const InputStyle = {
  flex: 1,
  color: colors.primary.black,
};
export const StyleContainer = {
  flex: 1,
  paddingHorizontal: 15,
};

export const ResearchContainer = styled.View`
  flex: 1;
  min-height: 50px;
  max-height: 50px;
  align-items: center;
  border-radius: 25px;
  flex-direction: row;
  background-color: ${colors.common.white};
`;

export const Body = styled.View`
  flex: 1;
  margin-horizontal: 10px;
`;
