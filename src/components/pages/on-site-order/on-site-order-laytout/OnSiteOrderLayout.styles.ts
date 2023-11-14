import styled from 'styled-components/native';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../common/ResponsiveSize';

export const OnSiteView = styled.View`
  width: 100%;
  height: 100%;
  background: #f5f5f5;
`;

export const CloseButtonImg = styled.TouchableOpacity`
  position: absolute;
  width: ${widthPercentage(40)}px;
  height: ${heightPercentage(40)}px;
  top: ${heightPercentage(36.77)}px;
  left: ${widthPercentage(40)}px;
`;

export const OnSiteTitle = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  font-size: ${fontPercentage(40)}px;
  font-weight: 700;
  width: ${widthPercentage(250)}px;
  align-self: center;
  text-align: center;
`;

export const HrLine = styled.View`
  width: ${widthPercentage(250)}px;
  height: ${heightPercentage(4)}px;
  flex-shrink: 0;
  border-radius: ${fontPercentage(12)}px;
  background: rgba(0, 0, 0, 0.6);
  align-self: center;
`;

export const OnSiteContentView = styled.View`
  flex-direction: row;
`;

export const ProductCounterView = styled.View`
  height: ${heightPercentage(423)}px;
  width: ${widthPercentage(580)}px;
  margin-left: ${heightPercentage(82)}px;
`;

export const ProductCounter = styled.View`
  width: ${widthPercentage(580)}px;
  height: ${heightPercentage(118)}px;
  border-radius: ${fontPercentage(12)}px;
  margin: ${heightPercentage(11.5)}px 0;
  background: #fbfbfb;
`;

export const ProductHeaderView = styled.View`
  width: ${widthPercentage(202)}px;
`;

export const RedBeanImg = styled.View`
  margin-top: ${heightPercentage(13)}px;
  margin-left: ${widthPercentage(70)}px;
`;

export const ProductText1 = styled.Text`
  text-align: center;
  color: #000;
  font-size: ${fontPercentage(24)}px;
  font-weight: 600;
  margin-top: ${heightPercentage(1.23)}px;
`;

export const HrLine2 = styled.View`
  position: absolute;
  height: ${heightPercentage(70)}px;
  width: ${widthPercentage(2)}px;
  background: rgba(0, 0, 0, 0.6);
  top: ${heightPercentage(24.23)}px;
  left: ${widthPercentage(202)}px;
`;

export const ProductPrice = styled.Text`
  position: absolute;
  top: ${heightPercentage(45.23)}px;
  left: ${widthPercentage(251)}px;
  color: #000;
  font-size: ${fontPercentage(24)}px;
  font-weight: 600;
`;

export const PlusButton = styled.TouchableOpacity`
  position: absolute;
  top: ${heightPercentage(50.23)}px;
  left: ${widthPercentage(521)}px;
`;

export const MinusButton = styled.TouchableOpacity`
  position: absolute;
  top: ${heightPercentage(50.23)}px;
  left: ${widthPercentage(444)}px;
`;

export const ProductCount = styled.Text`
  position: absolute;
  color: #000;
  font-size: ${fontPercentage(32)}px;
  font-weight: 800;
  top: ${heightPercentage(40.23)}px;
  left: ${widthPercentage(482)}px;
`;

export const TotalPriceView = styled.View`
  flex-direction: row;
  width: ${widthPercentage(550)}px;
  height: ${heightPercentage(38)}px;
  margin-left: ${widthPercentage(82)}px;
  margin-top: ${heightPercentage(69.23)}px;
  align-items: center;
  justify-content: space-between;
`;

export const TotalPriceText = styled.Text`
  color: #000;
  font-size: ${fontPercentage(32)}px;
  font-weight: 700;
  width: ${widthPercentage(146)}px;
`;

export const HrLine3 = styled.View`
  height: ${heightPercentage(30)}px;
  width: ${widthPercentage(4)}px;
  background: rgba(0, 0, 0, 0.6);
  width: ${widthPercentage(-70)}px;
`;

export const TotalPriceNum = styled.Text`
  color: #000;
  font-size: ${fontPercentage(32)}px;
  font-weight: 700;
  width: ${widthPercentage(246)}px;
  text-align: right;
`;

export const OrderButton = styled.TouchableOpacity`
  width: ${widthPercentage(385)}px;
  height: ${heightPercentage(76)}px;
  flex-shrink: 0;
  border-radius: ${fontPercentage(12)}px;
  background: #000;
  margin-left: ${widthPercentage(727)}px;
  margin-top: ${heightPercentage(-59)}px;
  justify-content: center;
`;

export const OrderButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: ${fontPercentage(32)}px;
  font-weight: 700;
`;
