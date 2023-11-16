import React, {SetStateAction, useEffect, useState} from 'react';
import {FlatList, Image, Modal} from 'react-native';
import * as styles from './OnSiteOrderLayout.styles';
import CloseButton from '../../../../assets/images/closeButton.svg';
import Margin from '../../../common/margin/Margin';
import PlusButton from '../../../../assets/images/plusButton.svg';
import MinusButton from '../../../../assets/images/minusButton.svg';
import OnSiteKeypad from '../on-site-keypad/OnSiteKeypad';
import {BASE_API} from '../../../../api/CommonApi';
import {
  heightPercentage,
  widthPercentage,
} from '../../../common/ResponsiveSize';

const OnSiteOrderLayout: React.FC<{
  isModalVisible: any;
  setModalVisible: any;
  isClicked: boolean;
  setIsClicked: React.Dispatch<SetStateAction<boolean>>;
}> = ({isModalVisible, setModalVisible, isClicked, setIsClicked}) => {
  interface Menu {
    menuId: number;
    imageUrl: string;
    menuName: string;
    description: string;
    pricePerOne: number;
    pricePerThree: number;
    isSale: boolean;
  }

  const [menus, setMenus] = useState<Menu[]>([]);
  const [phoneNumber, setPhoneNumber] = useState('');

  const [quantity, setQuantity] = useState<{[key: number]: number}>({});
  const [totalPrice, setTotalPrice] = useState(0);
  const increaseQuantity = (menuId: number) => {
    setQuantity(prev => ({
      ...prev,
      [menuId]: (prev[menuId] || 0) + 1,
    }));
  };

  const decreaseQuantity = (menuId: number) => {
    if (quantity[menuId] > 0) {
      setQuantity(prev => ({
        ...prev,
        [menuId]: (prev[menuId] || 1) - 1,
      }));
    }
  };
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  useEffect(() => {
    let total = 0;

    quantity[1] = quantity[1] ? quantity[1] : 0;
    quantity[2] = quantity[2] ? quantity[2] : 0;

    let menuId1And2Price = 0;
    menuId1And2Price =
      Math.floor((quantity[1] + quantity[2]) / 3) * 2000 +
      ((quantity[1] + quantity[2]) % 3) * 700;

    menus.forEach(menu => {
      if ([1, 2].includes(menu.menuId)) {
        return;
      }

      const orderedQuantity = quantity[menu.menuId] || 0;
      const pricePerOne = menu.pricePerOne;
      const pricePerThree = menu.pricePerThree;
      let price = 0;

      price =
        Math.floor(orderedQuantity / 3) * pricePerThree +
        (orderedQuantity % 3) * pricePerOne;

      total += price;
    });

    total += menuId1And2Price;

    setTotalPrice(total);
  }, [quantity, menus]);

  const handlePhoneNumberChange = (newPhoneNumber: string) => {
    setPhoneNumber(newPhoneNumber);
  };

  useEffect(() => {
    const fetchMenus = async () => {
      await BASE_API.get('https://dev.deunku.com/api/v1/admin/menu')
        .then(res => {
          setMenus(res.data);
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
      const orderedMenuData = Object.entries(quantity)
        .filter(([, value]) => value > 0)
        .reduce<{menuId: number; count: number}[]>((acc, [key, value]) => {
          acc.push({menuId: parseInt(key), count: value} as {
            menuId: number;
            count: number;
          });
          return acc;
        }, []);

      console.log('orderedMenuDate >>>>>>>>>', orderedMenuData);

      const response = await BASE_API.post(
        'https://dev.deunku.com/api/v1/admin/offline-orders',
        {
          phoneNumber: phoneNumber,
          totalPrice: totalPrice,
          registeredMenus: orderedMenuData,
        },
      );

      console.log(response);
      setModalVisible(false);
      setIsClicked(!isClicked);
    } catch (error) {
      console.error('주문 실패:', error);
    }
  };

  const renderMenuItem = ({item}: {item: any}) => (
    <styles.ProductCounter>
      <styles.ProductHeaderView>
        <styles.RedBeanImg>
          <Image
            source={{uri: item.imageUrl}}
            width={widthPercentage(59)}
            height={heightPercentage(61)}
          />
        </styles.RedBeanImg>
        <styles.ProductText1>{item.menuName}</styles.ProductText1>
      </styles.ProductHeaderView>

      <styles.HrLine2 />
      <styles.ProductPrice>{item.pricePerOne}원</styles.ProductPrice>

      <styles.MinusButton
        hitSlop={{bottom: 20, top: 20, left: 20, right: 20}}
        onPress={() => decreaseQuantity(item.menuId)}>
        <MinusButton
          height={heightPercentage(20)}
          width={widthPercentage(20)}
        />
      </styles.MinusButton>
      <styles.PlusButton
        hitSlop={{bottom: 20, top: 20, left: 20, right: 20}}
        onPress={() => increaseQuantity(item.menuId)}>
        <PlusButton height={heightPercentage(20)} width={widthPercentage(20)} />
      </styles.PlusButton>
      <styles.ProductCount>{quantity[item.menuId] || 0}</styles.ProductCount>
    </styles.ProductCounter>
  );

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        supportedOrientations={['landscape']}>
        <styles.OnSiteView>
          <styles.CloseButtonImg onPress={handleCloseModal}>
            <CloseButton
              height={heightPercentage(40)}
              width={widthPercentage(40)}
            />
          </styles.CloseButtonImg>

          <Margin width={0} height={heightPercentage(31)} />

          <styles.OnSiteTitle>현장접수</styles.OnSiteTitle>

          <Margin width={0} height={heightPercentage(29)} />

          <styles.HrLine />

          <Margin width={0} height={heightPercentage(57.27)} />
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
            <styles.TotalPriceNum>{totalPrice}원</styles.TotalPriceNum>
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
