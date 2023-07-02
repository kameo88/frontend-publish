<template>
  <div class="auth-wrap">
    <div class="auth-box">
      <h2 class="auth-title">이메일 인증완료</h2>
      <div class="info-area confirmed">
        이메일 인증이 정상적으로 완료되었습니다.
        <br />
        관리자의 승인 후 사용이 가능합니다.
      </div>
      <div class="btn-area">
        <el-button class="gray">메인</el-button>
        <el-button type="primary">로그인</el-button>
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
