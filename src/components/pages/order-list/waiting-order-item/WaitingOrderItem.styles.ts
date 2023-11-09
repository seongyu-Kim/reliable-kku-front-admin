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
  top: 44px;
  flex-direction: row;
  justify-content: space-between;
`;
export const OrderContentText = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 600;
  margin-top: 26px;
`;

export const HrLine = styled.View`
  border: 0.9px solid black;
  width: 0px;
  height: 17px;
  align-self: center;
`;
