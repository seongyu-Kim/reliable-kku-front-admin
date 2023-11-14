import styled from 'styled-components/native';
import {fontPercentage, heightPercentage, widthPercentage} from "../../../common/ResponsiveSize";

export const PlusMenuView = styled.View`
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

export const PlusMenuTitle = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  font-size: ${fontPercentage(40)}px;
  font-weight: 700;
  width: ${widthPercentage(139)}px;
  align-self: center;
`;

export const HrLine = styled.View`
  width: ${widthPercentage(250)}px;
  height: ${heightPercentage(4)}px;
  flex-shrink: 0;
  border-radius: ${fontPercentage(12)}px;
  background: rgba(0, 0, 0, 0.6);
  align-self: center;
`;

export const MenuBox = styled.View`
  flex-direction: row;
  background: grey;
`;

export const MenuContentView = styled.View`
  width: ${widthPercentage(640)}px;
  flex-direction: row;
`;

export const MenuDescription = styled.Text`
  color: #000;
  font-size: ${fontPercentage(24)}px;
  font-weight: 600;
  margin-left: ${widthPercentage(82)}px;
  width: ${widthPercentage(140)}px;
  align-self: center;
`;
//

export const MenuInput = styled.TextInput`
  width: ${widthPercentage(517)}px;
  height: ${heightPercentage(70)}px;
  flex-shrink: 0;
  border-radius: ${fontPercentage(12)}px;
  background: #fff;
  margin-left: -${widthPercentage(17)}px;
`;

export const MenuInput2 = styled.TextInput`
  width: ${widthPercentage(517)}px;
  height: ${heightPercentage(160)}px;
  flex-shrink: 0;
  border-radius: ${fontPercentage(12)}px;
  background: #fff;
  margin-left: -${widthPercentage(17)}px;
`;

export const MenuImageView = styled.View`
  position: absolute;
  top: ${heightPercentage(240)}px;
  right: ${widthPercentage(72)}px;
  width: ${widthPercentage(345)}px;
  height: ${heightPercentage(345)}px;
  flex-shrink: 0;
  border-radius: ${fontPercentage(12)}px;
  background: #d9d9d9;
`;

export const PlusImage = styled.TouchableOpacity`
  position: absolute;
  right: ${widthPercentage(12)}px;
  bottom: ${heightPercentage(14)}px;
  width: ${widthPercentage(43)}px;
  height: ${heightPercentage(43)}px;
  background: #fff;
  border-radius: ${fontPercentage(100)}px;
  justify-content: center;
  align-items: center;
`;

export const PlusMenuBtn = styled.TouchableOpacity`
  width: ${widthPercentage(1030)}px;
  height: ${heightPercentage(104)}px;
  border-radius: ${fontPercentage(12)}px;
  background: #000;
  justify-content: center;
  align-self: center;
`;

export const PlusMenuBtnText = styled.Text`
  color: #fff;
  font-size: ${fontPercentage(40)}px;
  font-weight: 700;
  text-align: center;
`;

export const ImgModalView = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: rgba(0, 0, 0, 0.3);
`;

export const CloseButtonImg2 = styled.TouchableOpacity`
  position: absolute;
  top: ${heightPercentage(14.55)}px;
  left: ${widthPercentage(19)}px;
  z-index: 3;
`;

export const ImgModalBox = styled.View`
  width: ${widthPercentage(560)}px;
  height: ${heightPercentage(174)}px;
  background: #fff;
  border-radius: ${fontPercentage(12)}px;
`;

export const ImgIconView = styled.View`
  justify-content: center;
  flex-direction: row;
`;

export const Icon = styled.TouchableOpacity`
  width: ${widthPercentage(78)}px;
  height: ${heightPercentage(78)}px;
  border-radius: ${fontPercentage(50)}px;
  background: #efefef;
  justify-content: center;
  align-items: center;
  margin: ${heightPercentage(50)}px ${widthPercentage(20)}px;
`;
