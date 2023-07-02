<template>
  <div class="auth-wrap">
    <div class="auth-box">
      <h2 class="auth-title">이메일 미인증</h2>
      <div class="info-area reconfirm">
        아이디로 입력해주신 <span class="point">이메일 인증을 해야만 정상적으로 서비스를 이용</span>할 수 있습니다.
        <br />
        메일이 도착하지 않은 경우 재발송 버튼을 클릭해주시기 바랍니다.
      </div>
      <div class="btn-area">
        <el-button class="el-button--secondary">재발송</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AuthEmailConfirm",
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
