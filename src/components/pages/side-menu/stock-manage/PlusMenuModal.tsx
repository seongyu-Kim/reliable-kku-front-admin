import React, {useState} from 'react';
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

const PlusMenuModal: React.FC<{
  isPlusMenuModal: any;
  setPlusMenuModal: any;
  handlePlusModal: any;
}> = ({isPlusMenuModal, handlePlusModal, setPlusMenuModal}) => {
  const [imgModalVisible, setImgModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null); // 선택된 옵션의 타입을 명시
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

      const response = await BASE_API.post(
        'https://dev.deunku.com/api/v1/admin/create-menu',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      setImgModalVisible(false);
      setPlusMenuModal(false);
      console.log(response);
    } catch (error) {
      console.log('메뉴추가 실패:', error);
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

  // const handleImageSelection = () => {
  //   console.log(menuImageUrl);
  //   if (selectedOption === 1) {
  //     launchCamera({mediaType: 'photo'}, response => {
  //       if (!response.didCancel && response.uri) {
  //         setFile(response);
  //         console.log(response);
  //         setMenuImgUrl(response.uri);
  //       }
  //       closeModal();
  //     });
  //   } else if (selectedOption === 2) {
  //     launchImageLibrary({mediaType: 'photo'}, response => {
  //       if (!response.didCancel && response.uri) {
  //         setFile(response);
  //         console.log(response);
  //         setMenuImgUrl(response.uri);
  //       }
  //       closeModal();
  //     });
  //   }
  // };

  // const handleImageSelection = () => {
  //   console.log(menuImageUrl);
  //   if (selectedOption === 1) {
  //     launchCamera({mediaType: 'photo'}, response => {
  //       console.log('response', response);
  //       if (response.didCancel) {
  //         console.log('User cancelled camera');
  //       } else if (response.error) {
  //         console.log('Camera Error: ', response.error);
  //       } else {
  //         let imageUri = response.uri || response.assets?.[0]?.uri;
  //         setMenuImgUrl(imageUri);
  //         setFile(response);
  //         console.log('!!!!@213123123123123', imageUri);
  //       }
  //       closeModal();
  //       setPlusMenuModal(false);
  //     });
  //   } else if (selectedOption === 2) {
  //     launchImageLibrary({mediaType: 'photo'}, response => {
  //       if (response.didCancel) {
  //         console.log('User cancelled camera');
  //       } else if (response.error) {
  //         console.log('Camera Error: ', response.error);
  //       } else {
  //         let imageUri = response.uri || response.assets?.[0]?.uri;
  //         setMenuImgUrl(imageUri);
  //         setFile(response);
  //         console.log(imageUri);
  //       }
  //       closeModal();
  //       setPlusMenuModal(false);
  //     });
  //   }
  // };

  const handleCameraPress = () => {
    launchCamera({mediaType: 'photo'}, response => {
      console.log('response', response);
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setMenuImgUrl(imageUri);
        setFile(response);
        console.log('!!!!@213123123123123', imageUri);
      }
      closeModal();
    });
  };

  const hadleImagePress = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setMenuImgUrl(imageUri);
        setFile(response);
        console.log(imageUri);
      }
      closeModal();
    });
  };

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={isPlusMenuModal}>
        <styles.PlusMenuView>
          <styles.CloseButtonImg onPress={handlePlusModal}>
            <CloseButton height={29} width={29} />
          </styles.CloseButtonImg>
          <Margin height={31} />
          <styles.PlusMenuTitle>메뉴추가</styles.PlusMenuTitle>
          <Margin height={29} />
          <styles.HrLine />
          <Margin height={128} />

          <styles.MenuContentView>
            <styles.MenuDescription>메뉴명</styles.MenuDescription>
            <styles.MenuInput
              value={name}
              onChangeText={text => setName(text)}
            />
          </styles.MenuContentView>

          <Margin height={22} />

          <styles.MenuContentView>
            <styles.MenuDescription>가격</styles.MenuDescription>
            <styles.MenuInput
              value={price}
              onChangeText={text => setPrice(text)}
            />
          </styles.MenuContentView>

          <Margin height={23} />

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
                  width: 345,
                  height: 345,
                  marginBottom: 10,
                  zIndex: 2,
                  borderRadius: 12,
                }}
              />
            )}
            <styles.PlusImage onPress={openModal}>
              <PlusImg2 width={24} height={24} />
            </styles.PlusImage>
          </styles.MenuImageView>

          <Margin height={105.55} />

          <styles.PlusMenuBtn onPress={handleMenuAdd}>
            <styles.PlusMenuBtnText>등록하기</styles.PlusMenuBtnText>
          </styles.PlusMenuBtn>

          <Modal
            animationType="slide"
            transparent={true}
            visible={imgModalVisible}>
            <styles.ImgModalView>
              <styles.ImgModalBox>
                <styles.CloseButtonImg2 onPress={closeModal}>
                  <CloseButton height={30} width={30} />
                </styles.CloseButtonImg2>
                <styles.ImgIconView>
                  <styles.Icon onPress={handleCameraPress}>
                    <CameraIcon height={38.924} width={38.924} />
                  </styles.Icon>
                  <styles.Icon onPress={hadleImagePress}>
                    <ImageIcon height={38.924} width={38.924} />
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
