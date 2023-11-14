import React from 'react';
import * as styles from './LogoutManage.styles';
import {BASE_API} from '../../../../api/CommonApi';
import {useNavigation} from '@react-navigation/native';

const LogoutManage: React.FC = () => {
  const navigation = useNavigation();
  const handleLogoutPress = async () => {
    await BASE_API.get('https://dev.deunku.com/api/v1/auth/admin/logout')
      .then(response => {
        console.log(response.data);
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        navigation.navigate('MainScreen');
      })
      .catch(error => {
        console.error('Error 로그아웃:', error);
      });
  };

  const handleNoPress = () => {
    // 아니오를 누르면 이전 페이지로 이동
    navigation.goBack();
  };

  return (
    <>
      <styles.LogoutBox>
        <styles.Text>로그아웃 하시겠습니까?</styles.Text>
        <styles.BtnBox>
          <styles.Btn1 onPress={handleLogoutPress}>
            <styles.BtnText>예</styles.BtnText>
          </styles.Btn1>
          <styles.Btn2 onPress={handleNoPress}>
            <styles.BtnText>아니오</styles.BtnText>
          </styles.Btn2>
        </styles.BtnBox>
      </styles.LogoutBox>
    </>
  );
};

export default LogoutManage;
