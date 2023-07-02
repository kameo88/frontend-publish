<template>
  <div class="inquire-wrap">
    <div class="inquire-box">
      <div class="title-area">
        <h2 class="inquire-title">비밀번호 재설정</h2>
        <div class="title-desc">
          회원가입 시 등록한 정보를 입력해 주세요. <br />
          가입된 이메일 주소(아이디)로 임시비밀번호가 발송 됩니다.
        </div>
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
          <el-form-item prop="insertID">
            <el-input v-model="inquireForm.insertID" placeholder="아이디(이메일)" clearable></el-input>
          </el-form-item>
        </div>
        <div class="btn-area">
          <el-button @click="openError" type="primary" class="w100-p">임시 비밀번호 발송</el-button>
        </div>
      </el-form>
      <div class="info-area">
        <ul class="find">
          <li><a href="/FindingID" target="_top">아이디 찾기</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ResetPassword",
  data() {
    return {
      inquireForm: {
        insertFirstName: "",
        insertLastName: "",
        insertID: "",
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
        insertID: [
          {
            required: true,
            message: "아이디(이메일)를 입력해주세요.",
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
