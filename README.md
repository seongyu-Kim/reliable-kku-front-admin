# 든붕이
<div align="center">
  <img src="https://github.com/user-attachments/assets/11d21f21-f21e-4e61-af98-e996c72a0a8d" width="50%" />
</div>

<br />

## 1. 팀 소개
**팀원** : 박재완, 김민진, 정경주, 김선규

<br />

## 2. 기획내용
**프로젝트 소개** : 건국대학교 글로컬캠퍼스 주변에 위치한 카페 든든하KU의 붕어빵을 미리 주문할 수 있는 애플리케이션
<br />
(해당 애플리케이션은 관리자를 위한 애플리케이션으로 마켓에 출시하지 않았습니다.)

**프로젝트 기간** : 2023년 09월 19일 ~ 2023년 11월 29일

**프로젝트 인원** : 4명



<br/>

**기술 스택** :  ![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  <img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=axios&logoColor=white" /> ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)


<br />

## 3. 역할 분담
| **팀원**            | **역할**                                                                 |
|---------------------|--------------------------------------------------------------------------|
| **정경주 (Front)**  | 사용자 애플리케이션 클라이언트 개발                                                 |
| **김선규 (Front)**  | 관리자 애플리케이션 클라이언트 개발                                          |
| **박재완 (Front)**  | 관리자 애플리케이션 API 개발                                     |
| **김민진 (Back)**   | 사용자 애플리케이션 API 개발                      |

<br />

## 4. 구현기능
##### 로그인 
- 관리자가 로그인을 할 수 있는 페이지
- react-native-mmkv를 이용한 자동 로그인 구현

##### 대기 탭
- 주문이 들어보면 대기 탭에 주문 컴포넌트 생성
- 주문에 대한 전화번호, 시간, 각 붕어빵의 갯수를 보여줌
- 대기 중인 총 주문 수량을 보여줌
- 주문 컴포넌트 클릭 후 예상 대기 시간, 접수 취소, 환불 선택 가능
- 현장 접수 버튼

##### 접수 탭
- 접수된 주문 컴포넌트를 보여줌
- 각 주문 컴포넌트에 주문에 대한 전화번호, 시간, 각 붕어빵의 갯수, 총 붕어빵의 갯수, 소요 시간 등을 보여줌
- 각 주문에 대한 픽업 요청, 완료, 접수 취소, 환불, 미수령 선택 가능
- 픽업 요청 선택 시 사용자 앱에 알림 생성
- 완료, 접수 취소, 환불, 미수령 선택 시 해당 주문이 완료 탭으로 이동

##### 완료 탭
- 완료, 접수 취소, 환불, 미수령된 주문을 보여주는 탭

#### 현장접수 페이지
- 붕어빵의 갯수와 전화번호를 입력 후 주문하기 버튼을 누르면 대기탭에 주문 컴포넌트 생성
- 선택한 붕어빵의 총 가격 표시
- 주문 생성 시 사용자 앱에 주문 알림 발생
  
##### 영업관리 페이지
- 영업 시작과 영업 마감 선택 가능
- 영업 시작 시 사용자 앱에서 주문 가능, 영업 마감 시 사용자 앱에서 주문 불가능

##### 재고관리 & 메뉴추가 페이지
- 각 메뉴의 품절 상태 선택 및 메뉴 삭제 기능
- 메뉴의 이름, 가격, 정보, 사진 기입 후 새로운 메뉴 추가 기능

##### 회원관리 페이지
- 회원의 이름, 등급, 전화번호를 확인할 수 있고, 해당 정보로 회원을 검색할 수 있음

##### 매출관리 페이지
- 매출과 시간대 별 결제 금액을 그래프로 확인할 수 있음
- 매출 달력을 통해 해당 월의 매출을 캘린더에서 확인할 수 있음
- 캘린터 팝업에서 날짜를 선택 시 설정된 기간의 매출 데이터를 확인할 수 있음
- 엑셀로 보기 버튼을 클릭하여, 엑셀로 데이트를 다운받을 수 있음

##### 로그아웃 페이지

<br />

## 5. 보완할 점 & 추후 개발하고자 하는부분
- 모달을 공통 컴포넌트로 만들어 사용할 수 있었을텐데 그렇게 하지 못한 부분이 아쉬움
- 대체로 코드의 중복이 많고 공통 컴포넌트 사용이 미숙한 것이 보여서 아쉬움
- 깃 사용이 미숙했던 시기라 커밋 단위가 너무 크고 기능별로 브랜치를 만들어서 작업하지 않은 부분이 아쉬움

<br />

## 성과
사용자 애플리케이션 출시 후 대략 200명의 가입자 수 달성

<br />


## 화면
<div align="center">
  <img src="https://github.com/user-attachments/assets/860fcdef-8129-408e-adbc-ffafcbfb0261" width="30%" />
  <img src="https://github.com/user-attachments/assets/a443ba70-7806-4fd2-ae26-4001692ec429" width="30%" />
  <img src="https://github.com/user-attachments/assets/e01c1e69-f216-43f6-9dd3-ba29dfadc8a8" width="30%" />
  <img src="https://github.com/user-attachments/assets/1b3a4a79-69ce-412a-ab0d-f23bf1ceb0d7" width="30%" />
  <img src="https://github.com/user-attachments/assets/e7f571d4-0493-45e0-a123-071d822dfba5" width="30%" />
  <img src="https://github.com/user-attachments/assets/a7136d0f-e95c-48df-af0a-a8704d48cd65" width="30%" />
  <img src="https://github.com/user-attachments/assets/b8b58800-bd9a-4932-b030-ba034a046f26" width="30%" />
  <img src="https://github.com/user-attachments/assets/0f30d693-4710-4828-894f-519120b701d9" width="30%" />
  <img src="https://github.com/user-attachments/assets/8cf91ea3-de32-4fcc-b429-aea39f1760cb" width="30%" />
  <img src="https://github.com/user-attachments/assets/92d2c84c-18b1-4303-a263-9460e063eedb" width="30%" />
  <img src="https://github.com/user-attachments/assets/c113b1ab-723b-4500-ade2-3fabe3e8f792" width="30%" />
  <img src="https://github.com/user-attachments/assets/ca1d91c3-9430-446b-a200-89b715b1ec85" width="30%" />
  <img src="https://github.com/user-attachments/assets/9d945a24-6a27-40f5-892d-eb1de1ad85e9" width="30%" />
  <img src="https://github.com/user-attachments/assets/0d4c8854-8b03-4d1c-98e8-b4e90348a6d5" width="30%" />
  <img src="https://github.com/user-attachments/assets/45148c19-1aff-45c2-885e-cf9b8234fc1c" width="30%" />
  <img src="https://github.com/user-attachments/assets/f71eeddd-101c-4fde-88ad-9c362948bf6d" width="30%" />
  <img src="https://github.com/user-attachments/assets/07b04200-aff7-4ef0-84b3-b4c74391b200" width="30%" />
  <img src="https://github.com/user-attachments/assets/dcb105db-eacf-4b5d-b70f-626a08b87c4a" width="30%" />
  <img src="https://github.com/user-attachments/assets/405a9617-caa8-4869-a3a6-6e7787131f74" width="30%" />
</div>
