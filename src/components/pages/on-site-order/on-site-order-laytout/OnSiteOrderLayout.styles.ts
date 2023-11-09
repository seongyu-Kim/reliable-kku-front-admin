import StyleSheet from 'styled-components/dist/sheet/Sheet';
import styled from 'styled-components/native';

export const OnSiteView = styled.View`
  width: 100%;
  height: 100%;
  background: #f5f5f5;
`;

export const CloseButtonImg = styled.TouchableOpacity`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 36.77px;
  left: 40px;
`;

export const OnSiteTitle = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  font-size: 40px;
  font-weight: 700;
  width: 139px;
  align-self: center;
`;

export const HrLine = styled.View`
  width: 250px;
  height: 4px;
  flex-shrink: 0;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.6);
  align-self: center;
`;

export const OnSiteContentView = styled.View`
  flex-direction: row;
`;

export const ProductCounterView = styled.View`
  height: 423px;
  width: 580px;
  margin-left: 82px;
`;

export const ProductCounter = styled.View`
  width: 580px;
  height: 118px;
  flex-shrink: 0;
  border-radius: 12px;
  margin: 11.5px 0px;
  background: #fbfbfb;
`;

export const ProductHeaderView = styled.View`
  width: 202px;
`;

export const RedBeanImg = styled.View`
  margin-top: 13px;
  margin-left: 70px;
`;

export const ProductText1 = styled.Text`
  text-align: center;
  color: #000;
  font-size: 24px;
  font-weight: 600;
  margin-top: 1.23px;
`;

export const HrLine2 = styled.View`
  position: absolute;
  height: 70px;
  width: 2px;
  background: rgba(0, 0, 0, 0.6);
  top: 24.23px;
  left: 202px;
`;

export const ProductPrice = styled.Text`
  position: absolute;
  top: 45.23px;
  left: 251px;
  color: #000;
  font-size: 24px;
  font-weight: 600;
`;

export const PlusButton = styled.TouchableOpacity`
  position: absolute;
  top: 50.23px;
  left: 521px;
`;

export const MinusButton = styled.TouchableOpacity`
  position: absolute;
  top: 50.23px;
  left: 444px;
`;

export const ProductCount = styled.Text`
  position: absolute;
  color: #000;
  font-size: 32px;
  font-weight: 800;
  top: 40.23px;
  left: 482px;
`;

export const TotalPriceView = styled.View`
  flex-direction: row;
  width: 580px;
  height: 38px;
  margin-left: 82px;
  margin-top: 69.23px;
  align-items: center;
  justify-content: space-between;
`;

export const TotalPriceText = styled.Text`
  color: #000;
  font-size: 32px;
  font-weight: 700;
  width: 146px;
`;

export const HrLine3 = styled.View`
  height: 30px;
  width: 4px;
  background: rgba(0, 0, 0, 0.6);
  left: -70px;
`;

export const TotalPriceNum = styled.Text`
  color: #000;
  font-size: 32px;
  font-weight: 700;
  width: 246px;
  text-align: right;
`;

export const OrderButton = styled.TouchableOpacity`
  width: 385px;
  height: 76px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #000;
  margin-left: 727px;
  margin-top: -59px;
  justify-content: center;
`;

export const OrderButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
`;
