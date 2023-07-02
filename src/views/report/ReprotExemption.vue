<template>
  <div class="auth-wrap">
    <div class="auth-box">
      <h2 class="auth-title">리포트 신고</h2>
      <div class="info-area report">
        <strong class="sub-title">사용자 리포트 신고 면제 안내</strong>
        <span class="txt-blue">삼성증권</span> 고객사는 현재 사용자 리포트 신고 의무가 없습니다. <br />
        변동료가 면제된 정보의 이용 / 계약에 의거 변동료가 면제된 기기/사용자에 대해서는<br />
        상기의 리포팅 의무가 면제됩니다.
      </div>
      <div class="guide-desc center">리포트 신고 관련 문의사항은 담당 영업담당자에게 연락해주십시오.</div>
      <div class="btn-area">
        <el-button type="info">메인</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ReprotExemption",
  setup() {
    return {};
  },
  data() {
    return {};
  },
  methods: {},
});
</script>

<style scoped></style>
