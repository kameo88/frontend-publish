<template>
  <div class="login-wrap">
    <div class="login-box">
      <h2 class="login-title">로그인</h2>
      <el-form :model="loginForm" :rules="rules" ref="loginForm" class="login-form">
        <el-form-item prop="loginName">
          <el-input v-model="loginForm.loginName" clearable></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" clearable></el-input>
        </el-form-item>
        <div class="btn-area">
          <el-button type="primary" @click="openError"> 로그인 </el-button>
        </div>
      </el-form>
      <div class="info-area">
        <div class="save">
          <span class="txt">ID 저장</span>
          <el-switch v-model="formValue"></el-switch>
        </div>
        <ul class="find">
          <li><a href="/FindingID" target="_top">아이디찾기</a></li>
          <li><a href="/ResetPassword" @click="dialogModifyVisible = true" target="_top">비밀번호 재설정</a></li>
          <li><a href="/SignupInfo" target="_top">회원가입</a></li>
        </ul>
      </div>
      <div class="info-desc">
        <i class="iconset icon-warning">안내</i> 시장정보 이용 및 서비스를 이용하시려면 로그인이 필요합니다.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ServiceApi } from "@/utils/service-apis";
import { ErrorResponse, SigninResponse } from "@/client-axios/api";
import { AxiosResponse } from "axios";

export default defineComponent({
  name: "Login",
  props: {},
  setup(props, context) {
    const serviceApi = new ServiceApi();
    return {
      serviceApi,
    };
  },
  data() {
    return {
      pwCurrent: "",
      pwNew: "",
      pwNewConfirm: "",
      formValue: false,
      loginForm: {
        siteCode: "02",
        loginName: "@bluedigm.com",
        password: "admin1234",
      },
      passwordForm: {
        name: "",
      },
      rules: {
        loginName: [
          {
            required: true,
            message: "이메일(아이디)을 입력해주세요.",
            trigger: "blur",
          },
          {
            min: 5,
            max: 50,
            message: "로그인명은 5 ~ 50자 사이로 입력해주세요.",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "비밀번호를 입력해주세요.",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    openError() {
      this.$notify.error({
        message: "가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.",
        type: "error",
        // duration: 0,
        customClass: "error",
      });
    },
    submitForm(formName: string) {
      (this.$refs[formName] as HTMLFormElement).validate((valid: any) => {
        if (valid) {
          this.serviceApi
            .authServiceApi()
            .signin({
              loginName: this.loginForm.loginName,
              loginSecretNo: this.loginForm.password,
            })
            .then((response: AxiosResponse<SigninResponse>) => {
              // 성공
              console.log(response);
              sessionStorage.setItem("access-token", response.data.accessToken);
              sessionStorage.setItem("refresh-token", response.data.refreshToken);

              this.$router.push("/mypage");
            })
            .catch((error: AxiosResponse<ErrorResponse>) => {
              console.log(`error code = ${error.data.errorCode}, error message = ${error.data.errorMessage}`);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
});
</script>

<style scoped></style>
