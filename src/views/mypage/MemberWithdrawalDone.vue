<template>
  <div class="auth-wrap">
    <div class="auth-box">
      <h2 class="auth-title">회원 탈퇴 완료</h2>
      <div class="info-area withdrawal">
        회원탈퇴 되었습니다.<br />
        그 동안 이용해 주셔서 감사합니다
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
