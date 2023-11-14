import styled from 'styled-components/native';
import {fontPercentage, heightPercentage, widthPercentage,} from '../../../common/ResponsiveSize';

export const LogoutBox = styled.View`
  position: absolute;
  height: ${heightPercentage(710)}px;
  width: ${widthPercentage(984)}px;
  right: 0;
  bottom: 0;
  align-items: center;
`;

export const Text = styled.Text`
  color: #000;
  font-size: ${fontPercentage(24)}px;
  font-weight: 800;
  margin-top: ${heightPercentage(220.25)}px;
`;

export const BtnBox = styled.View`
  flex-direction: row;
  margin: ${heightPercentage(50)}px;
`;

export const Btn1 = styled.TouchableOpacity`
  width: ${widthPercentage(210)}px;
  height: ${heightPercentage(70)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${fontPercentage(12)}px;
  background: #ffca42;
  margin-right: ${widthPercentage(70)}px;
`;
export const Btn2 = styled.TouchableOpacity`
  width: ${widthPercentage(210)}px;
  height: ${heightPercentage(70)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${fontPercentage(12)}px;
  background: #e0e0e0;
`;

export const BtnText = styled.Text`
  color: #000;
  font-size: ${fontPercentage(32)}px;
  font-weight: 700;
`;
