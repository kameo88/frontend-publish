<template>
  <div class="title-wrap">
    <h2 class="title">1:1 문의</h2>
  </div>
  <div class="guide-box inquire">
    <span class="txt">궁금하신 점을 문의하여 주시면 빠른 시간 내 회신 드리겠습니다.</span>
  </div>
  <!-- post contents 문의 내용 -->
  <div class="title-wrap sub">
    <h3 class="title">문의 내용</h3>
  </div>
  <div class="post-view inquire">
    <dl class="title-area">
      <dt class="label">
        <span class="txt-badge blue">답변완료</span>
        <span class="type">정보이용 및 계약</span>
      </dt>
      <dd class="txt">계약서상의 계약기간 자동연장이 된 상태에서 계약기간 종료 전에 시세이용 해지가 가능합니까?</dd>
      <dd class="date">2021.10.10</dd>
    </dl>
    <div class="cnts">
      안정적인 전용선 시세와 달리 인터넷 상품은 인터넷 공용망을 이용하기 때문에 장애에 대한 위험을 항시 내포하고 있으며
      대역폭 또한 시장에서 발생하는 모든 정보를 송신하기는 무리가 있습니다. <br />
      이러한 이유 때문에 트레이딩 등 주문을 위한 용도로는 사용하실 수 없습니다. <br /><br />
      시장제도개편은 금융당국 및 한국거래소 등의 정책에 따라 수시로 공지되나요?<br />
      한국거래소 및 한국금융투자협회의 시세분배사로서 가장 먼저 시장제도개편내용을 알려주세요 감사합니다.
    </div>
    <dl class="files-area">
      <dt class="label">첨부파일</dt>
      <dd class="files">
        <ul class="files-list">
          <li>
            <a href="#none" class="file-link" download>
              <span>코드값모음집_20210614.xlsx</span>
              <span class="iconset icon-down-attach">파일 다운로드</span>
            </a>
          </li>
          <li>
            <a href="#none" class="file-link" download>
              코드값모음집_20210614.xlsx
              <span class="iconset icon-down-attach">파일 다운로드</span>
            </a>
          </li>
        </ul>
      </dd>
    </dl>
  </div>
  <!-- //post contents 문의 내용 -->
  <!-- post contents 답변 내용 -->
  <div class="title-wrap sub">
    <h3 class="title">답변 내용</h3>
  </div>
  <div class="post-view answer">
    <div class="title-area">
      <span class="txt">
        <span>계약서상의 계약기간 자동연장이 된 상태에서 계약기간 종료 전에 시세이용 해지가 가능합니까?</span>
        <i>답변입니다.</i>
      </span>
      <span class="manager">김기자 관리자</span>
      <span class="date">2021.10.11</span>
    </div>
    <div class="cnts">
      시세정보를 이용하여 지수산출을 하고자 하는 경우, 반드시 사전에 정보소유권자(한국거래소 또는한국금융투자협회) 또는
      당사와 협의하여야 합니다.<br />
      문의사항은 아래의 대표 담당자에게 문의하여 주시기 바랍니다.<br /><br />

      - 영업본부 자본시장영업팀 02-767-8618, 7576 jiho.hong@koscom.co.kr <br />
    </div>
  </div>
  <!-- //post contents 답변 내용 -->
  <!-- button area -->
  <div class="btn-area">
    <el-button type="secondary">목록</el-button>
  </div>
  <!-- //button area -->
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
