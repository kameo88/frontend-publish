<template>
  <div class="auth-wrap">
    <div class="auth-box">
      <h2 class="auth-title">이메일 인증실패</h2>
      <div class="info-area failed">
        이메일이 인증되지 않았습니다. <br />
        재발송 버튼을 클릭해서 다시 인증해주세요.
      </div>
      <div class="btn-area">
        <el-button type="primary">재발송</el-button>
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
