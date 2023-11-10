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
  top: 0;
  width: 100%;
  height: 60px;
  background: #ffca42;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  flex-direction: row;
  align-items: center;
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
`;

export const BigBtnView = styled.View`
  flex-direction: row;
`;
export const SmallBtnView = styled.View`
  flex-direction: row;
`;

export const PickupBtn = styled.TouchableOpacity`
  width: 320px;
  height: 106px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #78e35e;
  margin-top: 40.23px;
  margin-right: 13px;
`;

export const CompeleteBtn = styled.TouchableOpacity`
  width: 320px;
  height: 106px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #ffca42;
  margin-top: 40.23px;
  margin-left: 13px;
`;

export const BigBtnText = styled.Text`
  color: #000;
  font-size: 32px;
  font-weight: 800;
`;

export const CancelBtn = styled.TouchableOpacity`
  width: 208px;
  height: 54px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #f00;
  margin-top: 26px;
`;

export const Refundbtn = styled.TouchableOpacity`
  width: 208px;
  height: 54px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #2f57e5;
  margin: 26px 22px;
`;

export const NotReceivedBtn = styled.TouchableOpacity`
  width: 208px;
  height: 54px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #000;
  margin-top: 26px;
`;

export const CancelBtnText = styled.Text`
  color: #f00;
  font-size: 24px;
  font-weight: 700;
`;

export const RefundBtnText = styled.Text`
  color: #2f57e5;
  font-size: 24px;
  font-weight: 700;
`;

export const NotReceivecBtnText = styled.Text`
  color: #000;
  font-size: 24px;
  font-weight: 700;
`;
