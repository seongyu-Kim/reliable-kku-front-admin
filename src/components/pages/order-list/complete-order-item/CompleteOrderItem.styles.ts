import styled from 'styled-components/native';

export const Order = styled.TouchableOpacity`
  width: 247px;
  height: 216px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #fff;
  margin: 11px 7px;
`;
export const AppOrderTop = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  height: 38px;
  background: #ffeda6;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  flex-direction: row;
  justify-content: center;
`;

export const SiteOrderTop = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  height: 38px;
  background: #b0cbff;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  flex-direction: row;
  justify-content: center;
`;

export const OrderTopText = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 600;
  align-self: center;
  margin: 0 15px;
`;

export const OrderContentView = styled.View`
  align-self: center;
  width: 85%;
  top: 40px;
  flex-direction: row;
  justify-content: space-between;
`;
export const OrderContentText = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 600;
  margin-top: 13px;
`;

export const OrderContentTime = styled.Text`
  position: absolute;
  color: rgba(0, 0, 0, 0.6);
  font-size: 18px;
  font-weight: 600;
  top: 158px;
  left: 111px;
`;

export const OrderContentCnt = styled.Text`
  position: absolute;
  color: #ff4343;
  font-size: 18px;
  font-weight: 600;
  top: 181.77px;
  left: 92px;
`;

export const HrLine = styled.View`
  border: 0.9px solid black;
  width: 0px;
  height: 17px;
  align-self: center;
`;
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
  justify-content: center;
  align-items: center;
`;

export const OrderModalTop = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  height: 60px;
  background: #ffca42;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  flex-direction: row;
  justify-content: center;
`;

export const CloseBtnImg = styled.TouchableOpacity`
  position: absolute;
  top: 14.77px;
  left: 19px;
`;

export const OrderModalTopText = styled.Text`
  position: absolute;
  color: #000;
  font-size: 32px;
  font-weight: 700;
  top: 13px;
  right: 20px;
`;

export const OrderModalBox = styled.View`
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
  top: -15px;
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

export const BtnText = styled.Text`
  color: #000;
  font-size: 24px;
  font-weight: 700;
`;
