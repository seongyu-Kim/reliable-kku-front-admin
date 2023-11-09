import styled from 'styled-components/native';

export const MemberManageBox = styled.View`
  position: absolute;
  height: 86.3%;
  width: 83.3%;
  right: 0;
  bottom: 0;
  align-items: center;
`;

export const MemberSearchView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MemberSearchText = styled.Text`
  color: #000;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
`;
export const MemberSearch = styled.TextInput`
  width: 405px;
  height: 38px;
  border-bottom-width: 2px;
  color: rgba(0, 0, 0, 0.3);
  font-size: 32px;
  font-weight: 500;
  margin-left: 38px;
`;

export const MemberView = styled.View`
  width: 808px;
  height: 73px;
  border-radius: 12px;
  background: #fff;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

export const MemberId = styled.View`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 4px;
  background: #ffca42;
  margin-left: 23px;
  justify-content: center;
`;

export const MemberText = styled.Text`
  color: #000;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
`;

export const Hrline = styled.View`
  height: 36px;
  width: 1px;
  background: rgba(0, 0, 0, 0.6);
`;

export const SearchIconView = styled.View`
  left: -20px;
`;

export const MemberListView = styled.View`
  height: 356px;
`;
