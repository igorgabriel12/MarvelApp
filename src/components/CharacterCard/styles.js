import {Text, Dimensions} from 'react-native';
import colors from '@utils/colors';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const Container = styled.TouchableOpacity``;

export const Card = styled.View`
  overflow: hidden;
  border-radius: 15px;
  margin-horizontal: 5px;
  width: ${({cardWidth}) => cardWidth}px;
  height: ${({cardHeight}) => cardHeight}px;
`;

export const FavoriteButtonContainer = styled.View`
  top: 5px;
  right: 5px;
  width: 40px;
  height: 40px;
  z-index: 10;
  position: absolute;
  align-items: center;
  border-radius: 20px;
  justify-content: center;
`;

export const FavoriteButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  border-radius: 20px;
  justify-content: center;
  background-color: rgba(250, 250, 250, 0.6);
`;

export const Avatar = styled(FastImage).attrs({})`
  border-radius: 15px;
  z-index: 5;
  width: ${({imageWidth}) => imageWidth}px;
  background-color: ${colors.primary.black};
  height: ${({imageHeight}) => imageHeight}px;
`;

export const ContainerLabels = styled.View`
  margin: 0 10px 10px 10px;
`;

export const LabelName = styled.Text`
  font-weight: bold;
  color: ${colors.common.white};
`;

export const LabelDesciption = styled(Text).attrs({
  numberOfLines: 2,
})`
  color: ${colors.common.white};
`;
