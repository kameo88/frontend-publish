<template>
  <h1>FRONT Publishing File List</h1>
  <div class="switch"><a href="/guidelist" target="_blank">UI/UX Guide List</a></div>
  <ol class="pub-menu-list">
    <li><a href="#main" class="menu-go">Main</a></li>
    <li><a href="#signup" class="menu-go">Signup</a></li>
    <li><a href="#login" class="menu-go">Login</a></li>
    <li><a href="#mypage" class="menu-go">Mypage</a></li>
    <li><a href="#product" class="menu-go">Product</a></li>
    <li><a href="#business" class="menu-go">Order/Contract</a></li>
    <li><a href="#report" class="menu-go">Report</a></li>
    <li><a href="#report" class="menu-go">KRX Menu</a></li>
    <li><a href="#service" class="menu-go">Service</a></li>
  </ol>
  <div class="file-list">
    <table>
      <caption></caption>
      <colgroup>
        <col width="200px" />
        <col width="300px" />
        <col width="300px" />
        <col width="200px" />
        <col width="90px" />
        <col width="80px" />
        <col width="80px" />
        <col width="80px" />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th>Main Menu</th>
          <th>2 Depth</th>
          <th>Page name</th>
          <th>File Link</th>
          <th>작업자</th>
          <th>시작일</th>
          <th>완료일</th>
          <th>개발여부</th>
          <th>기타</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>공통</td>
          <td>Guide</td>
          <td></td>
          <td class="url"><a href="/GuideList" target="_blank">UI/UX GuideList</a></td>
          <td class="name">곽수진</td>
          <td>08/05</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>Sub Layout</td>
          <td></td>
          <td class="url"><a href="/SubLayout" target="_blank">SubLayout</a></td>
          <td class="name">곽수진</td>
          <td>08/05</td>
          <td></td>
          <td></td>
          <td>
            <p>
              <strong>11/05 <span class="txt-meno">(추가)</span></strong> visual image of each sub page in index.css
            </p>
            <p><strong>08/17 </strong>GNB click Event 로 임시 구현</p>
            <p><strong>08/30 </strong>breadcrumb markup 수정 ( list ==> select box)</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>Print</td>
          <td></td>
          <td class="url"><a href="/Print" target="_blank">Print</a></td>
          <td class="name">곽수진</td>
          <td>11/02</td>
          <td></td>
          <td></td>
          <td>
            <p><strong>11/03</strong> 1차 완료</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>Print</td>
          <td>Cover type 1</td>
          <td class="url"><a href="/PrintCover1" target="_blank">PrintCover1</a></td>
          <td class="name">곽수진</td>
          <td>12/10</td>
          <td>12/10</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>Print</td>
          <td>Cover type 2</td>
          <td class="url"><a href="/PrintCover2" target="_blank">PrintCover2</a></td>
          <td class="name">곽수진</td>
          <td>12/13</td>
          <td>12/13</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>Error page</td>
          <td></td>
          <td class="url"><a href="/PageNotFound" target="_blank">PageNotFound</a></td>
          <td class="name">곽수진</td>
          <td>10/13</td>
          <td>10/13</td>
          <td></td>
          <td>
            전체 페이지로 구성할 경우, 돌아가기 button이 필요할 듯함
            <p>
              <strong>10/15 <span class="txt-memo">(추가)</span></strong
              >페이지 접근 불가
            </p>
            <p>
              <strong>10/18 <span class="txt-modify">(수정)</span></strong
              >페이지 접근 불가 - image 및 문구
            </p>
          </td>
        </tr>
        <tr>
          <td>수정 항목</td>
          <td></td>
          <td></td>
          <td class="url">
            <a href="/InsertOrder" target="_blank">InsertOrder</a>,
            <a href="/OrderDetails" target="_blank">OrderDetails</a>
          </td>
          <td class="name"></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <p>
              <strong>12/30 <span class="txt-modify">(수정)</span></strong>
              주문/계약 내의 '웹사이트 체결가 서비스 옵션' 코멘트 수정
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td class="url">
            <a href="/Main" target="_blank">Main</a>
          </td>
          <td class="name"></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <p>
              <strong>01/11 <span class="txt-modify">(수정)</span></strong>
              전체적으로 전화번호 삭제, 이메일로 대체
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="9" class="hr"></td>
        </tr>
        <tr id="main" class="menu">
          <td>메인</td>
          <td></td>
          <td>메인</td>
          <td class="url"><a href="/Main" target="_blank">Main</a></td>
          <td class="name">곽수진</td>
          <td>10/14</td>
          <td></td>
          <td></td>
          <td>
            <p>
              <strong>12/22 <span class="txt-modify">(수정)</span></strong
              ><br />
              - carousel indicators 위치 조정(css)<br />
              - 전체 메뉴 display none 처리(css)
            </p>
            <p>
              <strong>12/09 <span class="txt-modify">(수정)</span></strong>
              Noitce open popup carousel 적용
            </p>
            <p>
              <strong>12/07 <span class="txt-memo">(추가)</span></strong>
              v-overflow-tooltip(말줄임 자동 tooltip 처리)
            </p>
            <p>
              <strong>12/02 <span class="txt-modify">(수정)</span></strong>
              myWork 수정
            </p>
            <p>
              <strong>11/24 <span class="txt-memo">(추가)</span></strong>
              전체 메뉴 작업 완료
            </p>
            <p>
              <strong>11/05 <span class="txt-modify">(수정)</span></strong>
              좌측 scroll icon animation, Quick menu 고정
            </p>
            <p>
              <strong>11/03 <span class="txt-memo">(추가)</span></strong>
              좌측 Parallax scroll area 추가
            </p>
            <p>
              <strong>10/18 <span class="txt-memo">(추가)</span></strong
              >1차 완료
            </p>
          </td>
        </tr>
        <tr>
          <td>Footer</td>
          <td></td>
          <td>이용약관</td>
          <td class="url"><a href="/TermsOfUse" target="_blank">TermsOfUse</a></td>
          <td class="name">곽수진</td>
          <td>12/17</td>
          <td>12/19</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>이용약관 En</td>
          <td class="url"><a href="/TermsOfUseEn" target="_blank">TermsOfUseEn</a></td>
          <td class="name">곽수진</td>
          <td>12/19</td>
          <td>12/19</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>개인정보처리방침</td>
          <td class="url"><a href="/Privacy" target="_blank">Privacy</a></td>
          <td class="name">곽수진</td>
          <td>12/17</td>
          <td>12/19</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>개인정보처리방침 En</td>
          <td class="url"><a href="/PrivacyEn" target="_blank">PrivacyEn</a></td>
          <td class="name">곽수진</td>
          <td>12/19</td>
          <td>12/19</td>
          <td></td>
          <td></td>
        </tr>
        <tr class="del">
          <td></td>
          <td></td>
          <td>사이트맵</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="9" class="hr"></td>
        </tr>
        <tr id="signup" class="menu">
          <td>회원가입(Signup)</td>
          <td>회원가입</td>
          <td>회원가입 안내</td>
          <td class="url"><a href="/SignupInfo" target="_blank">SignupInfo</a></td>
          <td class="name">곽수진</td>
          <td>08/11</td>
          <td>08/12</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>회원가입 약관동의</td>
          <td class="url"><a href="/SignupTerms" target="_blank">SignupTerms</a></td>
          <td class="name">곽수진</td>
          <td>08/25</td>
          <td>08/25</td>
          <td></td>
          <td>
            <p>
              <strong>08/25 </strong>아래와 같이 문구 수정 <br />
              [선택] 개인정보 수집·이용 동의
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>회원가입 정보입력</td>
          <td class="url"><a href="/SignupForm" target="_blank">SignupForm</a></td>
          <td class="name">곽수진</td>
          <td>08/18</td>
          <td>08/24</td>
          <td></td>
          <td>
            <p><strong>08/25 </strong>"입력완료" button의 class="orange" 삭제</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>회원가입 입력완료</td>
          <td class="url"><a href="/SignupDone" target="_blank">SignupDone</a></td>
          <td class="name">곽수진</td>
          <td>08/12</td>
          <td>08/12</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>이메일 인증실패</td>
          <td class="url"><a href="/AuthEmailFailed" target="_blank">AuthEmailFailed</a></td>
          <td class="name">곽수진</td>
          <td>08/30</td>
          <td>08/30</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>이메일 인증완료</td>
          <td class="url"><a href="/AuthEmailConfirmed" target="_blank">AuthEmailConfirmed</a></td>
          <td class="name">곽수진</td>
          <td>08/11</td>
          <td>08/11</td>
          <td></td>
          <td>
            <p><strong>08/25 </strong>"입력완료" button의 class="orange" 삭제</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>약관 재동의</td>
          <td class="url"><a href="/ReconsentTerms" target="_blank">ReconsentTerms</a></td>
          <td class="name">곽수진</td>
          <td>08/25</td>
          <td>08/25</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="9" class="hr"></td>
        </tr>
        <tr id="login" class="menu">
          <td>로그인(Login)</td>
          <td>로그인</td>
          <td>로그인</td>
          <td class="url"><a href="/Login" target="_blank">Login</a></td>
          <td class="name">곽수진</td>
          <td>08/10</td>
          <td>08/10</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>이메일 미인증</td>
          <td class="url"><a href="/AuthEmailConfirm" target="_blank">AuthEmailConfirm</a></td>
          <td class="name">곽수진</td>
          <td>08/10</td>
          <td>08/10</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>정회원 미인증(승인 심사 중)</td>
          <td class="url"><a href="/ApprovingUser" target="_blank">ApprovingUser</a></td>
          <td class="name">곽수진</td>
          <td>08/11</td>
          <td>08/11</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>정회원 미인증(소속사 삭제)</td>
          <td class="url"><a href="/DeletedCompany" target="_blank">DeletedCompany</a></td>
          <td class="name">곽수진</td>
          <td>08/11</td>
          <td>08/11</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>비밀번호 오류 초과</td>
          <td class="url"><a href="/PasswordError" target="_blank">PasswordError</a></td>
          <td class="name">곽수진</td>
          <td>08/11</td>
          <td>08/11</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>휴면 상태 안내</td>
          <td class="url"><a href="/DormantUser" target="_blank">DormantUser</a></td>
          <td class="name">곽수진</td>
          <td>08/11</td>
          <td>08/11</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>아이디찾기</td>
          <td>아이디찾기</td>
          <td class="url"><a href="/FindingID" target="_blank">FindingID</a></td>
          <td class="name">곽수진</td>
          <td>08/19</td>
          <td>08/19</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>아이디찾기 결과</td>
          <td class="url"><a href="/ResultFindingID" target="_blank">ResultFindingID</a></td>
          <td class="name">곽수진</td>
          <td>08/19</td>
          <td>08/19</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>비밀번호재설정</td>
          <td>비밀번호재설정</td>
          <td class="url"><a href="/ResetPassword" target="_blank">ResetPassword</a></td>
          <td class="name">곽수진</td>
          <td>08/24</td>
          <td>08/24</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>임시비밀번호 발송 안내</td>
          <td class="url"><a href="/SendingPassword" target="_blank">SendingPassword</a></td>
          <td class="name">곽수진</td>
          <td>08/24</td>
          <td>08/24</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>비밀번호 변경(임시 비번 발급 후)</td>
          <td>비밀번호 변경</td>
          <td class="url"><a href="/ChangePassword" target="_blank">ChangePassword</a></td>
          <td class="name">곽수진</td>
          <td>12/10</td>
          <td>12/10</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="9" class="hr"></td>
        </tr>
        <tr id="mypage" class="menu">
          <td>마이페이지(mypage)</td>
          <td>회원정보 수정</td>
          <td>회원정보 수정</td>
          <td class="url"><a href="/MemberInfo" target="_blank">MemberInfo</a></td>
          <td class="name">곽수진</td>
          <td>09/28</td>
          <td>09/28</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>비밀번호 확인<strong>popup</strong></td>
          <td class="url"><a href="/MemberInfo" target="_blank">MemberInfo</a></td>
          <td class="name">곽수진</td>
          <td>09/28</td>
          <td>09/28</td>
          <td></td>
          <td>'비밀번호 변경' button</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>비밀번호 변경<strong>popup</strong></td>
          <td class="url"><a href="/MemberInfo" target="_blank">MemberInfo</a></td>
          <td class="name">곽수진</td>
          <td>09/28</td>
          <td>09/28</td>
          <td></td>
          <td>팝업 창의 '확인' button</td>
        </tr>
        <tr>
          <td></td>
          <td>회원탈퇴</td>
          <td>회원탈퇴</td>
          <td class="url"><a href="/MemberWithdrawal" target="_blank">MemberWithdrawal</a></td>
          <td class="name">곽수진</td>
          <td>09/28</td>
          <td>09/28</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>회원탈퇴 완료</td>
          <td class="url"><a href="/MemberWithdrawalDone" target="_blank">MemberWithdrawalDone</a></td>
          <td class="name">곽수진</td>
          <td>09/28</td>
          <td>09/28</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>1:1문의(회원)</td>
          <td>1:1문의 목록</td>
          <td class="url"><a href="/MyInquireList" target="_blank">MyInquireList</a></td>
          <td class="name">곽수진</td>
          <td>09/27</td>
          <td>09/27</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>1:1문의 등록</td>
          <td class="url"><a href="/InsertMyInquire" target="_blank">InsertMyInquire</a></td>
          <td class="name">곽수진</td>
          <td>09/27</td>
          <td>09/27</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>1:1문의 상세-답변전</td>
          <td class="url"><a href="/MyInquireDetails" target="_blank">MyInquireDetails</a></td>
          <td class="name">곽수진</td>
          <td>09/27</td>
          <td>09/28</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>1:1문의 상세-답변후</td>
          <td class="url"><a href="/MyInquireAnswerDetails" target="_blank">MyInquireAnswerDetails</a></td>
          <td class="name">곽수진</td>
          <td>09/27</td>
          <td>09/28</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>업무담당자 관리</td>
          <td>업무담당자 목록</td>
          <td class="url"><a href="/ManagerList" target="_blank">ManagerList</a></td>
          <td class="name">곽수진</td>
          <td>09/29</td>
          <td>09/29</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>업무담당자 초대 <strong>Popup</strong></td>
          <td class="url"><a href="/ManagerList" target="_blank">ManagerList</a></td>
          <td class="name">곽수진</td>
          <td>09/29</td>
          <td>09/29</td>
          <td></td>
          <td>'업무담당자 초대' button</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>구독회원 초대 <strong>Popup</strong></td>
          <td class="url"><a href="/ManagerList" target="_blank">ManagerList</a></td>
          <td class="name">곽수진</td>
          <td>09/29</td>
          <td>09/29</td>
          <td></td>
          <td>'구독회원 초대' button</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>업무담당자 삭제 <strong>Popup</strong></td>
          <td class="url"><a href="/ManagerList" target="_blank">ManagerList</a></td>
          <td class="name">곽수진</td>
          <td>09/29</td>
          <td>09/29</td>
          <td></td>
          <td>'선택 회원 내보내기' button</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>구독회원 승인완료</td>
          <td class="url"><a href="/NewsletterConfirm" target="_blank">NewsletterConfirm</a></td>
          <td class="name">곽수진</td>
          <td>09/29</td>
          <td>09/29</td>
          <td></td>
          <td></td>
        </tr>
        <tr class="del">
          <td></td>
          <td>나의 알림(12/06 menu 추가)</td>
          <td>나의 알림(12/06 menu 추가)</td>
          <td class="url"><a href="/MyAlarmList" target="_blank">MyAlarmList</a></td>
          <td class="name">곽수진</td>
          <td>12/09</td>
          <td>12/09</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="9" class="hr"></td>
        </tr>
        <tr id="product" class="menu">
          <td>정보상품</td>
          <td>정보상품 개요</td>
          <td>정보상품 개요 / 정보이용라이선스</td>
          <td class="url"><a href="/ProductOverview" target="_blank">ProductOverview</a></td>
          <td class="name">곽수진</td>
          <td>10/05</td>
          <td>10/05</td>
          <td></td>
          <td>
            <p><strong>12/07 </strong><span class="txt-modify">(수정)</span> contents</p>
            <p><strong>10/26 </strong><span class="txt-memo">(추가)</span> tab contents 추가</p>
            <p><strong>10/12 </strong><span class="txt-modify">(수정)</span> tabmenu css style 로 변경</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>정보상품 개요 En / 정보이용라이선스 En</td>
          <td class="url"><a href="/ProductOverviewEn" target="_blank">ProductOverviewEn</a></td>
          <td class="name">곽수진</td>
          <td>12/16</td>
          <td>12/16</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>실시간 정보</td>
          <td>실시간 정보</td>
          <td class="url"><a href="/RealTimeProduct" target="_blank">RealTimeProduct</a></td>
          <td class="name">곽수진</td>
          <td>10/26</td>
          <td>10/26</td>
          <td></td>
          <td>
            <p><strong>12/07 </strong><span class="txt-modify">(수정)</span> contents</p>
            <p><strong>10/27 </strong><span class="txt-modify">(수정)</span> 데이터 피드 tab의 image를 css 로 처리</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>실시간 정보 En</td>
          <td class="url"><a href="/RealTimeProductEn" target="_blank">RealTimeProductEn</a></td>
          <td class="name">곽수진</td>
          <td>12/16</td>
          <td>12/16</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>종가 정보</td>
          <td>종가 정보</td>
          <td class="url"><a href="/ClosingPriceProduct" target="_blank">ClosingPriceProduct</a></td>
          <td class="name">곽수진</td>
          <td>10/26</td>
          <td>10/26</td>
          <td></td>
          <td>
            <p><strong>12/07 </strong><span class="txt-modify">(수정)</span> contents</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>종가 정보 En</td>
          <td class="url"><a href="/ClosingPriceProductEn" target="_blank">ClosingPriceProductEn</a></td>
          <td class="name">곽수진</td>
          <td>12/16</td>
          <td>12/16</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>과거 데이터</td>
          <td>과거 데이터</td>
          <td class="url"><a href="/PastData" target="_blank">PastData</a></td>
          <td class="name">곽수진</td>
          <td>10/25</td>
          <td>10/25</td>
          <td></td>
          <td>
            <p><strong>12/07 </strong><span class="txt-modify">(수정)</span> contents</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>과거 데이터</td>
          <td class="url"><a href="/PastDataEn" target="_blank">PastDataEn</a></td>
          <td class="name">곽수진</td>
          <td>12/16</td>
          <td>12/16</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>상장기업 자사주정보(11/25 추가)</td>
          <td>개요 / 정보이용방법</td>
          <td class="url"><a href="/CompanyInfo" target="_blank">CompanyInfo</a></td>
          <td class="name">곽수진</td>
          <td>12/08</td>
          <td>12/08</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>개요 / 정보이용방법 En</td>
          <td class="url"><a href="/CompanyInfoEn" target="_blank">CompanyInfoEn</a></td>
          <td class="name">곽수진</td>
          <td>12/16</td>
          <td>12/16</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="9" class="hr"></td>
        </tr>
        <tr id="business" class="menu">
          <td>주문서 및 계약현황(business)</td>
          <td>정보이용계약 절차</td>
          <td>정보이용계약 절차</td>
          <td class="url"><a href="/ContractOverview" target="_blank">ContractOverview</a></td>
          <td class="name">곽수진</td>
          <td>12/08</td>
          <td>12/08</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>정보이용계약 절차 En</td>
          <td class="url"><a href="/ContractOverviewEn" target="_blank">ContractOverviewEn</a></td>
          <td class="name">곽수진</td>
          <td>12/16</td>
          <td>12/16</td>
          <td></td>
          <td></td>
        </tr>
        <tr class="del">
          <td></td>
          <td>주문서 개요</td>
          <td>주문서 개요</td>
          <td class="url"><a href="/OrderOverview" target="_blank">OrderOverview</a></td>
          <td class="name">곽수진</td>
          <td>10/26</td>
          <td>10/26</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>계약 문의(고객니즈)</td>
          <td>등록</td>
          <td class="url"><a href="/InquireContract" target="_blank">InquireContract</a></td>
          <td class="name">곽수진</td>
          <td>10/20</td>
          <td>10/22</td>
          <td></td>
          <td>
            <p>
              <strong>11/04 <span class="txt-modify">(수정)</span></strong> 정보상품 선택 및 비조회형 정보이용 목적
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>완료</td>
          <td class="url"><a href="/InquireContractDone" target="_blank">InquireContractDone</a></td>
          <td class="name">곽수진</td>
          <td>10/20</td>
          <td>10/22</td>
          <td></td>
          <td></td>
        </tr>
        <tr class="del">
          <td></td>
          <td></td>
          <td>고객니즈 상세</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr class="del">
          <td></td>
          <td></td>
          <td>고객니즈 등록</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>주문 현황</td>
          <td>주문서 목록(card style)</td>
          <td class="url"><a href="/OrderList" target="_blank">OrderList</a></td>
          <td class="name">곽수진</td>
          <td>09/30</td>
          <td>09/30</td>
          <td></td>
          <td>
            <p><strong>10/05 </strong><span class="txt-modify">(수정)</span> '더보기' button type="info"</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>주문서 상세</td>
          <td class="url"><a href="/OrderDetails" target="_blank">OrderDetails</a></td>
          <td class="name">곽수진</td>
          <td>10/12</td>
          <td>10/12</td>
          <td></td>
          <td>
            <p><strong>12/20 </strong><span class="txt-memo">(추가)</span>"해지신청 사유정보" 추가</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>주문서 작성</td>
          <td class="url"><a href="/InsertOrder" target="_blank">InsertOrder</a></td>
          <td class="name">곽수진</td>
          <td>09/30</td>
          <td>10/12</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>계약관련문서 제출</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>주문서 샘플</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>계약 현황</td>
          <td>목록(card style)</td>
          <td class="url"><a href="/ContractList" target="_blank">ContractList</a></td>
          <td class="name">곽수진</td>
          <td>09/30</td>
          <td>09/30</td>
          <td></td>
          <td>
            <p>
              <strong>10/05 <span class="txt-memo">(삭제)</span></strong
              >'해지', '주문서보기' button
            </p>
            <p>
              <strong>10/05 <span class="txt-memo">(추가)</span></strong
              >'해지' badge, '해지일자' 항목
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세</td>
          <td class="url"><a href="/ContractDetails" target="_blank">ContractDetails</a></td>
          <td class="name">곽수진</td>
          <td>10/07</td>
          <td>10/07</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>해지 신청 <strong>Popup</strong></td>
          <td class="url"><a href="/ContractDetails" target="_blank">ContractDetails</a></td>
          <td class="name">곽수진</td>
          <td>10/18</td>
          <td>10/18</td>
          <td></td>
          <td>'해지' button</td>
        </tr>
        <tr>
          <td></td>
          <td>기타 신고 현황</td>
          <td>목록</td>
          <td class="url"><a href="/OtherReportList" target="_blank">OtherReportList</a></td>
          <td class="name">곽수진</td>
          <td>10/07</td>
          <td>10/07</td>
          <td></td>
          <td>
            <p>
              <strong>11/04 <span class="txt-memo">(추가)</span></strong
              >진행 상황이 '반려'인 경우, tooltip으로 사유표기 기능
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>등록</td>
          <td class="url"><a href="/InsertOtherReport" target="_blank">InsertOtherReport</a></td>
          <td class="name">곽수진</td>
          <td>10/07</td>
          <td>10/07</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>임시정지 신청</td>
          <td>목록(card style)</td>
          <td class="url"><a href="/SuspensionList" target="_blank">SuspensionList</a></td>
          <td class="name">곽수진</td>
          <td>11/03</td>
          <td>11/04</td>
          <td></td>
          <td>
            <p>
              <strong>11/05 <span class="txt-modify">(수정)</span></strong> card list style
            </p>
            <p>
              <strong>11/05 <span class="txt-memo">이전 버전</span></strong>
              <a href="/SuspensionList-old">SuspensionList-old</a>
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>신청/상세</td>
          <td class="url"><a href="/InsertSuspension" target="_blank">InsertSuspension</a></td>
          <td class="name">곽수진</td>
          <td>11/04</td>
          <td>11/04</td>
          <td></td>
          <td>
            <p>신청, 상세를 한 페이지에 구성</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>이용상품현황</td>
          <td>이용상품현황 목록</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>이용상품현황 상세</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="9" class="hr"></td>
        </tr>
        <tr id="report" class="menu">
          <td>사용자 리포트(report)</td>
          <td>사용자 리포트 개요</td>
          <td>사용자 리포트 개요</td>
          <td class="url"><a href="/ReportOverview" target="_blank">ReportOverview</a></td>
          <td class="name">곽수진</td>
          <td>10/27</td>
          <td>10/27</td>
          <td></td>
          <td>
            <p>
              <strong>12/08 <span class="txt-modify">(수정)</span></strong> contents
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>사용자 리포트 개요 En</td>
          <td class="url"><a href="/ReportOverviewEn" target="_blank">ReportOverviewEn</a></td>
          <td class="name">곽수진</td>
          <td>12/16</td>
          <td>12/16</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>사용자 리포트</td>
          <td>현황 목록</td>
          <td class="url"><a href="/ReportList" target="_blank">ReportList</a></td>
          <td class="name">곽수진</td>
          <td>10/06</td>
          <td>10/06</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>당월신고</td>
          <td class="url"><a href="/InsertReport" target="_blank">InsertReport</a></td>
          <td class="name">곽수진</td>
          <td>10/05</td>
          <td>10/06</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>당월신고 제출 확인 <strong>Popup</strong></td>
          <td class="url"><a href="/InsertReport" target="_blank">InsertReport</a></td>
          <td class="name">곽수진</td>
          <td>10/06</td>
          <td>10/06</td>
          <td></td>
          <td>
            <p>'제출하기' 버튼</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>미신고 허용 대상 고객</td>
          <td class="url"><a href="/ReprotExemption" target="_blank">ReprotExemption</a></td>
          <td class="name">곽수진</td>
          <td>10/29</td>
          <td>10/29</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세</td>
          <td class="url"><a href="/ReportDetails" target="_blank">ReportDetails</a></td>
          <td class="name">곽수진</td>
          <td>10/05</td>
          <td>10/06</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>정정 신고</td>
          <td class="url"><a href="/InsertReportRevision" target="_blank">InsertReportRevision</a></td>
          <td class="name">곽수진</td>
          <td>10/07</td>
          <td>10/07</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>정정 신고 완료 <strong>Popup</strong></td>
          <td class="url"><a href="/InsertReportRevision" target="_blank">InsertReportRevision</a></td>
          <td class="name">곽수진</td>
          <td>10/07</td>
          <td>10/07</td>
          <td></td>
          <td>'제출하기' 버튼</td>
        </tr>
        <tr>
          <td colspan="9" class="hr"></td>
        </tr>
        <tr id="report" class="menu">
          <td>KRX 담당자 전용 메뉴</td>
          <td>전자결재 문서 관리</td>
          <td>목록</td>
          <td class="url"><a href="/KRXApprovalList" target="_blank">KRXApprovalList</a></td>
          <td class="name">곽수진</td>
          <td>10/28</td>
          <td>10/28</td>
          <td></td>
          <td>table list 스크롤 처리</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세 <strong>반려/승인 Popup 포함</strong></td>
          <td class="url"><a href="/KRXApprovalDetails" target="_blank">KRXApprovalDetails</a></td>
          <td class="name">곽수진</td>
          <td>10/28</td>
          <td>10/28</td>
          <td></td>
          <td>'반려/승인' button</td>
        </tr>
        <tr>
          <td></td>
          <td>영업현황 조회</td>
          <td>목록</td>
          <td class="url"><a href="/KRXBusinessList" target="_blank">KRXBusinessList</a></td>
          <td class="name">곽수진</td>
          <td>11/01</td>
          <td>11/02</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>계약현황 조회</td>
          <td>목록</td>
          <td class="url"><a href="/KRXContractList" target="_blank">KRXContractList</a></td>
          <td class="name">곽수진</td>
          <td>11/02</td>
          <td>11/02</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>템플릿</td>
          <td>KRX 전달 템플릿</td>
          <td class="url"><a href="/KRXTemplate" target="_blank">KRXTemplate</a></td>
          <td class="name">곽수진</td>
          <td>12/17</td>
          <td>12/20</td>
          <td></td>
          <td>
            <p>
              <strong>12/20 <span class="txt-modify">(수정)</span></strong> 3종 template html 로 재작업
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>사전확인 템플릿</td>
          <td class="url"><a href="/KRXTemplateTable1" target="_blank">KRXTemplateTable1</a></td>
          <td class="name">곽수진</td>
          <td>12/08</td>
          <td>12/08</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>통보 템플릿(추가신규+부분해지)</td>
          <td class="url"><a href="/KRXTemplateTable2" target="_blank">KRXTemplateTable2</a></td>
          <td class="name">곽수진</td>
          <td>12/08</td>
          <td>12/09</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>임시정지 템플릿</td>
          <td class="url"><a href="/KRXTemplateTable3" target="_blank">KRXTemplateTable3</a></td>
          <td class="name">곽수진</td>
          <td>12/08</td>
          <td>12/08</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="9" class="hr"></td>
        </tr>
        <tr id="service" class="menu">
          <td>고객서비스(service)</td>
          <td>공지사항</td>
          <td>공지사항 목록</td>
          <td class="url"><a href="/NoticeList" target="_blank">NoticeList</a></td>
          <td class="name">곽수진</td>
          <td>09/23</td>
          <td>09/24</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>공지사항 상세</td>
          <td class="url"><a href="/NoticeDetails" target="_blank">NoticeDetails</a></td>
          <td class="name">곽수진</td>
          <td>09/24</td>
          <td>09/24</td>
          <td></td>
          <td>
            <p><strong>09/27 </strong><span class="txt-modify">(수정)</span> '목록' button 색상 변경</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>FAQ</td>
          <td>FAQ 목록</td>
          <td class="url"><a href="/FaqList" target="_blank">FaqList</a></td>
          <td class="name">곽수진</td>
          <td>09/24</td>
          <td>09/24</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>FAQ 상세</td>
          <td class="url"><a href="/FaqList" target="_blank">FaqList</a></td>
          <td class="name">곽수진</td>
          <td>09/24</td>
          <td>09/24</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>1:1문의(비회원)</td>
          <td>1:1문의(비회원)</td>
          <td class="url"><a href="/InsertInquire" target="_blank">InsertInquire</a></td>
          <td class="name">곽수진</td>
          <td>09/24</td>
          <td>09/27</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>홈페이지 이용안내</td>
          <td>홈페이지 이용안내</td>
          <td class="url"><a href="/HomepageInfo" target="_blank">HomepageInfo</a></td>
          <td class="name">곽수진</td>
          <td>10/26</td>
          <td>10/26</td>
          <td></td>
          <td>
            <p>
              <strong>12/07 <span class="txt-modify">(수정)</span></strong> contents
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>홈페이지 이용안내 En</td>
          <td class="url"><a href="/HomepageInfoEn" target="_blank">HomepageInfoEn</a></td>
          <td class="name">곽수진</td>
          <td>12/28</td>
          <td>12/28</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>방문안내</td>
          <td>방문안내(오시는길)</td>
          <td class="url"><a href="/Map" target="_blank">Map</a></td>
          <td class="name">곽수진</td>
          <td>10/26</td>
          <td>10/26</td>
          <td></td>
          <td>
            <p><strong>10/27 </strong><span class="txt-modify">(수정)</span> 오시는 길 image를 css 로 처리</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>방문안내(오시는길) En</td>
          <td class="url"><a href="/MapEn" target="_blank">MapEn</a></td>
          <td class="name">곽수진</td>
          <td>12/28</td>
          <td>12/28</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ContentLayout",
  setup() {
    return {};
  },
  data() {
    return {};
  },
  methods: {},
});
</script>

<style scoped>
h1 {
  text-align: center;
  padding-top: 20px;
}
a:focus {
  outline: auto;
}
.hr {
  padding: 15px;
  border: 0;
}
.txt-memo {
  margin-right: 5px;
  font-weight: bold;
}
.txt-modify {
  margin-right: 5px;
  color: red;
  font-weight: bold;
}
table {
  width: 100%;
  color: #343434;
}
tr td:first-child {
  font-weight: 500;
}
th,
td {
  height: 30px;
  padding: 10px;
  border: 1px solid #a09d9d;
  font-size: 14px;
}
th {
  background-color: #eee;
  text-align: center;
}
td {
  text-align: left;
  padding: 5px 10px;
}
td:nth-child(5),
td:nth-child(6),
td:nth-child(7) {
  text-align: center;
}
tr.menu td {
  border-top: 2px solid #636363;
}
td p:not(:last-child) {
  margin-bottom: 7px;
}
.center {
  text-align: center;
}
.right {
  text-align: right;
}
.switch {
  padding: 10px 20px;
  text-align: right;
}
.pub-menu-list {
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #000;
}
.pub-menu-list li {
  width: 14.3%;
  border: 1px solid #fff;
  border-width: 1px 0 0 1px;
  color: #fff;
  text-align: center;
}
.menu-go {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px 5px;
  color: #fff;
  align-content: center;
  justify-content: center;
}
.file-list {
  padding: 20px;
}
.name {
  text-align: center;
}
.del td {
  color: blue;
  text-decoration: line-through;
  opacity: 0.5;
}
.url a {
  text-align: left;
  text-decoration: underline;
}
</style>
