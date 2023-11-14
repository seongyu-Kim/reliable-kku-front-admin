import React, {useState} from 'react';
import * as styles from './ReceiptOrderItem.styles';
import ReceiptOrderModal from '../receipt-order-modal/ReceiptOrderModal';
import ReceiptCancelModal from '../receipt-order-modal/ReceiptCancelModal';
import ReceiptRefundModal from '../receipt-order-modal/ReceiptRefundModal';
import ReceiptNotReceivedModal from '../receipt-order-modal/ReceiptNotReceivedModal';
import ReceiptPickupModal from '../receipt-order-modal/ReceiptPickupModal';
import {BASE_API} from '../../../../api/CommonApi';

const ReceiptOrderItem: React.FC<{
  item: any;
}> = ({item}) => {
  const [modalVisible, setModalVisible] = useState(false);
  //
  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const [refundModalVisible, setRefundModalVisible] = useState(false);
  const [notReceivedModalVisible, setNotReceivedModalVisible] = useState(false);
  const [pickipModalVisible, setPickupModalVisible] = useState(false);

  const handleOrderPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
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

  //픽업요청
  const handlePickupModal = async () => {
    try {
      const response = await BASE_API.patch(
        `https://dev.deunku.com/api/v1/admin/orders/${orderId}/pick-up`,
      );

      console.log(response);
      setModalVisible(false);
      setPickupModalVisible(true);
    } catch (error) {
      console.error('픽업요청 실패:', error);
    }
  };

  //완료
  const handleCompletePress = async () => {
    try {
      const response = await BASE_API.patch(
        `https://dev.deunku.com/api/v1/admin/orders/${orderId}/finish`,
      );

      console.log(response);
      setModalVisible(false);
      console.log('완료 성공');
    } catch (error) {
      console.error('완료 실패:', error);
    }
  };

  //미수령
  const handleNotTakePress = async () => {
    try {
      const response = await BASE_API.patch(
        `https://dev.deunku.com/api/v1/admin/orders/${orderId}/not-take`,
      );

      console.log('미수령처리 완료');
      console.log(response);
      setNotReceivedModalVisible(false);
    } catch (error) {
      console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
      console.error('미수령 처리 실패:', error);
    }
  };
  //접수취소
  const handleCancelPress = async () => {
    try {
      const response = await BASE_API.delete(
        `https://dev.deunku.com/api/v1/admin/orders/${orderId}`,
      );

      console.log(response);
      setCancelModalVisible(false);
    } catch (error) {
      console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
      console.error('취소 실패:', error);
    }
  };

  //환불
  const handleRefundPress = async () => {
    try {
      const response = await BASE_API.delete(
        `https://dev.deunku.com/api/v1/admin/orders/${orderId}`,
      );

      console.log(response);
      setRefundModalVisible(false);
    } catch (error) {
      console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
      console.error('환불 실패:', error);
    }
  };
  //
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
