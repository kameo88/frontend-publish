<template>
  <div class="title-wrap">
    <h2 class="title">1:1 문의</h2>
  </div>
  <div class="guide-box inquire">
    <span class="txt">궁금하신 점을 문의하여 주시면 빠른 시간 내 회신 드리겠습니다.</span>
    <div class="btn"><el-button type="primary" size="medium">문의하기</el-button></div>
  </div>
  <!-- table list -->
  <div class="tbl-wrap">
    <div class="tbl-top">
      <div class="left">
        <span class="sum">총<strong class="num txt-on">180</strong>건</span>
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="number" label="번호" width="80"></el-table-column>
      <el-table-column prop="type" label="문의유형" width="170"></el-table-column>
      <el-table-column prop="title" label="제목" align="left"></el-table-column>
      <el-table-column prop="date1" label="등록일자" width="110"></el-table-column>
      <el-table-column prop="date2" label="답변일자" width="110"></el-table-column>
    </el-table>
    <div class="btn-area">
      <el-button type="secondary">더보기</el-button>
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
      tableData: [
        {
          number: "10",
          type: "정보이용 및 계약",
          title: "시세정보를 이용하여 지수를 산출하고자 합니다.",
          date1: "2021-07-10",
          date2: "2021-07-10",
        },
        {
          number: "9",
          type: "정보이용 및 계약",
          title: "시세정보를 이용하여 지수를 산출하고자 합니다.",
          date1: "2021-07-10",
          date2: "2021-07-10",
        },
        {
          number: "8",
          type: "정보이용 및 계약",
          title: "시세정보를 이용하여 지수를 산출하고자 합니다.",
          date1: "2021-07-10",
          date2: "2021-07-10",
        },
        {
          number: "7",
          type: "정보이용 및 계약",
          title: "시세정보를 이용하여 지수를 산출하고자 합니다.",
          date1: "2021-07-10",
          date2: "2021-07-10",
        },
        {
          number: "6",
          type: "정보이용 및 계약",
          title: "시세정보를 이용하여 지수를 산출하고자 합니다.",
          date1: "2021-07-10",
          date2: "2021-07-10",
        },
        {
          number: "5",
          type: "정보이용 및 계약",
          title: "시세정보를 이용하여 지수를 산출하고자 합니다.",
          date1: "2021-07-10",
          date2: "2021-07-10",
        },
        {
          number: "4",
          type: "정보이용 및 계약",
          title: "시세정보를 이용하여 지수를 산출하고자 합니다.",
          date1: "2021-07-10",
          date2: "2021-07-10",
        },
        {
          number: "3",
          type: "개발가이드 (Spec) 문의",
          title: "계약서상의 계약기간 자동연장이 된 상태에서 계약기간 종료 전에 시세이용 해지가 가능합니까?",
          date1: "2021-07-10",
          date2: "2021-07-10",
        },
        {
          number: "2",
          type: "정보이용 및 계약",
          title: "시세정보를 이용하여 지수를 산출하고자 합니다.",
          date1: "2021-07-10",
          date2: "2021-07-10",
        },
        {
          number: "1",
          type: "정보이용 및 계약",
          title: "시세정보를 이용하여 지수를 산출하고자 합니다.",
          date1: "2021-07-10",
          date2: "2021-07-10",
        },
      ],
    };
  },
  methods: {},
});
</script>

<style scoped></style>
