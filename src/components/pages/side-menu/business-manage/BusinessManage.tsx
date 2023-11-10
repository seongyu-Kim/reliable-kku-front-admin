import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import TopMenu from '../../../common/top-menu/TopMenu';
import * as styles from './BusinessMange.styles';
import YellowBtn from '../../../common/yellow-btn/YellowBtn';
import GreyBtn from '../../../common/grey-btn/GreyBtn';
import axios from 'axios';
import {BASE_API} from '../../../../api/CommonApi';

const BusinessManage: React.FC = () => {
  const [isOperating, setIsOperating] = useState<boolean>();

  useEffect(() => {
    const fetchBusiness = async () => {
      await BASE_API.get(
        'https://dev.deunku.com/api/v1/admin/stores/open-closed',
      )
        .then(response => {
          setIsOperating(response.data.isOpened);
          console.log(response.data);
          console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        })
        .catch(error => {
          console.error('Error fetching isOperating:', error);
        });
    };

    fetchBusiness();
  }, []);

  const handleisOperatingPress = async () => {
    try {
      const response = await BASE_API.put(
        'https://dev.deunku.com/api/v1/admin/stores/open-closed',
      );

      console.log(response);
      setIsOperating(!isOperating);
    } catch (error) {
      console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
      console.error('영업상태 변경 실패:', error);
    }
  };

  return (
    <>
      <styles.BusinessManageBox>
        <styles.BusinessBtn
          isOperating={!isOperating}
          disabled={isOperating}
          onPress={handleisOperatingPress}>
          <styles.BusinessBtnText>영업시작</styles.BusinessBtnText>
        </styles.BusinessBtn>

        <styles.BusinessBtn
          isOperating={isOperating}
          disabled={!isOperating}
          onPress={handleisOperatingPress}>
          <styles.BusinessBtnText>영업마감</styles.BusinessBtnText>
        </styles.BusinessBtn>
      </styles.BusinessManageBox>
    </>
  );
};

export default BusinessManage;
