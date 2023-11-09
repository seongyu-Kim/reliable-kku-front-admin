import React, {useState} from 'react';
import * as styles from './MainScreen.styles';
import OrderListLayout from '../../components/pages/order-list/order-list-layout/OrderListLayout';
import TopMenu from '../../components/common/top-menu/TopMenu';
import {Dimensions, ScrollView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MainScreen: React.FC = () => {
  //사이드메뉴 오픈
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);

  //탑메뉴 선택
  const [selectedTopMenu, setSelectedTopMenu] = useState<string>('대기');

  //사이드메뉴 선택
  // const [selectedSideMenu, setSelectedSideMenu] =
  //   useState<React.ReactNode>(null);

  const [selectedSideMenu, setSelectedSideMenu] = useState<string | null>(null);

  return (
    <styles.Container>
      <TopMenu
        isSideMenuVisible={isSideMenuVisible}
        setIsSideMenuVisible={setIsSideMenuVisible}
        selectedTopMenu={selectedTopMenu}
        setSelectedTopMenu={setSelectedTopMenu}
        setSelectedSideMenu={setSelectedSideMenu}
        selectedSideMenu={selectedSideMenu}
      />
      {isSideMenuVisible && selectedSideMenu}

      <OrderListLayout
        isSideMenuVisible={isSideMenuVisible}
        selectedTopMenu={selectedTopMenu}
      />
    </styles.Container>
  );
};

export default MainScreen;
