import styled from 'styled-components/native';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../common/ResponsiveSize';

export const Order = styled.TouchableOpacity`
  width: ${widthPercentage(247)}px;
  height: ${heightPercentage(216)}px;
  flex-shrink: 0;
  border-radius: ${fontPercentage(12)}px;
  background: #fff;
  margin: ${heightPercentage(7)}px ${widthPercentage(8)}px;
`;
export const AppOrderTop = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  height: ${heightPercentage(38)}px;
  background: #ffeda6;
  border-top-left-radius: ${fontPercentage(12)}px;
  border-top-right-radius: ${fontPercentage(12)}px;
  flex-direction: row;
  justify-content: center;
`;

export const SiteOrderTop = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  height: ${heightPercentage(38)}px;
  background: #b0cbff;
  border-top-left-radius: ${fontPercentage(12)}px;
  border-top-right-radius: ${fontPercentage(12)}px;
  flex-direction: row;
  justify-content: center;
`;

export const OrderTopText = styled.Text`
  color: #000;
  font-size: ${fontPercentage(16)}px;
  font-weight: 600;
  align-self: center;
  margin: 0 ${widthPercentage(15)}px;
`;

export const OrderContentView = styled.View`
  align-self: center;
  width: ${widthPercentage(200)}px;
  top: ${heightPercentage(40)}px;
  flex-direction: row;
  justify-content: space-between;
`;
export const OrderContentText = styled.Text`
  color: #000;
  font-size: ${fontPercentage(16)}px;
  font-weight: 600;
  margin-top: ${heightPercentage(13)}px;
`;

export const OrderContentTime = styled.Text`
  position: absolute;
  color: rgba(0, 0, 0, 0.6);
  font-size: ${fontPercentage(18)}px;
  font-weight: 600;
  top: ${heightPercentage(158)}px;
  left: ${widthPercentage(111)}px;
`;

export const OrderContentCnt = styled.Text`
  position: absolute;
  color: #ff4343;
  font-size: ${fontPercentage(18)}px;
  font-weight: 600;
  top: ${heightPercentage(181.77)}px;
  left: ${widthPercentage(92)}px;
`;

export const HrLine = styled.View`
  border: ${fontPercentage(0.9)}px solid black;
  width: 0;
  height: ${heightPercentage(17)}px;
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
  width: ${widthPercentage(810)}px;
  height: ${heightPercentage(320)}px;
  border-radius: ${fontPercentage(12)}px;
  background: #fff;
  justify-content: center;
  align-items: center;
`;

export const CloseBtnImg = styled.TouchableOpacity`
  position: absolute;
  top: ${heightPercentage(14.77)}px;
  left: ${widthPercentage(19)}px;
`;

export const BtnText = styled.Text`
  color: #000;
  font-size: ${fontPercentage(24)}px;
  font-weight: 700;
`;
