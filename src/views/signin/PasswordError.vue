<template>
  <div class="auth-wrap">
    <div class="auth-box">
      <h2 class="auth-title">비밀번호 오류 횟수 초과</h2>
      <div class="info-area pw-error">
        잘못된 비밀번호를 연속 5회 이상 입력하셨습니다.
        <br />
        비밀번호 재설정 후 서비스를 이용하실 수 있습니다.
      </div>
      <div class="btn-area">
        <el-button class="gray">메인</el-button>
        <el-button class="el-button--secondary">비밀번호 재설정</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PasswordError",
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
