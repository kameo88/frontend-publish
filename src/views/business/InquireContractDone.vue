<template>
  <div class="auth-wrap">
    <div class="auth-box">
      <h2 class="auth-title">계약문의 완료</h2>
      <div class="info-area contract">
        시장정보시스템 계약문의가 정상적으로 접수되었습니다.<br />
        가까운 시일 내에 코스콤 담당자로부터 접수하신 내용에 대한 회신내용을<br />
        등록하신 메일로 확인하실 수 있습니다.
      </div>
      <div class="btn-area">
        <el-button type="info">메인</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "InquireContractDone",
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
