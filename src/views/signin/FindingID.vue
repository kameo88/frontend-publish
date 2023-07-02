<template>
  <div class="inquire-wrap">
    <div class="inquire-box">
      <div class="title-area">
        <h2 class="inquire-title">아이디 찾기</h2>
        <div class="title-desc">회원가입 시 등록한 정보를 입력해주세요.</div>
      </div>
      <el-form :model="inquireForm" :rules="rules" ref="inquireForm" class="inquire-form">
        <div class="row">
          <el-form-item prop="insertFirstName" class="name">
            <el-input v-model="inquireForm.InsertFirstName" placeholder="성을 입력해주세요." clearable></el-input>
          </el-form-item>
          <el-form-item prop="insertLastName" class="name last">
            <el-input v-model="inquireForm.insertLastName" placeholder="이름을 입력해주세요." clearable></el-input>
          </el-form-item>
        </div>
        <div class="row">
          <el-form-item prop="insertPhone">
            <el-input
              v-model="inquireForm.insertPhone"
              placeholder="사무실 연락처를 입력해주세요."
              clearable
            ></el-input>
          </el-form-item>
        </div>
        <div class="btn-area">
          <el-button @click="openError" type="primary" class="w100-p">확인</el-button>
        </div>
      </el-form>
      <div class="info-area">
        <ul class="find">
          <li><a href="/ResetPassword" target="_top">비밀번호 재설정</a></li>
        </ul>
      </div>
      <div class="info-desc">
        <i class="iconset icon-warning">안내</i> 사무실전화번호는 국가번호를 포함하여 입력해주세요.
        <br />
        예시) +82-2-100-1234
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FindingID",
  data() {
    return {
      inquireForm: {
        insertFirstName: "",
        insertLastName: "",
        insertPhone: "",
      },
      rules: {
        insertFirstName: [
          {
            required: true,
            message: "성을 입력해주세요.",
            trigger: "blur",
          },
        ],
        insertLastName: [
          {
            required: true,
            message: "이름을 입력해주세요.",
            trigger: "blur",
          },
        ],
        insertPhone: [
          {
            required: true,
            message: "사무실 연락처를 입력해주세요.",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    openError() {
      this.$notify.error({
        message: "일치하는 정보가 없습니다",
        type: "error",
        // duration: 0,
        customClass: "error",
      });
    },
  },
});
</script>

<style scoped></style>
