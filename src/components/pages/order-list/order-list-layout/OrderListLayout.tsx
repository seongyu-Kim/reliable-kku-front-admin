import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import * as styles from './OrderListLayout.styles';
import WaitingOrderItem from '../waiting-order-item/WaitingOrderItem';
import SiteOrderBtn from '../../on-site-order/site-order-btn/SiteOrderBtn';
import ReceiptOrderItem from '../receipt-order-item/ReceiptOrderItem';
import CompleteOrderItem from '../complete-order-item/CompleteOrderItem';

interface MenuResponseItem {
  name: string;
  count: number;
}

interface Order {
  todayOrderCount: Number;
  phoneNumber: string;
  orderTime: string;
  menuResponse: MenuResponseItem[];
  isOfflineOrder: boolean;
  timeTakenMinutes: number;
  allCount: number;
  orderId: number;
}

const OrderListLayout: React.FC<{
  isSideMenuVisible: boolean;
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  orderStatus: any;
  setOrderStatus: any;
  orders: Order[];
  setOrders: any;
  fetchOrders: any;
}> = ({
  isSideMenuVisible,
  isClicked,
  setIsClicked,
  orderStatus,
  setOrderStatus,
  orders,
  setOrders,
  fetchOrders,
}) => {
  useEffect(() => {
    if (orderStatus === 'WAIT') {
      setOrderStatus('WAIT');
    } else if (orderStatus === 'COOKING') {
      setOrderStatus('COOKING');
    } else if (orderStatus === 'FINISH') {
      setOrderStatus('FINISH');
    }
  }, [orderStatus]);

  let totalBunCount;

  if (Array.isArray(orders)) {
    totalBunCount = orders.reduce((acc, order) => {
      const bunCount = order.menuResponse.reduce((menuAcc, menu) => {
        return menuAcc + menu.count;
      }, 0);
      return acc + bunCount;
    }, 0);
  } else if (typeof orders === 'object' && orders !== null) {
    totalBunCount = 0;
  } else {
    totalBunCount = 0;
  }

  if (isSideMenuVisible) {
    return null;
  } else {
    let orderViews = [];
    if (orderStatus === 'WAIT') {
      for (let i = 0; i < orders.length; i += 4) {
        const orderGroup = orders.slice(i, i + 4);
        orderViews.push(
          <styles.RowContainer key={`orderGroup-${i}`}>
            {orderGroup.map(item => (
              <WaitingOrderItem
                key={`waiting-order-${item.orderId}`}
                item={item}
                setOrders={setOrders}
                fetchOrders={fetchOrders}
              />
            ))}
          </styles.RowContainer>,
        );
      }
    } else if (orderStatus === 'COOKING') {
      for (let i = 0; i < orders.length; i += 4) {
        const orderGroup = orders.slice(i, i + 4);
        orderViews.push(
          <styles.RowContainer key={`orderGroup-${i}`}>
            {orderGroup.map(item => (
              <ReceiptOrderItem
                key={`receipt-order-${item.orderId}`}
                item={item}
                setOrders={setOrders}
                fetchOrders={fetchOrders}
              />
            ))}
          </styles.RowContainer>,
        );
      }
    } else if (orderStatus === 'FINISH') {
      for (let i = 0; i < orders.length; i += 4) {
        const orderGroup = orders.slice(i, i + 4);
        orderViews.push(
          <styles.RowContainer key={`orderGroup-${i}`}>
            {orderGroup.map(item => (
              <CompleteOrderItem
                key={`complete-order-${item.orderId}`}
                item={item}
                setOrders={setOrders}
                fetchOrders={fetchOrders}
              />
            ))}
          </styles.RowContainer>,
        );
      }
    }

    return (
      <>
        <styles.OrderView>
          <ScrollView>{orderViews}</ScrollView>
          <styles.TotalItemCnt>
            접수 총 주문 수량: {totalBunCount}({orders.length})개
          </styles.TotalItemCnt>
        </styles.OrderView>
        <SiteOrderBtn isClicked={isClicked} setIsClicked={setIsClicked} />
      </>
    );
  }
};

export default OrderListLayout;
