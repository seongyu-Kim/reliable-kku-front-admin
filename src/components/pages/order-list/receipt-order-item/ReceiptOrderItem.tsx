import React, {SetStateAction, useState} from 'react';
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
  isClicked: boolean;
  setIsClicked: React.Dispatch<SetStateAction<boolean>>;
}> = ({item, setOrders, fetchOrders, isClicked, setIsClicked}) => {
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

    const fetchedOrders = await fetchOrders('COOKING');
    setOrders(fetchedOrders);
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

  // 픽업요청
  const handlePickupModal = () => {
    setModalVisible(false);
    BASE_API.patch(
      `https://dev.deunku.com/api/v1/admin/orders/${orderId}/pick-up`,
    ).then(async res => {
      console.log('res', res);
      setPickupModalVisible(true);
    });
  };

  //완료
  const handleCompletePress = () => {
    setModalVisible(false);
    BASE_API.patch(
      `https://dev.deunku.com/api/v1/admin/orders/${orderId}/finish`,
    ).then(async res => {
      console.log('res', res);
      setIsClicked(!isClicked);
    });
  };

  //미수령
  const handleNotTakePress = () => {
    setNotReceivedModalVisible(false);
    BASE_API.patch(
      `https://dev.deunku.com/api/v1/admin/orders/${orderId}/not-take`,
    ).then(async res => {
      console.log('res', res);
      setIsClicked(!isClicked);
    });
  };

  //접수취소
  const handleCancelPress = () => {
    setCancelModalVisible(false);
    BASE_API.delete(
      `https://dev.deunku.com/api/v1/admin/orders/${orderId}`,
    ).then(async res => {
      console.log('res', res);
      setIsClicked(!isClicked);
    });
  };

  //환불
  const handleRefundPress = () => {
    setRefundModalVisible(false);
    BASE_API.delete(
      `https://dev.deunku.com/api/v1/admin/orders/${orderId}`,
    ).then(async res => {
      console.log('res', res);
      setIsClicked(!isClicked);
    });
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
