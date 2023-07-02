<template>
  <div class="signup-wrap">
    <div class="signup-box">
      <h2 class="signup-title">회원가입</h2>
      <ol class="signup-step">
        <li><span class="step">1</span>약관동의</li>
        <li><span class="step">2</span>정보입력</li>
        <li class="active"><span class="step">3</span>이메일 인증</li>
      </ol>
      <div class="info-area bg-img reconfirm">
        정상적으로 회원정보 입력이 완료 되었습니다.
        <br />
        아이디로 입력해주신 <span class="point">이메일 인증을 해야만 정상적으로 서비스를 이용</span>할 수 있습니다.
        <br />
        메일에 있는 링크를 클릭해 주시면 인증이 완료됩니다.
      </div>
      <div class="btn-area">
        <el-button class="gray">메인</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SignupDone",
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
