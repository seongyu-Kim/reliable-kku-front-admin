import React, {useState} from 'react';
import {Modal, TouchableOpacity} from 'react-native';
import * as styles from './WaitingOrderModal.styles';
import CloseButton from '../../../../assets/images/closeButton.svg';
import {
  heightPercentage,
  widthPercentage,
} from '../../../common/ResponsiveSize';

const WaitingOrderModal: React.FC<{
  id: any;
  modalVisible: any;
  handleCloseOrder: any;
  handleCancelClick: any;
  handleRefundClick: any;
  handleMinutesPress: any;
}> = ({
  id,
  modalVisible,
  handleCancelClick,
  handleRefundClick,
  handleMinutesPress,
  handleCloseOrder,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      supportedOrientations={['landscape']}>
      <styles.OrderModalView>
        <styles.OrderModal>
          {/* 모달위부분 */}
          <styles.OrderModalTop>
            <styles.CloseBtnImg onPress={handleCloseOrder}>
              <CloseButton
                width={widthPercentage(30)}
                height={heightPercentage(30)}
              />
            </styles.CloseBtnImg>
            <styles.OrderModalTopText>
              주문번호 {parseInt(id)}
            </styles.OrderModalTopText>
          </styles.OrderModalTop>
          {/* 모달내용 */}
          <styles.OrderModalBox>
            <styles.OrderModalBoxTitle>예상소요시간</styles.OrderModalBoxTitle>
            <styles.OrderModalContentWrapper>
              <TouchableOpacity onPress={() => handleMinutesPress(10)}>
                <styles.OrderModalContentText>
                  10분
                </styles.OrderModalContentText>
              </TouchableOpacity>

              <styles.HrLine2 />

              <TouchableOpacity onPress={() => handleMinutesPress(20)}>
                <styles.OrderModalContentText>
                  20분
                </styles.OrderModalContentText>
              </TouchableOpacity>

              <styles.HrLine2 />

              <TouchableOpacity onPress={() => handleMinutesPress(30)}>
                <styles.OrderModalContentText>
                  30분
                </styles.OrderModalContentText>
              </TouchableOpacity>

              <styles.HrLine2 />

              <TouchableOpacity onPress={() => handleMinutesPress(40)}>
                <styles.OrderModalContentText>
                  40분
                </styles.OrderModalContentText>
              </TouchableOpacity>

              <styles.HrLine2 />

              <TouchableOpacity onPress={() => handleMinutesPress(50)}>
                <styles.OrderModalContentText>
                  50분
                </styles.OrderModalContentText>
              </TouchableOpacity>

              <styles.HrLine2 />

              <TouchableOpacity onPress={() => handleMinutesPress(90)}>
                <styles.OrderModalContentText>
                  90분
                </styles.OrderModalContentText>
              </TouchableOpacity>
            </styles.OrderModalContentWrapper>
          </styles.OrderModalBox>
          <styles.OrderModalBtnView>
            <styles.OrderModalBtn onPress={handleCancelClick}>
              <styles.BtnText>접수취소</styles.BtnText>
            </styles.OrderModalBtn>
            <styles.OrderModalBtn onPress={handleRefundClick}>
              <styles.BtnText>환불</styles.BtnText>
            </styles.OrderModalBtn>
          </styles.OrderModalBtnView>
        </styles.OrderModal>
      </styles.OrderModalView>
    </Modal>
  );
};

export default WaitingOrderModal;
