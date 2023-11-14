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
  width: ${widthPercentage(560)}px;
  height: ${heightPercentage(174)}px;
  flex-shrink: 0;
  border-radius: ${fontPercentage(12)}px;
  background: #fff;
`;

export const CloseBtnImg = styled.TouchableOpacity`
  position: absolute;
  top: ${heightPercentage(14.77)}px;
  left: ${widthPercentage(19)}px;
`;

export const ModalContent = styled.Text`
  color: #000;
  font-size: ${fontPercentage(24)}px;
  font-weight: 800;
  text-align: center;
  margin-top: ${heightPercentage(35)}px;
`;

export const OrderModalBtnView = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const OrderModalBtn1 = styled.TouchableOpacity`
  width: ${widthPercentage(208)}px;
  height: ${heightPercentage(54)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${fontPercentage(12)}px;
  background: #ffca42;
  margin: ${heightPercentage(36)}px ${widthPercentage(23.5)}px;
`;

export const OrderModalBtn2 = styled.TouchableOpacity`
  width: ${widthPercentage(208)}px;
  height: ${heightPercentage(54)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${fontPercentage(12)}px;
  background: #d2d2d2;
  margin: ${heightPercentage(36)}px ${widthPercentage(23.5)}px;
`;

export const BtnText = styled.Text`
  color: #000;
  font-size: ${fontPercentage(24)}px;
  font-weight: 700;
`;
