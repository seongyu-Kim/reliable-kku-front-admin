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
    // setOrderStatus('WAIT');
  } else if (selectedTopMenu === '접수') {
    renderItemComponent = ReceiptOrderItem;
    orderStatus = 'COOKING';
    // setOrderStatus('COOKING');
  } else if (selectedTopMenu === '완료') {
    renderItemComponent = CompleteOrderItem;
    orderStatus = 'FINISH';
    // setOrderStatus('FINISH');
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
  useEffect(() => {
    const fetchOrders = async () => {
      await BASE_API.get(
        `https://dev.deunku.com/api/v1/admin/orders?orderStatus=${orderStatus}`,
      )
        .then(response => {
          setOrders(response.data);
          console.log(response.data);
          console.log('@@@@@@@@');
        })
        .catch(error => {
          console.error('Error fetching orders(orderListLayout):', error);
        });
    };

    fetchOrders();
  }, [orderStatus]);

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
          data={orders}
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
