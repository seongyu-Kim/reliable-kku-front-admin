import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import * as styles from './OrderListLayout.styles';
import WaitingOrderItem from '../waiting-order-item/WaitingOrderItem';
import SiteOrderBtn from '../../on-site-order/site-order-btn/SiteOrderBtn';
import ReceiptOrderItem from '../receipt-order-item/ReceiptOrderItem';
import CompleteOrderItem from '../complete-order-item/CompleteOrderItem';
import {BASE_API} from '../../../../api/CommonApi';
import EventSource, {EventSourceListener} from 'react-native-sse';
import Sound from 'react-native-sound';

const OrderListLayout: React.FC<{
  isSideMenuVisible: boolean;
  selectedTopMenu: string;
}> = ({isSideMenuVisible, selectedTopMenu}) => {
  //
  const [orders, setOrders] = useState<Order[]>([]);
  const [isClicked, setIsClicked] = useState(false);

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

  const playSound = () => {
    const sound = new Sound(
      require('../../../../assets/sound/alram.mp3'),
      error => {
        if (error) {
          console.error('Failed to load the sound', error);
          return;
        }
        sound.play(success => {
          if (success) {
            console.log('Sound played successfully');
          } else {
            console.error('Failed to play the sound');
          }
        });
      },
    );
  };

  //SSE
  useEffect(() => {
    const es = new EventSource(
      'https://dev.deunku.com/api/v1/admin/order/sse/connect',
      {
        timeout: 0,
        pollingInterval: 1000,
      },
    );

    const listener: EventSourceListener = event => {
      if (event.type === 'open') {
        console.log('open!!!!!!!!!!!!!!!!!!!!!!!');
      } else if (event.type === 'message') {
        console.log('event.data>>>>>>>>', event.data);
        let data: Order;

        if (event.data != null) {
          data = JSON.parse(event.data);
          console.log('data!!!!!!!!!!!!!!!!!!!!!!!!!!!!:', data);
          if (orderStatus === 'WAIT') {
            setOrders([data, ...orders]);
            playSound();
          } else {
            //asd
          }
        }
      } else if (event.type === 'error') {
        console.log('SSE connection error');
      } else if (event.type === 'exception') {
        console.log('SSE connection exception');
      }
    };

    es.addEventListener('open', listener);
    es.addEventListener('message', listener);
    es.addEventListener('error', listener);

    return () => {
      es.removeAllEventListeners();
      es.close();
    };
  }, []);

  // 주문;
  // useEffect(() => {
  //   const fetchOrders = async () => {
  //     await BASE_API.get(
  //       `https://dev.deunku.com/api/v1/admin/orders?orderStatus=${orderStatus}`,
  //     )
  //       .then(response => {
  //         setOrders(response.data);
  //         console.log(response.data);
  //         console.log(
  //           '@@@@@@ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ@@',
  //         );
  //       })
  //       .catch(error => {
  //         console.error('Error fetching orders(orderListLayout):', error);
  //       });
  //   };
  //
  //   fetchOrders();
  // }, [orderStatus]);

  const fetchOrders = async (status?: string) => {
    try {
      const response = await BASE_API.get(
        `https://dev.deunku.com/api/v1/admin/orders?orderStatus=${status}`,
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchOrders(orderStatus);
        setOrders(data);
        console.log(data);
      } catch (error) {
        // 처리할 에러 로직 추가
        console.error('Error fetching Data:', error);
      }
    };

    fetchData();
  }, [orderStatus, isClicked]);

  // const totalBunCount = orders.reduce((acc, order) => {
  //   const bunCount = order.menuResponse.reduce((menuAcc, menu) => {
  //     return menuAcc + menu.count;
  //   }, 0);
  //   return acc + bunCount;
  // }, 0);

  let totalBunCount;

  if (Array.isArray(orders)) {
    // orders가 배열인 경우 처리
    totalBunCount = orders.reduce((acc, order) => {
      const bunCount = order.menuResponse.reduce((menuAcc, menu) => {
        return menuAcc + menu.count;
      }, 0);
      return acc + bunCount;
    }, 0);
  } else if (typeof orders === 'object' && orders !== null) {
    // orders가 객체인 경우 처리
    // 예: orders.menuResponse 등을 이용하여 적절한 속성에 접근하여 처리
    totalBunCount = 0; // 적절한 처리를 수행해야 함
  } else {
    // orders가 배열도 객체도 아닌 경우
    totalBunCount = 0; // 적절한 처리를 수행해야 함
  }

  return isSideMenuVisible ? null : (
    <>
      <styles.OrderView>
        <FlatList
          data={orders}
          renderItem={item => {
            const RenderItemComponent = renderItemComponent;
            return (
              <RenderItemComponent
                {...item}
                setOrders={setOrders}
                fetchOrders={fetchOrders}
                isClicked={isClicked}
                setIsClicked={setIsClicked}
              />
            );
          }}
          keyExtractor={item => `order${item.orderId.toString()}`}
          // keyExtractor={`order${orderStatus.toString()}`}
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
