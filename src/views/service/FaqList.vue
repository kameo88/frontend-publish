<template>
  <div class="title-wrap">
    <h2 class="title">FAQ</h2>
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
    <el-collapse v-model="activeName" accordion class="faq-list">
      <el-collapse-item title="[분배] 실시간, 지연의 기준이 궁금합니다." name="1">
        <!-- 질문 -->
        <template #title>
          <i class="iconset icon-question">질문</i>
          <span class="txt-q">[분배] 실시간, 지연의 기준이 궁금합니다.</span>
        </template>
        <!-- //질문 -->
        <!-- 답변 -->
        <i class="iconset icon-answer">답변</i>
        <div class="txt-a">
          정보이용신청서를 작성하시어 접수하시면 정보이용신청이 완료됩니다. <br />
          정보이용신청은 MDCS 홈페이지에서 접수 또는 당사 영업담당자에게 신청서류로 접수가능 합니다.<br />
          승인이 완료된 후 계약서를 작성하면 정보시세이용 계약이 완료됩니다(약 1개월 이내) 최초계약은 계약년도의
          말일자로 계약되며, 이후 별도의 의사표시가 없는 경우 1년씩 자동연장됩니다.
        </div>
        <!-- //답변 -->
      </el-collapse-item>
      <el-collapse-item name="2">
        <!-- 질문 -->
        <template #title>
          <i class="iconset icon-question">질문</i>
          <span class="txt-q">[계약] 전용망(STOCK-NET)과 인터넷망 시세정보는 어떤 차이가 있습니까?</span>
        </template>
        <!-- //질문 -->
        <!-- 답변 -->
        <i class="iconset icon-answer">답변</i>
        <div class="txt-a">
          정보이용신청서를 작성하시어 접수하시면 정보이용신청이 완료됩니다. <br />
          정보이용신청은 MDCS 홈페이지에서 접수 또는 당사 영업담당자에게 신청서류로 접수가능 합니다.<br />
          승인이 완료된 후 계약서를 작성하면 정보시세이용 계약이 완료됩니다(약 1개월 이내) 최초계약은 계약년도의
          말일자로 계약되며, 이후 별도의 의사표시가 없는 경우 1년씩 자동연장됩니다.
        </div>
        <!-- //답변 -->
      </el-collapse-item>
    </el-collapse>
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
      activeName: "1",
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
      viewList: "10개씩 보기",
      optionsViewList: [
        {
          label: "10개씩 보기",
          value: "10개씩 보기",
        },
      ],
    };
  },
  methods: {},
});
</script>
