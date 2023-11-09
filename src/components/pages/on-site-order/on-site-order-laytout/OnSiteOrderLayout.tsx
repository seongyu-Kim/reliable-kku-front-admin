import React, {useState, useEffect} from 'react';
import {Modal, FlatList} from 'react-native';
import * as styles from './OnSiteOrderLayout.styles';
import CloseButton from '../../../../assets/images/closeButton.svg';
import OnSiteRedBean from '../../../../assets/images/onSiteRedBean.svg';
import Margin from '../../../common/margin/Margin';
// import menus from '../../../../data/mockMenu';
import PlusButton from '../../../../assets/images/plusButton.svg';
import MinusButton from '../../../../assets/images/minusButton.svg';
import OnSiteKeypad from '../on-site-keypad/OnSiteKeypad';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
import axios from 'axios';
import {BASE_API} from '../../../../api/CommonApi';
// import {MMKVLoader} from 'react-native-mmkv-storage';

// const MMKV = new MMKVLoader().initialize();

const OnSiteOrderLayout: React.FC<{
  isModalVisible: any;
  setModalVisible: any;
}> = ({isModalVisible, setModalVisible}) => {
  interface Menu {
    menuId: number;
    imageUrl: string;
    menuName: string;
    description: string;
    pricePerOne: number;
    pricePerThree: number;
    isSale: boolean;
  }
  //
  const [menus, setMenus] = useState<Menu[]>([]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [menuQuantities, setMenuQuantities] = useState(
    menus.map(menu => ({...menu, quantity: 0})),
  );

  //
  const handleIncrement = (id: number) => {
    const updatedQuantities = menuQuantities.map(menu => {
      if (menu.menuId === id) {
        return {...menu, quantity: menu.quantity + 1};
      }
      return menu;
    });
    setMenuQuantities(updatedQuantities);
  };

  //
  const handleDecrement = (id: number) => {
    const updatedQuantities = menuQuantities.map(menu => {
      if (menu.menuId === id && menu.quantity > 0) {
        return {...menu, quantity: menu.quantity - 1};
      }
      return menu;
    });
    setMenuQuantities(updatedQuantities);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  //
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    menuQuantities.forEach(menu => {
      const {quantity, pricePerOne, pricePerThree} = menu;
      let price = 0;

      if (quantity >= 3) {
        const setsOfThree = Math.floor(quantity / 3);
        const remaining = quantity % 3;
        price = setsOfThree * pricePerThree + remaining * pricePerOne;
      } else {
        price = quantity * pricePerOne;
      }

      totalPrice += price;
    });

    return Number(totalPrice);
  };

  //
  const handlePhoneNumberChange = (newPhoneNumber: string) => {
    setPhoneNumber(newPhoneNumber);
  };

  //
  useEffect(() => {
    const fetchMenus = async () => {
      await BASE_API.get('https://dev.deunku.com/api/v1/admin/menu')
        .then(response => {
          setMenus(response.data);
          //
          const updatedMenuQuantities = response.data.map((menu: any) => ({
            ...menu,
            quantity: 0,
          }));
          setMenuQuantities(updatedMenuQuantities);

          console.log(response.data);
          console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        })
        .catch(error => {
          console.error('Error fetching orders:', error);
        });
    };

    fetchMenus();
  }, []);

  //
  const handleOrder = async () => {
    try {
      const orderedMenuData = menuQuantities
        .filter(menu => menu.quantity > 0) // 수량이 0 이상인 메뉴만 선택
        .map(menu => ({
          menuId: menu.menuId,
          count: menu.quantity,
        }));

      const response = await BASE_API.post(
        'https://dev.deunku.com/api/v1/admin/offline-orders',
        {
          phoneNumber: phoneNumber,
          totalPrice: calculateTotalPrice(),
          registeredMenus: orderedMenuData,
        },
      );

      console.log(response);
      setModalVisible(false);
    } catch (error) {
      console.log(phoneNumber);
      console.log(calculateTotalPrice());

      console.error('주문 실패:', error);
    }
  };

  const renderMenuItem = ({item}: {item: any}) => (
    <styles.ProductCounter>
      <styles.ProductHeaderView>
        <styles.RedBeanImg>
          <Image source={{uri: item.imageUrl}} width={59} height={61} />
        </styles.RedBeanImg>
        <styles.ProductText1>{item.menuName}</styles.ProductText1>
      </styles.ProductHeaderView>

      <styles.HrLine2 />
      <styles.ProductPrice>{item.pricePerOne}원</styles.ProductPrice>

      <styles.MinusButton onPress={() => handleDecrement(item.menuId)}>
        <MinusButton height={18} width={18} />
      </styles.MinusButton>
      <styles.PlusButton onPress={() => handleIncrement(item.menuId)}>
        <PlusButton height={18} width={18} />
      </styles.PlusButton>
      <styles.ProductCount>
        {menuQuantities.find(menu => menu.menuId === item.menuId)?.quantity ||
          0}
      </styles.ProductCount>
    </styles.ProductCounter>
  );

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <styles.OnSiteView>
          <styles.CloseButtonImg onPress={handleCloseModal}>
            <CloseButton width={40} height={40} />
          </styles.CloseButtonImg>

          <Margin height={31} />

          <styles.OnSiteTitle>현장접수</styles.OnSiteTitle>

          <Margin height={29} />

          <styles.HrLine />

          <Margin height={57.27} />

          <styles.OnSiteContentView>
            <styles.ProductCounterView>
              <FlatList
                data={menus}
                renderItem={renderMenuItem}
                keyExtractor={item => item.menuId.toString()}
                numColumns={1}
                showsVerticalScrollIndicator={true}
              />
            </styles.ProductCounterView>
            <OnSiteKeypad onPhoneNumberChange={handlePhoneNumberChange} />
          </styles.OnSiteContentView>
          <styles.TotalPriceView>
            <styles.TotalPriceText>총 가격</styles.TotalPriceText>
            <styles.HrLine3 />
            <styles.TotalPriceNum>
              {calculateTotalPrice()}원
            </styles.TotalPriceNum>
          </styles.TotalPriceView>
          <styles.OrderButton onPress={handleOrder}>
            <styles.OrderButtonText>주문하기</styles.OrderButtonText>
          </styles.OrderButton>
        </styles.OnSiteView>
      </Modal>
    </>
  );
};

export default OnSiteOrderLayout;
