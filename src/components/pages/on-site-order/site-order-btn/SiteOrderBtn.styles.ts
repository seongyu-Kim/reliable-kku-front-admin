import styled from 'styled-components/native';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../common/ResponsiveSize';

export const SiteOrderBtnView = styled.TouchableOpacity`
  position: absolute;
  width: ${widthPercentage(1030)}px;
  height: ${heightPercentage(104)}px;
  flex-shrink: 0;
  border-radius: ${fontPercentage(12)}px;
  background: #000;
  top: ${heightPercentage(690.55)}px;
  justify-content: center;
  align-items: center;
`;

export const SiteOrderBtnText = styled.Text`
  color: #fff;
  font-size: ${fontPercentage(40)}px;
  font-weight: 700;
  z-index: 3;
`;
