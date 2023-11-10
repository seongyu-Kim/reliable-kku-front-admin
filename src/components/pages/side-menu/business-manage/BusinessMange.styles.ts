import styled from 'styled-components/native';

export const BusinessManageBox = styled.View`
  position: absolute;
  height: 86.3%;
  width: 83.3%;
  right: 0;
  bottom: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BusinessBtn = styled.TouchableOpacity`
  width: 252px;
  height: 287px;
  border-radius: 12px;
  background: ${props => (props.isOperating ? '#FFCA42' : '#E0E0E0')};
  justify-content: center;
  align-items: center;
  margin: 0 75px;
`;

export const BusinessBtnText = styled.Text`
  color: #000;
  font-size: 32px;
  font-weight: 600;
`;
