import {Modal, View} from 'react-native';
import {Text} from 'react-native-svg';
import React, {useState} from 'react';
import * as styles from './SiteOrderBtn.styles';
import OnSiteOrderLayout from '../on-site-order-laytout/OnSiteOrderLayout';

const SiteOrderBtn: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <styles.SiteOrderBtnView onPress={toggleModal}>
        <styles.SiteOrderBtnText>현장 접수</styles.SiteOrderBtnText>
      </styles.SiteOrderBtnView>

      {isModalVisible && (
        <OnSiteOrderLayout
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
        />
      )}
    </>
  );
};

export default SiteOrderBtn;
