import React, {useState} from 'react';
import * as styles from './CompleteOrderItem.styles';
import CompleteOrderModal from '../complete-order-modal/CompleteOrderModal';
import CompleteRestoreModal from '../complete-order-modal/CompleteRestoreModal';
import {BASE_API} from '../../../../api/CommonApi';

const CompleteOrderItem: React.FC<{
  item: any;
  setOrders: any;
  fetchOrders: any;
}> = ({item, setOrders, fetchOrders}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [restoreModalVisible, setRestoreModalVisible] = useState(false);

  //

  const handleOrderPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = async () => {
    setModalVisible(false);
    setRestoreModalVisible(false);
  };

  const handleStoreModal = () => {
    setModalVisible(false);
    setRestoreModalVisible(true);
  };
  //
  const formatPhoneNumber = (phoneNumber: string) => {
    const formattedNumber = phoneNumber.replace(/-/g, '');
    return formattedNumber.substr(3); // "010"을 제외한 나머지 부분 리턴
  };

  const formatOrderTime = (orderTime: string) => {
    const timeString = orderTime.split(' ')[0]; // 배열에서 문자열 추출
    const formattedTime = timeString.substr(0, 5); // 초와 밀리초 제외한 시간 부분 리턴 (15:19 형식)
    return formattedTime;
  };

  let orderId = item.orderId;

  const handleRestorePress = async () => {
    try {
      const response = await BASE_API.patch(
        `https://dev.deunku.com/api/v1/admin/orders/${orderId}/recovery`,
      );
      console.log('response:', response);
      const fetchedOrders = await fetchOrders('FINISH');
      setOrders(fetchedOrders);
      setRestoreModalVisible(false);
    } catch (error) {
      console.error('Error deleting order:', error);
    }
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
      <CompleteOrderModal
        modalVisible={modalVisible}
        handleCloseModal={handleCloseModal}
        handleStoreModal={handleStoreModal}
      />
      <CompleteRestoreModal
        restoreModalVisible={restoreModalVisible}
        handleCloseModal={handleCloseModal}
        handleRestorePress={handleRestorePress}
      />
    </>
  );
};

export default CompleteOrderItem;
