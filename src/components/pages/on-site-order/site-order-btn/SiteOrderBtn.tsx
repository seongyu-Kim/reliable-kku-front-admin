import React, {SetStateAction, useState} from 'react';
import * as styles from './SiteOrderBtn.styles';
import OnSiteOrderLayout from '../on-site-order-laytout/OnSiteOrderLayout';

type SiteOrderBtnProps = {
  isClicked: boolean;
  setIsClicked: React.Dispatch<SetStateAction<boolean>>;
};

const SiteOrderBtn: React.FC<SiteOrderBtnProps> = ({
  isClicked,
  setIsClicked,
}) => {
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
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
      )}
    </>
  );
};

export default SiteOrderBtn;
