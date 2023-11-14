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
  align-items: center;
  top: 0;
  width: 100%;
  height: ${heightPercentage(60)}px;
  background: #ffca42;
  border-top-left-radius: ${fontPercentage(12)}px;
  border-top-right-radius: ${fontPercentage(12)}px;
  flex-direction: row;
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
  margin-left: ${widthPercentage(651)}px;
`;

export const OrderModalBox = styled.View`
  margin-top: ${heightPercentage(36.27)}px;
  width: ${widthPercentage(625)}px;
  height: ${heightPercentage(114)}px;
  border-radius: ${fontPercentage(12)}px;
  background: #fff;
  border: ${fontPercentage(1)}px solid #000;
`;

export const OrderModalBoxTitle = styled.Text`
  color: #000;
  font-size: ${fontPercentage(24)}px;
  font-weight: 800;
  background: #fff;
  margin-top: ${heightPercentage(-15)}px;
  align-self: center;
  text-align: center;
  width: ${widthPercentage(186)}px;
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
  font-size: ${fontPercentage(24)}px;
  font-weight: 600;
  margin: 0 ${widthPercentage(25)}px;
`;

export const HrLine2 = styled.View`
  border: ${fontPercentage(1)}px solid #000;
  width: 0;
  height: ${heightPercentage(56)}px;
  align-self: center;
`;

export const OrderModalBtnView = styled.View`
  flex-direction: row;
`;

export const OrderModalBtn = styled.TouchableOpacity`
  width: ${widthPercentage(208)}px;
  height: ${heightPercentage(54)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${fontPercentage(12)}px;
  background: ${({pressed}) => (pressed ? '#FFCA42' : '#d2d2d2')};
  margin: ${heightPercentage(25.23)}px ${widthPercentage(23)}px;
`;

export const BtnText = styled.Text`
  color: #000;
  font-size: ${fontPercentage(24)}px;
  font-weight: 700;
`;
