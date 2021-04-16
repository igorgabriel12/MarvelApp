import colors from '@utils/colors';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

const screenWidth = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
  padding-top: 30px;
  background-color: ${colors.common.black};
`;

export const Card = styled.View`
  elevation: 5;
  overflow: hidden;
  border-radius: 20px;
  background-color: ${colors.primary.black};
`;

export const TranslucentContainer = styled.View`
  top: 5px;
  right: 5px;
  width: 50px;
  z-index: 10;
  height: 50px;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

export const HeaderButtonContainer = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  background-color: rgba(240, 240, 240, 0.8);
`;

export const ContainerImage = styled.View`
  width: ${screenWidth}px;
  height: ${({height}) => height}px;
`;

export const Image = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.cover,
})`
  width: ${screenWidth}px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: ${({height}) => height}px;
`;

export const DescriptionContainerCardHeader = styled.View`
  padding: 15px 20px 30px 20px;
`;

export const LabelName = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${colors.common.white};
`;

export const LabelDescription = styled.Text`
  margin-top: 10px;
  text-align: justify;
  color: ${colors.common.white};
`;

export const ContainerDetails = styled.View`
  margin-vertical: 8px;
  flex-direction: row;
`;

export const DetailItem = styled.View`
  flex: 1;
  margin-top: 5px;
  align-items: center;
`;

export const DetailsTitleLabel = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  font-weight: bold;
  color: ${colors.common.white};
`;

export const DetailItemLabel = styled.Text`
  font-size: 12px;
  margin-top: 5px;
  color: ${colors.common.white};
`;

export const DetailsSubtitleLabel = styled.Text`
  font-size: 12px;
  margin-top: 10px;
  color: ${colors.common.white};
`;

export const CardBottom = styled(Card)`
  margin-top: 10px;
  padding-top: 20px;
  padding-horizontal: 10px;
`;
