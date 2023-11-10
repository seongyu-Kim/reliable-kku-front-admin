import styled from 'styled-components/native';

interface MenuTextProps {
  selectedTopMenu: string;
  selectedSideMenu: string;
}

export const TopMenuView = styled.View<{isSideMenu: boolean}>`
  flex-direction: row;
`;

export const TopMenuViewSm = styled.View<{isSideMenu: boolean}>`
  flex-direction: row;
  left: 120px;
  justify-content: center;
`;

export const TopMenuText = styled.Text<MenuTextProps>`
  color: ${props =>
    props.selectedTopMenu ? 'rgba(0, 0, 0, 0.60)' : 'rgba(0, 0, 0, 0.30)'};
  font-size: 40px;
  font-weight: 700;
  margin: 0 138.5px;
`;

export const TopMenuTextSm = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  font-size: 40px;
  font-weight: 700;
  margin: 0 131.21px;
`;

export const HrLine1 = styled.View`
  position: absolute;
  top: 110.55px;
  left: 125px;
  width: 250px;
  height: 4px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.6);
`;

export const HrLine2 = styled.View`
  position: absolute;
  top: 110.55px;
  left: 472px;
  width: 250px;
  height: 4px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.6);
`;

export const HrLine3 = styled.View`
  position: absolute;
  top: 110.55px;
  left: 819px;
  width: 250px;
  height: 4px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.6);
`;

export const HrLine4 = styled.View`
  position: absolute;
  top: 108px;
  left: 311.5px;
  width: 800px;
  height: 4px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.6);
`;

export const MenuImg = styled.TouchableOpacity`
  position: absolute;
  top: 41.98px;
  left: 42.88px;
  z-index: 1;
`;

export const SideMenuView = styled.View`
  position: absolute;
  width: 196.75px;
  height: 834px;
  background: #fff;
  left: 0;
`;

export const SideMenuText = styled.Text<MenuTextProps>`
  left: 42.87px;
  color: ${props =>
    props.selectedSideMenu ? 'rgba(0, 0, 0, 0.60)' : 'rgba(0, 0, 0, 0.30)'};
  font-size: 32px;
  font-weight: 700;
`;

export const SideMenuCat = styled.View`
  top: 33.77px;
  left: 49px;
`;
