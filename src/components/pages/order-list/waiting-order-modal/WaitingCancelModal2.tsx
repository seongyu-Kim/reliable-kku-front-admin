import React from 'react';
import {Modal} from 'react-native';
import * as styles from './WaitingCancelModal2.styles';
import CloseButton from '../../../../assets/images/closeButton.svg';
import {
  heightPercentage,
  widthPercentage,
} from '../../../common/ResponsiveSize';

const WaitingCancelModal2: React.FC<{
  cancelModalVisible2: any;
  handleCloseModal: any;
}> = ({cancelModalVisible2, handleCloseModal}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={cancelModalVisible2}>
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
          <styles.ModalContent>취소가 완료되었습니다.</styles.ModalContent>

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

export default WaitingCancelModal2;
