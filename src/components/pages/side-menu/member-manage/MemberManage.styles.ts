import styled from 'styled-components/native';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../common/ResponsiveSize';

export const MemberManageBox = styled.View`
  position: absolute;
  height: ${heightPercentage(710)}px;
  width: ${widthPercentage(984)}px;
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
  font-size: ${fontPercentage(32)}px;
  font-weight: 700;
`;
export const MemberSearch = styled.TextInput`
  width: ${widthPercentage(405)}px;
  height: ${heightPercentage(38)}px;
  border-bottom-width: ${widthPercentage(2)}px;
  color: rgba(0, 0, 0, 0.3);
  font-size: ${fontPercentage(32)}px;
  font-weight: 500;
  margin-left: ${widthPercentage(38)}px;
`;

export const MemberView = styled.View`
  width: ${widthPercentage(808)}px;
  height: ${heightPercentage(73)}px;
  border-radius: ${widthPercentage(12)}px ${heightPercentage(12)}px;
  background: #fff;
  flex-direction: row;
  align-items: center;
  margin-top: ${heightPercentage(16)}px;
`;

export const MemberId = styled.View`
  width: ${widthPercentage(36)}px;
  height: ${heightPercentage(36)}px;
  flex-shrink: 0;
  border-radius: ${heightPercentage(4)}px ${widthPercentage(4)}px;
  background: #ffca42;
  margin-left: ${widthPercentage(23)}px;
  justify-content: center;
`;

export const MemberText = styled.Text`
  color: #000;
  text-align: center;
  font-size: ${fontPercentage(24)}px;
  font-weight: 600;
`;

export const HrLine = styled.View`
  height: ${heightPercentage(36)}px;
  width: ${widthPercentage(1)}px;
  background: rgba(0, 0, 0, 0.6);
`;

export const SearchIconView = styled.View`
  left: -${widthPercentage(20)}px;
`;

export const MemberListView = styled.View`
  height: ${heightPercentage(356)}px;
`;
