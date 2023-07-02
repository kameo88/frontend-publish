<template>
  <div class="title-wrap">
    <h2 class="title">임시정지 신청 현황</h2>
    <div class="btn">
      <el-button size="small" class="orange" icon="iconset icon-write">임시정지 신청</el-button>
    </div>
  </div>
  <div class="guide-desc">임시정지를 요청하신 신고사항을 확인하실 수 있습니다.</div>
  <!-- search -->
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
    <div class="search-wrap">
      <div class="search-area">
        <dl>
          <dt class="label">진행 현황</dt>
          <dd class="items">
            <el-form-item prop="status">
              <el-select v-model="ruleForm.status" placeholder="선택하세요.">
                <el-option
                  v-for="item in ruleForm.optionsStatus"
                  :key="item.status"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-tooltip content="Description" effect="light" popper-class="warning">
                <i class="iconset icon-warning"></i>
              </el-tooltip>
            </el-form-item>
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
      <el-table-column prop="name" label="계약 이름(주문서 유형)" show-overflow-tooltip></el-table-column>
      <el-table-column prop="status" label="진행 현황" width="140">
        <template #default="scope">
          <el-tooltip effect="light" popper-class="info">
            <template #content>
              <span
                >반려인 경우만 <br />
                tooltip으로 해당 사유 표기</span
              >
            </template>
            <span>{{ scope.row.status }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="date1" label="신청일" width="150"></el-table-column>
      <el-table-column prop="manager" label="승인 담당자" width="150"></el-table-column>
      <el-table-column prop="date2" label="승인일" width="150"></el-table-column>
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
  name: "SuspensionList",
  setup() {
    return {};
  },
  data() {
    return {
      ruleForm: {
        status: "전체",
        optionsStatus: [
          {
            label: "전체",
            value: "전체",
          },
          {
            label: "임시정지요청",
            value: "임시정지요청",
          },
          {
            label: "승인",
            value: "승인",
          },
          {
            label: "반려",
            value: "반려",
          },
        ],
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
          name: "실시간/외부제공",
          status: "임시정지 요청",
          date1: "2020-10-10",
          manager: "이미자",
          date2: "",
        },
        {
          name: "종가/외부제공",
          status: "승인",
          date1: "2020-10-10",
          manager: "이미자",
          date2: "2020-10-10",
        },
        {
          name: "실시간/외부제공",
          status: "반려",
          date1: "2020-10-10",
          manager: "이미자",
          date2: "2020-10-10",
        },
        {
          name: "실시간/외부제공",
          status: "임시정지 요청",
          date1: "2020-10-10",
          manager: "이미자",
          date2: "",
        },
        {
          name: "종가/외부제공",
          status: "승인",
          date1: "2020-10-10",
          manager: "이미자",
          date2: "2020-10-10",
        },
        {
          name: "실시간/외부제공",
          status: "반려",
          date1: "2020-10-10",
          manager: "이미자",
          date2: "2020-10-10",
        },
        {
          name: "실시간/외부제공",
          status: "임시정지 요청",
          date1: "2020-10-10",
          manager: "이미자",
          date2: "",
        },
        {
          name: "종가/외부제공",
          status: "승인",
          date1: "2020-10-10",
          manager: "이미자",
          date2: "2020-10-10",
        },
        {
          name: "실시간/외부제공",
          status: "반려",
          date1: "2020-10-10",
          manager: "이미자",
          date2: "2020-10-10",
        },
        {
          name: "실시간/외부제공",
          status: "반려",
          date1: "2020-10-10",
          manager: "이미자",
          date2: "2020-10-10",
        },
      ],
    };
  },
  methods: {},
});
</script>
