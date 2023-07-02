<template>
  <div class="title-wrap">
    <h2 class="title">회원 탈퇴</h2>
  </div>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
    <div class="guide-desc">회원탈퇴 시 회원정보는 즉각적으로 삭제되며, 복구가 불가능합니다.</div>
    <!-- 탈퇴 사유 -->
    <div class="info-box">
      <div class="info-area">
        <h3 class="title">탈퇴사유</h3>
      </div>
      <dl>
        <dt class="label required">비밀번호</dt>
        <dd class="items">
          <el-form-item prop="pwCurrent">
            <el-input
              type="password"
              v-model="ruleForm.pwCurrent"
              placeholder="현재 비밀번호를 입력해 주세요."
              clearable
            ></el-input>
          </el-form-item>
        </dd>
      </dl>
      <dl>
        <dt class="label required">탈퇴 사유</dt>
        <dd class="items">
          <el-form-item prop="reason">
            <el-select v-model="ruleForm.reason" placeholder="선택하세요.">
              <el-option
                v-for="item in ruleForm.optionsReason"
                :key="item.reason"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </dd>
      </dl>
      <!-- 기타 사유를 선택한 경우 show -->
      <dl>
        <dt class="label"></dt>
        <dd class="items">
          <el-form-item prop="desc">
            <el-input
              type="textarea"
              v-model="ruleForm.desc"
              maxlength="200"
              rows="7"
              resize="none"
              placeholder="탈퇴 사유를 입력해 주세요."
            ></el-input>
          </el-form-item>
        </dd>
      </dl>
      <!-- //기타 사유를 선택한 경우 show -->
    </div>
    <!-- //탈퇴 사유 -->
    <!-- 탈퇴 정보 동의 -->
    <div class="guide-desc">회원 탈퇴 시 아래 내용을 반드시 확인해 주시기 바랍니다.</div>
    <div class="privacy-box">
      <ol class="list number">
        <li>
          <span class="txt">회원탈퇴 시, 바로 삭제되는 정보</span>
          <ul class="list dot">
            <li>정보</li>
            <li>information</li>
          </ul>
        </li>
        <li>
          <span class="txt">회원탈퇴 시, 바로 삭제되는 정보</span>
          <ul class="list dot">
            <li>정보</li>
            <li>information</li>
          </ul>
        </li>
      </ol>
    </div>
    <div class="agree-area right">
      <el-form-item prop="confirmGuide">
        <el-checkbox v-model="ruleForm.confirmGuide">위 내용을 확인했습니다.</el-checkbox>
      </el-form-item>
    </div>
    <!-- //탈퇴 정보 동의 -->
  </el-form>
  <div class="btn-area">
    <el-button class="gray">취소</el-button>
    <el-button @click="submitForm('ruleForm')" type="primary">회원탈퇴</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ContentLayout2",
  setup() {
    return {};
  },
  data() {
    return {
      ruleForm: {
        pwCurrent: "",
        reason: "기타 사유",
        optionsReason: [
          {
            value: "시장정보 미이용",
            label: "시장정보 미이용",
          },
          {
            value: "업무변경",
            label: "업무변경",
          },
          {
            value: "기타 사유",
            label: "기타 사유",
          },
        ],
        confirmGuide: [],
      },
      rules: {
        pwCurrent: [{ required: true, message: "Please enter password", trigger: "blur" }],
        reason: [{ required: true, message: "Please select a reason for withdrawal", trigger: "change" }],
        confirmGuide: [{ required: true, message: "확인해 주세요.", trigger: "change" }],
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
