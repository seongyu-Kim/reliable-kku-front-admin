import styled from 'styled-components/native';

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
  width: 560px;
  height: 174px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #fff;
`;

export const CloseBtnImg = styled.TouchableOpacity`
  position: absolute;
  top: 14.77px;
  left: 19px;
`;

export const ModalContent = styled.Text`
  color: #000;
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  margin-top: 35px;
`;

export const OrderModalBtnView = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const OrderModalBtn1 = styled.TouchableOpacity`
  width: 208px;
  height: 54px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #ffca42;
  margin: 36px 23.5px;
`;

export const OrderModalBtn2 = styled.TouchableOpacity`
  width: 208px;
  height: 54px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #d2d2d2;
  margin: 36px 23.5px;
`;

export const BtnText = styled.Text`
  color: #000;
  font-size: 24px;
  font-weight: 700;
`;
