import * as styles from './SalesCalendar.styles';
import {Calendar} from 'react-native-calendars';
import React from 'react';
import {fontPercentage} from '../../../common/ResponsiveSize';

function getCurrentDate(): string {
  const today = new Date();
  const year = today.getFullYear().toString();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const SalesCalendar: React.FC<{calendarData: any}> = calendarData => {
  const totalSalesArray = calendarData.calendarData.total.map(
    item => item.totalSales,
  );
  const refundTotalSalesArray = calendarData.calendarData.total.map(
    item => item.refundTotalSales,
  );
  return (
    <styles.Box>
      <Calendar
        theme={{
          calendarBackground: '#F5F5F5',
          arrowColor: '#0000004D',
          todayTextColor: '#fff',
          textDayHeaderFontSize: fontPercentage(21),
          dayTextColor: '#2d4150',
        }}
        hideExtraDays={true}
        dayComponent={({date, state, marking, theme}) => {
          if (date === undefined) {
            return <></>;
          }
          const index = parseInt(date.day) - 1;

          return (
            <styles.CalendarBox>
              <styles.CalenderTextBox
                style={{
                  backgroundColor:
                    date.dateString === getCurrentDate() ? '#FFCA42' : '',
                }}>
                <styles.DayText>{date.day}</styles.DayText>
              </styles.CalenderTextBox>

              <styles.SalesPlus>{totalSalesArray[index]}</styles.SalesPlus>
              <styles.SalesMinus>
                -{refundTotalSalesArray[index]}
              </styles.SalesMinus>
            </styles.CalendarBox>
          );
        }}
        renderHeader={date => {
          const year = date.toString('yyyy');
          const month = date.toString('MM');
          const formattedDate = `${year}년 ${month}월`;
          return (
            <>
              <styles.HeaderView>
                <styles.HeaderText>{formattedDate}</styles.HeaderText>
                <styles.HeaderSalesView>
                  <styles.HeaderSalesView1>
                    <styles.HeaderSalesText>
                      이번 달 총 매출
                    </styles.HeaderSalesText>
                    <styles.HeaderSalesText1>
                      {calendarData.calendarData.totalSalesOfMonth}
                    </styles.HeaderSalesText1>
                  </styles.HeaderSalesView1>

                  <styles.HeaderSalesView2>
                    <styles.HeaderSalesText>
                      이번 달 총 환불
                    </styles.HeaderSalesText>
                    <styles.HeaderSalesText2>
                      {calendarData.calendarData.totalRefundSalesOfMonth}
                    </styles.HeaderSalesText2>
                  </styles.HeaderSalesView2>
                </styles.HeaderSalesView>
              </styles.HeaderView>
            </>
          );
        }}
      />
    </styles.Box>
  );
};

export default SalesCalendar;
