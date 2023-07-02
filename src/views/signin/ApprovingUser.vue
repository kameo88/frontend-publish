<template>
  <div class="auth-wrap">
    <div class="auth-box">
      <h2 class="auth-title">정회원 미인증</h2>
      <div class="info-area confirming">
        현재 정회원 승인 심사 중 입니다.
        <br />
        관리자에게 문의하세요.
      </div>
      <div class="btn-area">
        <el-button class="gray">메인</el-button>
        <el-button class="el-button--secondary">비회원 1:1 문의</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ApprovingUser",
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
