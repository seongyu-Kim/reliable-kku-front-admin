import styled from 'styled-components/native';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../components/common/ResponsiveSize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #fff;
`;

export const InputView = styled.View`
  flex-direction: row;
`;

export const InputImg = styled.View`
  position: absolute;
  top: ${heightPercentage(20.25)}px;
  left: ${widthPercentage(18)}px;
`;
export const InputText = styled.TextInput`
  width: ${widthPercentage(450)}px;
  height: ${heightPercentage(68)}px;
  border-radius: ${fontPercentage(12)}px;
  background: rgba(0, 0, 0, 0.1);

  font-size: ${fontPercentage(32)}px;
  font-weight: 600;
  padding-left: ${widthPercentage(71)}px;
`;

export const AutoLoginView = styled.View`
  flex-direction: row;
  left: ${widthPercentage(-150)}px;
  align-items: center;
`;

export const AutoLoginText = styled.Text`
  font-size: ${fontPercentage(24)}px;
  font-weight: 600;
  left: ${widthPercentage(28)}px;
`;

export const LoginBtn = styled.TouchableOpacity`
  width: ${widthPercentage(450)}px;
  height: ${heightPercentage(68)}px;
  border-radius: ${fontPercentage(12)}px;
  background: #f4c03d;
  align-items: center;
  justify-content: center;
`;

export const LoginBtnText = styled.Text`
  font-size: ${fontPercentage(32)}px;
  font-weight: 600;
`;
