import styled from 'styled-components/native';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../common/ResponsiveSize';

export const SalesManageBox = styled.View`
  position: absolute;
  flex: 1;
  height: ${heightPercentage(710)}px;
  width: ${widthPercentage(984)}px;
  right: 0;
  bottom: 0;
`;

export const DropDownView = styled.View`
  margin-top: ${heightPercentage(42)}px;
  margin-left: ${widthPercentage(467.25)}px;
  flex-direction: row;
`;

export const DropDownCloseView = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: ${widthPercentage(132)}px;
  height: ${heightPercentage(39)}px;
  border-radius: ${fontPercentage(12)}px;
  background: #2a2a2a;
`;

export const DropDownArrow = styled.View`
  position: absolute;
  right: ${widthPercentage(10)}px;
`;

export const DropDownCloseText = styled.Text`
  color: #fff;
  font-size: ${fontPercentage(24)}px;
  font-weight: 600;
  margin-left: ${widthPercentage(10)}px;
`;

export const DropDownOpenView = styled.View`
  position: absolute;
  top: ${heightPercentage(35)}px;
  left: ${widthPercentage(100)}px;
  width: ${widthPercentage(129.546)}px;
  height: ${heightPercentage(97.95)}px;
  border-radius: ${fontPercentage(12)}px;
  background: #fff;
  justify-content: center;
  align-items: center;
`;

export const DropDownOpenText = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  font-size: ${fontPercentage(24)}px;
  font-weight: 600;
  margin: ${heightPercentage(7.96)}px 0;
`;

export const DropDownHr = styled.View`
  width: ${widthPercentage(99)}px;
  height: ${heightPercentage(1)}px;
  border-radius: ${fontPercentage(24)}px;
  background: #e0e0e0;
`;

export const CalendarView = styled.View`
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

export const CalenderButton = styled.TouchableOpacity`
  width: ${widthPercentage(41)}px;
  height: ${heightPercentage(41)}px;
  flex-shrink: 0;
  border-radius: ${fontPercentage(12)}px;
  background: ${props => (props.isSelected ? '#FFCA42' : 'rgba(0, 0, 0, 0.6)')};
  backdrop-filter: blur(25px);
  justify-content: center;
  align-items: center;
  margin-top: ${heightPercentage(190)}px;
`;

export const StyledCalendar = styled.View`
  width: ${widthPercentage(407)}px;
  height: ${heightPercentage(331)}px;
  margin-top: ${heightPercentage(190)}px;
  margin-left: ${widthPercentage(702)}px;
`;

export const PeriodBoxView = styled.TouchableOpacity`
  width: ${widthPercentage(336)}px;
  height: ${heightPercentage(39)}px;
  margin-left: ${widthPercentage(23)}px;
  border-radius: ${fontPercentage(12)}px;
  border: ${fontPercentage(2)}px solid rgba(0, 0, 0, 0.3);
  flex-direction: row;
`;

export const PeriodCalendarImg = styled.View`
  positiion: absolute;
  margin-left: ${widthPercentage(12)}px;
  margin-top: ${heightPercentage(8.5)}px;
`;

export const PeriodDateText1 = styled.Text`
  position: absolute;
  color: rgba(0, 0, 0, 0.3);
  text-align: center;
  font-size: ${fontPercentage(16)}px;
  font-weight: 400;
  margin-left: ${widthPercentage(42)}px;
  margin-top: ${heightPercentage(8)}px;
`;

export const PeriodDateText2 = styled.Text`
  position: absolute;
  color: #000;
  text-align: center;
  font-size: ${fontPercentage(16)}px;
  font-weight: 400;
  margin-left: ${widthPercentage(42)}px;
  margin-top: ${heightPercentage(8)}px;
`;

export const PeriodCalendarTime = styled.Text`
  position: absolute;
  color: rgba(0, 0, 0, 0.6);
  font-size: ${fontPercentage(16)}px;
  font-weight: 300;
  margin-top: ${heightPercentage(45)}px;
  margin-left: ${widthPercentage(335)}px;
`;

export const PeriodCalendarClear = styled.TouchableOpacity`
  position: absolute;
  flex-direction: row;
  margin-top: ${heightPercentage(45)}px;
  margin-left: ${widthPercentage(406.464)}px;
`;

export const PeriodCalendarClearText = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  font-size: ${fontPercentage(16)}px;
  font-weight: 300;
`;

export const SalesBoxView = styled.View`
  margin-top: ${heightPercentage(136.84)}px;
  margin-left: ${widthPercentage(71)}px;
  width: ${widthPercentage(887)}px;
  height: ${heightPercentage(307)}px;
  flex-shrink: 0;
  font-size: ${fontPercentage(12)}px;
  background: #fff;
`;

export const SalesImgView = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: center;
  top: ${heightPercentage(-32)}px;
`;

export const SalesImgText = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  font-size: ${fontPercentage(24)}px;
  font-weight: 800;
  margin-left: ${widthPercentage(11)}px;
`;

export const SalesContentRowView = styled.View`
  flex-direction: row;
  align-self: center;
`;

export const SalesContentView = styled.View`
  justify-content: center;
  align-items: flex-start;
  width: ${widthPercentage(162)}px;
  margin: 0 ${widthPercentage(82.75)}px;
`;

export const SalesContentSmText = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  font-size: ${fontPercentage(16)}px;
  font-weight: 500;
`;

export const SalesContentText1 = styled.Text`
  color: #000;
  font-size: ${fontPercentage(32)}px;
  font-weight: 700;
`;

export const SalesContentText2 = styled.Text`
  color: #ff4343;
  font-size: ${fontPercentage(32)}px;
  font-weight: 700;
`;

export const PaymentBoxView = styled.View`
  width: ${widthPercentage(887)}px;
  height: ${heightPercentage(463)}px;
  flex-shrink: 0;
  border-radius: ${fontPercentage(12)}px;
  background: #fff;
  margin-left: ${widthPercentage(71)}px;
  margin-bottom: ${heightPercentage(100)}px;
`;

export const GraphView = styled.View`
  flex: 1;
  margin-left: 0;
`;

//매출달력
export const CalendarBoxView = styled.View`
  margin-top: ${heightPercentage(123.42)}px;
`;

export const CalendarBoxImgView = styled.View`
  flex-direction: row;
  left: ${widthPercentage(72)}px;
`;

export const CalendarBoxText = styled.Text`
  margin-left: ${widthPercentage(11)}px;
  color: rgba(0, 0, 0, 0.6);
  font-size: ${fontPercentage(24)}px;
  font-weight: 800;
`;

export const LastMonthRateView = styled.View`
  width: ${widthPercentage(130)}px;
  height: ${heightPercentage(27)}px;
  border-radius: ${fontPercentage(12)}px;
  border: ${fontPercentage(2)}px solid #ff4343;
  justify-content: center;
  margin-left: ${widthPercentage(24)}px;
`;

export const LastMonthRateText = styled.Text`
  color: #ff4343;
  text-align: center;
  font-size: ${fontPercentage(16)}px;
  font-weight: 400;
`;

export const CalendarBox = styled.View`
  width: ${widthPercentage(900)}px;
`;

//excel
export const SalesExcelView = styled.TouchableOpacity`
  position: absolute;
  flex-direction: row;
  z-index: 1;
  margin-left: ${widthPercentage(789)}px;
  margin-top: ${heightPercentage(-27.84)}px;
`;

export const SalesExcelText = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  font-size: ${fontPercentage(16)}px;
  font-weight: 300;
  margin-left: ${widthPercentage(6)}px;
`;
