import styled from 'styled-components/native';

export const StockManageBox = styled.View`
  position: absolute;
  height: 86.3%;
  width: 83.3%;
  right: 0;
  bottom: 0;
`;

export const StockMangeDiv = styled.View`
  margin-left: 55.25px;
`;

export const StockManageView = styled.View`
  align-items: center;
  margin: 0 40px;
`;

export const StockDeleteText = styled.Text`
  color: red;
  text-align: center;
  font-weight: 700;
`;

export const StockTitle = styled.Text`
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
  font-size: 32px;
  font-weight: 700;
`;

export const StockCatImg = styled.View`
  margin-top: 30px;
  align-items: center;
`;

export const StockBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 54px;
  border-radius: 12px;
  background: ${props => (props.disabled ? '#E0E0E0' : '#FFCA42')};
  padding: 16px 24px;
  gap: 8px;
`;

export const StockBtnText = styled.Text`
  color: rgba(0, 0, 0, 0.8);
  font-size: 24px;
  font-weight: 600;
`;

export const StockPlusBtn = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 44px;
  margin-left: 697px;
  align-items: center;
`;
export const StockPlusBtnText = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  font-size: 24px;
  font-weight: 700;
  margin-left: 13px;
`;
