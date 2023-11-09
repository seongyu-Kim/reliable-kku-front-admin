import React, {useState} from 'react';
import {Text} from 'react-native';
import * as styles from './OnSiteKeypad.styles';

const OnSiteKeypad: React.FC<{
  onPhoneNumberChange: (newPhoneNumber: string) => void;
}> = ({onPhoneNumberChange}) => {
  const [userInput, setUserInput] = useState('');

  const handleNumberPress = (number: string | number) => {
    const cleanedNumber = (userInput + number).replace(/[^\d]/g, '');

    let formattedNumber = '';
    if (cleanedNumber.length >= 4) {
      formattedNumber += cleanedNumber.slice(0, 3) + '-';
      if (cleanedNumber.length >= 7) {
        formattedNumber += cleanedNumber.slice(3, 7) + '-';
        formattedNumber += cleanedNumber.slice(7, 11);
      } else {
        formattedNumber += cleanedNumber.slice(3, 11);
      }
    } else {
      formattedNumber = cleanedNumber;
    }

    setUserInput(formattedNumber);
    onPhoneNumberChange(formattedNumber);
  };

  const handleBackspacePress = () => {
    setUserInput(userInput.slice(0, -1));
  };

  const handleClearPress = () => {
    setUserInput('');
  };

  const keypadButtons = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['초기화', 0, '지우기'],
  ];

  return (
    <styles.KeyPadView>
      <styles.UserInputNumber>{userInput}</styles.UserInputNumber>
      {keypadButtons.map((row, rowIndex) => (
        <styles.KeyPadRowView key={rowIndex}>
          {row.map((button, index) => (
            <styles.KeypadButton
              key={index}
              onPress={() => {
                if (button === null) return;
                if (button === '지우기') {
                  handleBackspacePress();
                } else if (button === '초기화') {
                  handleClearPress();
                } else {
                  handleNumberPress(button);
                }
              }}>
              <styles.KeypadButtonText>
                {button === null ? '' : button}
              </styles.KeypadButtonText>
            </styles.KeypadButton>
          ))}
        </styles.KeyPadRowView>
      ))}
    </styles.KeyPadView>
  );
};

export default OnSiteKeypad;
