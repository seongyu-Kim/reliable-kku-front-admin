import styled from 'styled-components/native';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../common/ResponsiveSize';

export const KeyPadView = styled.View`
  width: ${widthPercentage(385)}px;
  height: ${heightPercentage(401)}px;
  flex-shrink: 0;
  border-radius: ${fontPercentage(12)}px;
  background: #fbfbfb;
  top: ${heightPercentage(11.5)}px;
  margin-left: ${widthPercentage(65)}px;
  justify-content: space-around;
`;

export const KeyPadRowView = styled.View`
  flex-direction: row;
`;

export const KeypadButton = styled.TouchableOpacity`
  width: ${widthPercentage(129)}px;
  height: ${heightPercentage(75)}px;
  padding: ${heightPercentage(8)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${fontPercentage(11)}px;
  border: 1px solid #b1b1b1;
`;

export const KeypadButtonText = styled.Text`
  color: #000;
  font-size: ${fontPercentage(24)}px;
  font-weight: 400;
`;

export const UserInputNumber = styled.Text`
  color: #000;
  text-align: center;
  font-size: ${fontPercentage(32)}px;
  font-weight: 600;
  height: ${heightPercentage(104)}px;
  width: ${widthPercentage(385)}px;
  top: ${heightPercentage(33)}px;
`;
