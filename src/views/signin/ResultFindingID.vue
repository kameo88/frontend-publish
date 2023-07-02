<template>
  <div class="inquire-wrap">
    <div class="inquire-box">
      <h2 class="inquire-title">아이디 찾기 결과</h2>
      <div class="title-desc">아래 아이디(이메일)를 확인 후 로그인해 주세요.</div>
      <div class="result-area">
        <span class="txt">Ki***@company.com</span>
      </div>
      <div class="btn-area">
        <el-button class="gray">메인</el-button>
        <el-button type="primary">로그인</el-button>
      </div>
      <div class="info-area">
        <ul class="find">
          <li><a href="/ResetPassword" target="_top">비밀번호 재설정</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ResultFindingID",
  data() {
    return {};
  },
  methods: {},
});
</script>

<style scoped></style>
