import React, {useEffect, useRef, useState} from 'react';
import {FlatList} from 'react-native';
import * as styles from './OrderListLayout.styles';
import WaitingOrderItem from '../waiting-order-item/WaitingOrderItem';
import SiteOrderBtn from '../../on-site-order/site-order-btn/SiteOrderBtn';
import ReceiptOrderItem from '../receipt-order-item/ReceiptOrderItem';
import CompleteOrderItem from '../complete-order-item/CompleteOrderItem';
import axios from 'axios';
import {BASE_API} from '../../../../api/CommonApi';
import {useFocusEffect} from '@react-navigation/native';
import EventSource, {EventSourceListener} from 'react-native-sse';

interface SSEProps {
  orderStatus:
    | 'WAIT'
    | 'COOKING'
    | 'PICKUP'
    | 'FINISH'
    | 'CANCELED'
    | 'NOT_TAKE';
}

const OrderListLayout: React.FC<{
  isSideMenuVisible: boolean;
  selectedTopMenu: string;
}> = ({isSideMenuVisible, selectedTopMenu}) => {
  //
  const es = useRef<EventSource | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  // const [orderStatus, setOrderStatus] = useState<
  //   'WAIT' | 'COOKING' | 'PICKUP' | 'FINISH' | 'CANCELED' | 'NOT_TAKE'
  // >('WAIT');

  // const renderItemComponent = () => {
  //   switch (orderStatus) {
  //     case 'WAIT':
  //       return <WaitingOrderItem item={waitingOrderItem} />;
  //     case 'COOKING':
  //       return <ReceiptOrderItem item={receiptOrderItem} />;
  //     case 'FINISH':
  //       return <CompleteOrderItem item={completeOrderItem} />;
  //     default:
  //       return null;
  //   }
  // };

  let renderItemComponent: any;
  let orderStatus: string = '';

  if (selectedTopMenu === '대기') {
    renderItemComponent = WaitingOrderItem;
    orderStatus = 'WAIT';
  } else if (selectedTopMenu === '접수') {
    renderItemComponent = ReceiptOrderItem;
    orderStatus = 'COOKING';
  } else if (selectedTopMenu === '완료') {
    renderItemComponent = CompleteOrderItem;
    orderStatus = 'FINISH';
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

  interface MenuResponseItem {
    name: string;
    count: number;
  }

  // useFocusEffect(() => {
  //   BASE_API.get(
  //     `https://dev.deunku.com/api/v1/admin/orders?orderStatus=${orderStatus}`,
  //   )
  //     .then(response => {
  //       setOrders(response.data);
  //       console.log(response.data);
  //       console.log(
  //         '@@@@@@@@@@@@ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ@@@@@@@@@@@@@@@',
  //       );
  //     })
  //     .catch(error => {
  //       console.error('Error fetching orders(orderListLayout):', error);
  //     });
  // });

  //SSE
  // useEffect(() => {
  //   es.current = new EventSource(
  //     'https://dev.deunku.com/api/v1/admin/order/sse/connect',
  //     {
  //       withCredentials: true,
  //       pollingInterval: 3000,
  //       timeout: 0,
  //     },
  //   );
  // }, []);

  //SSE
  // useEffect(() => {
  //   if (es.current) {
  //     const listener: EventSourceListener = event => {
  //       if (event.type === 'open') {
  //       } else if (event.type === 'message') {
  //         let data: SSEProps;
  //
  //         if (event.data != null) {
  //           data = JSON.parse(event.data);
  //           console.log('===============================', data);
  //           // setOrderStatus(data.orderStatus);
  //         }
  //       } else if (event.type === 'error') {
  //       } else if (event.type === 'exception') {
  //       }
  //     };
  //
  //     es.current.addEventListener('open', listener);
  //     es.current.addEventListener('message', listener);
  //     es.current.addEventListener('error', listener);
  //
  //     return () => {
  //       if (es.current) {
  //         es.current.removeAllEventListeners();
  //         es.current.close();
  //       }
  //     };
  //   }
  // }, []);

  const [isClicked, setIsClicked] = useState(false);

  //주문
  useEffect(() => {
    const fetchOrders = async () => {
      await BASE_API.get(
        `https://dev.deunku.com/api/v1/admin/orders?orderStatus=${orderStatus}`,
      )
        .then(response => {
          setOrders(response.data);
          console.log(response.data);
          console.log(
            '@@@@@@@@@@ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁ@@@@@@@@@@@@@@@@@',
          );
        })
        .catch(error => {
          console.error('Error fetching orders(orderListLayout):', error);
        });
    };

    fetchOrders();
  }, [orderStatus, isClicked]);

  const totalBunCount = orders.reduce((acc, order) => {
    const bunCount = order.menuResponse.reduce((menuAcc, menu) => {
      return menuAcc + menu.count;
    }, 0);
    return acc + bunCount;
  }, 0);

  return isSideMenuVisible ? null : (
    <>
      <styles.OrderView>
        <FlatList
          data={orders.reverse()}
          renderItem={item => {
            const RenderItemComponent = renderItemComponent;
            return (
              <RenderItemComponent
                {...item}
                isClicked={isClicked}
                setIsClicked={setIsClicked}
              />
            );
          }}
          keyExtractor={item => `order${item.orderId.toString()}`}
          numColumns={4}
          showsVerticalScrollIndicator={true}
        />

        <styles.TotalOrderCnt>
          접수 총 주문 수량: {totalBunCount}개
        </styles.TotalOrderCnt>
      </styles.OrderView>
      <SiteOrderBtn />
    </>
  );
};

export default OrderListLayout;
