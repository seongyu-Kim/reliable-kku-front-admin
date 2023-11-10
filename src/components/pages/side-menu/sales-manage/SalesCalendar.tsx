// import * as styles from './SalesCalendar.styles';
// import {Calendar} from 'react-native-calendars';
// import {Alert, ScrollView, Text, View} from 'react-native';
// import {useEffect, useState} from 'react';
//
// function getCurrentDate(): string {
//   const today = new Date();
//   const year = today.getFullYear().toString();
//   const month = (today.getMonth() + 1).toString().padStart(2, '0');
//   const day = today.getDate().toString().padStart(2, '0');
//   return `${year}-${month}-${day}`;
// }
//
// interface CalendarProps {
//   orderedDay: number;
//   isOrdered: boolean;
// }
//
// const SalesCalendar = () => {
//   // const [month, setMonth] = useState(new Date().getMonth() + 1); // +1을 추가하여 1부터 12까지의 월 값을 얻습니다.
//   // const [year, setYear] = useState(new Date().getFullYear());
//   //
//   // const [calendar, setCalendar] = useState<CalendarProps[]>([]);
//
//   return (
//     // <styles.Box>
//     <Calendar
//       theme={{
//         calendarBackground: '#F5F5F5',
//         arrowColor: '#0000004D',
//         todayTextColor: '#FFF',
//         // textDayFontWeight: '400',
//         // textDayFontWeight: 'bold',
//         // textMonthFontWeight: '500',
//         // textDayHeaderFontWeight: '300',
//         // textDayFontSize: 16,
//       }}
//       hideExtraDays={true}
//       dayComponent={({date, state, marking, theme}) => {
//         if (date === undefined) {
//           return <></>;
//         }
//
//         // const matchingDate = calendar.find(
//         //   item => item.orderedDay === date?.day,
//         // );
//
//         return (
//           <styles.CalendarBox>
//             <styles.CalenderTextBox
//               style={{
//                 backgroundColor:
//                   date.dateString === getCurrentDate() ? '#FFCA42' : '',
//               }}>
//               <Text>{date.day}</Text>
//             </styles.CalenderTextBox>
//
//             <Text>+1,000</Text>
//           </styles.CalendarBox>
//         );
//       }}
//       renderHeader={date => {
//         const year = date.toString('yyyy');
//         const month = date.toString('MM');
//         const formattedDate = `${year}년 ${month}월`;
//         return <styles.Text>{formattedDate}</styles.Text>;
//       }}
//     />
//     // {/*</styles.Box>
//   );
// };
//
// export default SalesCalendar;

import * as styles from './SalesCalendar.styles';
import {Calendar} from 'react-native-calendars';
import {Text} from 'react-native';
import {HeaderSalesView} from './SalesCalendar.styles';
import React from 'react';

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
          textDayHeaderFontSize: 21,
          dayTextColor: '#2d4150',
          // textDayFontWeight: '400',
          // textDayFontWeight: 'bold',
          // textMonthFontWeight: '500',
          // textDayHeaderFontWeight: '300',
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
