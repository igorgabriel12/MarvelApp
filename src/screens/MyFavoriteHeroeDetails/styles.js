import colors from '@utils/colors';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary.black};
  padding-top: ${({headerPadding}) => (headerPadding ? 30 : 0)}px;
`;

export const Header = styled.View`
  height: 50px;
  margin-top: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
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
  background-color: rgba(10, 10, 10, 0.75);
`;

export const Body = styled.View`
  flex: 1;
  padding-horizontal: 20px;
  background-color: rgba(10, 10, 10, 0.15);
`;

export const LabelHeroName = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${colors.common.white};
`;

export const LabelHeroDescription = styled.Text`
  font-size: 28px;
  color: ${colors.common.white};
`;

export const Footer = styled.View`
  left: 0px;
  right: 0px;
  bottom: 0px;
  overflow: hidden;
  position: absolute;
  padding: 15px 0px 30px 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: rgba(10, 10, 10, 0.7);
`;

export const ComicsTitleLabel = styled.Text`
  font-size: 22px;
  margin-horizontal: 20px;
  color: ${colors.common.white};
`;

export const ContainerEmptyList = styled.View`
  flex: 1;
  height: 200px;
  align-items: center;
  justify-content: center;
  width: ${Dimensions.get('window').width}px;
`;

export const ContainerSVG = styled.View`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
`;

export const EmptyListTitleLabel = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.common.white};
`;

export const EmptyListLabel = styled.Text`
  color: ${colors.common.white};
`;
