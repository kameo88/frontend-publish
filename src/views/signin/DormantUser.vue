<template>
  <div class="auth-wrap">
    <div class="auth-box">
      <h2 class="auth-title">계정 휴면 상태 안내</h2>
      <div class="info-area dormant">
        현재 로그인하신 계정은 최근 1년간 로그인 이력이 없어 휴면 전환된 상태입니다.
        <br />
        휴면상태를 해제 후 서비스를 이용하실 수 있습니다.
      </div>
      <div class="btn-area">
        <el-button class="gray">메인</el-button>
        <el-button class="el-button--secondary">휴면상태 해제</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "DormantUser",
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
