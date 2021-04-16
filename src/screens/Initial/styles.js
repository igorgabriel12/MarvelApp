import colors from '@utils/colors';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerLogo = styled.View`
  height: 200px;
  padding-horizontal: 20px;
  background-color: ${colors.primary.darkRed};
`;

export const MarvelLogo = styled(FastImage).attrs({
  resizeMode: 'contain',
})`
  flex: 1;
  width: null;
  height: null;
`;

export const Body = styled.View`
  flex: 1;
  align-items: center;
  padding-vertical: 20px;
  padding-horizontal: 20px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
  color: ${colors.common.white};
`;

export const Label = styled(Title)`
  font-size: 16px;
  font-weight: 500;
`;
