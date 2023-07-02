<template>
  <div class="signup-wrap">
    <div class="signup-box">
      <h2 class="signup-title">회원가입 안내</h2>
      <div class="title-desc">
        코스콤 시장정보사업 서비스를 이용하시기 위해서는 회원가입이 필요합니다.
        <br />
        회원 가입 방법은 아래 2가지 방법으로 가능합니다.
      </div>
      <ul class="signup-type">
        <li class="new-user">
          <h3 class="title">신규회원가입<i class="iconset icon-help">도움말</i></h3>
          <div class="desc">
            해당 서비스에 가입한 이력이 없는 경우 <br />
            회원가입을 진행해 주세요.
          </div>
          <el-button size="medium" class="orange">회원가입</el-button>
        </li>
        <li class="add-user">
          <h3 class="title">기존 회원을 통한 회원추가<i class="iconset icon-help">도움말</i></h3>
          <div class="desc">
            해당 서비스를 이용중이신 기존 사용자가
            <br />
            있다면 담당자 추가를 통해 회원가입을
            <br />
            하실 수 있습니다.
          </div>
          <el-button size="medium" class="orange">회원추가</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SignupInfo",
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
