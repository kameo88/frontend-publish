<template>
  <div class="inquire-wrap">
    <div class="inquire-box">
      <h2 class="inquire-title">임시 비밀번호 발송</h2>
      <div class="info-area bg-img pw-reset">
        임시 비밀번호가 발송되었습니다. <br />
        아이디(이메일)로 발송된 임시 비밀번호로 로그인 후 비밀번호를 변경해주세요.
      </div>
      <div class="btn-area">
        <el-button class="gray">메인</el-button>
        <el-button type="primary">로그인</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SendingPassword",
  data() {
    return {};
  },
  methods: {},
});
</script>

<style scoped></style>
