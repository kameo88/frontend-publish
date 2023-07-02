<template>
  <div class="auth-wrap">
    <div class="auth-box">
      <h2 class="auth-title">시장정보시스템 뉴스레터 구독 승인 완료</h2>
      <div class="info-area newsletter">
        시장정보시스템 뉴스레터의 구독서비스고객으로 동의하셨습니다.<br />
        시장정보사업 통합관리내의 정보를 뉴스레터를 통해 수시로 정보를 안내 받으실 수 있습니다.
      </div>
      <div class="btn-area">
        <el-button type="secondary">메인</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AuthEmailConfirmed",
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
