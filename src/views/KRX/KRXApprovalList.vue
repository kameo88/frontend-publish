<template>
  <div class="title-wrap">
    <h2 class="title">결재 목록</h2>
  </div>
  <!-- search -->
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
    <div class="search-wrap">
      <div class="search-area">
        <dl>
          <dt class="label">일자</dt>
          <dd class="items">
            <el-form-item prop="date1">
              <el-date-picker v-model="ruleForm.date1" placeholder="YYYY-MM-DD"></el-date-picker>
              <el-tooltip content="Description" effect="light" popper-class="warning">
                <i class="iconset icon-warning"></i>
              </el-tooltip>
            </el-form-item>
            <span class="date-bar"></span>
            <el-form-item prop="date2">
              <el-date-picker v-model="ruleForm.date2" placeholder="YYYY-MM-DD"></el-date-picker>
              <el-tooltip content="Description" effect="light" popper-class="warning">
                <i class="iconset icon-warning"></i>
              </el-tooltip>
            </el-form-item>
          </dd>
          <dt class="label">승인 상태</dt>
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
        <dl>
          <dt class="label">결재 종류</dt>
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
          <dt class="label">구분</dt>
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
        </dl>
        <dl>
          <dt class="label">검색 조건</dt>
          <dd class="items">
            <el-form-item prop="searchCondition">
              <el-select v-model="ruleForm.searchCondition" class="w130" placeholder="선택하세요.">
                <el-option
                  v-for="item in ruleForm.optionsSearchCondition"
                  :key="item.searchCondition"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="searchWord">
              <el-input
                v-model="ruleForm.searchWord"
                class="input-krx"
                placeholder="검색어를 입력하세요."
                clearable
              ></el-input>
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
          <span class="sum">총<strong class="num txt-on">180</strong>건</span>
        </div>
      </div>
      <div class="right">
        <el-button size="small">일괄 승인</el-button>
      </div>
    </div>
    <el-table ref="multipleTable" :data="tableData" class="type2" height="477" style="width: 100%">
      <el-table-column type="selection" width="60"></el-table-column>
      <el-table-column prop="docNum" label="문서번호" width="150"></el-table-column>
      <el-table-column prop="title" label="제목" align="left" show-overflow-tooltip></el-table-column>
      <el-table-column prop="kind" label="결재 종류" width="110"></el-table-column>
      <el-table-column prop="type" label="구분" width="80"></el-table-column>
      <el-table-column prop="status" label="승인단계" width="70"></el-table-column>
      <el-table-column prop="writer" label="작성자" width="80"></el-table-column>
      <el-table-column prop="date" label="등록일" width="100"></el-table-column>
      <el-table-column prop="download" width="80">
        <template #header>
          <span>첨부파일</span>
          <span>다운로드</span>
        </template>
        <template #default="scope">
          <div>
            <a href="#none" download class="txt-on">{{ scope.row.download1 }}</a>
          </div>
          <div>
            <a href="#none" download class="txt-on">{{ scope.row.download2 }}</a>
          </div>
          <div>
            <a href="#none" download class="txt-on">{{ scope.row.download3 }}</a>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <!-- //table list -->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "KRXApprovalList",
  setup() {
    return {};
  },
  data() {
    return {
      ruleForm: {
        date1: "",
        date2: "",
        status: "전체",
        optionsStatus: [
          {
            label: "전체",
            value: "전체",
          },
          {
            label: "확인전",
            value: "확인전",
          },
          {
            label: "승인",
            value: "승인",
          },
          {
            label: "반려",
            value: "반려",
          },
          {
            label: "통보",
            value: "통보",
          },
        ],
        kind: "전체",
        optionsKind: [
          {
            label: "전체",
            value: "전체",
          },
          {
            label: "사전확인",
            value: "사전확인",
          },
          {
            label: "체결통보",
            value: "체결통보",
          },
          {
            label: "해지통보",
            value: "해지통보",
          },
          {
            label: "임시정지통보",
            value: "임시정지통보",
          },
        ],
        type: "전체",
        optionsType: [
          {
            label: "전체",
            value: "전체",
          },
          {
            label: "신규",
            value: "신규",
          },
          {
            label: "변경",
            value: "변경",
          },
          {
            label: "해지",
            value: "해지",
          },
          {
            label: "임시정지",
            value: "임시정지",
          },
        ],
        searchCondition: "고객사명",
        optionsSearchCondition: [
          {
            label: "고객사명",
            value: "고객사명",
          },
        ],
        searchWord: "",
      },
      tableData: [
        {
          docNum: "KRXDATA2021000",
          title: "[체결통보] 증권시세정보 제공 변경 계약 삼성증권",
          kind: "임시정지통보",
          type: "임시정지",
          status: "확인 전",
          writer: "김소연",
          date: "2021-10-10",
          download1: "요약문서",
          download2: "주문서",
          download3: "첨부파일",
        },
        {
          docNum: "KRXDATA2021000",
          title: "[체결통보] 증권시세정보 제공 변경 계약 삼성증권",
          kind: "임시정지통보",
          type: "임시정지",
          status: "확인 전",
          writer: "김소연",
          date: "2021-10-10",
          download1: "요약문서",
          download2: "",
          download3: "첨부파일",
        },
        {
          docNum: "KRXDATA2021000",
          title: "[체결통보] 증권시세정보 제공 변경 계약 삼성증권",
          kind: "임시정지통보",
          type: "임시정지",
          status: "확인 전",
          writer: "김소연",
          date: "2021-10-10",
          download1: "",
          download2: "",
          download3: "첨부파일",
        },
        {
          docNum: "KRXDATA2021000",
          title: "[체결통보] 증권시세정보 제공 변경 계약 삼성증권",
          kind: "임시정지통보",
          type: "임시정지",
          status: "확인 전",
          writer: "김소연",
          date: "2021-10-10",
          download1: "요약문서",
          download2: "주문서",
          download3: "첨부파일",
        },
        {
          docNum: "KRXDATA2021000",
          title: "[체결통보] 증권시세정보 제공 변경 계약 삼성증권",
          kind: "임시정지통보",
          type: "임시정지",
          status: "확인 전",
          writer: "김소연",
          date: "2021-10-10",
          download1: "요약문서",
          download2: "",
          download3: "첨부파일",
        },
        {
          docNum: "KRXDATA2021000",
          title: "[체결통보] 증권시세정보 제공 변경 계약 삼성증권",
          kind: "임시정지통보",
          type: "임시정지",
          status: "확인 전",
          writer: "김소연",
          date: "2021-10-10",
          download1: "요약문서",
          download2: "",
          download3: "첨부파일",
        },
        {
          docNum: "KRXDATA2021000",
          title: "[체결통보] 증권시세정보 제공 변경 계약 삼성증권",
          kind: "임시정지통보",
          type: "임시정지",
          status: "확인 전",
          writer: "김소연",
          date: "2021-10-10",
          download1: "",
          download2: "",
          download3: "첨부파일",
        },
        {
          docNum: "KRXDATA2021000",
          title: "[체결통보] 증권시세정보 제공 변경 계약 삼성증권",
          kind: "임시정지통보",
          type: "임시정지",
          status: "확인 전",
          writer: "김소연",
          date: "2021-10-10",
          download1: "요약문서",
          download2: "주문서",
          download3: "첨부파일",
        },
        {
          docNum: "KRXDATA2021000",
          title: "[체결통보] 증권시세정보 제공 변경 계약 삼성증권",
          kind: "임시정지통보",
          type: "임시정지",
          status: "확인 전",
          writer: "김소연",
          date: "2021-10-10",
          download1: "요약문서",
          download2: "",
          download3: "첨부파일",
        },
        {
          docNum: "KRXDATA2021000",
          title: "[체결통보] 증권시세정보 제공 변경 계약 삼성증권",
          kind: "임시정지통보",
          type: "임시정지",
          status: "확인 전",
          writer: "김소연",
          date: "2021-10-10",
          download1: "",
          download2: "",
          download3: "첨부파일",
        },
      ],
    };
  },
  methods: {},
});
</script>
