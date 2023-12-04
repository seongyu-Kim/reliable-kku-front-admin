import React, {SetStateAction, useState} from 'react';
import {Image, Modal} from 'react-native';
import * as styles from './PlusMenuModal.styles';
import CloseButton from '../../../../assets/images/closeButton.svg';
import Margin from '../../../common/margin/Margin';
import PlusImg2 from '../../../../assets/images/plusImg2.svg';
import CameraIcon from '../../../../assets/images/cameraIcon.svg';
import ImageIcon from '../../../../assets/images/imageIcon.svg';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {BASE_API} from '../../../../api/CommonApi';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../common/ResponsiveSize';

const PlusMenuModal: React.FC<{
  isPlusMenuModal: any;
  setPlusMenuModal: any;
  handlePlusModal: any;
  isClicked: boolean;
  setIsClicked: React.Dispatch<SetStateAction<boolean>>;
}> = ({
  isPlusMenuModal,
  handlePlusModal,
  setPlusMenuModal,
  isClicked,
  setIsClicked,
}) => {
  const [imgModalVisible, setImgModalVisible] = useState(false);
  const [_, setSelectedOption] = useState<number | null>(null); // 선택된 옵션의 타입을 명시
  const [file, setFile] = useState<ImagePickerResponse | null>();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [menuImageUrl, setMenuImgUrl] = useState<string | null>(null); // string | null 타입으로 설정
  //메뉴추가

  const handleMenuAdd = async () => {
    try {
      const formData = new FormData();
      formData.append('file', {
        uri: file?.assets ? file.assets[0].uri : null,
        type: file?.assets ? file?.assets[0].type : null,
        name: file?.assets ? file?.assets[0].fileName : null,
      });

      const menuList = {
        name: name,
        price: price,
        description: description,
      };

      const jsonString = JSON.stringify(menuList);
      console.log('jsonString', jsonString);
      formData.append(
        'menu',
        jsonString,
        // new Blob([jsonString], {type: 'application/json', lastModified: 1}),
      );

      await BASE_API.post(
        'https://prod.deunku.com/api/v1/admin/create-menu',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      ).then(() => {
        setImgModalVisible(false);
        setPlusMenuModal(false);
        setIsClicked(!isClicked);
      });
    } catch (error) {
      console.log('메뉴추가 실패:', error);
      setIsClicked(!isClicked);
    }
  };

  const openModal = (option: number) => {
    setSelectedOption(option);
    setImgModalVisible(true);
  };

  const closeModal = () => {
    setSelectedOption(null);
    setImgModalVisible(false);
  };

  const handleCameraPress = () => {
    launchCamera({mediaType: 'photo'}, response => {
      console.log('response', response);
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorMessage) {
        console.log('Camera Error: ', response.errorMessage);
      } else {
        let imageUri = response.assets?.[0]?.uri
          ? response.assets?.[0]?.uri
          : '';
        setMenuImgUrl(imageUri);
        setFile(response);
        console.log('!!!!@213123123123123', imageUri);
      }
      closeModal();
    });
  };

  const handleImagePress = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorMessage) {
        console.log('Camera Error: ', response.errorMessage);
      } else {
        let imageUri = response.assets?.[0]?.uri
          ? response.assets?.[0]?.uri
          : '';
        setMenuImgUrl(imageUri);
        setFile(response);
        console.log(imageUri);
      }
      closeModal();
    });
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isPlusMenuModal}
        supportedOrientations={['landscape']}>
        <styles.PlusMenuView>
          <styles.CloseButtonImg onPress={handlePlusModal}>
            <CloseButton
              height={heightPercentage(29)}
              width={widthPercentage(29)}
            />
          </styles.CloseButtonImg>
          <Margin width={0} height={heightPercentage(31)} />
          <styles.PlusMenuTitle>메뉴추가</styles.PlusMenuTitle>
          <Margin width={0} height={heightPercentage(29)} />
          <styles.HrLine />
          <Margin width={0} height={heightPercentage(128)} />

          <styles.MenuContentView>
            <styles.MenuDescription>메뉴명</styles.MenuDescription>
            <styles.MenuInput
              value={name}
              onChangeText={text => setName(text)}
            />
          </styles.MenuContentView>

          <Margin width={0} height={heightPercentage(22)} />

          <styles.MenuContentView>
            <styles.MenuDescription>가격</styles.MenuDescription>
            <styles.MenuInput
              value={price}
              onChangeText={text => setPrice(text)}
            />
          </styles.MenuContentView>

          <Margin width={0} height={heightPercentage(23)} />

          <styles.MenuContentView>
            <styles.MenuDescription>상세정보</styles.MenuDescription>
            <styles.MenuInput2
              value={description}
              onChangeText={text => setDescription(text)}
            />
          </styles.MenuContentView>
          <styles.MenuImageView>
            {menuImageUrl && (
              <Image
                source={{uri: menuImageUrl}}
                style={{
                  width: widthPercentage(345),
                  height: heightPercentage(345),
                  marginBottom: heightPercentage(20),
                  zIndex: 2,
                  borderRadius: fontPercentage(12),
                }}
              />
            )}
            <styles.PlusImage onPress={openModal}>
              <PlusImg2
                width={widthPercentage(24)}
                height={heightPercentage(24)}
              />
            </styles.PlusImage>
          </styles.MenuImageView>

          <Margin width={0} height={heightPercentage(105.55)} />

          <styles.PlusMenuBtn onPress={handleMenuAdd}>
            <styles.PlusMenuBtnText>등록하기</styles.PlusMenuBtnText>
          </styles.PlusMenuBtn>

          <Modal
            animationType="slide"
            transparent={true}
            visible={imgModalVisible}
            supportedOrientations={['landscape']}>
            <styles.ImgModalView>
              <styles.ImgModalBox>
                <styles.CloseButtonImg2
                  hitSlop={{
                    top: heightPercentage(30),
                    bottom: heightPercentage(30),
                    left: widthPercentage(30),
                    right: widthPercentage(30),
                  }}
                  onPress={closeModal}>
                  <CloseButton
                    height={heightPercentage(30)}
                    width={widthPercentage(30)}
                  />
                </styles.CloseButtonImg2>
                <styles.ImgIconView>
                  <styles.Icon onPress={handleCameraPress}>
                    <CameraIcon
                      height={heightPercentage(38.924)}
                      width={widthPercentage(38.924)}
                    />
                  </styles.Icon>
                  <styles.Icon onPress={handleImagePress}>
                    <ImageIcon
                      height={heightPercentage(38.924)}
                      width={widthPercentage(38.924)}
                    />
                  </styles.Icon>
                </styles.ImgIconView>
              </styles.ImgModalBox>
            </styles.ImgModalView>
          </Modal>
        </styles.PlusMenuView>
      </Modal>
    </>
  );
};

export default PlusMenuModal;
