import React, {SetStateAction, useEffect, useState} from 'react';
import * as styles from './WaitingOrderItem.styles';
import WaitingOrderModal from '../waiting-order-modal/WaitingOrderModal';
import WaitingCancelModal1 from '../waiting-order-modal/WaitingCancelModal1';
import WaitingCancelModal2 from '../waiting-order-modal/WaitingCancelModal2';
import WaitingRefundModal1 from '../waiting-order-modal/WaitingRefundModal1';
import WaitingRefundModal2 from '../waiting-order-modal/WaitingRefundModal2';
import {BASE_API} from '../../../../api/CommonApi';

const WaitingOrderItem: React.FC<{
  item: any;
  setOrders: any;
  fetchOrders: any;
}> = ({item, setOrders, fetchOrders}) => {
  //주문접수모달
  const [modalVisible, setModalVisible] = useState(false);
  //
  const [cancelModalVisible1, setCancelModalVisible1] = useState(false);
  const [cancelModalVisible2, setCancelModalVisible2] = useState(false);
  //
  const [refundModalVisible1, setRefundModalVisible1] = useState(false);
  const [refundModalVisible2, setRefundModalVisible2] = useState(false);

  //

  const handleOrderPress = () => {
    setModalVisible(true);
  };
  const handleCancelClick = () => {
    setModalVisible(false);
    setCancelModalVisible1(true);
  };

  const handleRefundClick = () => {
    setModalVisible(false);
    setRefundModalVisible1(true);
  };

  //
  let orderId = item.orderId;

  //예상소요시간
  const handleMinutesPress = async (orderMinutes: number) => {
    setCancelModalVisible1(false);
    try {
      // Delete the order
      const response = await BASE_API.post(
        `https://dev.deunku.com/api/v1/admin/orders/${orderId}/minutes/${orderMinutes}`,
      );
      console.log('response:', response);
      const fetchedOrders = await fetchOrders('WAIT');
      setOrders(fetchedOrders);
      setModalVisible(false);
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  //취소
  const handleCancelPress = async () => {
    setCancelModalVisible1(false);
    try {
      // Delete the order
      const deleteResponse = await BASE_API.delete(
        `https://dev.deunku.com/api/v1/admin/orders/${orderId}`,
      );
      console.log('Delete response:', deleteResponse);
      const fetchedOrders = await fetchOrders('WAIT');
      setOrders(fetchedOrders);
      setCancelModalVisible2(true);
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  const handleRefundPress = async () => {
    setRefundModalVisible1(false);
    try {
      // Delete the order
      const response = await BASE_API.delete(
        `https://dev.deunku.com/api/v1/admin/orders/${orderId}`,
      );
      console.log('response:', response);
      const fetchedOrders = await fetchOrders('WAIT');
      setOrders(fetchedOrders);
      setRefundModalVisible2(true);
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  const handleCloseModal = async () => {
    setModalVisible(false);
    setCancelModalVisible1(false);
    setCancelModalVisible2(false);
    setRefundModalVisible1(false);
    setRefundModalVisible2(false);
  };

  const formatPhoneNumber = (phoneNumber: string) => {
    const formattedNumber = phoneNumber.replace(/-/g, '');
    return formattedNumber.substr(3); // "010"을 제외한 나머지 부분 리턴
  };

  const formatOrderTime = (orderTime: string) => {
    const timeString = orderTime.split(' ')[0]; // 배열에서 문자열 추출
    // 초와 밀리초 제외한 시간 부분 리턴 (15:19 형식)
    return timeString.substr(0, 5);
  };

  return (
    <>
      <styles.Order onPress={handleOrderPress}>
        {item.isOfflineOrder ? (
          <styles.SiteOrderTop>
            <styles.OrderTopText>{item.todayOrderCount}</styles.OrderTopText>
            <styles.HrLine />
            <styles.OrderTopText>
              {formatPhoneNumber(item.phoneNumber)}
            </styles.OrderTopText>
            <styles.HrLine />
            <styles.OrderTopText>
              {formatOrderTime(item.orderTime)}
            </styles.OrderTopText>
          </styles.SiteOrderTop>
        ) : (
          <styles.AppOrderTop>
            <styles.OrderTopText>{item.todayOrderCount}</styles.OrderTopText>
            <styles.HrLine />
            <styles.OrderTopText>
              {formatPhoneNumber(item.phoneNumber)}
            </styles.OrderTopText>
            <styles.HrLine />
            <styles.OrderTopText>
              {formatOrderTime(item.orderTime)}
            </styles.OrderTopText>
          </styles.AppOrderTop>
        )}
        {item.menuResponse.map(
          (
            menu: {
              name: string;
              count: number;
            },
            menuIndex: React.Key,
          ) => (
            <styles.OrderContentView key={menuIndex}>
              <styles.OrderContentText>{menu.name}:</styles.OrderContentText>
              <styles.OrderContentText>{menu.count}</styles.OrderContentText>
            </styles.OrderContentView>
          ),
        )}
      </styles.Order>

      <WaitingOrderModal
        modalVisible={modalVisible}
        id={item.todayOrderCount}
        handleCloseOrder={handleCloseModal}
        handleCancelClick={handleCancelClick}
        handleRefundClick={handleRefundClick}
        handleMinutesPress={handleMinutesPress}
      />
      <WaitingCancelModal1
        handleCloseModal={handleCloseModal}
        cancelModalVisible1={cancelModalVisible1}
        handleCancelPress={handleCancelPress}
      />
      <WaitingCancelModal2
        cancelModalVisible2={cancelModalVisible2}
        handleCloseModal={handleCloseModal}
      />
      <WaitingRefundModal1
        handleCloseModal={handleCloseModal}
        refundModalVisible1={refundModalVisible1}
        handleRefundPress={handleRefundPress}
      />
      <WaitingRefundModal2
        refundModalVisible2={refundModalVisible2}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default WaitingOrderItem;
