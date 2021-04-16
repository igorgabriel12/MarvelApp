import colors from '@utils/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
  bottom: 0px;
  width: 100%;
  height: 50px;
  position: absolute;
  flex-direction: row;
  background-color: rgba(20, 20, 20, 0.8);
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 100px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
export const ButtonLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-horizontal: 5px;
  color: ${colors.common.white};
`;

export const CenterContent = styled.View`
  flex: 1;
`;
