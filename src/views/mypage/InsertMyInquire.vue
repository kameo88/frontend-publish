<template>
  <div class="title-wrap">
    <h2 class="title">1:1 문의</h2>
  </div>
  <div class="guide-box inquire">
    <span class="txt">궁금하신 사항을 문의하여 주시면 답변 내용은 이메일로 확인하실 수 있습니다.</span>
  </div>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
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
    <el-button type="primary">문의하기</el-button>
  </div>
  <!-- //button area -->
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
  },
});
</script>

<style scoped></style>
