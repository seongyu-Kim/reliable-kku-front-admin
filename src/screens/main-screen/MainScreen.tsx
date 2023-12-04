import React, {useEffect, useRef, useState} from 'react';
import * as styles from './MainScreen.styles';
import OrderListLayout from '../../components/pages/order-list/order-list-layout/OrderListLayout';
import TopMenu from '../../components/common/top-menu/TopMenu';
import {BASE_API} from '../../api/CommonApi';
import EventSource, {EventSourceListener} from 'react-native-sse';
import Sound from 'react-native-sound';
import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';

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

const MainScreen: React.FC = () => {
  //사이드메뉴 오픈
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);
  //
  const [selectedSideMenu, setSelectedSideMenu] = useState<string>('');
  //
  const [isClicked, setIsClicked] = useState(false);

  //
  const [orderStatus, setOrderStatus] = useState<'WAIT' | 'COOKING' | 'FINISH'>(
    'WAIT',
  );

  const [orders, setOrders] = useState<Order[]>([]);
  const soundFile = require('../../assets/sound/jumoonTV.m4a');
  const soundRef = useRef<Sound | null>(
    new Sound(soundFile, error => {
      if (error) {
        console.error('Failed to load the sound', error);
      }
    }),
  );

  useEffect(() => {
    requestUserPermission();
  }, []);

  const requestUserPermission = async () => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );

    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      return getToken();
    }
  };

  const getToken = async () => {
    const fcmToken = await messaging().getToken();
    console.log('디바이스 토큰값');
    console.log(fcmToken);

    BASE_API.post('https://prod.deunku.com/api/v1/fcm', {
      token: fcmToken,
    })
      .then(response => {
        console.log('success', response.data);
      })
      .catch(error => {
        console.error('Error sending FCM Token to server:', error);
      });
  };

  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.stop(); // Stop the sound if it's playing
        soundRef.current.release(); // Release the sound resources
      }
    };
  }, []);

  // const playSound = () => {
  //   const sound = new Sound(
  //     require('../../assets/sound/jumoonTV.m4a'),
  //     error => {
  //       if (error) {
  //         console.error('Failed to load the sound', error);
  //         return;
  //       }
  //       sound.play(success => {
  //         if (success) {
  //           console.log('Sound played successfully');
  //         } else {
  //           console.error('Failed to play the sound');
  //         }
  //       });
  //     },
  //   );
  // };

  const playSound = () => {
    if (soundRef.current) {
      soundRef.current.play(success => {
        if (success) {
          console.log('Sound played successfully');
        } else {
          console.error('Failed to play the sound');
        }
      });
    }
  };

  const fetchOrders = async (status?: string) => {
    try {
      const response = await BASE_API.get(
        `https://prod.deunku.com/api/v1/admin/orders?orderStatus=${status}`,
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchOrders(orderStatus);
      setOrders(data);
      console.log(data);
      console.log('!!!!!!!!!!!');
    };
    setOrders([]);
    fetchData();
  }, [orderStatus, isClicked]);

  //SSE
  useEffect(() => {
    if (orderStatus == 'WAIT') {
      const es = new EventSource(
        'https://prod.deunku.com/api/v1/admin/order/sse/connect',
        {
          timeout: 0,
          pollingInterval: 5000,
        },
      );
      const listener: EventSourceListener = event => {
        if (event.type === 'open') {
          console.log('open!!!!!!!');
          fetchOrders('WAIT').then(data => setOrders(data));
        } else if (event.type === 'message') {
          let data: Order;
          if (event.data != null) {
            data = JSON.parse(event.data);
            console.log('data!!!!:', data);
            // if (orderStatus === 'WAIT') {
            //   setOrders([data, ...orders]);
            // }
            setOrders([data]);
            playSound();
          }
        } else if (event.type === 'error') {
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
    }
  }, [orderStatus, isClicked]);

  return (
    <styles.Container>
      <TopMenu
        isSideMenuVisible={isSideMenuVisible}
        setIsSideMenuVisible={setIsSideMenuVisible}
        setOrderStatus={setOrderStatus}
        orderStatus={orderStatus}
        setSelectedSideMenu={setSelectedSideMenu}
        selectedSideMenu={selectedSideMenu}
      />
      {isSideMenuVisible && selectedSideMenu}

      <OrderListLayout
        isSideMenuVisible={isSideMenuVisible}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        orderStatus={orderStatus}
        setOrderStatus={setOrderStatus}
        orders={orders}
        setOrders={setOrders}
        fetchOrders={fetchOrders}
      />
    </styles.Container>
  );
};

export default MainScreen;
