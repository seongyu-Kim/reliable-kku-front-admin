import styled from 'styled-components/native';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../common/ResponsiveSize';

export const OrderModalView = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;

export const OrderModal = styled.View`
  width: ${widthPercentage(810)}px;
  height: ${heightPercentage(320)}px;
  border-radius: ${fontPercentage(12)}px;
  background: #fff;
  align-items: center;
`;

export const OrderModalTop = styled.View`
  align-items: center;
  top: 0;
  width: 100%;
  height: ${heightPercentage(60)}px;
  background: #ffca42;
  border-top-left-radius: ${fontPercentage(12)}px;
  border-top-right-radius: ${fontPercentage(12)}px;
  flex-direction: row;
`;

export const CloseBtnImg = styled.TouchableOpacity`
  position: absolute;
  top: ${heightPercentage(14.77)}px;
  left: ${widthPercentage(19)}px;
`;

export const OrderModalTopText = styled.Text`
  color: #000;
  font-size: ${fontPercentage(32)}px;
  font-weight: 700;
  margin-left: ${widthPercentage(651)}px;
`;

export const ModalBtn = styled.TouchableOpacity`
  margin-top: ${heightPercentage(68)}px;
  width: ${widthPercentage(320)}px;
  height: ${heightPercentage(106)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${fontPercentage(12)}px;
  background: #ffca42;
`;

export const ModalBtnText = styled.Text`
  color: #000;
  font-size: ${fontPercentage(32)}px;
  font-weight: 800;
`;
