<template>
  <div class="title-wrap">
    <h2 class="title">리포트 정정 신고</h2>
  </div>
  <div class="guide-desc">
    <ul class="list dot">
      <li>사용자 리포트 정정신고는 신고 월일 기준으로 3개월 전 까지만 가능합니다.</li>
      <li>정정 신고한 내용은 정정신고한 월에 포함되어 진행되어, 차후 정산시에 포함되어 금액이 계산됩니다.</li>
    </ul>
  </div>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
    <div class="title-wrap sub">
      <h3 class="title">리포트 선택</h3>
    </div>
    <div class="info-box box">
      <dl>
        <dt class="label">
          <span>신고 대상 사용자</span>
          <span>리포트 선택</span>
        </dt>
        <dd class="items">
          <el-form-item prop="type">
            <el-select v-model="ruleForm.report" placeholder="선택하세요.">
              <el-option
                v-for="item in ruleForm.optionsReport"
                :key="item.report"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </dd>
      </dl>
    </div>
    <div class="title-wrap sub">
      <h3 class="title">리포트 정보</h3>
    </div>
    <div class="info-box box gray">
      <dl>
        <dt class="label">신고 월</dt>
        <dd class="items">2017-10</dd>
        <dt class="label">사용 월</dt>
        <dd class="items">2017-10</dd>
      </dl>
      <dl>
        <dt class="label">총액</dt>
        <dd class="items"><strong>20,000,000</strong>원</dd>
        <dt class="label">신고 통화</dt>
        <dd class="items">원화</dd>
      </dl>
    </div>
    <div class="title-wrap sub">
      <h3 class="title">기존 사용자 리포트 상세내용</h3>
    </div>
    <div class="cnts-box">Grid - detail contents</div>
    <div class="title-wrap sub">
      <h3 class="title">리포트 신고 방법</h3>
    </div>
    <div class="info-box box">
      <dl>
        <dt class="label">리포트 신고 방법</dt>
        <dd class="items">
          <el-form-item prop="uploadType">
            <el-radio-group v-model="ruleForm.uploadType">
              <el-radio label="파일업로드 방식"></el-radio>
              <el-radio label="직접 입력 방식"></el-radio>
            </el-radio-group>
          </el-form-item>
        </dd>
      </dl>
    </div>
    <!-- 리포트 신고 방법 ; 파일업로드 방식 -->
    <div class="info-box biz">
      <dl>
        <dt class="label">
          <span>사용자 리포트</span>
          <span>파일 업로드</span>
        </dt>
        <dd class="items">
          <el-upload
            class="file-upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-exceed="handleExceed"
            multiple
            :limit="3"
            :file-list="fileList"
          >
            <el-button size="small">파일업로드</el-button>
            <template #tip>
              <div class="desc">파일타입 :jpg, gif, png, pdf, zip / 최대 10M</div>
            </template>
          </el-upload>
        </dd>
        <dd class="right"><el-button size="mini" icon="iconset icon-down-doc">양식 다운로드</el-button></dd>
      </dl>
    </div>
    <!-- //리포트 신고 방법 ; 파일업로드 방식 -->
    <div class="title-wrap sub">
      <h3 class="title">사용자 리포트 상세내용</h3>
      <!-- 리포트 신고 방법 ; 직접 입력 방식 -->
      <div class="right">
        <el-button size="mini" icon="iconset icon-time">전월 데이터 불러오기</el-button>
        <el-button size="mini" icon="iconset icon-reset">초기화</el-button>
      </div>
      <!-- //리포트 신고 방법 ; 직접 입력 방식 -->
    </div>
    <div class="cnts-box">Grid - detail contents</div>
  </el-form>
  <!-- button area -->
  <div class="btn-area">
    <el-button class="gray">취소</el-button>
    <el-button class="orange">임시저장</el-button>
    <el-button @click="dialogReportVisible = true" type="primary">제출하기</el-button>
  </div>
  <!-- //button area -->
  <!-- modal popup ; 사용자 리포트 정정 제출 안내 -->
  <el-dialog title="사용자 리포트 정정 제출 안내" v-model="dialogReportVisible" custom-class="el-small">
    <div class="center">
      이번 달 정정하신 내역에 대한 차이 금액 반영은 <br />
      당월 청구 시 합산되어 반영될 예정입니다.
    </div>
    <div class="btn-area">
      <el-button @click="dialogReportVisible = false" type="primary" size="medium" round>확인</el-button>
    </div>
  </el-dialog>
  <!-- //modal popup ; 사용자 리포트 정정 제출 안내 -->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AuthEmailConfirmed",
  setup() {
    return {};
  },
  data() {
    return {
      dialogReportVisible: false,
      ruleForm: {
        report: "",
        optionsReport: [
          {
            label: "2021년 5월 사용자리포트",
            value: "2021년 5월 사용자리포트",
          },
        ],
        uploadType: "파일업로드 방식",
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
