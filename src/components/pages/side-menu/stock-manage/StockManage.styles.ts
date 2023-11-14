import styled from 'styled-components/native';
import {fontPercentage, heightPercentage, widthPercentage} from "../../../common/ResponsiveSize";

export const StockManageBox = styled.View`
  position: absolute;
  height: ${heightPercentage(710)}px;
  width: ${widthPercentage(984)}px;
  right: 0;
  bottom: 0;
`;

export const StockMangeDiv = styled.View`
  margin-left: ${widthPercentage(55.25)}px;
`;

export const StockManageView = styled.View`
  align-items: center;
  margin: 0 ${widthPercentage(40)}px;
`;

export const StockDeleteText = styled.Text`
  color: red;
  text-align: center;
  font-weight: 700;
`;

export const StockTitle = styled.Text`
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
  font-size: ${fontPercentage(32)}px;
  font-weight: 700;
`;

export const StockCatImg = styled.View`
  margin-top: ${heightPercentage(30)}px;
  align-items: center;
`;

export const StockBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: ${widthPercentage(200)}px;
  height: ${heightPercentage(54)}px;
  border-radius: ${fontPercentage(12)}px;
  background: ${props => (props.disabled ? '#E0E0E0' : '#FFCA42')};
  padding: ${heightPercentage(16)}px ${widthPercentage(24)}px;
  gap: 8px;
`;

export const StockBtnText = styled.Text`
  color: rgba(0, 0, 0, 0.8);
  font-size: ${fontPercentage(24)}px;
  font-weight: 600;
`;

export const StockPlusBtn = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: ${heightPercentage(44)}px;
  margin-left: ${widthPercentage(697)}px;
  align-items: center;
`;
export const StockPlusBtnText = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  font-size: ${fontPercentage(24)}px;
  font-weight: 700;
  margin-left: ${widthPercentage(13)}px;
`;
