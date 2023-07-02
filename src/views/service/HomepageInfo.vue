<template>
  <div class="title-wrap">
    <h2 class="title">홈페이지 이용안내</h2>
  </div>
  <div class="cnts-common">
    <div class="guide-desc">코스콤 마켓 데이터 고객지원 홈페이지 이용안내입니다.</div>
    <div class="title-wrap sub"><h3 class="title">홈페이지 개요</h3></div>
    <div class="txt-cnts">
      본 홈페이지의 명칭은 마켓데이터 고객지원 서비스(Market Data Customer Services)이며, 접속 URL은
      <a href="https://data.koscom.co.kr" class="txt-on" target="_top">https://data.koscom.co.kr</a> 입니다.
    </div>
    <div class="txt-cnts">
      마켓 데이터 고객지원 서비스는 한국거래소 및 금융투자협회의 시장정보를 이용하는 고객에게 관련된 정보를 제공하기
      위한 홈페이지로 아래와 같은 내용을 제공하고 있습니다.
    </div>
    <ul class="list dot">
      <li>정보상품 : 마켓 데이터 고객지원 서비스에서 제공중인 시장정보 상품 정보 안내</li>
      <li>고객니즈(계약문의) : 마켓데이터 고객지원 서비스를 신청하고자 하는 고객들을 위한 니즈 파악서비스</li>
      <li>공지사항 : 시장정보 데이터수신에 관련된 시장제도의 변경에 따른 안내 공지</li>
      <li>고객서비스 : 시장정보의 이용과 관련하여 자주 묻는 질문과 답변, 1:1 문의 서비스 제공</li>
      <li>회원정보 : 회원정보의 수정, 회원별 계약정보, 사용자리포트, 회원정보 수정</li>
    </ul>
    <div class="title-wrap sub"><h3 class="title">홈페이지 이용문의</h3></div>
    <div class="txt-cnts">홈페이지의 이용에 관련한 문의사항은 1:1문의로 연락주시면 빠른 시간 내 회신 드리겠습니다.</div>
    <button type="button" class="button small orange">1:1 문의 바로가기</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HomepageInfo",
  setup() {
    return {};
  },
  data() {
    return {};
  },
  methods: {},
});
</script>
