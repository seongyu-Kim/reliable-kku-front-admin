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

type CalendarDataProps = {
        lastMonthOnMonth: number,
        totalSalesOfMonth: number,
        totalRefundSalesOfMonth: number,
        total: {
            totalSales: number,
            refundTotalSales: number,
        }[],
    };

const SalesCalendar =  ({ totalSalesOfMonth, totalRefundSalesOfMonth, total }: CalendarDataProps) => {
    let totalSalesArray : number[] = [];
    let refundTotalSalesArray : number[] = [];
    if (total === undefined) {
        const date = new Date();
        const days = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        for (let i = 0; i < days; i++) {
            totalSalesArray.push(0);
            refundTotalSalesArray.push(0);
        }
    }else {
        totalSalesArray = total.map(
            item => item.totalSales,
        );
        refundTotalSalesArray = total.map(
            item => item.refundTotalSales,
        );
    }


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
                    const index = parseInt(String(date.day)) - 1;

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
                                            {totalSalesOfMonth}
                                        </styles.HeaderSalesText1>
                                    </styles.HeaderSalesView1>

                                    <styles.HeaderSalesView2>
                                        <styles.HeaderSalesText>
                                            이번 달 총 환불
                                        </styles.HeaderSalesText>
                                        <styles.HeaderSalesText2>
                                            {totalRefundSalesOfMonth}
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
