<template>
  <div class="title-wrap">
    <h2 class="title">리포트 상세</h2>
    <div class="btn"><el-button size="small" class="orange" icon="iconset icon-write">당월 신고</el-button></div>
  </div>
  <div class="guide-desc">신고하신 리포트 상세내용입니다.</div>
  <div class="title-wrap sub">
    <h3 class="title">리포트 정보</h3>
  </div>
  <div class="info-box box gray">
    <dl>
      <dt class="label">신고 월</dt>
      <dd class="items">2020-10</dd>
      <dt class="label">사용 월</dt>
      <dd class="items">2020-10</dd>
    </dl>
    <dl>
      <dt class="label">신고자(고객사)</dt>
      <dd class="items">이미자</dd>
      <dt class="label">총액</dt>
      <dd class="items"><strong>20,000,000</strong>원</dd>
    </dl>
    <dl>
      <dt class="label">신고 통화</dt>
      <dd class="items">원화</dd>
      <dt class="label">신고 일자</dt>
      <dd class="items">2020-10-10</dd>
    </dl>
    <dl>
      <dt class="label">
        <span>정정신고</span>
        <span>가능여부</span>
      </dt>
      <dd class="items">
        <!-- 불가 case -->
        <strong class="txt-red">불가</strong>
        <!-- //불가 case -->
        <!-- 가능 case -->
        <strong class="txt-blue">가능</strong>
        <!-- //가능 case -->
      </dd>
      <dt class="label">신고 방법</dt>
      <dd class="items">파일업로드/직접입력/전월과동일/대리신고</dd>
    </dl>
    <dl>
      <dt class="label">대리신고 신고자</dt>
      <dd class="items">이성재</dd>
    </dl>
  </div>
  <div class="info-box biz">
    <dl>
      <dt class="label">
        <span>사용자 리포트</span>
        <span>파일 업로드</span>
      </dt>
      <dd class="items">
        <a href="#none" class="file-link" download>
          코드값모음집_20210614.xlsx
          <span class="iconset icon-down-attach">파일 다운로드</span>
        </a>
      </dd>
    </dl>
  </div>
  <div class="title-wrap sub">
    <h3 class="title">사용자 리포트 상세내용</h3>
  </div>
  <div class="cnts-box">detail contents</div>

  <div class="title-wrap sub">
    <h3 class="title">신고 내역</h3>
  </div>
  <div class="tbl-wrap">
    <el-table :data="tableData" class="line" style="width: 100%">
      <el-table-column prop="month" label="기준 월"></el-table-column>
      <el-table-column prop="date" label="신고 일자"></el-table-column>
      <el-table-column prop="type" label="신고 구분"></el-table-column>
      <el-table-column prop="view" label="신고내용 보기">
        <template #default>
          <div class="btn">
            <el-button size="mini" class="gray" icon="iconset icon-view">신고내용 보기</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <!-- button area -->
  <!-- 불가 case -->
  <div class="btn-area">
    <el-button type="info">목록</el-button>
  </div>
  <!-- //불가 case -->
  <!-- 가능 case -->
  <div class="btn-area">
    <el-button class="gray">목록</el-button>
    <el-button type="primary">정정 신고</el-button>
  </div>
  <!-- //가능 case -->
  <!-- //button area -->
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
      tableData: [
        {
          month: "2021-10",
          date: "2021-10-11",
          type: "정정 신고",
          view: "",
        },
        {
          month: "2021-10",
          date: "2021-10-11",
          type: "정정 신고",
          view: "",
        },
        {
          month: "2021-10",
          date: "2021-10-11",
          type: "정정 신고",
          view: "",
        },
      ],
    };
  },
  methods: {},
});
</script>
