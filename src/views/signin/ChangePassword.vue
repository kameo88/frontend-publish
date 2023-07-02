<template>
  <el-dialog v-model="dialogChangePWVisible" custom-class="el-medium">
    <template #title>
      <span class="el-dialog__title">비밀번호 변경</span>
    </template>

    <div class="mb-m">
      임시비밀번호가 발급된 상태입니다. <br />
      임시비밀번호로 로그인한 후에 비밀번호를 변경하여 재로그인 해주세요.
    </div>
    <ul class="list-info orange">
      <li>
        비밀번호는 아래의 규칙을 준수하여 설정해 주십시오.
        <ul class="list dash">
          <li>8~16자의 영문, 숫자, 특수문자가 포함된, 조합</li>
          <li>동일문자, 연속문자는 사용할 수 없음(예 : aaa, abc 등)</li>
        </ul>
      </li>
    </ul>
    <div class="login-box changePW">
      <el-form>
        <el-form-item>
          <el-input type="password" v-model="pwCurrent" placeholder="현재 비밀번호 입력" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="pwNew" placeholder="신규 비밀번호 입력" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="pwNewConfirm" placeholder="신규 비밀번호 확인" clearable></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="btn-area">
      <el-button @click="dialogChangePWVisible = false" size="medium" class="gray" round>취소</el-button>
      <el-button type="primary" size="medium" round>확인</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ChangePassword",
  setup() {
    return {};
  },
  data() {
    return {
      dialogChangePWVisible: "true",
      pwCurrent: "",
      pwNew: "",
      pwNewConfirm: "",
    };
  },
  methods: {},
});
</script>

<style scoped></style>
