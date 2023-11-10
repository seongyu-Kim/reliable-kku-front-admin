import React from 'react';
import {Modal} from 'react-native';
import * as styles from './WaitingRefundModal1.styles';
import CloseButton from '../../../../assets/images/closeButton.svg';

const WaitingRedfundModal1: React.FC<{
  refundModalVisible1: any;
  handleCloseModal: any;
  handleRefundPress: any;
}> = ({refundModalVisible1, handleCloseModal, handleRefundPress}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={refundModalVisible1}>
      <styles.OrderModalView>
        <styles.OrderModal>
          {/* 모달위부분 */}

          <styles.CloseBtnImg onPress={handleCloseModal}>
            <CloseButton width={30} height={30} />
          </styles.CloseBtnImg>

          {/* 모달내용 */}
          <styles.ModalContent>
            해당 주문을 환불하시겠습니까?
          </styles.ModalContent>

          <styles.OrderModalBtnView>
            <styles.OrderModalBtn1 onPress={handleRefundPress}>
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

export default WaitingRedfundModal1;
