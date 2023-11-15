import React, {SetStateAction, useEffect, useState} from 'react';
import {FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import PlusMenu from '../../../../assets/images/stockPlusMenu.svg';
import * as styles from './StockManage.styles';
import PlusMenuModal from './PlusMenuModal';
import Margin from '../../../common/margin/Margin';
import {BASE_API} from '../../../../api/CommonApi';
import {
  heightPercentage,
  widthPercentage,
} from '../../../common/ResponsiveSize';
import {useFocusEffect} from '@react-navigation/native';

const StockManage: React.FC = () => {
  const [isPlusMenuModal, setPlusMenuModal] = useState(false);
  const [menus, setMenus] = useState<any[]>([]);

  const [isClicked, setIsClicked] = useState(false);

  // const [isSale, setSale] = useState();

  useFocusEffect(
    React.useCallback(() => {
      const fetchMenus = async () => {
        setMenus([]);
        await BASE_API.get('https://dev.deunku.com/api/v1/admin/menu')
          .then(response => {
            setMenus(response.data);
            console.log(response.data);
            console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');
          })
          .catch(error => {
            console.error('Error fetching es:', error);
          });
      };
      fetchMenus();
    }, [isClicked]),
  );

  //메뉴
  // useEffect(() => {
  //   const fetchMenus = async () => {
  //     setMenus([]);
  //     await BASE_API.get('https://dev.deunku.com/api/v1/admin/menu')
  //       .then(response => {
  //         setMenus(response.data);
  //         console.log(response.data);
  //         console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');
  //       })
  //       .catch(error => {
  //         console.error('Error fetching es:', error);
  //       });
  //   };
  //   fetchMenus();
  // }, [isClicked]);

  //품절여부
  const handleSoldOutPress = async (menuId: number, isSoldOut: boolean) => {
    try {
      const response = await BASE_API.patch(
        `https://dev.deunku.com/api/v1/admin/menu/${menuId}?isSoldOut=${isSoldOut}`,
      );
      setMenus(prevMenus => {
        const updatedMenus = prevMenus.map(menu => {
          if (menu.menuId === menuId) {
            return {...menu, isSale: !isSoldOut};
          }
          return menu;
        });
        return updatedMenus;
      });
      console.log(response);
      console.log('!!!!!!!!!!!!!!!!!!!!!!!');
    } catch (error) {
      console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
      console.error('품절 여부 선택:', error);
      console.log(!isSoldOut);
    }
  };

  const handleDeletePress = async (menuId: number) => {
    try {
      await BASE_API.delete(
        `https://dev.deunku.com/api/v1/admin/menu/${menuId}`,
      ).then(() => {
        setIsClicked(!isClicked);
        setIsClicked(!isClicked);
      });
    } catch (error) {
      console.error('삭제 실패:', error);
    }
  };

  const handlePlusModal = () => {
    setPlusMenuModal(!isPlusMenuModal);
  };

  return (
    <>
      <styles.StockManageBox>
        <styles.StockMangeDiv>
          <ScrollView horizontal>
            {menus.map(menu => (
              <styles.StockManageView key={menu.menuId}>
                <Margin width={0} height={heightPercentage(62)} />
                <TouchableOpacity
                  onPress={() => handleDeletePress(menu.menuId)}>
                  <styles.StockDeleteText>삭제</styles.StockDeleteText>
                </TouchableOpacity>
                <Margin width={0} height={heightPercentage(5)} />

                <styles.StockTitle>{menu.menuName}</styles.StockTitle>
                <styles.StockCatImg>
                  <Image
                    source={{uri: menu.imageUrl}}
                    height={heightPercentage(220)}
                    width={widthPercentage(220)}
                  />
                </styles.StockCatImg>
                <Margin width={0} height={heightPercentage(18)} />
                <styles.StockBtn
                  disabled={!menu.isSale}
                  onPress={() => handleSoldOutPress(menu.menuId, menu.isSale)}>
                  <styles.StockBtnText>품절</styles.StockBtnText>
                </styles.StockBtn>
                <Margin width={0} height={heightPercentage(14)} />
                <styles.StockBtn
                  disabled={menu.isSale}
                  onPress={() => handleSoldOutPress(menu.menuId, menu.isSale)}>
                  <styles.StockBtnText>품절해제</styles.StockBtnText>
                </styles.StockBtn>
              </styles.StockManageView>
            ))}
          </ScrollView>
          <styles.StockPlusBtn onPress={handlePlusModal}>
            <PlusMenu
              width={widthPercentage(27)}
              height={heightPercentage(27)}
            />
            <styles.StockPlusBtnText>메뉴 추가하기</styles.StockPlusBtnText>
          </styles.StockPlusBtn>
        </styles.StockMangeDiv>
      </styles.StockManageBox>
      {isPlusMenuModal && (
        <PlusMenuModal
          isPlusMenuModal={isPlusMenuModal}
          handlePlusModal={handlePlusModal}
          setPlusMenuModal={setPlusMenuModal}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
      )}
    </>
  );
};

export default StockManage;
