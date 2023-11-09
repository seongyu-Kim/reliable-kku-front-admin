import styled from 'styled-components/native';

export const KeyPadView = styled.View`
  width: 385px;
  height: 401px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #fbfbfb;
  top: 11.5px;
  margin-left: 65px;
  justify-content: space-around;
`;

export const KeyPadRowView = styled.View`
  flex-direction: row;
`;

export const KeypadButton = styled.TouchableOpacity`
  width: 129px;
  height: 75px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 11px;
  border: 1px solid #b1b1b1;
`;

export const KeypadButtonText = styled.Text`
  color: #000;
  font-size: 24px;
  font-weight: 400;
`;

export const UserInputNumber = styled.Text`
  color: #000;
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  height: 104px;
  width: 385px;
  top: 33px;
`;
