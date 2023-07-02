<template>
  <div class="signup-wrap">
    <div class="signup-box">
      <h2 class="signup-title">회원가입</h2>
      <ol class="signup-step">
        <li><span class="step">1</span>약관동의</li>
        <li class="active"><span class="step">2</span>정보입력</li>
        <li><span class="step">3</span>이메일 인증</li>
      </ol>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="signup-form">
        <!-- 아이디 및 비밀번호 정보 -->
        <div class="info-box">
          <div class="info-area">
            <h3 class="title">아이디 및 비밀번호 정보</h3>
            <div class="right option"><span class="required"></span> 표시항목은 필수 입력 항목입니다.</div>
          </div>
          <dl>
            <dt class="label required">아이디(이메일)</dt>
            <dd class="items">
              <el-form-item prop="insertId">
                <el-input
                  v-model="ruleForm.insertId"
                  placeholder="아이디로 사용하실 이메일을 입력해 주세요."
                  clearable
                ></el-input>
              </el-form-item>
              <ul class="list mark inline">
                <li>회사계정의 메일주소를 아이디로 입력해주세요.</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt class="label required">비밀번호</dt>
            <dd class="items">
              <el-form-item prop="insertPw">
                <el-input
                  type="password"
                  v-model="ruleForm.insertPw"
                  placeholder="비밀번호를 입력해주세요."
                  clearable
                ></el-input>
              </el-form-item>
              <ul class="list mark inline">
                <li>8~16자의 영문, 숫자, 특수문자가 포함된, 조합</li>
                <li>동일문자, 연속문자는 사용할 수 없음(예 : aaa, abc 등)</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt class="label required">비밀번호 확인</dt>
            <dd class="items">
              <el-form-item prop="insertPwConfirm">
                <el-input
                  type="password"
                  v-model="ruleForm.insertPwConfirm"
                  placeholder="비밀번호를 한 번 더 입력해주세요."
                  clearable
                ></el-input>
              </el-form-item>
            </dd>
          </dl>
        </div>
        <!-- //아이디 및 비밀번호 정보 -->
        <!-- 회사정보 -->
        <div class="info-box">
          <div class="info-area">
            <h3 class="title">회사정보</h3>
          </div>
          <dl>
            <dt class="label required">국가</dt>
            <dd class="items">
              <el-form-item prop="insertNational">
                <el-select v-model="ruleForm.insertNational" placeholder="국가 선택">
                  <el-option
                    v-for="item in ruleForm.optionsInsertNational"
                    :key="item.insertNational"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </dd>
          </dl>
          <dl>
            <dt class="label required">회사명</dt>
            <dd class="items">
              <el-form-item prop="insertCompany">
                <el-input v-model="ruleForm.insertCompany" placeholder="회사명을 입력해주세요." clearable></el-input>
              </el-form-item>
            </dd>
          </dl>
        </div>
        <!-- //회사정보 -->
        <!-- 개인정보 -->
        <div class="info-box">
          <div class="info-area">
            <h3 class="title">개인정보</h3>
          </div>
          <dl>
            <dt class="label required">이름</dt>
            <dd class="items">
              <el-form-item prop="insertFirstName" class="name">
                <el-input v-model="ruleForm.insertFirstName" placeholder="성을 입력해주세요." clearable></el-input>
              </el-form-item>
              <el-form-item prop="insertLastName" class="name last">
                <el-input v-model="ruleForm.insertLastName" placeholder="이름을 입력해주세요." clearable></el-input>
              </el-form-item>
            </dd>
          </dl>
          <dl>
            <dt class="label required">부서명</dt>
            <dd class="items">
              <el-form-item prop="insertDept">
                <el-input v-model="ruleForm.insertDept" placeholder="부서명을 입력해주세요." clearable></el-input>
              </el-form-item>
            </dd>
          </dl>
          <dl>
            <dt class="label required">담당업무</dt>
            <dd class="items">
              <el-form-item prop="insertWork">
                <el-checkbox-group v-model="ruleForm.insertWork">
                  <el-checkbox label="계약"></el-checkbox>
                  <el-checkbox label="IT"></el-checkbox>
                  <el-checkbox label="청구"></el-checkbox>
                  <el-checkbox label="기타"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </dd>
          </dl>
          <dl>
            <dt class="label required">사무실 연락처</dt>
            <dd class="items">
              <el-form-item prop="insertTelOffice">
                <el-input
                  v-model="ruleForm.insertTelOffice"
                  placeholder="사무실 연락처를 입력해주세요."
                  clearable
                ></el-input>
              </el-form-item>
              <ul class="list mark inline">
                <li>국가번호를 꼭 입력해주세요.</li>
                <li>지역번호 입력 란에 010 이동통신 국번을 입력할 수 있습니다.</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt class="label">휴대폰 연락처</dt>
            <dd class="items">
              <el-form-item prop="insertCellPhone">
                <el-input
                  v-model="ruleForm.insertCellPhone"
                  placeholder="휴대폰 연락처를 입력해주세요."
                  clearable
                ></el-input>
              </el-form-item>
            </dd>
          </dl>
        </div>
        <!-- //개인정보 -->
        <!-- 수신동의 -->
        <div class="info-box">
          <div class="info-area">
            <h3 class="title">수신동의</h3>
          </div>
          <dl>
            <dt class="label required">메일 수신언어</dt>
            <dd class="items">
              <el-form-item prop="insertLang">
                <el-checkbox-group v-model="ruleForm.insertLang">
                  <el-checkbox label="국문"></el-checkbox>
                  <el-checkbox label="영문"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </dd>
          </dl>
          <dl>
            <dt class="label">뉴스레터 수신동의</dt>
            <dd class="items">
              <el-form-item prop="insertNewsletter">
                <el-checkbox-group v-model="ruleForm.insertNewsletter">
                  <el-checkbox label="동의"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <ul class="list mark inline">
                <li>서비스 주요 정책과 계약, 회원정보 관련 내용은 동의 여부와 관계없이 발송됩니다.</li>
              </ul>
            </dd>
          </dl>
        </div>
        <!-- //수신동의 -->
        <!-- 최종 로그인 -->
        <div class="info-box">
          <div class="info-area">
            <h3 class="title">최종 로그인 후 1년 경과 후</h3>
          </div>
          <dl>
            <dt class="label required">연장여부</dt>
            <dd class="items">
              <el-form-item prop="insertExtend">
                <el-radio-group v-model="ruleForm.insertExtend">
                  <el-radio label="자동연장" disabled></el-radio>
                  <el-radio label="자동휴면"></el-radio>
                </el-radio-group>
              </el-form-item>
            </dd>
          </dl>
        </div>
        <!-- //최종 로그인 -->
      </el-form>
      <div class="btn-area">
        <el-button class="gray">이전</el-button>
        <el-button @click="submitForm('ruleForm')" type="primary">입력완료</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SignupForm",
  setup() {
    return {};
  },
  data() {
    return {
      ruleForm: {
        insertId: "",
        insertPw: "",
        insertPwConfirm: "",
        insertNational: "",
        optionsInsertNational: [
          {
            value: "대한민국",
            label: "대한민국",
          },
          {
            value: "United States of America",
            label: "United States of America",
          },
        ],
        insertCompany: "",
        insertFirstName: "",
        insertLastName: "",
        insertDept: "",
        insertWork: [],
        insertTelOffice: "",
        insertCellPhone: "",
        insertLang: ["국문"],
        insertNewsletter: ["동의"],
        insertExtend: "자동연장",
      },
      rules: {
        insertId: [{ required: true, message: "Please enter ID", trigger: "blur" }],
        insertPw: [
          { required: true, message: "Please enter a password", trigger: "blur" },
          { min: 3, max: 100, message: "Length should be 3 to 16" },
        ],
        insertPwConfirm: [
          { required: true, message: "Please re-enter your password", trigger: "blur" },
          { min: 3, max: 16, message: "Length should be 3 to 16" },
        ],
        insertNational: [{ required: true, message: "Please select your National", trigger: "change" }],
        insertCompany: [{ required: true, message: "Please enter your company name", trigger: "blur" }],
        insertFirstName: [{ required: true, message: "Please endter your first name", trigger: "blur" }],
        insertLastName: [{ required: true, message: "Please endter your last name", trigger: "blur" }],
        insertDept: [{ required: true, message: "Please endter your Department", trigger: "blur" }],
        insertWork: [
          { type: "array", required: true, message: "Please select at least one your work", trigger: "change" },
        ],
        insertTelOffice: [{ required: true, message: "Please endter your Department", trigger: "blur" }],
        insertLang: [
          { type: "array", required: true, message: "Please select at least one language type", trigger: "change" },
        ],
        insertExtend: [{ required: true, message: "Please select extension", trigger: "change" }],
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
