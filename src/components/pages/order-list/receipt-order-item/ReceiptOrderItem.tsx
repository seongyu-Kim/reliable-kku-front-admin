import React, {useEffect, useRef, useState} from 'react';
import * as styles from './ReceiptOrderItem.styles';
import ReceiptOrderModal from '../receipt-order-modal/ReceiptOrderModal';
import ReceiptCancelModal from '../receipt-order-modal/ReceiptCancelModal';
import ReceiptRefundModal from '../receipt-order-modal/ReceiptRefundModal';
import ReceiptNotReceivedModal from '../receipt-order-modal/ReceiptNotReceivedModal';
import ReceiptPickupModal from '../receipt-order-modal/ReceiptPickupModal';
import {BASE_API} from '../../../../api/CommonApi';

const ReceiptOrderItem: React.FC<{
  item: any;
  setOrders: any;
  fetchOrders: any;
}> = ({item, setOrders, fetchOrders}) => {
  const [modalVisible, setModalVisible] = useState(false);
  //
  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const [refundModalVisible, setRefundModalVisible] = useState(false);
  const [notReceivedModalVisible, setNotReceivedModalVisible] = useState(false);
  const [pickipModalVisible, setPickupModalVisible] = useState(false);

  const handleOrderPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = async () => {
    setModalVisible(false);
    setCancelModalVisible(false);
    setRefundModalVisible(false);
    setNotReceivedModalVisible(false);
    setPickupModalVisible(false);
  };

  //
  const handleCancelModal = () => {
    setModalVisible(false);
    setCancelModalVisible(true);
  };

  const handleRefundModal = () => {
    setModalVisible(false);
    setRefundModalVisible(true);
  };

  const handleNotReceivedModal = () => {
    setModalVisible(false);
    setNotReceivedModalVisible(true);
  };

  let orderId = item.orderId;

  const handlePickupModal = async () => {
    try {
      setModalVisible(false);

      const response = await BASE_API.patch(
        `https://prod.deunku.com/api/v1/admin/orders/${orderId}/pick-up`,
      );
      console.log('response:', response);
      const fetchedOrders = await fetchOrders('COOKING');
      setOrders(fetchedOrders);
      setPickupModalVisible(true);
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  const handleCompletePress = async () => {
    try {
      const response = await BASE_API.patch(
        `https://prod.deunku.com/api/v1/admin/orders/${orderId}/finish`,
      );
      console.log('response:', response);
      const fetchedOrders = await fetchOrders('COOKING');
      setOrders(fetchedOrders);
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  const handleNotTakePress = async () => {
    try {
      const response = await BASE_API.patch(
        `https://prod.deunku.com/api/v1/admin/orders/${orderId}/not-take`,
      );
      console.log('response:', response);
      const fetchedOrders = await fetchOrders('COOKING');
      setOrders(fetchedOrders);
      setNotReceivedModalVisible(false);
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  //접수취소
  // const handleCancelPress = () => {
  //   setCancelModalVisible(false);
  //   BASE_API.delete(
  //     `https://prod.deunku.com/api/v1/admin/orders/${orderId}`,
  //   ).then(async res => {
  //     console.log('res', res);
  //     setIsClicked(!isClicked);
  //   });
  // };
  const handleCancelPress = async () => {
    try {
      const response = await BASE_API.delete(
        `https://prod.deunku.com/api/v1/admin/orders/${orderId}`,
      );
      console.log('response:', response);
      const fetchedOrders = await fetchOrders('COOKING');
      setOrders(fetchedOrders);
      setCancelModalVisible(false);
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  const handleRefundPress = async () => {
    try {
      const response = await BASE_API.delete(
        `https://prod.deunku.com/api/v1/admin/orders/${orderId}`,
      );
      console.log('response:', response);
      const fetchedOrders = await fetchOrders('COOKING');
      setOrders(fetchedOrders);
      setRefundModalVisible(false);
    } catch (error) {
      console.error('Error deleting order:', error);
    }
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
            <>
              <styles.OrderContentView key={menuIndex}>
                <styles.OrderContentText>{menu.name}:</styles.OrderContentText>
                <styles.OrderContentText>{menu.count}</styles.OrderContentText>
              </styles.OrderContentView>
              <styles.OrderContentTime>
                소요시간:{'   '}
                {item.timeTakenMinutes}
              </styles.OrderContentTime>
              <styles.OrderContentCnt>
                총 주문수량:{'   '}
                {item.allCount}
              </styles.OrderContentCnt>
            </>
          ),
        )}
      </styles.Order>
      <ReceiptOrderModal
        id={item.todayOrderCount}
        modalVisible={modalVisible}
        handleCloseModal={handleCloseModal}
        time={formatOrderTime(item.orderTime)}
        handleCancelModal={handleCancelModal}
        handleRefundModal={handleRefundModal}
        handleNotReceivedModal={handleNotReceivedModal}
        handlePickupModal={handlePickupModal}
        handleCompletePress={handleCompletePress}
      />
      <ReceiptCancelModal
        cancelModalVisible={cancelModalVisible}
        handleCloseModal={handleCloseModal}
        handleCancelPress={handleCancelPress}
      />
      <ReceiptRefundModal
        refundModalVisible={refundModalVisible}
        handleCloseModal={handleCloseModal}
        handleRefundPress={handleRefundPress}
      />
      <ReceiptNotReceivedModal
        handleCloseModal={handleCloseModal}
        notReceivedModalVisible={notReceivedModalVisible}
        handleNotTakePress={handleNotTakePress}
      />
      <ReceiptPickupModal
        handleCloseModal={handleCloseModal}
        pickupModalVisible={pickipModalVisible}
      />
    </>
  );
};

export default ReceiptOrderItem;
