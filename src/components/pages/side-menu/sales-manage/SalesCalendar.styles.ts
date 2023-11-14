import styled from 'styled-components/native';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../common/ResponsiveSize';

export const Box = styled.View`
  width: 109.2%;
  background: tomato;
  margin-bottom: ${heightPercentage(150)}px;
`;

export const HeaderView = styled.View`
  flex-direction: column;
`;
export const HeaderSalesView = styled.View`
  flex-direction: row;
  margin-top: ${heightPercentage(33.19)}px;
`;

export const HeaderSalesView1 = styled.View`
  margin-right: ${widthPercentage(297.64)}px;
  margin-bottom: ${heightPercentage(68)}px;
`;
export const HeaderSalesView2 = styled.View``;

export const HeaderSalesText = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  font-size: ${fontPercentage(16)}px;
  font-weight: 500;
`;

export const HeaderSalesText1 = styled.Text`
  color: #000;
  font-size: ${fontPercentage(32)}px;
  font-weight: 700;
`;

export const HeaderSalesText2 = styled.Text`
  color: #ff4343;
  font-size: ${fontPercentage(32)}px;
  font-weight: 700;
`;
export const HeaderText = styled.Text`
  color: #000;
  text-align: center;
  font-size: ${fontPercentage(24)}px;
  font-weight: 500;
`;

export const CalendarBox = styled.View`
  height: ${heightPercentage(100)}px;
  align-items: center;
  //justify-content: center;
`;

export const CalenderTextBox = styled.View`
  width: ${widthPercentage(60)}px;
  height: ${heightPercentage(60)}px;
  border-radius: ${fontPercentage(50)}px;
  justify-content: center;
  background: grey;
`;

export const DayText = styled.Text`
  color: #000;
  font-size: ${fontPercentage(24)}px;
  font-weight: 500;
  text-align: center;
`;

export const SalesPlus = styled.Text`
  color: #000;
  text-align: right;
  font-size: ${fontPercentage(16)}px;
  font-weight: 400;
`;

export const SalesMinus = styled.Text`
  color: #ff4343;
  text-align: right;
  font-size: ${fontPercentage(16)}px;
  font-weight: 400;
`;
