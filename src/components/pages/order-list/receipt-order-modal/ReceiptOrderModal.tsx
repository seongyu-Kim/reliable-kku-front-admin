import React from 'react';
import {Modal} from 'react-native';
import * as styles from './ReceiptOrderModal.styles';
import CloseButton from '../../../../assets/images/closeButton.svg';
import Margin from '../../../common/margin/Margin';
import {
    heightPercentage,
    widthPercentage,
} from '../../../common/ResponsiveSize';

const ReceiptOrderModal: React.FC<{
    id: any;
    modalVisible: any;
    handleCloseModal: any;
    time: any;
    handleCancelModal: any;
    handleRefundModal: any;
    handleNotReceivedModal: any;
    handlePickupModal: any;
    handleCompletePress: any;
}> = ({
          id,
          modalVisible,
          handleCloseModal,
          time,
          handleCancelModal,
          handleRefundModal,
          handleNotReceivedModal,
          handlePickupModal,
          handleCompletePress,
      }) => {
    return (
        <Modal animationType="slide" transparent={true} visible={modalVisible}  supportedOrientations={['landscape']}>
            <styles.OrderModalView>
                <styles.OrderModal>
                    {/* 모달위부분 */}
                    <styles.OrderModalTop>
                        <styles.CloseBtnImg onPress={handleCloseModal}>
                            <CloseButton
                                width={widthPercentage(30)}
                                height={heightPercentage(30)}
                            />
                        </styles.CloseBtnImg>

                        <Margin width={widthPercentage(106)} height={0}/>
                        <styles.OrderModalTopText>{time}</styles.OrderModalTopText>
                        <Margin width={widthPercentage(84)} height={0}/>

                        <styles.OrderModalTopText>010-7615-2022</styles.OrderModalTopText>
                        <Margin width={widthPercentage(83)} height={0}/>

                        <styles.OrderModalTopText>
                            주문번호 {parseInt(id)}
                        </styles.OrderModalTopText>
                    </styles.OrderModalTop>
                    {/* 모달내용 */}
                    <styles.BigBtnView>
                        <styles.PickupBtn onPress={handlePickupModal}>
                            <styles.BigBtnText>픽업요청</styles.BigBtnText>
                        </styles.PickupBtn>
                        <styles.CompeleteBtn onPress={handleCompletePress}>
                            <styles.BigBtnText>완료</styles.BigBtnText>
                        </styles.CompeleteBtn>
                    </styles.BigBtnView>
                    <styles.SmallBtnView>
                        <styles.CancelBtn onPress={handleCancelModal}>
                            <styles.CancelBtnText>접수취소</styles.CancelBtnText>
                        </styles.CancelBtn>
                        <styles.Refundbtn onPress={handleRefundModal}>
                            <styles.RefundBtnText>환불</styles.RefundBtnText>
                        </styles.Refundbtn>
                        <styles.NotReceivedBtn onPress={handleNotReceivedModal}>
                            <styles.NotReceivecBtnText>미수령</styles.NotReceivecBtnText>
                        </styles.NotReceivedBtn>
                    </styles.SmallBtnView>
                </styles.OrderModal>
            </styles.OrderModalView>
        </Modal>
    );
};

export default ReceiptOrderModal;
