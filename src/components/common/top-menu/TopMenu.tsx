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

const TopMenu: React.FC<{
  isSideMenuVisible: any;
  setIsSideMenuVisible: any;
  selectedTopMenu: string;
  setSelectedTopMenu: any;
  selectedSideMenu: any;
  setSelectedSideMenu: any;
}> = ({
  isSideMenuVisible,
  setIsSideMenuVisible,
  selectedTopMenu,
  setSelectedTopMenu,
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
    setSelectedTopMenu(menu);
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
        <Menu width={34} height={28.138} />
      </styles.MenuImg>

      {isSideMenuVisible && (
        <styles.SideMenuView>
          <Margin height={153.25} />

          <TouchableOpacity
            onPress={() => {
              handleSideMenuPress('영업관리');
            }}>
            <styles.SideMenuText
              selectedSideMenu={selectedSideMenu === '영업관리'}>
              영업관리
            </styles.SideMenuText>
          </TouchableOpacity>

          <Margin height={79.69} />

          <TouchableOpacity
            onPress={() => {
              handleSideMenuPress('재고관리');
            }}>
            <styles.SideMenuText
              selectedSideMenu={selectedSideMenu === '재고관리'}>
              재고관리
            </styles.SideMenuText>
          </TouchableOpacity>

          <Margin height={79.69} />

          <TouchableOpacity
            onPress={() => {
              handleSideMenuPress('회원관리');
            }}>
            <styles.SideMenuText
              selectedSideMenu={selectedSideMenu === '회원관리'}>
              회원관리
            </styles.SideMenuText>
          </TouchableOpacity>

          <Margin height={79.69} />

          <TouchableOpacity
            onPress={() => {
              handleSideMenuPress('매출관리');
            }}>
            <styles.SideMenuText
              selectedSideMenu={selectedSideMenu === '매출관리'}>
              매출관리
            </styles.SideMenuText>
          </TouchableOpacity>

          <Margin height={79.69} />

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
            <SideMenuCat width={98} height={98} />
          </styles.SideMenuCat>
        </styles.SideMenuView>
      )}

      <Margin height={35} />

      {isSideMenuVisible ? (
        <>
          <React.Fragment>
            <styles.TopMenuViewSm>
              <TouchableOpacity onPress={() => handleTopMenuPress('대기')}>
                <styles.TopMenuTextSm>대기</styles.TopMenuTextSm>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleTopMenuPress('접수')}>
                <styles.TopMenuTextSm>접수</styles.TopMenuTextSm>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleTopMenuPress('완료')}>
                <styles.TopMenuTextSm>완료</styles.TopMenuTextSm>
              </TouchableOpacity>
            </styles.TopMenuViewSm>
            <styles.HrLine4 />
          </React.Fragment>
        </>
      ) : (
        <React.Fragment>
          <styles.TopMenuView>
            <TouchableOpacity onPress={() => handleTopMenuPress('대기')}>
              <styles.TopMenuText selectedTopMenu={selectedTopMenu === '대기'}>
                대기
              </styles.TopMenuText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTopMenuPress('접수')}>
              <styles.TopMenuText selectedTopMenu={selectedTopMenu === '접수'}>
                접수
              </styles.TopMenuText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTopMenuPress('완료')}>
              <styles.TopMenuText selectedTopMenu={selectedTopMenu === '완료'}>
                완료
              </styles.TopMenuText>
            </TouchableOpacity>
          </styles.TopMenuView>
          {selectedTopMenu === '대기' && <styles.HrLine1 />}
          {selectedTopMenu === '접수' && <styles.HrLine2 />}
          {selectedTopMenu === '완료' && <styles.HrLine3 />}
        </React.Fragment>
      )}
    </>
  );
};

export default TopMenu;
