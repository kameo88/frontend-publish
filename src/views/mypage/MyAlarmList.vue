<template>
  <div class="title-wrap">
    <h2 class="title">나의 알림</h2>
  </div>
  <div class="guide-box inquire">
    <span class="txt">알림 서비스를 확인하실 수 있습니다.</span>
  </div>
  <!-- no Data -->
  <div class="result-box">
    <div class="no-data"></div>
    <div class="desc">나의 알림이 없습니다.</div>
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
    <el-table :data="tableData" class="type2" style="width: 100%">
      <el-table-column prop="number" label="번호" width="80"></el-table-column>
      <el-table-column prop="type" label="구분" width="120"></el-table-column>
      <el-table-column prop="title" label="제목" align="left" width="210"></el-table-column>
      <el-table-column prop="contents" label="내용" align="left"></el-table-column>
      <el-table-column prop="date" label="알림 일자" width="110"></el-table-column>
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
          type: "회원가입",
          title: "임시비밀번호 발송",
          contents: "임시비밀번호가 발송되었습니다. 비밀번호 확인 후 로그인해 주세요. ",
          date: "2021-07-10",
        },
        {
          number: "9",
          type: "공지사항",
          title: "공지사항 안내",
          contents: "공지사항이 등록되었습니다. 내용을 확인해주세요. ",
          date: "2021-07-10",
        },
        {
          number: "8",
          type: "회원가입",
          title: "임시비밀번호 발송",
          contents: "임시비밀번호가 발송되었습니다. 비밀번호 확인 후 로그인해 주세요. ",
          date: "2021-07-10",
        },
        {
          number: "7",
          type: "공지사항",
          title: "공지사항 안내",
          contents: "공지사항이 등록되었습니다. 내용을 확인해주세요. ",
          date: "2021-07-10",
        },
        {
          number: "6",
          type: "회원가입",
          title: "임시비밀번호 발송",
          contents: "임시비밀번호가 발송되었습니다. 비밀번호 확인 후 로그인해 주세요. ",
          date: "2021-07-10",
        },
        {
          number: "5",
          type: "공지사항",
          title: "공지사항 안내",
          contents: "공지사항이 등록되었습니다. 내용을 확인해주세요. ",
          date: "2021-07-10",
        },
        {
          number: "4",
          type: "회원가입",
          title: "임시비밀번호 발송",
          contents: "임시비밀번호가 발송되었습니다. 비밀번호 확인 후 로그인해 주세요. ",
          date: "2021-07-10",
        },
        {
          number: "3",
          type: "공지사항",
          title: "공지사항 안내",
          contents: "공지사항이 등록되었습니다. 내용을 확인해주세요. ",
          date: "2021-07-10",
        },
        {
          number: "2",
          type: "회원가입",
          title: "임시비밀번호 발송",
          contents: "임시비밀번호가 발송되었습니다. 비밀번호 확인 후 로그인해 주세요. ",
          date: "2021-07-10",
        },
        {
          number: "1",
          type: "공지사항",
          title: "공지사항 안내",
          contents: "공지사항이 등록되었습니다. 내용을 확인해주세요. ",
          date: "2021-07-10",
        },
      ],
    };
  },
  methods: {},
});
</script>
