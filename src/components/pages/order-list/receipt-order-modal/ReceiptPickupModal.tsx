import React from 'react';
import {Modal} from 'react-native';
import * as styles from './ReceiptPickupModal.styles';
import CloseButton from '../../../../assets/images/closeButton.svg';

const ReceiptPickupModal: React.FC<{
  handleCloseModal: any;
  pickipModalVisible: any;
}> = ({handleCloseModal, pickipModalVisible}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={pickipModalVisible}>
      <styles.OrderModalView>
        <styles.OrderModal>
          {/* 모달위부분 */}

          <styles.CloseBtnImg onPress={handleCloseModal}>
            <CloseButton width={30} height={30} />
          </styles.CloseBtnImg>

          {/* 모달내용 */}
          <styles.ModalContent>픽업알림이 전송되었습니다.</styles.ModalContent>

          <styles.OrderModalBtnView>
            <styles.OrderModalBtn onPress={handleCloseModal}>
              <styles.BtnText>확인</styles.BtnText>
            </styles.OrderModalBtn>
          </styles.OrderModalBtnView>
        </styles.OrderModal>
      </styles.OrderModalView>
    </Modal>
  );
};

export default ReceiptPickupModal;
