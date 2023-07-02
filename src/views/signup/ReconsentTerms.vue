<template>
  <div class="signup-wrap">
    <div class="signup-box">
      <h2 class="signup-title">약관 재동의</h2>
      <div class="title-desc">
        2022년 07월 10일 변경된 이용약관에 대해서 재동의가 필요합니다.<br />
        서비스를 이용하시려면 아래 약관에 동의해야 정상적으로 이용할 수 있습니다.
      </div>
      <el-form :model="termsForm" :rules="rules" ref="termsForm">
        <div class="terms-box">
          <div class="check-all">
            <el-form-item prop="checkAll">
              <el-checkbox v-model="termsForm.checkAll">전체동의</el-checkbox>
            </el-form-item>
          </div>
          <ul class="terms-list">
            <li>
              <el-form-item prop="checkSelect1">
                <el-checkbox v-model="termsForm.checkSelect1">[필수] 코스콤 시세이용 회원약관</el-checkbox>
              </el-form-item>
              <a href="#none" @click="dialogVisible = true" class="viewer">내용보기</a>
            </li>
            <li>
              <el-form-item prop="checkSelect2">
                <el-checkbox v-model="termsForm.checkSelect2">[필수] 개인정보처리방침</el-checkbox>
              </el-form-item>
              <a href="#none" @click="dialogPolicyVisible = true" class="viewer">내용보기</a>
            </li>
            <li>
              <el-form-item prop="checkSelect3">
                <el-checkbox v-model="termsForm.checkSelect3">[선택] 개인정보 수집·이용 동의</el-checkbox>
              </el-form-item>
              <a href="#none" @click="dialogUseVisible = true" class="viewer">내용보기</a>
            </li>
          </ul>
        </div>
      </el-form>

      <div class="btn-area">
        <el-button class="gray">이전</el-button>
        <el-button @click="submitForm('termsForm')" type="primary">다음</el-button>
      </div>
    </div>
  </div>
  <!-- modal popup ; 회원약관 -->
  <el-dialog title="코스콤 시세이용 회원약관" v-model="dialogVisible" custom-class="el-medium">
    <el-scrollbar class="terms-cnts">
      <strong>제1조 (목적)</strong>
      본 약관은 (주)코스콤이 제공하는 마켓데이터 고객지원 서비스(Market Data Client Services, 이하 MDCS)의 이용조건 및
      절차, 기타 필요한 사항을 규정함을 목적으로 합니다.
      <strong>제2조 (약관의 효력과 변경)</strong>
      ① 본 약관은 MDCS 홈페이지(data.koscom.co.kr)에 게시됩니다. <br />
      ② 본 약관은 MDCS 홈페이지 화면을 통하여 이를 게시하거나 전자우편 기타의 방법으로 회원에게 통지함으로써 효력을
      발생합니다. <br />
      ③ MDCS는 이용자가 본 약관 내용에 동의하는 것을 조건으로 이용자에게 서비스를 제공할 것이며, 이용자가 본 약관의
      내용에 동의하는 경우 MDCS의 서비스 제공 행위 및 이용자의 MDCS 이용 행위에는 본 약관이 우선적으로 적용됩니다.
      <br />
      ④ (주)코스콤은 필요한 경우 본 약관을 개정할 수 있으며, 개정시에는 그 개정의 주요내용과 개정 후의 약관을 MDCS
      홈페이지에 게시하며 변경된 약관은 공지와 동시에 그 효력이 발생됩니다. <br />
      ⑤ 이용자가 변경된 약관에 동의하지 아니하는 경우, 이용자는 본인의 회원등록을 취소(회원탈퇴)할 수 있으며, 변경된
      약관의 효력 발생일로부터 7일 이내에 이메일 회신 등 별도의 거부의사를 표시하지 아니하고 서비스를 계속 사용할
      경우에는 약관 변경에 동의한 것으로 간주됩니다. 변경된 약관에 대한 정보를 알지 못해 발생하는 이용자의 피해는
      (주)코스콤에서 책임지지 않습니다. <br />
      ⑥ 본 약관에 명시되지 않은 사항은 전기통신기본법, 전기통신사업법,및 기타 관계 법령의 규정에 의합니다.
    </el-scrollbar>
    <div class="btn-area">
      <el-button @click="dialogVisible = false" type="primary" size="medium" round>동의함</el-button>
    </div>
  </el-dialog>
  <!-- //modal popup ; 회원약관 -->
  <!-- modal popup ; 개인정보처리방침 -->
  <el-dialog title="개인정보처리방침" v-model="dialogPolicyVisible" custom-class="el-medium">
    <el-scrollbar class="terms-cnts"> 개인정보처리방침 내용 </el-scrollbar>
    <div class="btn-area">
      <el-button @click="dialogPolicyVisible = false" type="primary" size="medium" round>동의함</el-button>
    </div>
  </el-dialog>
  <!-- //modal popup ; 개인정보처리방침 -->
  <!-- modal popup ; 수집·이용 동의 -->
  <el-dialog title="개인정보 수집·이용 동의" v-model="dialogUseVisible" custom-class="el-medium">
    <el-scrollbar class="terms-cnts"> 개인정보 수집·이용 동의 내용 </el-scrollbar>
    <div class="btn-area">
      <el-button @click="dialogUseVisible = false" size="medium" class="gray" round>취소</el-button>
      <el-button @click="dialogUseVisible = false" type="primary" size="medium" round>동의함</el-button>
    </div>
  </el-dialog>
  <!-- //modal popup ; 수집·이용 동의 -->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SignupTerms",
  setup() {
    return {};
  },
  data() {
    return {
      dialogVisible: false,
      dialogPolicyVisible: false,
      dialogUseVisible: false,
      termsForm: {
        checkAll: false,
        checkSelect1: [],
        checkSelect2: [],
        checkSelect3: [],
        isIndeterminate: true,
      },
      rules: {
        checkSelect1: [{ type: "array", required: true, message: "필수 항목입니다.", trigger: "change" }],
        checkSelect2: [{ type: "array", required: true, message: "필수 항목입니다.", trigger: "change" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
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
