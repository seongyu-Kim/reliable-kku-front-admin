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
  width: ${widthPercentage(810)}px;
  height: ${heightPercentage(320)}px;
  border-radius: ${fontPercentage(12)}px;
  background: #fff;
  align-items: center;
`;

export const OrderModalTop = styled.View`
  top: 0;
  width: 100%;
  height: ${heightPercentage(60)}px;
  background: #ffca42;
  border-top-left-radius: ${fontPercentage(12)}px;
  border-top-right-radius: ${fontPercentage(12)}px;
  flex-direction: row;
  align-items: center;
`;

export const CloseBtnImg = styled.TouchableOpacity`
  position: absolute;
  top: ${heightPercentage(14.77)}px;
  left: ${widthPercentage(19)}px;
`;

export const OrderModalTopText = styled.Text`
  color: #000;
  font-size: ${fontPercentage(32)}px;
  font-weight: 700;
`;

export const BigBtnView = styled.View`
  flex-direction: row;
`;
export const SmallBtnView = styled.View`
  flex-direction: row;
`;

export const PickupBtn = styled.TouchableOpacity`
  width: ${widthPercentage(320)}px;
  height: ${heightPercentage(106)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${fontPercentage(12)}px;
  background: #78e35e;
  margin-top: ${heightPercentage(40.23)}px;
  margin-right: ${widthPercentage(13)}px;
`;

export const CompeleteBtn = styled.TouchableOpacity`
  width: ${widthPercentage(320)}px;
  height: ${heightPercentage(106)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${fontPercentage(12)}px;
  background: #ffca42;
  margin-top: ${heightPercentage(40.23)}px;
  margin-right: ${widthPercentage(13)}px;
`;

export const BigBtnText = styled.Text`
  color: #000;
  font-size: ${fontPercentage(32)}px;
  font-weight: 800;
`;

export const CancelBtn = styled.TouchableOpacity`
  width: ${widthPercentage(208)}px;
  height: ${heightPercentage(54)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${fontPercentage(12)}px;
  border: ${fontPercentage(1)}px solid #f00;
  margin-top: ${heightPercentage(26)}px;
`;

export const Refundbtn = styled.TouchableOpacity`
  width: ${widthPercentage(208)}px;
  height: ${heightPercentage(54)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${fontPercentage(12)}px;
  border: ${fontPercentage(1)}px solid #2f57e5;
  margin: ${heightPercentage(26)}px ${widthPercentage(22)}px;
`;

export const NotReceivedBtn = styled.TouchableOpacity`
  width: ${widthPercentage(208)}px;
  height: ${heightPercentage(54)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${fontPercentage(12)}px;
  border: ${fontPercentage(1)}px solid #000;
  margin-top: ${heightPercentage(26)}px;
`;

export const CancelBtnText = styled.Text`
  color: #f00;
  font-size: ${fontPercentage(24)}px;
  font-weight: 700;
`;

export const RefundBtnText = styled.Text`
  color: #2f57e5;
  font-size: ${fontPercentage(24)}px;
  font-weight: 700;
`;

export const NotReceivecBtnText = styled.Text`
  color: #000;
  font-size: ${fontPercentage(24)}px;
  font-weight: 700;
`;
