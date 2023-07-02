<template>
  <div class="title-wrap">
    <h2 class="title">공지사항</h2>
  </div>
  <!-- search -->
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
    <div class="search-wrap single">
      <el-form-item prop="searchCategory" class="inline">
        <el-select v-model="ruleForm.searchCategory" placeholder="선택">
          <el-option
            v-for="item in ruleForm.optionsSearchCategory"
            :key="item.searchCategory"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="searchWord" class="inline full">
        <el-input v-model="ruleForm.searchWord" placeholder="검색어를 입력하세요." clearable></el-input>
      </el-form-item>
      <el-button type="primary" size="medium" icon="iconset icon-search">검색</el-button>
    </div>
  </el-form>
  <!-- //search -->
  <!-- no Data -->
  <div class="result-box">
    <div class="no-data"></div>
    <div class="desc">등록된 공지사항이 없습니다.</div>
  </div>
  <!-- //no Data -->
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
      <el-table-column prop="number" label="번호" width="80"></el-table-column>
      <el-table-column prop="category" label="카테고리" width="120"></el-table-column>
      <el-table-column prop="title" label="제목" align="left"></el-table-column>
      <el-table-column prop="date" label="등록일" width="120"></el-table-column>
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
        searchCategory: "전체",
        optionsSearchCategory: [
          {
            label: "전체",
            value: "전체",
          },
        ],
        searchWorld: "",
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
          number: "10",
          category: "시스템공지",
          title: "[서비스 긴급점검] 2021년 10월 10일 긴급점검을 실시합니다.",
          date: "2021.10.10",
        },
        {
          number: "9",
          category: "일반공지",
          title: "일반공지사항 제목이 표시 됩니다.",
          date: "2021.10.10",
        },
        {
          number: "8",
          category: "시스템공지",
          title: "[서비스 긴급점검] 2021년 10월 10일 긴급점검을 실시합니다.",
          date: "2021.10.10",
        },
        {
          number: "7",
          category: "일반공지",
          title: "일반공지사항 제목이 표시 됩니다.",
          date: "2021.10.10",
        },
        {
          number: "6",
          category: "시스템공지",
          title: "[서비스 긴급점검] 2021년 10월 10일 긴급점검을 실시합니다.",
          date: "2021.10.10",
        },
        {
          number: "5",
          category: "일반공지",
          title: "일반공지사항 제목이 표시 됩니다.",
          date: "2021.10.10",
        },
        {
          number: "4",
          category: "시스템공지",
          title: "[서비스 긴급점검] 2021년 10월 10일 긴급점검을 실시합니다.",
          date: "2021.10.10",
        },
        {
          number: "3",
          category: "일반공지",
          title: "일반공지사항 제목이 표시 됩니다.",
          date: "2021.10.10",
        },
        {
          number: "2",
          category: "시스템공지",
          title: "[서비스 긴급점검] 2021년 10월 10일 긴급점검을 실시합니다.",
          date: "2021.10.10",
        },
        {
          number: "1",
          category: "일반공지",
          title: "일반공지사항 제목이 표시 됩니다.",
          date: "2021.10.10",
        },
      ],
    };
  },
  methods: {},
});
</script>
