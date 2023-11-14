import styled from 'styled-components/native';
import {TouchableOpacity} from "react-native";
import {fontPercentage, heightPercentage, widthPercentage} from "../../../common/ResponsiveSize";

export const BusinessManageBox = styled.View`
  position: absolute;
    width: ${widthPercentage(984)}px;
    height: ${heightPercentage(710)}px;
  right: 0;
  bottom: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export type BusinessBtnProps = {
    isOperating: boolean | undefined;
}


export const BusinessBtn = styled(TouchableOpacity)<BusinessBtnProps>`
  width: ${widthPercentage(252)}px;
    height: ${heightPercentage(287)}px;
  border-radius: ${fontPercentage(12)}px;
  background: ${(props) => (props.isOperating ? '#FFCA42' : '#E0E0E0')};
  justify-content: center;
  align-items: center;
  margin: 0 ${fontPercentage(75)}px;
`;

export const BusinessBtnText = styled.Text`
  color: #000;
  font-size: ${fontPercentage(32)}px;
  font-weight: 600;
`;
