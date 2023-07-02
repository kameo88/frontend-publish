<template>
  <ul class="skip-nav">
    <li><a href="#gnb">메인 메뉴로 바로가기</a></li>
    <li><a href="#contents">컨텐츠로 바로가기</a></li>
  </ul>
  <div class="header" :class="{ open: isOpen }">
    <div class="inner">
      <h1 class="ci">KOSCOM</h1>
      <!-- koscom banner -->
      <div class="koscom-banner">
        <div class="desc">시장정보사업 이용이 궁금하세요?</div>
        <div class="tel">02-767-7114</div>
        <div class="email">marketdata@koscom.co.kr</div>
      </div>
      <!-- //koscom banner -->
      <div id="gnb" class="gnb">
        <ul>
          <li>
            <a @click="mouseOver" href="#none" target="_top">정보상품</a>
            <ul class="depth2">
              <li><a href="#none">개요</a></li>
              <li><a href="#none">실시간상품</a></li>
              <li><a href="#none">종가상품</a></li>
              <li><a href="#none">과거데이터</a></li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0);" target="_top">주문계약</a>
            <ul class="depth2">
              <li><a href="#none">주문서 개요</a></li>
              <li><a href="#none">고객 니즈</a></li>
              <li><a href="#none">주문 계약현황</a></li>
              <li><a href="#none">과거데이터</a></li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0);" target="_top">사용자리포트</a>
            <ul class="depth2">
              <li><a href="#none">개요</a></li>
              <li><a href="#none">사용자리포트 현황</a></li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0);" target="_top">고객서비스</a>
            <ul class="depth2">
              <li><a href="#none">공지사항</a></li>
              <li><a href="#none">KRX지수</a></li>
              <li><a href="#none">FAQ</a></li>
              <li><a href="#none">1:1문의</a></li>
              <li><a href="#none">홈페이지 이용안내</a></li>
              <li><a href="#none">방문안내</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- gnb background -->
      <div class="gnb-bg"></div>
      <!-- //gnb background -->
      <div class="etc-area">
        <div class="login">
          <!-- login 전 -->
          <a href="#none" target="_top">LOGIN</a>
          <a href="#none" target="_top">JOIN</a>
          <!-- //login 전 -->
          <!-- login 후 -->
          <el-popover placement="bottom" trigger="click" popper-class="mypage">
            <template #reference>
              <a href="#none">MYPAGE</a>
            </template>
            <ul class="list">
              <li><a href="javascript:void(0);">회원정보수정</a></li>
              <li><a href="javascript:void(0);">회원탈퇴</a></li>
              <li><a href="javascript:void(0);">1:1문의</a></li>
              <li><a href="javascript:void(0);">업무담당자 관리</a></li>
              <li><a href="javascript:void(0);">나의 알림</a></li>
            </ul>
          </el-popover>
          <a href="#none" target="_top">LOGOUT</a>
          <!-- //login 후 -->
        </div>
        <el-popover placement="bottom" trigger="click" popper-class="cmn-lang">
          <template #reference>
            <el-button class="select-lang"><i class="iconset icon-lang">언어</i><span class="txt">KR</span></el-button>
          </template>
          <ul class="list">
            <li><a href="javascript:void(0);">한국어</a></li>
            <li><a href="javascript:void(0);">English</a></li>
          </ul>
        </el-popover>
        <!-- 전체 메뉴 -->
        <div @click="isActive = !isActive" :class="{ active: isActive }" class="all-menu">
          <el-button @click="drawer = !drawer" class="btn-all">
            <div class="hamburger" :class="{ active: isActive }">
              <span class="line">전체메뉴</span>
              <span class="line"></span>
              <span class="line"></span>
            </div>
          </el-button>
          <el-drawer v-model="drawer" direction="ttb" :with-header="false" modal-class="menu-wrap">
            <!-- menu list -->
            <div class="menu-area">
              <div class="menu-list">
                <h2 class="main">정보상품</h2>
                <ul class="sub">
                  <li><a class="sub-menu">정보상품개요</a></li>
                  <li><a class="sub-menu">실시간 상품</a></li>
                  <li><a class="sub-menu">종가 상품</a></li>
                  <li><a class="sub-menu">과거 데이터</a></li>
                </ul>
              </div>
              <div class="menu-list">
                <h2 class="main">주문/계약</h2>
                <ul class="sub">
                  <li><a class="sub-menu">주문서 개요</a></li>
                  <li><a class="sub-menu">고객 니즈</a></li>
                  <li><a class="sub-menu">주문 현황</a></li>
                  <li><a class="sub-menu">계약 현황</a></li>
                  <li><a class="sub-menu">신고 변경</a></li>
                  <li><a class="sub-menu">기타 신고현황</a></li>
                </ul>
              </div>
              <div class="menu-list">
                <h2 class="main">사용자리포트</h2>
                <ul class="sub">
                  <li><a class="sub-menu">사용자리포트 개요</a></li>
                  <li><a class="sub-menu">리포트 당월신고</a></li>
                  <li><a class="sub-menu">리포트 현황</a></li>
                  <li><a class="sub-menu">리포트 정정신고</a></li>
                </ul>
              </div>
              <div class="menu-list">
                <h2 class="main">고객서비스</h2>
                <ul class="sub">
                  <li><a class="sub-menu">공지사항</a></li>
                  <li><a class="sub-menu">FAQ</a></li>
                  <li><a class="sub-menu">1:1 문의(비회원)</a></li>
                  <li><a class="sub-menu">홈페이지 이용안내</a></li>
                  <li><a class="sub-menu">방문 안내</a></li>
                </ul>
              </div>
              <div class="menu-list">
                <h2 class="main">마이페이지</h2>
                <ul class="sub">
                  <li><a class="sub-menu">회원정보 수정</a></li>
                  <li><a class="sub-menu">비밀번호 변경</a></li>
                  <li><a class="sub-menu">회원탈퇴</a></li>
                  <li><a class="sub-menu">1:1 문의(회원)</a></li>
                  <li><a class="sub-menu">업무담당자 관리</a></li>
                </ul>
              </div>
            </div>
            <!-- //menu list -->
          </el-drawer>
        </div>
        <!-- //전체 메뉴 -->
      </div>
    </div>
  </div>
  <div class="container">
    <div class="sub-visual">
      <div class="bg product">
        <div class="txt">정보상품</div>
        <div class="desc">시장별로 통합된 시세정보를 제공합니다.</div>
      </div>
    </div>
    <div class="breadcrumb">
      <ol class="crumb">
        <li><a href="javascript:void(0);" class="home" target="_top">home</a></li>
        <li>
          <el-select v-model="menuDepth1" popper-class="crumb-list">
            <el-option v-for="item in optionsMenuDepth1" :key="item.menuDepth1" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </li>
        <li class="last">
          <el-select v-model="menuDepth2" popper-class="crumb-list last">
            <el-option v-for="item in optionsMenuDepth2" :key="item.menuDepth2" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </li>
      </ol>
    </div>
    <div id="contents" class="contents">
      <!-- contents area -->
      <slot></slot>
      <!-- //contents area -->
    </div>
  </div>
  <div class="footer">
    <div class="top">
      <div class="ci">KOSCON</div>
      <div class="info-link">
        <ul class="list">
          <li><a href="javascript:void(0);" target="_top">이용약관</a></li>
          <li><a href="javascript:void(0);" class="privacy" target="_top">개인정보처리방침</a></li>
          <li><a href="javascript:void(0);" target="_top">이용안내</a></li>
          <li><a href="javascript:void(0);" target="_top">고객서비스</a></li>
        </ul>
        <div class="address">서울시 영등포구 여의나루로 76</div>
        <div class="phone">02-767-7114</div>
      </div>
      <div class="family-link" :class="{ active: isActive }">
        <el-button @click="toggleFamilySite" class="btn-link">FAMILY SITE</el-button>
        <ul class="list">
          <li><a href="javascript:void(0);" @click="toggleFamilySite" target="_blank">(주)코스콤</a></li>
          <li><a href="javascript:void(0);" @click="toggleFamilySite" target="_blank">SignKorea</a></li>
          <li><a href="javascript:void(0);" @click="toggleFamilySite" target="_blank">Koscom Data</a></li>
          <li><a href="javascript:void(0);" @click="toggleFamilySite" target="_blank">CHECK Expert+</a></li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <div class="copyright">© KOSCOM CORP. ALL RIGHTS RESERVED</div>
    </div>
  </div>
  <el-backtop></el-backtop>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ContentLayout",
  setup() {
    return {};
  },
  data() {
    return {
      isOpen: false,
      drawer: false,
      isSelect: false,
      isSelectLast: false,
      isActive: false,
      menuDepth1: "정보상품",
      menuDepth2: "개요",
      optionsMenuDepth1: [
        {
          label: "정보상품",
          value: "정보상품",
        },
        {
          label: "주문계약",
          value: "주문계약",
        },
        {
          label: "사용자리포트",
          value: "사용자리포트",
        },
        {
          label: "고객서비스",
          value: "고객서비스",
        },
      ],
      optionsMenuDepth2: [
        {
          label: "개요",
          value: "개요",
        },
        {
          label: "실시간상품",
          value: "실시간상품",
        },
        {
          label: "종가상품",
          value: "종가상품",
        },
        {
          label: "과거데이터",
          value: "과거데이터",
        },
      ],
    };
  },
  methods: {
    mouseOver() {
      this.isOpen = !this.isOpen;
    },
    toggleCrumbDepth1() {
      this.isSelect = !this.isSelect;
    },
    toggleCrumbDepth2() {
      this.isSelectLast = !this.isSelectLast;
    },
    toggleFamilySite() {
      this.isActive = !this.isActive;
    },
  },
});
</script>

<style scoped></style>
