import React from 'react';
import {TouchableOpacity} from 'react-native';
import * as styles from './TopMenu.styles';
import Margin from '../margin/Margin';
import Menu from '../../../assets/images/menu.svg';
import SideMenuCat from '../../../assets/images/sideMenuCat.svg';
import BusinessManage from '../../pages/side-menu/business-manage/BusinessManage';
import StockManage from '../../pages/side-menu/stock-manage/StockManage';
import MemberManage from '../../pages/side-menu/member-manage/MemberManage';
import SalesManage from '../../pages/side-menu/sales-manage/SalesManage';
import LogoutManage from '../../pages/side-menu/logout-manage/LogoutManage';
import {heightPercentage, widthPercentage} from '../ResponsiveSize';

const TopMenu: React.FC<{
  isSideMenuVisible: any;
  setIsSideMenuVisible: any;
  // selectedTopMenu: string;
  // setSelectedTopMenu: any;
  selectedSideMenu: string;
  setSelectedSideMenu: any;
  // isClicked: boolean;
  // setIsClicked: React.Dispatch<SetStateAction<boolean>>;
  setOrderStatus: any;
  orderStatus: any;
}> = ({
  isSideMenuVisible,
  setIsSideMenuVisible,
  // selectedTopMenu,
  // setSelectedTopMenu,
  setOrderStatus,
  orderStatus,
  selectedSideMenu,
  setSelectedSideMenu,
}) => {
  //
  //
  //

  //사이드메뉴토글
  const handleSideMenuToggle = () => {
    setIsSideMenuVisible(!isSideMenuVisible);
  };

  //탑메뉴선택
  const handleTopMenuPress = (menu: string) => {
    setOrderStatus(menu);
    setIsSideMenuVisible(false);
  };

  //
  const handleSideMenuPress = (menu: string) => {
    setSelectedSideMenu(menu);
    switch (menu) {
      case '영업관리':
        setSelectedSideMenu(<BusinessManage />);
        break;
      case '재고관리':
        setSelectedSideMenu(<StockManage />);
        break;
      case '회원관리':
        setSelectedSideMenu(<MemberManage />);
        break;
      case '매출관리':
        setSelectedSideMenu(<SalesManage />);
        break;
      case '로그아웃':
        setSelectedSideMenu(<LogoutManage />);
        break;
      default:
        setSelectedSideMenu(null);
        break;
    }
  };

  return (
    <>
      <styles.MenuImg onPress={handleSideMenuToggle}>
        <Menu width={widthPercentage(34)} height={heightPercentage(28.138)} />
      </styles.MenuImg>

      {isSideMenuVisible && (
        <styles.SideMenuView>
          <Margin width={0} height={heightPercentage(153.25)} />

          <TouchableOpacity
            hitSlop={{bottom: 20, top: 20, left: 20, right: 20}}
            onPress={() => {
              handleSideMenuPress('영업관리');
            }}>
            <styles.SideMenuText
              selectedSideMenu={selectedSideMenu === '영업관리'}>
              영업관리
            </styles.SideMenuText>
          </TouchableOpacity>

          <Margin width={0} height={heightPercentage(79.69)} />

          <TouchableOpacity
            onPress={() => {
              handleSideMenuPress('재고관리');
            }}>
            <styles.SideMenuText
              selectedSideMenu={selectedSideMenu === '재고관리'}>
              재고관리
            </styles.SideMenuText>
          </TouchableOpacity>

          <Margin width={0} height={heightPercentage(79.69)} />

          <TouchableOpacity
            onPress={() => {
              handleSideMenuPress('회원관리');
            }}>
            <styles.SideMenuText
              selectedSideMenu={selectedSideMenu === '회원관리'}>
              회원관리
            </styles.SideMenuText>
          </TouchableOpacity>

          <Margin width={0} height={heightPercentage(79.69)} />

          <TouchableOpacity
            onPress={() => {
              handleSideMenuPress('매출관리');
            }}>
            <styles.SideMenuText
              selectedSideMenu={selectedSideMenu === '매출관리'}>
              매출관리
            </styles.SideMenuText>
          </TouchableOpacity>

          <Margin width={0} height={heightPercentage(79.69)} />

          <TouchableOpacity
            onPress={() => {
              handleSideMenuPress('로그아웃');
            }}>
            <styles.SideMenuText
              selectedSideMenu={selectedSideMenu === '로그아웃'}>
              로그아웃
            </styles.SideMenuText>
          </TouchableOpacity>
          <styles.SideMenuCat>
            <SideMenuCat
              width={widthPercentage(98)}
              height={heightPercentage(98)}
            />
          </styles.SideMenuCat>
        </styles.SideMenuView>
      )}

      <Margin width={0} height={heightPercentage(35)} />

      {isSideMenuVisible ? (
        <>
          <React.Fragment>
            <styles.TopMenuViewSm>
              <TouchableOpacity onPress={() => handleTopMenuPress('WAIT')}>
                <styles.TopMenuTextSm>대기</styles.TopMenuTextSm>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleTopMenuPress('COOKING')}>
                <styles.TopMenuTextSm>접수</styles.TopMenuTextSm>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleTopMenuPress('FINISH')}>
                <styles.TopMenuTextSm>완료</styles.TopMenuTextSm>
              </TouchableOpacity>
            </styles.TopMenuViewSm>
            <styles.HrLine4 />
          </React.Fragment>
        </>
      ) : (
        <React.Fragment>
          <styles.TopMenuView>
            <TouchableOpacity onPress={() => handleTopMenuPress('WAIT')}>
              <styles.TopMenuText orderStatus={orderStatus === 'WAIT'}>
                대기
              </styles.TopMenuText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTopMenuPress('COOKING')}>
              <styles.TopMenuText orderStatus={orderStatus === 'COOKING'}>
                접수
              </styles.TopMenuText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTopMenuPress('FINISH')}>
              <styles.TopMenuText orderStatus={orderStatus === 'FINISH'}>
                완료
              </styles.TopMenuText>
            </TouchableOpacity>
          </styles.TopMenuView>
          {orderStatus === 'WAIT' && <styles.HrLine1 />}
          {orderStatus === 'COOKING' && <styles.HrLine2 />}
          {orderStatus === 'FINISH' && <styles.HrLine3 />}
        </React.Fragment>
      )}
    </>
  );
};

export default TopMenu;
