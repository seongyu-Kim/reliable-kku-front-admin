import React from 'react';
import {Modal} from 'react-native';
import * as styles from './WaitingCancelModal1.styles';
import CloseButton from '../../../../assets/images/closeButton.svg';
import {
  heightPercentage,
  widthPercentage,
} from '../../../common/ResponsiveSize';

const WaitingCancelModal1: React.FC<{
  cancelModalVisible1: any;
  handleCloseModal: any;
  handleCancelPress: any;
}> = ({cancelModalVisible1, handleCloseModal, handleCancelPress}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={cancelModalVisible1}
      supportedOrientations={['landscape']}>
      <styles.OrderModalView>
        <styles.OrderModal>
          {/* 모달위부분 */}

          <styles.CloseBtnImg onPress={handleCloseModal}>
            <CloseButton
              width={widthPercentage(30)}
              height={heightPercentage(30)}
            />
          </styles.CloseBtnImg>

          {/* 모달내용 */}
          <styles.ModalContent>
            해당 주문을 취소하시겠습니까?
          </styles.ModalContent>

          <styles.OrderModalBtnView>
            <styles.OrderModalBtn1 onPress={handleCancelPress}>
              <styles.BtnText>예</styles.BtnText>
            </styles.OrderModalBtn1>
            <styles.OrderModalBtn2 onPress={handleCloseModal}>
              <styles.BtnText>아니오</styles.BtnText>
            </styles.OrderModalBtn2>
          </styles.OrderModalBtnView>
        </styles.OrderModal>
      </styles.OrderModalView>
    </Modal>
  );
};

export default WaitingCancelModal1;
