<template>
  <div class="title-wrap">
    <h2 class="title">사용자 리포트 현황</h2>
    <div class="btn"><el-button size="small" class="orange" icon="iconset icon-write">당월 신고</el-button></div>
  </div>
  <div class="guide-desc">사용자 리포트를 확인하실 수 있습니다.</div>
  <!-- search -->
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
    <div class="search-wrap">
      <div class="search-area">
        <dl>
          <dt class="label">기간</dt>
          <dd class="items">
            <el-form-item prop="type">
              <el-select v-model="ruleForm.type" class="w110" placeholder="선택하세요.">
                <el-option
                  v-for="item in ruleForm.optionsType"
                  :key="item.type"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-tooltip content="Description" effect="light" popper-class="warning">
                <i class="iconset icon-warning"></i>
              </el-tooltip>
            </el-form-item>
            <el-form-item prop="date1">
              <el-date-picker type="month" v-model="ruleForm.date1" placeholder="YYYY-MM"></el-date-picker>
              <el-tooltip content="Description" effect="light" popper-class="warning">
                <i class="iconset icon-warning"></i>
              </el-tooltip>
            </el-form-item>
            <span class="date-bar"></span>
            <el-form-item prop="date2">
              <el-date-picker type="month" v-model="ruleForm.date2" placeholder="YYYY-MM" readonly></el-date-picker>
              <el-tooltip content="Description" effect="light" popper-class="warning">
                <i class="iconset icon-warning"></i>
              </el-tooltip>
            </el-form-item>
            <el-form-item prop="period">
              <el-radio-group v-model="ruleForm.period">
                <el-radio-button label="3개월"></el-radio-button>
                <el-radio-button label="6개월"></el-radio-button>
                <el-radio-button label="12개월"></el-radio-button>
              </el-radio-group>
              <el-tooltip content="Description" effect="light" popper-class="warning">
                <i class="iconset icon-warning"></i>
              </el-tooltip>
            </el-form-item>
          </dd>
        </dl>
        <dl>
          <dt class="label">신고 유형</dt>
          <dd class="items">
            <el-form-item prop="kind">
              <el-select v-model="ruleForm.kind" class="w250" placeholder="선택하세요.">
                <el-option
                  v-for="item in ruleForm.optionsKind"
                  :key="item.kind"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-tooltip content="Description" effect="light" popper-class="warning">
                <i class="iconset icon-warning"></i>
              </el-tooltip>
            </el-form-item>
            <el-checkbox v-model="ruleForm.reviceView">정정 신고 가능 리포트만 보기</el-checkbox>
            <ul class="list mark inline">
              <li>정정 신고란?</li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="btn">
        <el-button type="primary" size="medium" icon="iconset icon-search">검색</el-button>
      </div>
    </div>
  </el-form>
  <!-- //search -->
  <!-- table list -->
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
        <div class="sorting">
          <a href="#none" class="on">최신순</a>
          <a href="#none">과거순</a>
        </div>
        <el-select v-model="viewList" placeholder="선택">
          <el-option
            v-for="item in optionsViewList"
            :key="item.viewList"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="month1" label="신고 월"></el-table-column>
      <el-table-column prop="month2" label="사용 월"></el-table-column>
      <el-table-column prop="type" label="신고 구분"></el-table-column>
      <el-table-column prop="reporter" label="신고(고객사)"></el-table-column>
      <el-table-column prop="date" label="최종 신고 일자" width="140"></el-table-column>
      <el-table-column prop="status" label="정정 신고 승인 상태" width="170"></el-table-column>
    </el-table>
    <div class="tbl-bottom">
      <el-pagination :page-size="100" layout="size, prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
  <!-- //table list -->
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
        type: "",
        optionsType: [
          {
            label: "신고 월",
            value: "신고 월",
          },
          {
            label: "청구 월",
            value: "청구 월",
          },
        ],
        date1: "",
        date2: "",
        period: "3개월",
        kind: "",
        optionsKind: [
          {
            label: "전체",
            value: "전체",
          },
        ],
        reviceView: true,
      },
      viewList: "100개씩 보기",
      optionsViewList: [
        {
          label: "100개씩 보기",
          value: "100개씩 보기",
        },
      ],
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
  methods: {},
});
</script>
