<template>
  <div class="title-wrap">
    <h2 class="title">리포트 신고</h2>
  </div>
  <div class="guide-desc">리포트 신고 관련 문의사항은 담당 영업담당자에게 연락해주십시오.</div>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
    <div class="title-wrap sub">
      <h3 class="title">신고 월 정보</h3>
    </div>
    <div class="info-box box gray">
      <dl>
        <dt class="label">신고 월</dt>
        <dd class="items">2017-10-11</dd>
        <dt class="label">신고자(고객사)</dt>
        <dd class="items">-</dd>
      </dl>
    </div>
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
    <!-- 리포트 신고방법 ; 파일업로드 방식 -->
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
    <!-- //리포트 신고방법 ; 파일업로드 방식 -->
    <div class="title-wrap sub">
      <h3 class="title">사용자 리포트 상세내용</h3>
      <!-- 리포트 신고방법 ; 직접 입력 방식 -->
      <div class="right">
        <el-button size="mini" icon="iconset icon-time">전월 데이터 불러오기</el-button>
        <el-button size="mini" icon="iconset icon-reset">초기화</el-button>
      </div>
      <!-- //리포트 신고방법 ; 직접 입력 방식 -->
    </div>
    <div class="cnts-box">
      <!-- detail contents -->
      <div>
        <div class="tbl-wrap">
          <div class="tbl-top">
            <div class="left">
              <div class="total">
                <span class="sum">총<span class="num">180</span>건</span>
                <span class="page">
                  <span class="current">1</span>
                  <span class="sum-page">17</span>페이지
                </span>
              </div>
            </div>
            <div class="right">
              <strong><span class="txt-sum">총액</span>700,000,000 원</strong>
            </div>
          </div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="month1" label="신고 월" width="540"></el-table-column>
            <el-table-column prop="month2" label="사용 월" width="140"></el-table-column>
            <el-table-column prop="type" label="신고 구분" width="140"></el-table-column>
            <el-table-column prop="reporter" label="신고(고객사)" width="140"></el-table-column>
            <el-table-column prop="date" label="최종 신고 일자" width="140"></el-table-column>
            <el-table-column prop="status" label="정정 신고 승인 상태" width="170"></el-table-column>
          </el-table>
          <div class="tbl-bottom">
            <el-pagination :page-size="100" layout="size, prev, pager, next" :total="1000"></el-pagination>
          </div>
        </div>
      </div>
    </div>
  </el-form>
  <!-- button area -->
  <div class="btn-area">
    <el-button class="gray">취소</el-button>
    <el-button class="orange">임시저장</el-button>
    <el-button @click="dialogReportVisible = true" type="primary">제출하기</el-button>
  </div>
  <!-- //button area -->
  <!-- modal popup ; 리포트 신고 -->
  <el-dialog title="사용자 리포트 신고" v-model="dialogReportVisible" custom-class="el-medium">
    <ul class="list-info orange">
      <li>2021년 6월 <strong class="txt">우리증권</strong> 고객사의 사용자 리포트 신고 총액은 아래와 같습니다.</li>
    </ul>
    <div class="border-box report">
      <span class="txt">신고 총액</span><span class="num">45,000,000</span><span class="unit">원</span>
    </div>
    <ul class="list dot small">
      <li>마감일 (7월 25일)까지 수정하여 다시 제출하실 수 있습니다.</li>
    </ul>
    <div class="btn-area">
      <el-button @click="dialogReportVisible = false" size="medium" class="gray" round>취소</el-button>
      <el-button @click="dialogReportVisible = false" type="primary" size="medium" round>확인</el-button>
    </div>
  </el-dialog>
  <!-- //modal popup ; 리포트 신고 -->
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
        uploadType: "파일업로드 방식",
      },
      tableData: [
        {
          month1: "2021-10",
          month2: "2021-10",
          type: "당월신고",
          reporter: "이미자",
          date: "2021-10-10",
          status: "승인 요청 중",
        },
        {
          month1: "2021-10",
          month2: "2021-10",
          type: "당월신고",
          reporter: "이미자",
          date: "2021-10-10",
          status: "승인 요청 중",
        },
        {
          month1: "2021-10",
          month2: "2021-10",
          type: "당월신고",
          reporter: "이미자",
          date: "2021-10-10",
          status: "승인 요청 중",
        },
        {
          month1: "2021-10",
          month2: "2021-10",
          type: "당월신고",
          reporter: "이미자",
          date: "2021-10-10",
          status: "승인 요청 중",
        },
        {
          month1: "2021-10",
          month2: "2021-10",
          type: "당월신고",
          reporter: "이미자",
          date: "2021-10-10",
          status: "승인 요청 중",
        },
        {
          month1: "2021-10",
          month2: "2021-10",
          type: "당월신고",
          reporter: "이미자",
          date: "2021-10-10",
          status: "승인 요청 중",
        },
        {
          month1: "2021-10",
          month2: "2021-10",
          type: "당월신고",
          reporter: "이미자",
          date: "2021-10-10",
          status: "승인 요청 중",
        },
        {
          month1: "2021-10",
          month2: "2021-10",
          type: "당월신고",
          reporter: "이미자",
          date: "2021-10-10",
          status: "승인 요청 중",
        },
        {
          month1: "2021-10",
          month2: "2021-10",
          type: "당월신고",
          reporter: "이미자",
          date: "2021-10-10",
          status: "승인 요청 중",
        },
        {
          month1: "2021-10",
          month2: "2021-10",
          type: "당월신고",
          reporter: "이미자",
          date: "2021-10-10",
          status: "승인 요청 중",
        },
      ],
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
