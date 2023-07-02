<template>
  <div class="title-wrap">
    <h2 class="title">1:1 문의(비회원)</h2>
  </div>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
    <div class="guide-desc">궁금하신 사항을 문의하여 주시면 답변 내용은 이메일로 확인하실 수 있습니다.</div>
    <!-- 개인정보 -->
    <div class="inquire-box cc">
      <dl>
        <dt class="label required">이름</dt>
        <dt class="item">
          <el-form-item prop="name">
            <el-input v-model="ruleForm.name" placeholder="이름을 입력해 주세요." clearable></el-input>
          </el-form-item>
        </dt>
        <dt class="label required">이메일</dt>
        <dt class="item">
          <el-form-item prop="email">
            <el-input v-model="ruleForm.email" placeholder="이메일을 입력해 주세요." clearable></el-input>
          </el-form-item>
        </dt>
        <dt class="label required">연락처</dt>
        <dt class="item">
          <el-form-item prop="contact">
            <el-input v-model="ruleForm.contact" placeholder="연락처를 입력해 주세요." clearable></el-input>
          </el-form-item>
        </dt>
      </dl>
    </div>
    <!-- //개인정보 -->
    <!-- 개인정보 수집 및 이용 동의 -->
    <div class="terms-box">
      <div class="terms-area">
        <h3 class="title">개인정보 수집 및 이용 동의</h3>
      </div>
      <ul class="terms-list">
        <li>
          <el-form-item prop="checkAgree">
            <el-checkbox v-model="ruleForm.checkAgree">[필수] 개인정보 수집 및 이용 동의</el-checkbox>
          </el-form-item>
          <a href="#none" @click="dialogAgreementVisible = true" class="viewer">내용보기</a>
        </li>
      </ul>
    </div>
    <!-- //개인정보 수집 및 이용 동의 -->
    <!-- 문의정보 -->
    <div class="info-box">
      <div class="info-area">
        <h3 class="title">문의 작성</h3>
      </div>
      <dl>
        <dt class="label">문의 유형</dt>
        <dd class="items">
          <el-form-item prop="type">
            <el-select v-model="ruleForm.type" placeholder="선택하세요.">
              <el-option
                v-for="item in ruleForm.optionsType"
                :key="item.type"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </dd>
      </dl>
      <dl>
        <dt class="label">문의 제목</dt>
        <dd class="items">
          <el-form-item prop="title">
            <el-input v-model="ruleForm.title" class="w100-p" placeholder="제목을 입력해 주세요." clearable></el-input>
          </el-form-item>
        </dd>
      </dl>
      <dl>
        <dt class="label">문의 내용</dt>
        <dd class="items">
          <el-form-item prop="desc">
            <el-input
              type="textarea"
              v-model="ruleForm.desc"
              maxlength="200"
              rows="7"
              resize="none"
              placeholder="문의 내용을 입력해 주세요."
            ></el-input>
          </el-form-item>
        </dd>
      </dl>
      <dl>
        <dt class="label">첨부 파일</dt>
        <dd class="items">
          <el-upload
            class="file-upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-exceed="handleExceed"
            multiple
            :limit="3"
            :file-list="fileList"
          >
            <el-button size="small">파일첨부</el-button>
            <template #tip>
              <div class="desc">파일타입: jpg, gif, png, pdf, zip / 최대 업로드 파일 크기 10M</div>
            </template>
          </el-upload>
        </dd>
      </dl>
    </div>
    <!-- //문의정보 -->
  </el-form>
  <!-- button area -->
  <div class="btn-area">
    <el-button class="gray">취소</el-button>
    <el-button @click="submitForm('ruleForm')" type="primary">문의하기</el-button>
  </div>
  <!-- //button area -->

  <!-- modal popup ; 회원약관 -->
  <el-dialog title="개인정보 수집 및 이용 동의" v-model="dialogAgreementVisible" custom-class="el-medium">
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
      <el-button @click="dialogAgreementVisible = false" type="primary" size="medium" round>동의함</el-button>
    </div>
  </el-dialog>
  <!-- //modal popup ; 회원약관 -->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ContentLayout",
  setup() {
    return {};
  },
  data() {
    return {
      ruleForm: {
        name: "",
        email: "",
        contact: "",
        checkAgree: [],
        type: "정보이용 및 계약",
        optionsType: [
          {
            label: "정보이용 및 계약",
            value: "정보이용 및 계약",
          },
          {
            label: "홈페이지 이용",
            value: "홈페이지 이용",
          },
          {
            label: "기타",
            value: "기타",
          },
        ],
        title: "",
      },
      rules: {
        name: [{ required: true, message: "Please enter your name", trigger: "blur" }],
        email: [{ required: true, message: "Please enter your email", trigger: "blur" }],
        contact: [{ required: true, message: "Please enter your phone number", trigger: "blur" }],
        checkAgree: [{ type: "array", required: true, message: "필수 항목입니다.", trigger: "change" }],
      },
      dialogAgreementVisible: false,
    };
  },
  methods: {
    handleExceed(files, fileList) {
      this.$message.warning(
        `The limit is 3, you selected ${files.length} files this time, add up to ${
          files.length + fileList.length
        } totally`
      );
    },
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
