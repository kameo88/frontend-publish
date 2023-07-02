<template>
  <div class="section-group">
    <!-- main visual -->
    <div class="section">
      <div class="main-visual">
        <!-- main image -->
        <!-- <div class="visual-area">
          <div class="txt-box">
            <div class="tit"><span>KOSCOM</span><span>MARKET DATA SERVICE</span></div>
            <div class="desc">
              <span>한국 자본시장에서 거래되는 시장정보를</span><span>가장 빠르고 안정적으로 제공합니다.</span>
            </div>
            <a href="#none" class="more" target="_top">자세히 보기</a>
          </div>
        </div> -->
        <!-- //main image -->
        <!-- main slide -->
        <el-carousel trigger="click" arrow="never" interval="5000" :pause-on-hover="false" class="visual-area">
          <el-carousel-item v-for="(item, index) in itemList" :key="index">
            <div v-html="item" class="txt-area"></div>
          </el-carousel-item>
        </el-carousel>
        <!-- //main slide -->
        <div class="fixed-cnts-wrap">
          <div class="scroll-area">
            <ol class="list">
              <li class="active">
                <span class="txt">HOME</span>
                <!-- <span class="iconset icon-scroll">스크롤 이동</span> -->
              </li>
              <li @click="toggleSectionAnimation">
                <span class="txt">PRODUCT</span>
                <!-- <span class="iconset icon-scroll">스크롤 이동</span> -->
              </li>
              <li @click="toggleSectionAnimation">
                <span class="txt">SERVICE</span>
                <!-- <span class="iconset icon-scroll">스크롤 이동</span> -->
              </li>
              <li></li>
              <!-- <li><span class="iconset icon-scroll">마지막으로 스크롤 이동</span></li> -->
            </ol>
            <div class="mouse">SCROLL</div>
          </div>
          <div class="inquire-area">
            <span>계약문의</span>
            <a href="#none" class="go">바로가기</a>
          </div>
        </div>
        <!-- 추후 작업 -->
        <!-- <div class="notice-area">
          <div class="">Notice</div>
          <div class="">quick notice</div>
          <div class="">button icon</div>
        </div> -->
        <!-- //추후 작업 -->
        <div class="menu-area">
          <ul>
            <li>
              <div class="item mywork">
                <span class="txt">MY WORK</span>
                <el-button @click="drawer = !drawer" class="icon"
                  ><i class="iconset icon-mywork">내용 보기</i></el-button
                >
              </div>
            </li>
            <li>
              <a href="#none" class="item report"><span class="txt">사용자 리포트</span></a>
            </li>
            <li>
              <a href="#none" class="item contract"><span class="txt">주문계약</span></a>
            </li>
          </ul>
        </div>
        <!-- after login ; mywork popup -->
        <el-drawer v-model="drawer" direction="rtl" :with-header="false" modal-class="mywork-wrap">
          <div class="title-area">
            <span class="txt">MY WORK</span>
            <el-button @click="drawer = false" class="icon"><i class="iconset icon-mywork">내용 닫기</i></el-button>
          </div>
          <el-scrollbar class="work-area">
            <!-- 사용자 정보 -->
            <div class="user-info">
              <div><span class="name">김 코스코</span>님</div>
              <div class="email">customer@koscom.co.kr</div>
              <div class="company">
                <strong>교보증권</strong>
                <span>외환파생상품 팀</span>
              </div>
              <div><a @click="dialogNoticeTypeVisible = true">공지 dialog</a></div>
            </div>
            <!-- //사용자 정보-->
            <!-- 사용자 리포트 신고 내역 -->
            <div class="work-item">
              <div class="tit">
                사용자 리포트 신고 내역
                <a href="#none" class="more">MORE</a>
              </div>
              <!-- data 있는 경우 -->
              <ol class="timeline">
                <li>
                  <span class="date">2021.06.30</span>
                  <a href="#none" class="txt report" v-overflow-tooltip>
                    <span class="txt-date">2021-12</span>
                    <span>사용자 리포트 당월신고 제출 사용자 리포트 당월신고 제출 사용자 리포트 당월신고 제출</span>
                  </a>
                </li>
                <li>
                  <span class="date">2021.05.03</span>
                  <a href="#none" class="txt report" v-overflow-tooltip>
                    <span class="txt-date">2021-10</span>
                    <span>사용자 리포트 정정신고 제출</span>
                  </a>
                </li>
                <li>
                  <span class="date">2021.04.10</span>
                  <a href="#none" class="txt report" v-overflow-tooltip>
                    <span class="txt-date">2021-11</span>
                    <span>사용자 리포트 당월신고 반영</span>
                  </a>
                </li>
                <li>
                  <span class="date">2021.04.10</span>
                  <a href="#none" class="txt report" v-overflow-tooltip>
                    <span class="txt-date">2021-11</span>
                    <span>사용자 리포트 당월신고 반영</span>
                  </a>
                </li>
              </ol>
              <!-- //data 있는 경우 -->
              <!-- data 없는 경우 -->
              <div class="no-data">등록된 항목이 없습니다.</div>
              <!-- //data 없는 경우 -->
            </div>
            <!-- //사용자 리포트 신고 내역 -->
            <!-- 주문 현황 -->
            <div class="work-item">
              <div class="tit">
                주문 현황
                <a href="#none" class="more">MORE</a>
              </div>
              <!-- data 있는 경우 -->
              <ol class="timeline">
                <li>
                  <div class="status">
                    <span class="txt-badge mini blue">제출</span>
                    <span class="date">2021.06.24</span>
                    <span class="time">16:20:00</span>
                  </div>
                  <div>
                    <a href="#none" class="txt" v-overflow-tooltip
                      >표준/실시간/국내/일반/외부제공 주문서 양식이 관리자로 부터 제공되었습니다.</a
                    >
                  </div>
                </li>
                <li>
                  <div class="status">
                    <span class="txt-badge mini blue">제공</span>
                    <span class="date">2021.06.20</span>
                    <span class="time">10:10:30</span>
                  </div>
                  <div>
                    <a href="#none" class="txt" v-overflow-tooltip
                      >표준/실시간/국내/일반/외부제공 주문서를 관리자(홍길동)가 변경했습니다.</a
                    >
                  </div>
                </li>
                <li>
                  <div class="status">
                    <span class="txt-badge mini blue">결재완료</span>
                    <span class="date">2021.06.30</span>
                    <span class="time">16:20:00</span>
                  </div>
                  <div>
                    <a href="#none" class="txt" v-overflow-tooltip
                      >표준/실시간/국내/일반/외부제공 주문서가 승인되었습니다.</a
                    >
                  </div>
                </li>
                <li>
                  <div class="status">
                    <span class="txt-badge mini blue">완료</span>
                    <span class="date">2021.06.30</span>
                    <span class="time">16:20:00</span>
                  </div>
                  <div>
                    <a href="#none" class="txt" v-overflow-tooltip
                      >표준/실시간/국내/일반/외부제공 주문서가 반송되었습니다.표준/실시간/국내/일반/외부제공
                      주문서가반송되었습니다.</a
                    >
                  </div>
                </li>
                <!-- 
                  ######## 12/09 삭제 ########
                  <li>
                  <div class="status">
                    <span class="txt-badge mini orange">임시정지 승인</span>
                    <span class="date">2021.06.30</span>
                    <span class="time">16:20:00</span>
                  </div>
                  <div>
                    <a href="#none" class="txt" v-overflow-tooltip>신청하신 임시정지 요청건이 승인되었습니다.</a>
                  </div>
                </li>
                <li>
                  <div class="status">
                    <span class="txt-badge mini orange">임시정지 반려</span>
                    <span class="date">2021.06.30</span>
                    <span class="time">16:20:00</span>
                  </div>
                  <div>
                    <a href="#none" class="txt" v-overflow-tooltip>신청하신 임시정지 요청건이 반려되었습니다.</a>
                  </div>
                </li>
                <li>
                  <div class="status">
                    <span class="txt-badge mini grayline">기타신고 승인</span>
                    <span class="date">2021.06.30</span>
                    <span class="time">16:20:00</span>
                  </div>
                  <div>
                    <a href="#none" class="txt" v-overflow-tooltip>신청하신 기타신고 요청건이 승인되었습니다.</a>
                  </div>
                </li>
                <li>
                  <div class="status">
                    <span class="txt-badge mini grayline">기타신고 반려</span>
                    <span class="date">2021.06.30</span>
                    <span class="time">16:20:00</span>
                  </div>
                  <div>
                    <a href="#none" class="txt" v-overflow-tooltip>신청하신 기타신고 요청건이 반려되었습니다.</a>
                  </div>
                </li> -->
              </ol>
              <!-- //data 있는 경우 -->
              <!-- data 없는 경우 -->
              <div class="no-data">등록된 항목이 없습니다.</div>
              <!-- //data 없는 경우 -->
            </div>
            <!-- //주문 현황 -->
            <!-- 업무담당자 관리 
            ######## 12/09 삭제 ########
            -->
            <!-- <div class="work-item">
              <div class="tit">업무담당자 관리</div>
              <div class="item-box">
                <div class="left">
                  <strong>김대한</strong>
                  <span>님이 업무담당자로 등록되었습니다.</span>
                </div>
                <div class="right">
                  <span class="date stamp">2021.06.18</span>
                </div>
              </div>
              <div class="item-box">
                <div class="left">
                  <strong>김대한</strong>
                  <span>님이 업무담당자로 등록되었습니다.</span>
                </div>
                <div class="right">
                  <span class="date stamp">2021.06.18</span>
                </div>
              </div>
            </div> -->
            <!-- //업무담당자 관리 -->
            <!-- 1:1 문의 -->
            <div class="work-item">
              <div class="tit">1:1 문의<a href="#none" class="more">MORE</a></div>
              <!-- data 있는 경우 -->
              <div class="item-box">
                <div class="left">
                  <span class="txt-badge mini">답변대기</span>
                  <a class="txt inquired" v-overflow-tooltip
                    >시세정보를 온라인으로 신청, 변경, 해지할 수 있습니까? 시세정보를 온라인으로 신청, 변경, 해지할 수
                    있습니까?</a
                  >
                </div>
                <div class="right">
                  <span class="date stamp">2021.06.18</span>
                </div>
              </div>
              <div class="item-box">
                <div class="left">
                  <span class="txt-badge mini blue">답변완료</span>
                  <a href="#none" class="txt inquired" v-overflow-tooltip
                    >시세정보를 온라인으로 신청, 변경, 해지할 수 있습니까?</a
                  >
                </div>
                <div class="right">
                  <span class="date stamp">2021.06.18</span>
                </div>
              </div>
              <!-- //data 있는 경우 -->
              <!-- data 없는 경우 -->
              <div class="no-data">등록된 항목이 없습니다.</div>
              <!-- //data 없는 경우 -->
            </div>
            <!-- //1:1 문의 -->
          </el-scrollbar>
        </el-drawer>
        <!-- //after login ; mywork popup-->
      </div>
    </div>
    <!-- //main visual -->
    <!-- 시장정보 -->
    <div class="section active" :class="{ active: isActive }">
      <div class="main-cnts">
        <div class="title-area">
          <h2 class="title">시장정보 이렇게 시작하세요.</h2>
          <div class="desc">코스콤의 전문가들과 함께 시작하세요!</div>
        </div>
        <div class="cnts-area">
          <div class="card-wrap">
            <ul>
              <li>
                <div class="item">
                  <div class="tit">주문서 작성 TIP</div>
                  <div class="txt">관계사 확장옵션이란?</div>
                  <div class="desc">
                    해당 옵션을 선택할 경우 고객사의 관계사로 정보이용 권한을 확장하여 부여할수 있습니다.
                  </div>
                  <div class="view">VIEW</div>
                </div>
              </li>
              <li>
                <div class="item">
                  <div class="tit">정보수신방식</div>
                  <div class="txt">정보 사업자를 통해 수신하고자 할 때 어떻게 하나요?</div>
                  <div class="view">VIEW</div>
                </div>
              </li>
              <li>
                <div class="item">
                  <div class="tit">정보상품 계약절차</div>
                  <div class="txt">정보이용 계약절차 어떻게 진행되나요?</div>
                  <div class="view">VIEW</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- //시장정보 -->
    <!-- 공지, FAQ, link banner  -->
    <div class="section active" :class="{ active: isActive }">
      <div class="main-cnts bg">
        <div class="title-area">
          <h2 class="title">무엇이든 물어보세요</h2>
        </div>
        <div class="cnts-area">
          <!-- 공지사항 -->
          <div class="list-wrap">
            <div class="top">
              <h3 class="title">공지사항</h3>
              <a href="#none" class="txt-more">MORE</a>
            </div>
            <!-- 등록된 항목이 없는 경우 -->
            <!-- <div class="data-box">등록된 항목이 없습니다.</div> -->
            <!-- //등록된 항목이 없는 경우 -->
            <!-- 등록된 항목이 있는 경우 -->
            <ol class="list">
              <li>
                <span class="date">2021.06.10</span>
                <a href="#none" class="txt">[코스콤 카드뉴스] 키워드로 본 금융IT Issue 2021 5월 STORY 2</a>
              </li>
              <li>
                <span class="date">2021.05.12</span>
                <a href="#none" class="txt">금융소비자보호법과 금융투자업계의 대응방향</a>
              </li>
              <li>
                <span class="date">2021.05.10</span>
                <a href="#none" class="txt">인공지능(AI) 플랫폼 시대의 무한 경쟁이 주는 의미</a>
              </li>
            </ol>
            <!-- //등록된 항목이 있는 경우 -->
          </div>
          <!-- //공지사항 -->
          <!-- 자주하는 질문 -->
          <div class="list-wrap">
            <div class="top">
              <h3 class="title">자주하는 질문</h3>
              <a href="#none" class="txt-more">MORE</a>
            </div>
            <!-- 등록된 항목이 없는 경우 ; 12/09 추가 -->
            <div class="data-box">등록된 항목이 없습니다.</div>
            <!-- //등록된 항목이 없는 경우 -->
            <!-- 등록된 항목이 있는 경우 -->
            <!-- <ol class="list">
              <li>
                <span class="date">2021.06.07</span>
                <a href="#none" class="txt">[코스콤 정보분배] ETF INAV, ETN IIV 관련 추가 변경사항 안내[TCP]</a>
              </li>
              <li>
                <span class="date">2021.05.10</span>
                <a href="#none" class="txt">[FTP-야간종가] 코스피 200 Top10 지수 등 신규지수 명칭 변경 안내</a>
              </li>
              <li>
                <span class="date">2021.05.05</span>
                <a href="#none" class="txt">[코스콤 정보분배] KIS MSB 3M PLUS 소급지수 안내</a>
              </li>
            </ol> -->
            <!-- //등록된 항목이 있는 경우 -->
          </div>
          <!-- //자주하는 질문 -->
        </div>
        <div class="cnts-area">
          <!-- 시장정보문의 -->
          <div class="link-wrap info">
            <div class="tit">시장정보문의</div>
            <div class="txt">시장정보 이용이 궁금하세요?</div>
            <div class="email">marketdata@koscom.co.kr</div>
            <!-- 01/13 삭제 -->
            <!-- <div class="info-tel">
              <em class="txt team">시장정보팀</em>
              <span class="txt tel">02-767-7114</span>
              <span class="txt time">평일 07:30~18:00</span>
            </div> -->
          </div>
          <!-- //시장정보문의 -->
          <!-- 홈페이지 이용안내 -->
          <a href="#none" class="link-wrap guide">
            <div class="tit">홈페이지 이용안내</div>
            <div class="txt">어려워 보이는 시장정보 손쉽게 시작하세요!</div>
          </a>
          <!-- //홈페이지 이용안내 -->
        </div>
      </div>
    </div>
    <!-- //공지, FAQ, link banner  -->
    <!-- contact us banner -->
    <div class="section last">
      <div class="main-cnts banner">
        <div class="cnts-area">
          <div class="txt">코스콤 시장정보 전문가와 만나보세요.</div>
          <el-button type="primary" round>CONTACT US<i class="iconset icon-direct-w">바로가기</i></el-button>
        </div>
      </div>
    </div>
    <!-- //contact us banner -->
  </div>

  <!-- modal popup ; notice 공통 carousel -->
  <el-dialog v-model="dialogNoticeTypeVisible" :show-close="false" :close-on-click-modal="false" custom-class="notice">
    <el-carousel arrow="never" interval="5000" :pause-on-hover="true">
      <el-carousel-item v-for="(item, index) in itemNotice" :key="index">
        <div v-html="item" class="notice-area"></div>
      </el-carousel-item>
    </el-carousel>
    <template #footer>
      <div class="left">
        <el-checkbox v-model="checkClosePopup" class="input-form">하루동안 이 창을 열지 않음</el-checkbox>
      </div>
      <div @click="dialogNoticeTypeVisible = false" class="right"><span class="dialog-close">닫기</span></div>
    </template>
  </el-dialog>
  <!-- //modal popup ; notice 공통 carousel -->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "main",
  setup() {
    return {};
  },
  data() {
    return {
      isActive: false,
      dialogNoticeTypeVisible: false,
      drawer: false,
      checkClosePopup: false,
      itemList: [
        "<div class='txt-box'><div class='tit'><span>KOSCOM</span><span>MARKET DATA SERVICE</span></div><div class='desc'><span>한국 자본시장에서 거래되는 시장정보를</span><span>가장 빠르고 안정적으로 제공합니다.</span></div><a href='#none' class='more' target='_top'>자세히 보기</a></div>",
        "<div class='txt-box'><div class='tit'><span>A Global</span><span>Information service</span></div><div class='desc'><span>코스콤은 해외 글로벌 투자은행에서 이용하는</span><span>가장 신뢰할 수 있는 데이터를 제공합니다.</span></div><a href='#none' class='more' target='_top'>자세히 보기</a></div>",
        "<div class='txt-box'><div class='tit'><span>Greater Value</span><span>Together!</span></div><div class='desc'><span>코스콤은 시장정보사업으로</span><span>고객의 지속 가능하고 더 큰 가치를 만들어 나갑니다.</span></div><a href='#none' class='more' target='_top'>자세히 보기</a></div>",
      ],
      itemNotice: [
        "<div class='item bg'><div class='title'>자사주 시세정보 안내</div><div class='cnts'>자사주 시세정보의 정책 변경(21.10.10)에 따라 <br /> 이용조건 변경 및 편의성 개선을 위한 <br />신규서비스를 개시하였습니다.<a href='#none' class='link' target='_top'>정보 안내 바로가기</a></div><div class='contact-us'><div>문의 : 코스콤 시장전략부</div><div class='tel'>02-767-7114</div><div class='email'>marketdata@koscom.co.kr</div></div></div>",
        "<div class='item text'><div class='title'>기준일 및 주주명부 폐쇄기간 설정 공고</div><div class='cnts'><div>임시주주총회 소집을 위하여 상법 제354조 및 당사 정관 제15조 규정에 의거 2021년 9월 23일 현재 주주명부에 기록되어 있는 주주에게 의결권을 부여하며, 권리주주 확정을 위하여 2021년 9월 24일부터 10월 1일까지 주식의 명의개서, 질권의 등록 및 그 변경과 말소, 신탁재산의 표시 및 말소 등 주주명부의 기재사항 변경을 정지함을 공고합니다.</div><div class='center mt-xl'><div>2021년 10월 10일</div><div>서울시 영등포구 여의나루로 76</div><div class='company'>주식회사 코스콤</div><strong>대표이사 사장 홍우선</strong></div></div></div>",
        "<div class='item img'><img src='../assets/images/img_popup.jpg' alt='공지사항 내용' /></div>",
      ],
    };
  },
  methods: {
    toggleSectionAnimation() {
      this.isActive = !this.isActive;
    },
  },
});
</script>

<style scoped></style>
