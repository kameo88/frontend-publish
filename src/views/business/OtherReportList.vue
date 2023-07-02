<template>
  <div class="title-wrap">
    <h2 class="title">기타 신고 변경 현황</h2>
    <div class="btn">
      <el-button size="small" class="orange" icon="iconset icon-write">기타신고사항 변경</el-button>
    </div>
  </div>
  <div class="guide-desc">변경 요청하신 기타 신고 사항을 확인하실 수 있습니다.</div>
  <!-- search -->
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
    <div class="search-wrap">
      <div class="search-area col-2">
        <dl>
          <dt class="label">신청 구분</dt>
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
              <el-tooltip content="Description" effect="light" popper-class="warning">
                <i class="iconset icon-warning"></i>
              </el-tooltip>
            </el-form-item>
          </dd>
          <dt class="label">신고 유형</dt>
          <dd class="items">
            <el-form-item prop="kind">
              <el-select v-model="ruleForm.kind" placeholder="선택하세요.">
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
      <el-table-column prop="name" label="계약 이름(주문서 유형)"></el-table-column>
      <el-table-column prop="items" label="변경 요청 항목">
        <template #default="scope">
          <el-tooltip effect="light" popper-class="info">
            <template #content>
              <span>데이터피드, 연락처, 기술대리인, 관계사 중 해당 항목 표기</span>
            </template>
            <span>{{ scope.row.items }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
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
      <el-table-column prop="date1" label="변경 요청일" width="170"></el-table-column>
      <el-table-column prop="manager" label="승인 담당자" width="140"></el-table-column>
      <el-table-column prop="date2" label="승인일" width="170"></el-table-column>
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
        type: "전체",
        optionsType: [
          {
            label: "전체",
            value: "전체",
          },
          {
            label: "데이터피드",
            value: "데이터피드",
          },
          {
            label: "연락처",
            value: "연락처",
          },
          {
            label: "기술대리인",
            value: "기술대리인",
          },
          {
            label: "관계사",
            value: "관계사",
          },
        ],
        kind: "전체",
        optionsKind: [
          {
            label: "전체",
            value: "전체",
          },
          {
            label: "변경 요청",
            value: "변경 요청",
          },
          {
            label: "승인 완료",
            value: "승인 완료",
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
          items: "관계사",
          status: "변경 요청",
          date1: "2020-10-10",
          manager: "이미자",
          date2: "2020-10-10",
        },
        {
          name: "실시간/외부제공",
          items: "데이터피드외 3건",
          status: "반려",
          date1: "2020-10-10",
          manager: "이미자",
          date2: "2020-10-10",
        },
        {
          name: "실시간/외부제공",
          items: "관계사",
          status: "변경 요청",
          date1: "2020-10-10",
          manager: "이미자",
          date2: "2020-10-10",
        },
        {
          name: "실시간/외부제공",
          items: "데이터피드외 3건",
          status: "변경 요청",
          date1: "2020-10-10",
          manager: "이미자",
          date2: "2020-10-10",
        },
        {
          name: "실시간/외부제공",
          items: "관계사",
          status: "변경 요청",
          date1: "2020-10-10",
          manager: "이미자",
          date2: "2020-10-10",
        },
        {
          name: "실시간/외부제공",
          items: "데이터피드외 3건",
          status: "변경 요청",
          date1: "2020-10-10",
          manager: "이미자",
          date2: "2020-10-10",
        },
        {
          name: "실시간/외부제공",
          items: "관계사",
          status: "변경 요청",
          date1: "2020-10-10",
          manager: "이미자",
          date2: "2020-10-10",
        },
        {
          name: "실시간/외부제공",
          items: "데이터피드외 3건",
          status: "변경 요청",
          date1: "2020-10-10",
          manager: "이미자",
          date2: "2020-10-10",
        },
        {
          name: "종가/최종이용",
          items: "기술대리인",
          status: "변경 완료",
          date1: "2020-10-10",
          manager: "이미자",
          date2: "2020-10-10",
        },
        {
          name: "실시간/외부제공",
          items: "데이터피드외 3건",
          status: "변경 요청",
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
