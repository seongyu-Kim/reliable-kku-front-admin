import React from 'react';
import {Modal} from 'react-native';
import * as styles from './ReceiptNotReceivedModal.styles';
import CloseButton from '../../../../assets/images/closeButton.svg';
import {
    heightPercentage,
    widthPercentage,
} from '../../../common/ResponsiveSize';

const ReceiptNotReceivedModal: React.FC<{
    handleCloseModal: any;
    notReceivedModalVisible: any;
    handleNotTakePress: any;
}> = ({handleCloseModal, notReceivedModalVisible, handleNotTakePress}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={notReceivedModalVisible}
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
                    <styles.ModalContent>미수령 처리하시겠습니까?</styles.ModalContent>

                    <styles.OrderModalBtnView>
                        <styles.OrderModalBtn1 onPress={handleNotTakePress}>
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

export default ReceiptNotReceivedModal;
