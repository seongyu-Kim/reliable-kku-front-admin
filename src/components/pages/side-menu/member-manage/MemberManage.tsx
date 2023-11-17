import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import * as styles from './MemberManage.styles';
import Margin from '../../../common/margin/Margin';
import SearchIcon from '../../../../assets/images/searchImg.svg';
import {BASE_API} from '../../../../api/CommonApi';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../common/ResponsiveSize';

type Member = {
  id: string;
  username: string;
  level: number;
  phoneNumber: string;
};

const MemberManage: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [filteredData, setFilteredData] = useState(members);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [page, setPage] = useState();
  const [size, setSize] = useState();

  const handleSearch = (text: string) => {
    setSearchKeyword(text);
    const filteredMembers = members.filter(
      member =>
        member.username.toString().includes(text) ||
        member.phoneNumber.includes(text),
    );
    setFilteredData(filteredMembers);
  };

  //
  const formatPhoneNumber = (phoneNumber: string) => {
    // 전화번호에서 숫자만 추출
    const match = phoneNumber.match(/^(\d{3})(\d{4})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    // 변환이 불가능한 경우 원래 전화번호 반환
    return phoneNumber;
  };

  //
  useEffect(() => {
    const fetchMembers = async () => {
      await BASE_API.get(
        `https://dev.deunku.com/api/v1/admin/member?searchKeyword=${searchKeyword}&page=${page}&size=${size}`,
      )
        .then(response => {
          setMembers(response.data.content);
          // setPageable(response.data.pageable);
          setPage(response.data.pageable.pageNumber);
          setSize(response.data.pageable.pageSize);
          console.log(response.data);
          console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        })
        .catch(error => {
          console.error('Error fetching members:', error);
        });
    };

    fetchMembers();
  }, [searchKeyword, size, page]);

  const renderItem = ({item}: {item: Member}) => {
    return (
      <styles.MemberView>
        <styles.MemberId>
          <styles.MemberText>{item.id}</styles.MemberText>
        </styles.MemberId>
        <Margin width={widthPercentage(26)} height={0} />
        <styles.MemberText>{item.username}</styles.MemberText>
        <Margin width={widthPercentage(8)} height={0} />

        <styles.MemberText>Lv.{item.level}</styles.MemberText>
        <Margin width={widthPercentage(23)} height={0} />

        <styles.HrLine />
        <Margin width={widthPercentage(33)} height={0} />

        <styles.MemberText>
          {formatPhoneNumber(item.phoneNumber)}
        </styles.MemberText>
      </styles.MemberView>
    );
  };

  return (
    <>
      <styles.MemberManageBox>
        <Margin width={0} height={heightPercentage(52.77)} />

        <styles.MemberSearchView>
          <styles.MemberSearchText>고객검색</styles.MemberSearchText>
          <styles.MemberSearch
            placeholder="Search"
            style={{fontSize: fontPercentage(25), paddingTop: 0}}
            value={searchKeyword}
            onChangeText={handleSearch}
          />
          <styles.SearchIconView>
            <SearchIcon
              width={widthPercentage(20)}
              height={heightPercentage(20)}
            />
          </styles.SearchIconView>
        </styles.MemberSearchView>

        <Margin width={0} height={heightPercentage(49.23)} />

        <styles.MemberListView>
          <FlatList
            data={members}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </styles.MemberListView>
      </styles.MemberManageBox>
    </>
  );
};

export default MemberManage;
