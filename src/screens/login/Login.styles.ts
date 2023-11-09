import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #fff;
`;

export const InputView = styled.View`
  flex-direction: row;
`;

export const InputImg = styled.View`
  position: absolute;
  top: 19px;
  left: 13px;
`;
export const InputText = styled.TextInput`
  width: 450px;
  height: 68px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.1);

  font-size: 32px;
  font-weight: 600;

  padding-left: 71px;
`;

export const AutoLoginView = styled.View`
  flex-direction: row;
  left: -150px;
  align-items: center;
`;

export const AutoLoginText = styled.Text`
  font-size: 24px;
  font-weight: 600;
  left: 28px;
`;

export const LoginBtn = styled.TouchableOpacity`
  width: 450px;
  height: 68px;
  border-radius: 12px;
  background: #f4c03d;
  align-items: center;
  justify-content: center;
`;

export const LoginBtnText = styled.Text`
  font-size: 32px;
  font-weight: 600;
`;
