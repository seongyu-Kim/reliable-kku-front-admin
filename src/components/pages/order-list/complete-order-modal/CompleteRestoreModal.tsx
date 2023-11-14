import React from 'react';
import {Modal} from 'react-native';
import * as styles from './CompleteRestoreModal.styles';
import CloseButton from '../../../../assets/images/closeButton.svg';
import {
    heightPercentage,
    widthPercentage,
} from '../../../common/ResponsiveSize';

const CompleteRestoreModal: React.FC<{
    handleCloseModal: any;
    restoreModalVisible: any;
    handleRestorePress: any;
}> = ({handleCloseModal, restoreModalVisible, handleRestorePress}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={restoreModalVisible}
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
                    <styles.ModalContent>주문서를 복구시키겠습니까?</styles.ModalContent>

                    <styles.OrderModalBtnView>
                        <styles.OrderModalBtn1 onPress={handleRestorePress}>
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

export default CompleteRestoreModal;
