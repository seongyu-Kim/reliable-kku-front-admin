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
  width: 810px;
  height: 320px;
  border-radius: 12px;
  background: #fff;
  align-items: center;
`;

export const OrderModalTop = styled.View`
  align-items: center;
  top: 0;
  width: 100%;
  height: 60px;
  background: #ffca42;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  flex-direction: row;
`;

export const CloseBtnImg = styled.TouchableOpacity`
  position: absolute;
  top: 14.77px;
  left: 19px;
`;

export const OrderModalTopText = styled.Text`
  color: #000;
  font-size: 32px;
  font-weight: 700;
  margin-left: 651px;
`;

export const ModalBtn = styled.TouchableOpacity`
  margin-top: 68px;
  width: 320px;
  height: 106px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #ffca42;
`;

export const ModalBtnText = styled.Text`
  color: #000;
  font-size: 32px;
  font-weight: 800;
`;
