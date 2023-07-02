<template>
  <div class="title-wrap">
    <h2 class="title">주문서 개요</h2>
  </div>
  <div class="cnts-common">
    <div class="guide-desc">Koscom 시장정보사업 서비스를 이용하시기 위한 주문/계약 과정은 아래와 같습니다.</div>
    <!-- Diagram -->
    <ol class="order-step">
      <li class="step01">
        <div class="txt">STEP 01</div>
        고객과 영업담당자의 <br />
        사전조율
      </li>
      <li class="step02">
        <div class="txt">STEP 02</div>
        계약 문의 작성 <br />
        (계약문의)
      </li>
      <li class="step03">
        <div class="txt">STEP 03</div>
        담당자 <br />세부사항 조율
      </li>
      <li class="step04">
        <div class="txt">STEP 04</div>
        견적서 제공
      </li>
      <li class="step05">
        <div class="txt">STEP 05</div>
        계약 유형 결정
      </li>
      <li class="step06">
        <div class="txt">STEP 06</div>
        홈페이지 회원가입
      </li>
      <li class="step07">
        <div class="txt">STEP 07</div>
        주문서 입력
      </li>
      <li class="step08">
        <div class="txt">STEP 08</div>
        주문서 승인 / 계약진행
      </li>
      <li class="step09">
        <div class="txt">STEP 09</div>
        서비스 이용
      </li>
    </ol>
    <!-- //Diagram -->
    <ol class="list number">
      <li>고객과 영업담당자간 사전조율을 통해서 해당 서비스 이용이 가능한지에 대해서 상호간 확인합니다.</li>
      <li>계약문의를 통해서 코스콤에서 제공하는 정보상품에 대한 정보 제공 및 고객사정보를 1차 파악합니다.</li>
      <li>계약문의로 접수된 내용을 기반으로 영업담당자가 고객사로 연락하여 계약 관련 세부 사항들을 조율합니다.</li>
      <li>견적서를 통해서 서비스에 대한 이해와 최종 계약 유형을 결정하게 됩니다.</li>
      <li>
        주문/계약 등의 절차를 진행하기 위해 시장정보시스템 홈페이지에 가입을 진행하고 해당 영업담당자가 제공한 주문서
        기반으로 계약을 진행하게 되며 계약 완료 후 서비스를 이용하실 수 있습니다.
      </li>
    </ol>
    <ul class="list mark">
      <li>
        자세한 사항에 대해서 궁금하시면 <a href="#none" class="txt-on" target="_blank">1:1 문의</a> 이용을 부탁드립니다.
      </li>
    </ul>
    <div class="btn-area">
      <el-button type="primary">계약문의</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "OrderOverview",
  setup() {
    return {};
  },
  data() {
    return {};
  },
  methods: {},
});
</script>
