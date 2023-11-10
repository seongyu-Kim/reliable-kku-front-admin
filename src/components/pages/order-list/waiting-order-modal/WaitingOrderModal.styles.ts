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

export const OrderModalBox = styled.View`
  margin-top: 36.27px;
  width: 625px;
  height: 114px;
  border-radius: 12px;
  background: #fff;
  border: 1px solid #000;
`;

export const OrderModalBoxTitle = styled.Text`
  color: #000;
  font-size: 24px;
  font-weight: 800;
  background: #fff;
  margin-top: -15px;
  align-self: center;
  text-align: center;
  width: 186px;
`;

export const OrderModalContentWrapper = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const OrderModalContentText = styled.Text`
  color: #000;
  font-size: 24px;
  font-weight: 600;
  margin: 0 25px;
`;

export const HrLine2 = styled.View`
  border: 1px solid #000;
  width: 0px;
  height: 56px;
  align-self: center;
`;

export const OrderModalBtnView = styled.View`
  flex-direction: row;
`;

export const OrderModalBtn = styled.TouchableOpacity`
  width: 208px;
  height: 54px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${({pressed}) => (pressed ? '#FFCA42' : '#d2d2d2')};
  margin: 25.23px 23px;
`;

export const BtnText = styled.Text`
  color: #000;
  font-size: 24px;
  font-weight: 700;
`;
