import React, {useEffect, useState} from 'react';
import * as styles from './SalesManage.styles';
import {Modal, ScrollView, Share, TouchableOpacity} from 'react-native';
import DropDownOpen from '../../../../assets/images/dropDownOpen.svg';
import DropDownClose from '../../../../assets/images/dropDownClose.svg';
import {Calendar} from 'react-native-calendars';
import SalesImg from '../../../../assets/images/salesImg.svg';
import Margin from '../../../common/margin/Margin';
import {LineChart} from 'react-native-chart-kit';
import CalendarImg from '../../../../assets/images/calenderImg.svg';
import CalendarImg2 from '../../../../assets/images/calendarImg2.svg';
import CalendarButtonCheck from '../../../../assets/images/CalendarButtonCheck.svg';
import CalendarDateClear from '../../../../assets/images/calendarDateClear.svg';
import ExcelIcon from '../../../../assets/images/excelIcon.svg';
import {BASE_API} from '../../../../api/CommonApi';
import RNFS from 'react-native-fs';
import SalesCalendar from './SalesCalendar';
import {fontPercentage, heightPercentage, widthPercentage,} from '../../../common/ResponsiveSize';
import {AxiosResponse} from "axios";

let markedDates: Record<string, any> = {};
const TodayDate = new Date(); // 현재 날짜 객체 생성
const year = TodayDate.getFullYear(); // 년도 가져오기
const month = String(TodayDate.getMonth() + 1).padStart(2, '0'); // 월 가져오기 (0부터 시작하므로 +1, 두 자릿수로 맞추기 위해 padStart 사용)
const day = String(TodayDate.getDate()).padStart(2, '0'); // 일 가져오기 (두 자릿수로 맞추기 위해 padStart 사용)
const hours = String(TodayDate.getHours()).padStart(2, '0'); // 시간 가져오기 (두 자릿수로 맞추기 위해 padStart 사용)
const minutes = String(TodayDate.getMinutes()).padStart(2, '0'); // 분 가져오기 (두 자릿수로 맞추기 위해 padStart 사용)

const currentDateString = `${year}.${month}.${day} ${hours}:${minutes}`;
const todayStartDate = `${year}-${month}-${day}`;

const SalesManage: React.FC = () => {
    const [isDropOpen, setDropOpen] = useState(false);
    const [isCalendarVisible, setCalendarVisible] = useState(false);
    const [selectedDropDownValue, setSelectedDropDownValue] =
        useState('매출/영업');

    //날짜 선택
    const [selectedStartDate, setSelectedStartDate] = useState(todayStartDate);
    const [selectedEndDate, setSelectedEndDate] = useState('');
    const [isDateSelected, setIsDateSelected] = useState(false);

    //DropDown
    const options = ['매출/영업', '매출달력'];

    //API
    const [sales, setSales] = useState<{
        realAmount: number,
        paymentCount: number,
        avgPaymentAmount: number,
        refundAmount: number,
        refundCount: number,
        avgRefundAmount: number
    }>({
        realAmount: 0,
        paymentCount: 0,
        avgPaymentAmount: 0,
        refundAmount: 0,
        refundCount: 0,
        avgRefundAmount: 0,
    });
    const [graph, setGraph] = useState<[{
        eachTime: string;
        totalPrice: number
    }]>(
        [
            {
                eachTime: '',
                totalPrice: 0,
            },
        ],
    );
    const [calendarData, setCalendarData] = useState<{
        lastMonthOnMonth: number,
        totalSalesOfMonth: number,
        totalRefundSalesOfMonth: number,
        total: [{
            totalSales: number,
            refundTotalSales: number,
        }],
    }>({
        lastMonthOnMonth: 0,
        totalSalesOfMonth: 0,
        totalRefundSalesOfMonth: 0,
        total: [{
            totalSales: 0,
            refundTotalSales: 0,
        }],
    });

    //API 판매
    useEffect(() => {
        const fetchSales = () => {
            console.log(todayStartDate);
            BASE_API.get(
                `https://dev.deunku.com/api/v1/admin/sales?startDate=${selectedStartDate}&endDate=${selectedEndDate}`,
            )
                .then(response => {
                    setSales(response.data);
                    console.log(response.data);
                    console.log('!!!!@@@@@@@@@@@@@@@@@@@@@@@@@@@');
                })
                .catch(error => {
                    console.error('Error fetching fetchSales:', error);
                });
        };

        fetchSales();
    }, []);

    // API 그래프
    useEffect(() => {
        const fetchGraph = () => {
            BASE_API.get(
                'https://dev.deunku.com/api/v1/admin/sales/monthly?date=2023-11-09',
            )
                .then((response: AxiosResponse<[{
                    eachTime: string,
                    totalPrice: number
                }], any>) => {
                    response.data.map(item => ({
                        label: item.eachTime,
                        data: item.totalPrice,
                    }));
                    setGraph(response.data);
                    console.log(response.data);
                    console.log('그래그래그래그프그래그래그래프');
                })
                .catch(error => {
                    console.error('Error fetching fetchDates:', error);
                });
        };

        fetchGraph();
    }, []);

    // API 매출달력
    useEffect(() => {
        const fetchCalendar = () => {
            BASE_API.get(
                `https://dev.deunku.com/api/v1/admin/sales/calendar?date=${todayStartDate}`,
            )
                .then(response => {
                    setCalendarData(response.data);
                    if (response.data.count === undefined) {
                        let calender = calendarData;
                        calender.total.push({refundTotalSales: 0, totalSales: 0})
                        setCalendarData(calender)
                    }
                    console.log(response.data);
                    console.log('!!!!@@@@@@@@@@@@@@@@@@@@@@@@@@@');
                })
                .catch(error => {
                    console.error('Error fetching fetchDates:', error);
                });
        };

        fetchCalendar();
    }, []);

    //엑셀공유
    const downloadExcel = async () => {
        try {
            const response = await BASE_API.get(
                `https://dev.deunku.com/api/v1/admin/excel?startDate=${selectedStartDate}&endDate=${selectedEndDate}`,
                {
                    responseType: 'blob',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );

            const blob = response.data;
            const reader = new FileReader();

            reader.onloadend = async () => {
                try {
                    let result = reader.result as string;
                    const base64data = result.split(',')[1]; // base64 데이터 추출
                    const excelFileName = '매출.xlsx';
                    const path = `${RNFS.DocumentDirectoryPath}/${excelFileName}`;

                    // base64 데이터를 파일로 저장
                    await RNFS.writeFile(path, base64data, 'base64');

                    // 파일을 외부로 공유
                    const fileUri = `file://${path}`;
                    await Share.share({
                        url: fileUri,
                        title: 'Excel File',
                    });

                    console.log('Excel file downloaded and shared successfully:', path);
                } catch (shareError) {
                    console.error('Error sharing file:', shareError);
                }
            };

            reader.readAsDataURL(blob);
        } catch (downloadError) {
            console.error('Error downloading excel:', downloadError);
        }
    };

    const handleSelectOption = (option: React.SetStateAction<string>) => {
        setSelectedDropDownValue(option);
        setDropOpen(false);
    };

    //Calender
    const handleOpenCalendar = () => {
        setCalendarVisible(true);
    };

    const handleCloseCalendar = () => {
        setCalendarVisible(false);
    };

    const handleResetDates = () => {
        setSelectedStartDate('');
        setSelectedEndDate('');
        setIsDateSelected(false);
    };

    const handleDaySelect = (day: any) => {
        const selectedDate = day.dateString;
        console.log('selectedDate', selectedDate);

        if (selectedDate === selectedStartDate) {
            setSelectedStartDate('');
            setSelectedEndDate('');
            setIsDateSelected(false);
        } else if (!selectedStartDate) {
            setSelectedStartDate(selectedDate);
            setSelectedEndDate('');
            setIsDateSelected(true);
        } else if (!selectedEndDate) {
            if (selectedDate > selectedStartDate) {
                setSelectedEndDate(selectedDate);
                setIsDateSelected(true);
            } else {
                setSelectedEndDate(selectedStartDate);
                setSelectedStartDate(selectedDate);
                setIsDateSelected(true);
            }
        } else {
            setSelectedStartDate(selectedDate);
            setSelectedEndDate('');
            setIsDateSelected(true);
        }
    };

    // 캘린더 선택 시 색상
    if (selectedStartDate && selectedEndDate) {
        markedDates = {}; //초기화
        let currentDate = new Date(selectedStartDate);
        //역순 선택
        while (currentDate <= new Date(selectedEndDate)) {
            const formattedDate = currentDate.toISOString().split('T')[0];
            markedDates[formattedDate] = {
                color: '#FBEAA6',
            };
            currentDate.setDate(currentDate.getDate() + 1);
        }
    }

    if (selectedStartDate && !selectedEndDate) {
        markedDates = {};
        markedDates[selectedStartDate] = {
            startingDay: true,
            endingDay: true,
            color: '#FBEAA6',
        };
    }

    if (selectedStartDate && selectedEndDate) {
        markedDates[selectedStartDate] = {
            startingDay: true,
            color: '#FBEAA6',
        };
    }

    if (selectedEndDate) {
        markedDates[selectedEndDate] = {
            endingDay: true,
            color: '#FBEAA6',
        };
    }

    if (selectedStartDate === selectedEndDate) {
        markedDates = {};
    }

    const chartConfig = {
        backgroundGradientFrom: 'white',
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: 'white',
        backgroundGradientToOpacity: 1,
        fillShadowGradientToOpacity: 0,
        fillShadowGradientToOffset: 0,
        color: (opacity = 1) => `rgba(55, 55, 55, ${opacity})`,
        strokeWidth: fontPercentage(5),
        barPercentage: 1,
        useShadowColorFromDataset: true,
        withVerticalLines: false,
        decimalPlaces: 0,
        propsForDots: {
            r: fontPercentage(10), // 원의 반지름을 조절할 수 있습니다.
        },
    };

    const graphDataLists = {
        labels: graph.map(each => each.eachTime.split(':')[0] + '시'),
        datasets: [
            {
                data: [...graph.map(each => each.totalPrice), 0],
                color: () => '#5A7EFF',
            },
        ],
        legend: ['결제 금액'], // optional
    };

    return (
        <>
            <styles.SalesManageBox>
                <ScrollView>
                    <>
                        <styles.DropDownView>
                            <styles.DropDownCloseView
                                onPress={() => setDropOpen(!isDropOpen)}>
                                <styles.DropDownCloseText>
                                    {selectedDropDownValue}
                                </styles.DropDownCloseText>
                                <styles.DropDownArrow>
                                    {isDropOpen ? (
                                        <DropDownOpen
                                            width={widthPercentage(24)}
                                            height={heightPercentage(24)}
                                        />
                                    ) : (
                                        <DropDownClose
                                            width={widthPercentage(24)}
                                            height={heightPercentage(24)}
                                        />
                                    )}
                                </styles.DropDownArrow>
                            </styles.DropDownCloseView>
                            {isDropOpen && (
                                <styles.DropDownOpenView>
                                    {options.map((option, index) => (
                                        <React.Fragment key={option}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    handleSelectOption(option);
                                                }}>
                                                <styles.DropDownOpenText>
                                                    {option}
                                                </styles.DropDownOpenText>
                                            </TouchableOpacity>
                                            {index < options.length - 1 && <styles.DropDownHr/>}
                                        </React.Fragment>
                                    ))}
                                </styles.DropDownOpenView>
                            )}
                            <styles.PeriodBoxView onPress={handleOpenCalendar}>
                                <styles.PeriodCalendarImg>
                                    <CalendarImg
                                        width={widthPercentage(18)}
                                        height={heightPercentage(18)}
                                    />
                                </styles.PeriodCalendarImg>

                                {selectedStartDate && selectedEndDate ? (
                                    <styles.PeriodDateText2>
                                        {`${selectedStartDate} ~ ${selectedEndDate}`}
                                    </styles.PeriodDateText2>
                                ) : selectedStartDate || selectedEndDate ? (
                                    <styles.PeriodDateText2>
                                        {selectedStartDate || selectedEndDate}
                                    </styles.PeriodDateText2>
                                ) : (
                                    <styles.PeriodDateText1>
                                        기간을 설정해 보세요.
                                    </styles.PeriodDateText1>
                                )}
                            </styles.PeriodBoxView>
                            {isDateSelected ? (
                                <styles.PeriodCalendarClear onPress={handleResetDates}>
                                    <CalendarDateClear
                                        width={widthPercentage(17)}
                                        height={heightPercentage(17)}
                                    />
                                    <styles.PeriodCalendarClearText>
                                        설정 초기화
                                    </styles.PeriodCalendarClearText>
                                </styles.PeriodCalendarClear>
                            ) : (
                                <styles.PeriodCalendarTime>
                                    {currentDateString} 기준
                                </styles.PeriodCalendarTime>
                            )}
                        </styles.DropDownView>

                        <Modal
                            visible={isCalendarVisible}
                            animationType="slide"
                            transparent={true}
                            supportedOrientations={['landscape']}
                        >
                            <styles.CalendarView>
                                <styles.StyledCalendar>
                                    <Calendar
                                        monthFormat={'yyyy년 MM월'}
                                        markingType={'period'}
                                        onDayPress={day => {
                                            handleDaySelect(day);
                                        }}
                                        markedDates={markedDates}
                                        style={{borderRadius: fontPercentage(12)}}
                                        theme={{
                                            todayTextColor: 'rgba(255, 202, 66, 1)',
                                            dayTextColor: 'rgba(0, 0, 0, 1)',
                                            arrowColor: 'rgba(0, 0, 0, 0.6)',
                                            textDayFontWeight: '400',
                                            textMonthFontWeight: '500',
                                            textDayHeaderFontWeight: '300',
                                            textDayFontSize: fontPercentage(16),
                                            textMonthFontSize: fontPercentage(24),
                                            textDayHeaderFontSize: fontPercentage(16),
                                        }}
                                    />
                                </styles.StyledCalendar>
                                <styles.CalenderButton
                                    onPress={handleCloseCalendar}
                                    isSelected={isDateSelected}>
                                    <CalendarButtonCheck
                                        width={widthPercentage(19.573)}
                                        height={heightPercentage(13.864)}
                                    />
                                </styles.CalenderButton>
                            </styles.CalendarView>
                        </Modal>
                    </>

                    {selectedDropDownValue === '매출/영업' ? (
                        <>
                            <styles.SalesBoxView>
                                <styles.SalesImgView>
                                    <SalesImg
                                        height={heightPercentage(30)}
                                        width={widthPercentage(30)}
                                    />
                                    <styles.SalesImgText>매출</styles.SalesImgText>
                                </styles.SalesImgView>

                                <styles.SalesExcelView onPress={downloadExcel}>
                                    <ExcelIcon
                                        width={widthPercentage(19)}
                                        height={heightPercentage(19)}
                                    />
                                    <styles.SalesExcelText>엑셀로 보기</styles.SalesExcelText>
                                </styles.SalesExcelView>

                                <Margin width={0} height={heightPercentage(49.67)}/>
                                <styles.SalesContentRowView>
                                    <styles.SalesContentView>
                                        <styles.SalesContentSmText>
                                            실 매출
                                        </styles.SalesContentSmText>

                                        <Margin width={0} height={heightPercentage(11.99)}/>

                                        <styles.SalesContentText1>
                                            {sales.realAmount} 원
                                        </styles.SalesContentText1>
                                    </styles.SalesContentView>
                                    <styles.SalesContentView>
                                        <styles.SalesContentSmText>
                                            결제 건수
                                        </styles.SalesContentSmText>

                                        <Margin width={0} height={heightPercentage(11.99)}/>

                                        <styles.SalesContentText1>
                                            {sales.paymentCount} 건
                                        </styles.SalesContentText1>
                                    </styles.SalesContentView>
                                    <styles.SalesContentView>
                                        <styles.SalesContentSmText>
                                            평균 결제 금액
                                        </styles.SalesContentSmText>

                                        <Margin width={0} height={heightPercentage(11.99)}/>

                                        <styles.SalesContentText1>
                                            {sales.avgPaymentAmount} 원
                                        </styles.SalesContentText1>
                                    </styles.SalesContentView>
                                </styles.SalesContentRowView>

                                <Margin width={0} height={heightPercentage(69.73)}/>

                                <styles.SalesContentRowView>
                                    <styles.SalesContentView>
                                        <styles.SalesContentSmText>
                                            환불금액
                                        </styles.SalesContentSmText>

                                        <Margin width={0} height={heightPercentage(11.99)}/>

                                        <styles.SalesContentText2>
                                            {sales.refundAmount} 원
                                        </styles.SalesContentText2>
                                    </styles.SalesContentView>
                                    <styles.SalesContentView>
                                        <styles.SalesContentSmText>
                                            환불 건수
                                        </styles.SalesContentSmText>

                                        <Margin width={0} height={heightPercentage(11.99)}/>

                                        <styles.SalesContentText2>
                                            {sales.refundCount} 건
                                        </styles.SalesContentText2>
                                    </styles.SalesContentView>
                                    <styles.SalesContentView>
                                        <styles.SalesContentSmText>
                                            평균 환불 금액
                                        </styles.SalesContentSmText>

                                        <Margin width={0} height={heightPercentage(11.99)}/>

                                        <styles.SalesContentText2>
                                            {sales.avgRefundAmount} 원
                                        </styles.SalesContentText2>
                                    </styles.SalesContentView>
                                </styles.SalesContentRowView>
                            </styles.SalesBoxView>

                            <Margin width={0} height={heightPercentage(65.16)}/>

                            <styles.PaymentBoxView>
                                <styles.SalesImgView>
                                    <SalesImg
                                        height={heightPercentage(30)}
                                        width={widthPercentage(30)}
                                    />
                                    <styles.SalesImgText>시간대 별 결제 금액</styles.SalesImgText>
                                </styles.SalesImgView>
                                <styles.GraphView>
                                    <LineChart
                                        data={graphDataLists}
                                        width={widthPercentage(887)}
                                        height={heightPercentage(403)}
                                        chartConfig={chartConfig}
                                        withVerticalLines={false}
                                        xLabelsOffset={fontPercentage(10)}
                                        style={{
                                            borderRadius: fontPercentage(12),
                                        }}
                                    />
                                </styles.GraphView>
                            </styles.PaymentBoxView>
                        </>
                    ) : (
                        <styles.CalendarBoxView>
                            <styles.CalendarBoxImgView>
                                <CalendarImg2
                                    width={widthPercentage(29)}
                                    height={heightPercentage(30)}
                                />
                                <styles.CalendarBoxText>매출 달력</styles.CalendarBoxText>
                                <styles.LastMonthRateView>
                                    <styles.LastMonthRateText>
                                        전월대비 {calendarData.lastMonthOnMonth}%
                                    </styles.LastMonthRateText>
                                </styles.LastMonthRateView>
                            </styles.CalendarBoxImgView>
                            <styles.CalendarBox>
                                <SalesCalendar calendarData={calendarData}/>
                            </styles.CalendarBox>
                        </styles.CalendarBoxView>
                    )}
                </ScrollView>
            </styles.SalesManageBox>
        </>
    );
};

export default SalesManage;
