import styled from 'styled-components/native';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../ResponsiveSize';
import {Text, TextProps} from 'react-native';

type OrderStatusProps = {
  children: string;
  orderStatus: boolean;
} & TextProps;

type SelectedSideMenuProps = {
  children: string;
  selectedSideMenu: boolean;
} & TextProps;

export const TopMenuView = styled.View<{isSideMenu: boolean}>`
  flex-direction: row;
`;

export const TopMenuViewSm = styled.View<{isSideMenu: boolean}>`
  flex-direction: row;
  left: ${widthPercentage(120)}px;
  justify-content: center;
`;

export const TopMenuText = styled.Text<OrderStatusProps>`
  color: ${props =>
    props.orderStatus ? 'rgba(0, 0, 0, 0.60)' : 'rgba(0, 0, 0, 0.30)'};
  font-size: ${fontPercentage(40)}px;
  font-weight: 700;
  margin: 0 ${widthPercentage(138.5)}px;
`;

export const TopMenuTextSm = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  font-size: ${fontPercentage(40)}px;
  font-weight: 700;
  margin: 0 ${widthPercentage(131.21)}px;
`;

export const HrLine1 = styled.View`
  position: absolute;
  top: ${heightPercentage(110.55)}px;
  left: ${widthPercentage(125)}px;
  width: ${widthPercentage(250)}px;
  height: ${heightPercentage(4)}px;
  border-radius: ${fontPercentage(12)}px;
  background: rgba(0, 0, 0, 0.6);
`;

export const HrLine2 = styled.View`
  position: absolute;
  top: ${heightPercentage(110.55)}px;
  left: ${widthPercentage(472)}px;
  width: ${widthPercentage(250)}px;
  height: ${heightPercentage(4)}px;
  border-radius: ${fontPercentage(12)}px;
  background: rgba(0, 0, 0, 0.6);
`;

export const HrLine3 = styled.View`
  position: absolute;
  top: ${heightPercentage(110.55)}px;
  left: ${widthPercentage(819)}px;
  width: ${widthPercentage(250)}px;
  height: ${heightPercentage(4)}px;
  border-radius: ${fontPercentage(12)}px;
  background: rgba(0, 0, 0, 0.6);
`;

export const HrLine4 = styled.View`
  position: absolute;
  top: ${heightPercentage(108)}px;
  left: ${widthPercentage(311.5)}px;
  width: ${widthPercentage(800)}px;
  height: ${heightPercentage(4)}px;
  border-radius: ${fontPercentage(12)}px;
  background: rgba(0, 0, 0, 0.6);
`;

export const MenuImg = styled.TouchableOpacity`
  position: absolute;
  top: ${heightPercentage(41.98)}px;
  left: ${widthPercentage(42.88)}px;
  z-index: 1;
`;

export const SideMenuView = styled.View`
  position: absolute;
  width: ${widthPercentage(196.75)}px;
  height: 100%;
  background: #fff;
  left: 0;
`;

export const SideMenuText = styled(Text)<SelectedSideMenuProps>`
  left: ${widthPercentage(42.87)}px;
  color: ${props =>
    props.selectedSideMenu ? 'rgba(0, 0, 0, 0.60)' : 'rgba(0, 0, 0, 0.30)'};
  font-size: ${fontPercentage(32)}px;
  font-weight: 700;
`;

export const SideMenuCat = styled.View`
  top: ${heightPercentage(33.77)}px;
  left: ${widthPercentage(49)}px;
`;
