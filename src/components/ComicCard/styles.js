import colors from '@utils/colors';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const Container = styled.TouchableOpacity``;

export const Card = styled.View`
  width: 180px;
  elevation: 5;
  height: 270px;
  margin-top: 5px;
  overflow: hidden;
  border-radius: 20px;
  background-color: #fff;
  margin-horizontal: 10px;
  justify-content: flex-end;
`;

export const ComicCover = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.contain,
})`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const ComicCardLabels = styled.View`
  padding: 5px 10px 15px 10px;
  background-color: rgba(10, 10, 10, 0.7);
`;
export const ComicLabel = styled.Text`
  color: ${colors.common.white};
`;
