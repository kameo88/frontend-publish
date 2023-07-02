<template>
  <div class="title-wrap">
    <h2 class="title">회원정보 수정</h2>
  </div>
  <div class="guide-box mypage">
    <span class="txt">
      회원정보 수정 관련 문의사항은 담당자에 문의 하시면 자세한 안내를 받으실 수 있습니다.
      <span class="call"><strong>정보사업부</strong><i class="tel">02-767-7114</i></span>
    </span>
  </div>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="mypage-form">
    <!-- 아이디 정보 -->
    <div class="info-box">
      <div class="info-area">
        <h3 class="title">아이디(이메일) 정보</h3>
        <div class="right option"><span class="required"></span> 표시항목은 필수 입력 항목입니다.</div>
      </div>
      <dl>
        <dt class="label">아이디(이메일)</dt>
        <dd class="items">
          <span>Tesst_data@shinhan.com</span>
          <div class="btn-pw">
            <el-button @click="dialogPWConfirmVisible = true" size="mini">비밀번호 변경</el-button>
          </div>
        </dd>
      </dl>
    </div>
    <!-- //아이디 정보 -->
    <!-- 회사정보 -->
    <div class="info-box">
      <div class="info-area">
        <h3 class="title">회사정보</h3>
      </div>
      <dl>
        <dt class="label required">회사명</dt>
        <dd class="items">
          <el-form-item prop="insertCompany">
            <el-input v-model="ruleForm.insertCompany" placeholder="회사명을 입력해 주세요." clearable></el-input>
          </el-form-item>
        </dd>
      </dl>
      <dl>
        <dt class="label">시장정보시스템 내 고객사명</dt>
        <dd class="items">
          <span>㈜교보증권 (관리사 관리 권한제공 O)</span>
        </dd>
      </dl>
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
    </div>
    <!-- //회사정보 -->
    <!-- 개인정보 -->
    <div class="info-box">
      <div class="info-area">
        <h3 class="title">개인정보</h3>
      </div>
      <dl>
        <dt class="label">이름</dt>
        <dd class="items">
          <span class="name">홍 길동</span>
        </dd>
      </dl>
      <dl>
        <dt class="label required">부서명</dt>
        <dd class="items">
          <el-form-item prop="insertDept">
            <el-input v-model="ruleForm.insertDept" placeholder="부서명을 입력해 주세요." clearable></el-input>
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
          <el-form-item prop="insertTelOffice" class="inline">
            <el-input
              v-model="ruleForm.insertTelOffice"
              placeholder="사무실 연락처를 입력해 주세요."
              clearable
            ></el-input>
          </el-form-item>
          <ul class="list mark inline">
            <li>국가번호를 꼭 입력해 주세요.</li>
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
              placeholder="휴대폰 연락처를 입력해 주세요."
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
          <el-form-item prop="insertNewsletter" class="inline">
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
              <el-radio label="자동연장"></el-radio>
              <el-radio label="자동휴면"></el-radio>
            </el-radio-group>
          </el-form-item>
        </dd>
      </dl>
    </div>
    <!-- //최종 로그인 -->
    <div class="guide-desc">회사가 변경되신 경우에는 회원탈퇴 후 새로운 이메일로 신규 가입하여 주시기 바랍니다.</div>
  </el-form>
  <div class="btn-area">
    <el-button class="gray">취소</el-button>
    <el-button @click="submitForm('ruleForm')" type="primary">수정하기</el-button>
  </div>

  <!-- modal popup ; 비밀번호 확인 -->
  <el-dialog title="비밀번호 확인" v-model="dialogPWConfirmVisible" custom-class="el-medium pw-change">
    <ul class="list-info gray">
      <li>정보보호를 위해 비밀번호를 입력해 주세요.</li>
    </ul>
    <el-form>
      <div class="info-box">
        <dl>
          <dt class="label required">비밀번호</dt>
          <dd class="items">
            <el-form-item prop="insertPWConfirm">
              <el-input
                type="password"
                v-model="insertPWConfirm"
                placeholder="비밀번호를 입력해 주세요."
                clearable
              ></el-input>
            </el-form-item>
          </dd>
        </dl>
      </div>
    </el-form>
    <div class="btn-area">
      <el-button @click="dialogPWConfirmVisible = false" size="medium" class="gray" round>취소</el-button>
      <el-button
        @click="(dialogPWConfirmVisible = false), (dialogPWModifyVisible = true)"
        type="primary"
        size="medium"
        round
        >확인</el-button
      >
    </div>
  </el-dialog>
  <!-- //modal popup ; 비밀번호 확인 -->
  <!-- modal popup ; 비밀번호 변경 -->
  <el-dialog title="비밀번호 변경" v-model="dialogPWModifyVisible" custom-class="el-medium pw-change">
    <ul class="list-info gray">
      <li>
        비밀번호는 아래의 규칙을 준수하여 설정해 주십시오.
        <ul class="list dash">
          <li>8~16자의 영문, 숫자, 특수문자가 포함된, 조합</li>
          <li>동일문자, 연속문자는 사용할 수 없음(예 : aaa, abc 등)</li>
        </ul>
      </li>
    </ul>
    <el-form>
      <div class="info-box">
        <dl>
          <dt class="label required">비밀번호</dt>
          <dd class="items">
            <el-form-item prop="insertPWCurrent">
              <el-input
                type="password"
                v-model="insertPWCurrent"
                placeholder="현재 비밀번호를 입력해 주세요."
                clearable
              ></el-input>
            </el-form-item>
          </dd>
        </dl>
        <dl>
          <dt class="label required">
            <span>변경 후</span>
            <span>비밀번호</span>
          </dt>
          <dd class="items">
            <el-form-item prop="insertPWNew">
              <el-input
                type="password"
                v-model="insertPWNew"
                placeholder="신규 비밀번호를 입력해 주세요."
                clearable
              ></el-input>
            </el-form-item>
          </dd>
        </dl>
        <dl>
          <dt class="label required">
            <span>변경 후</span>
            <span>비밀번호 확인</span>
          </dt>
          <dd class="items">
            <el-form-item prop="insertPWNewconfirm">
              <el-input
                type="password"
                v-model="insertPWNewconfirm"
                placeholder="비밀번호를 확인해 주세요."
                clearable
              ></el-input>
            </el-form-item>
          </dd>
        </dl>
      </div>
    </el-form>
    <div class="btn-area">
      <el-button @click="dialogPWModifyVisible = false" size="medium" class="gray" round>취소</el-button>
      <el-button @click="dialogPWModifyVisible = false" type="primary" size="medium" round>확인</el-button>
    </div>
  </el-dialog>
  <!-- //modal popup ; 비밀번호 변경 -->
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
      dialogPWConfirmVisible: false,
      dialogPWModifyVisible: false,
      insertPWConfirm: "",
      insertPWCurrent: "",
      insertPWNew: "",
      insertPWNewConfirm: "",
      ruleForm: {
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
        insertFirstName: [{ required: true, message: "Please enter your first name", trigger: "blur" }],
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
