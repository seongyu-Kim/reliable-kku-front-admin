import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import * as styles from './MemberManage.styles';
import Margin from '../../../common/margin/Margin';
import SearchIcon from '../../../../assets/images/searchImg.svg';
// import data from '../../../../data/mockMember';
import axios from 'axios';
import {BASE_API} from '../../../../api/CommonApi';

type Member = {
  id: number;
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

  const renderItem = ({
    item,
  }: {
    item: {id: string; username: string; phoneNumber: string; level: string};
  }) => {
    return (
      <styles.MemberView>
        <styles.MemberId>
          <styles.MemberText>{item.id}</styles.MemberText>
        </styles.MemberId>
        <Margin width={26} />
        <styles.MemberText>{item.username}</styles.MemberText>
        <Margin width={8} />

        <styles.MemberText>Lv.{item.level}</styles.MemberText>
        <Margin width={23} />

        <styles.Hrline />
        <Margin width={33} />

        <styles.MemberText>
          {formatPhoneNumber(item.phoneNumber)}
        </styles.MemberText>
      </styles.MemberView>
    );
  };

  return (
    <>
      <styles.MemberManageBox>
        <Margin height={52.77} />

        <styles.MemberSearchView>
          <styles.MemberSearchText>고객검색</styles.MemberSearchText>
          <styles.MemberSearch
            placeholder="Search"
            value={searchKeyword}
            onChangeText={handleSearch}
          />
          <styles.SearchIconView>
            <SearchIcon width={20} height={20} />
          </styles.SearchIconView>
        </styles.MemberSearchView>

        <Margin height={49.23} />

        <styles.MemberListView>
          <FlatList
            data={members}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </styles.MemberListView>
      </styles.MemberManageBox>
    </>
  );
};

export default MemberManage;
