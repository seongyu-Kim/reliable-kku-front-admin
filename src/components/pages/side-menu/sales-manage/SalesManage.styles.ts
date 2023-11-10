import styled from 'styled-components/native';

export const SalesManageBox = styled.View`
  position: absolute;
  flex: 1;
  height: 86.3%;
  width: 83.3%;
  right: 0;
  bottom: 0;
`;

export const DropDownView = styled.View`
  margin-top: 42px;
  margin-left: 467.25px;
  flex-direction: row;
`;

export const DropDownCloseView = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 132px;
  height: 39px;
  border-radius: 12px;
  background: #2a2a2a;
`;

export const DropDownArrow = styled.View`
  position: absolute;
  right: 10px;
`;

export const DropDownCloseText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  margin-left: 10px;
`;

export const DropDownOpenView = styled.View`
  position: absolute;
  top: 35px;
  left: 100px;
  width: 129.546px;
  height: 97.95px;
  border-radius: 12px;
  background: #fff;
  justify-content: center;
  align-items: center;
`;

export const DropDownOpenText = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  font-size: 24px;
  font-weight: 600;
  margin: 7.96px 0;
`;

export const DropDownHr = styled.View`
  width: 99px;
  height: 1px;
  border-radius: 12px;
  background: #e0e0e0;
`;

export const CalendarView = styled.View`
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

export const CalenderButton = styled.TouchableOpacity`
  width: 41px;
  height: 41px;
  flex-shrink: 0;
  border-radius: 12px;
  background: ${props => (props.isSelected ? '#FFCA42' : 'rgba(0, 0, 0, 0.6)')};
  backdrop-filter: blur(25px);
  justify-content: center;
  align-items: center;
  margin-top: 190px;
`;

export const StyledCalendar = styled.View`
  width: 407px;
  height: 331px;
  margin-top: 190px;
  margin-left: 702px;
`;

export const PeriodBoxView = styled.TouchableOpacity`
  width: 336px;
  height: 39px;
  margin-left: 23px;
  border-radius: 12px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  flex-direction: row;
`;

export const PeriodCalendarImg = styled.View`
  positiion: absolute;
  margin-left: 12px;
  margin-top: 8.5px;
`;

export const PeriodDateText1 = styled.Text`
  position: absolute;
  color: rgba(0, 0, 0, 0.3);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  margin-left: 42px;
  margin-top: 8px;
`;

export const PeriodDateText2 = styled.Text`
  position: absolute;
  color: #000;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  margin-left: 42px;
  margin-top: 8px;
`;

export const PeriodCalendarTime = styled.Text`
  position: absolute;
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  font-weight: 300;
  margin-top: 45px;
  margin-left: 335px;
`;

export const PeriodCalendarClear = styled.TouchableOpacity`
  position: absolute;
  flex-direction: row;
  margin-top: 45px;
  margin-left: 406.464px;
`;

export const PeriodCalendarClearText = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  font-weight: 300;
`;

export const SalesBoxView = styled.View`
  margin-top: 136.84px;
  margin-left: 71px;
  width: 887px;
  height: 307px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #fff;
`;

export const SalesImgView = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: center;
  top: -32px;
`;

export const SalesImgText = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  font-size: 24px;
  font-weight: 800;
  margin-left: 11px;
`;

export const SalesContentRowView = styled.View`
  flex-direction: row;
  align-self: center;
`;

export const SalesContentView = styled.View`
  justify-content: center;
  align-items: flex-start;
  width: 162px;
  margin: 0 82.75px;
`;

export const SalesContentSmText = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  font-weight: 500;
`;

export const SalesContentText1 = styled.Text`
  color: #000;
  font-size: 32px;
  font-weight: 700;
`;

export const SalesContentText2 = styled.Text`
  color: #ff4343;
  font-size: 32px;
  font-weight: 700;
`;

export const PaymentBoxView = styled.View`
  width: 887px;
  height: 463px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #fff;
  margin-left: 71px;
  margin-bottom: 100px;
`;

export const GraphView = styled.View`
  flex: 1;
  margin-left: 0px;
`;

//매출달력
export const CalendarBoxView = styled.View`
  margin-top: 123.42px;
`;

export const CalendarBoxImgView = styled.View`
  flex-direction: row;
  left: 72px;
`;

export const CalendarBoxText = styled.Text`
  margin-left: 11px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 24px;
  font-weight: 800;
`;

export const LastMonthRateView = styled.View`
  width: 130px;
  height: 27px;
  border-radius: 12px;
  border: 2px solid #ff4343;
  justify-content: center;
  margin-left: 24px;
`;

export const LastMonthRateText = styled.Text`
  color: #ff4343;
  text-align: center;

  font-size: 16px;
  font-weight: 400;
`;

export const CalendarBox = styled.View`
  width: 900px;
`;

//excel
export const SalesExcelView = styled.TouchableOpacity`
  position: absolute;
  flex-direction: row;
  z-index: 1;
  margin-left: 789px;
  margin-top: -27.84px;
`;

export const SalesExcelText = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  font-weight: 300;
  margin-left: 6px;
`;
