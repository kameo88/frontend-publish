<template>
  <ul class="skip-nav">
    <li><a href="#gnb">메인 메뉴로 바로가기</a></li>
    <li><a href="#contents">컨텐츠로 바로가기</a></li>
  </ul>
  <div class="header" :class="{ open: isOpen }">
    <div class="inner">
      <h1 class="ci">KOSCOM</h1>
      <ul id="gnb" class="gnb">
        <li>
          <a @mouseover="mouseover" href="#none" target="_top">정보상품</a>
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
      <div class="etc-area">
        <div class="login">
          <a href="javascript:void(0);" target="_top">LOGIN</a>
          <a href="javascript:void(0);" target="_top">JOIN</a>
        </div>
        <el-popover placement="bottom" trigger="click" popper-class="cmn-myinfo">
          <template #reference>
            <el-button><i class="iconset icon-myinfo">내정보</i></el-button>
          </template>
          <ul class="list">
            <li><a href="javascript:void(0);">회원정보수정</a></li>
            <li><a href="javascript:void(0);">비밀번호변경</a></li>
            <li><a href="javascript:void(0);">회원탈퇴</a></li>
            <li><a href="javascript:void(0);">1:1문의</a></li>
            <li><a href="javascript:void(0);">업무담당자 관리</a></li>
          </ul>
        </el-popover>
        <el-popover placement="bottom" trigger="click" popper-class="cmn-lang">
          <template #reference>
            <el-button><i class="iconset icon-lang">언어</i><span class="selected-lang">KR</span></el-button>
          </template>
          <ul class="list">
            <li><a href="javascript:void(0);">한국어</a></li>
            <li><a href="javascript:void(0);">English</a></li>
          </ul>
        </el-popover>
        <div class="all-menu">
          <!-- <el-button @click="drawer = true" class="btn-all">전체 메뉴</el-button> -->
          <el-button @click="drawer = !drawer" class="btn-all">전체 메뉴</el-button>
          <el-drawer v-model="drawer" direction="ttb" :with-header="false" modal-class="menu-list">
            <div>전체 메뉴 목록</div>
          </el-drawer>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="sub-visual">
      <div class="txt">정보상품</div>
      <div class="desc">시장별로 통합된 시세정보를 제공합니다.</div>
    </div>
    <div class="breadcrumb">
      <ol class="crumb">
        <li><a href="javascript:void(0);" class="home" target="_top">home</a></li>
        <li>breadcrumb</li>
      </ol>
    </div>
    <div id="contents" class="contents">
      <slot></slot>
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
      isActive: false,
    };
  },
  methods: {
    mouseOver() {
      this.isOpen = !this.isOpen;
    },
    toggleFamilySite() {
      this.isActive = !this.isActive;
    },
  },
});
</script>

<style scoped></style>
