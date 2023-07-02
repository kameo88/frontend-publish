<template>
  <div class="title-wrap">
    <h2 class="title">계약현황 조회</h2>
  </div>
  <!-- search -->
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
    <div class="search-wrap">
      <div class="search-area">
        <dl>
          <dt class="label">청구 년월</dt>
          <dd class="items">
            <el-form-item prop="month1">
              <el-date-picker type="month" v-model="ruleForm.month1" placeholder="YYYY-MM"></el-date-picker>
              <el-tooltip content="Description" effect="light" popper-class="warning">
                <i class="iconset icon-warning"></i>
              </el-tooltip>
            </el-form-item>
            <span class="date-bar"></span>
            <el-form-item prop="month2">
              <el-date-picker type="month" v-model="ruleForm.month2" placeholder="YYYY-MM"></el-date-picker>
              <el-tooltip content="Description" effect="light" popper-class="warning">
                <i class="iconset icon-warning"></i>
              </el-tooltip>
            </el-form-item>
          </dd>
          <dt class="label">시장 대분류</dt>
          <dd class="items">
            <el-form-item prop="marketKind1">
              <el-select v-model="ruleForm.marketKind1" placeholder="선택하세요.">
                <el-option
                  v-for="item in ruleForm.optionsMarketKind1"
                  :key="item.marketKind1"
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
          <dt class="label">시장 소분류</dt>
          <dd class="items">
            <el-form-item prop="marketKind2">
              <el-select v-model="ruleForm.marketKind2" placeholder="선택하세요.">
                <el-option
                  v-for="item in ruleForm.optionsMarketKind2"
                  :key="item.marketKind2"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-tooltip content="Description" effect="light" popper-class="warning">
                <i class="iconset icon-warning"></i>
              </el-tooltip>
            </el-form-item>
          </dd>
          <dt class="label">분배</dt>
          <dd class="items">
            <el-form-item prop="division">
              <el-select v-model="ruleForm.division" placeholder="선택하세요.">
                <el-option
                  v-for="item in ruleForm.optionsDivision"
                  :key="item.division"
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
          <dt class="label">고객사 중분류</dt>
          <dd class="items">
            <el-form-item prop="customerKind">
              <el-select v-model="ruleForm.customerKind" placeholder="선택하세요.">
                <el-option
                  v-for="item in ruleForm.optionsCustomerKind"
                  :key="item.customerKind"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-tooltip content="Description" effect="light" popper-class="warning">
                <i class="iconset icon-warning"></i>
              </el-tooltip>
            </el-form-item>
          </dd>
          <dt class="label">청구 주기</dt>
          <dd class="items">
            <el-form-item prop="billingCycle">
              <el-select v-model="ruleForm.billingCycle" placeholder="선택하세요.">
                <el-option
                  v-for="item in ruleForm.optionsBillingCycle"
                  :key="item.billingCycle"
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
        <el-button size="small" icon="iconset icon-down-doc">엑셀 다운로드</el-button>
      </div>
    </div>
    <el-table ref="multipleTable" :data="tableData" class="type2" height="600px" style="width: 100%">
      <el-table-column fixed prop="month" label="청구년월" width="70"></el-table-column>
      <el-table-column fixed prop="marketKind1" label="시장대분류" width="80" show-overflow-tooltip></el-table-column>
      <el-table-column fixed prop="marketKind2" label="시장소분류" width="100"></el-table-column>
      <el-table-column fixed prop="division" label="분배" width="60" show-overflow-tooltip></el-table-column>
      <el-table-column fixed prop="productCode" label="상품코드" width="70"></el-table-column>
      <el-table-column fixed prop="productName" label="상품명" width="170"></el-table-column>
      <el-table-column fixed prop="kind1" label="대분류" width="60"></el-table-column>
      <el-table-column fixed prop="kind2" label="중분류" width="80"></el-table-column>
      <el-table-column fixed prop="billingCode" width="80">
        <template #header>
          <span>청구</span>
          <span>고객코드</span>
        </template>
      </el-table-column>
      <el-table-column fixed prop="billingName" width="80">
        <template #header>
          <span>청구</span>
          <span>고객명</span>
        </template>
      </el-table-column>
      <el-table-column prop="baseRate" label="기본료" align="right" width="100"></el-table-column>
      <el-table-column prop="variableRate" label="변동료" align="right" width="100"></el-table-column>
      <el-table-column prop="billingRate" align="right" width="100">
        <template #header>
          <span>사용대가</span>
          <span>대상금액(월)</span>
        </template>
      </el-table-column>
      <el-table-column prop="agency" label="지점수" width="100"></el-table-column>
      <el-table-column prop="liner" label="회선수" width="100"></el-table-column>
      <el-table-column prop="terminals" label="단말수" width="100"></el-table-column>
      <el-table-column prop="account" label="계좌수" width="100"></el-table-column>
      <el-table-column prop="member" label="회원수" width="100"></el-table-column>
      <el-table-column prop="item" label="종목수" width="100"></el-table-column>
      <el-table-column prop="billingCycle" label="청구주기" width="80"></el-table-column>
      <el-table-column prop="type" label="구분" width="80"></el-table-column>
      <el-table-column prop="modifyDate" label="변경일자" width="100"></el-table-column>
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
        month1: "",
        month2: "",
        marketKind1: "",
        optionsMarketKind1: [
          {
            label: "전체",
            value: "전체",
          },
        ],
        marketKind2: "",
        optionsMarketKind2: [
          {
            label: "전체",
            value: "전체",
          },
        ],
        division: "",
        optionsDivision: [
          {
            label: "전체",
            value: "전체",
          },
        ],
        customerKind: "",
        optionsCustomerKind: [
          {
            label: "전체",
            value: "전체",
          },
        ],
        billingCycle: "",
        optionsBillingCycle: [
          {
            label: "전체",
            value: "전체",
          },
        ],
        searchCondition: "청구 고객사명",
        optionsSearchCondition: [
          {
            label: "청구 고객사명",
            value: "청구 고객사명",
          },
          {
            label: "상품명",
            value: "상품명",
          },
        ],
        searchWord: "",
      },
      tableData: [
        {
          month: "2020-06",
          marketKind1: "유가증권",
          marketKind2: "파생상품A",
          division: "실시간",
          productCode: "3009201",
          productName: "코스닥종목별투자자별종가정보/배치/외부_일반",
          kind1: "국내",
          kind2: "정보사업자/언론사",
          billingCode: "10087543",
          billingName: "이미자",
          baseRate: "8,000,000",
          variableRate: "445,222",
          billingRate: "500,000",
          agency: "",
          liner: "",
          terminals: "",
          account: "50,300",
          member: "",
          item: "",
          billingCycle: "월",
          type: "신규",
          modifyDate: "2021-10-10",

          relation2: "○",
        },
        {
          month: "2020-06",
          marketKind1: "유가증권",
          marketKind2: "파생상품A",
          division: "실시간",
          productCode: "3009201",
          productName: "코스닥종목별투자자별종가정보/배치/외부_일반",
          kind1: "국내",
          kind2: "정보사업자/언론사",
          billingCode: "10087543",
          billingName: "이미자",
          baseRate: "8,000,000",
          variableRate: "445,222",
          billingRate: "500,000",
          agency: "",
          liner: "",
          terminals: "",
          account: "50,300",
          member: "",
          item: "",
          billingCycle: "월",
          type: "신규",
          modifyDate: "2021-10-10",

          relation2: "○",
        },
        {
          month: "2020-06",
          marketKind1: "유가증권",
          marketKind2: "파생상품A",
          division: "실시간",
          productCode: "3009201",
          productName: "코스닥종목별투자자별종가정보/배치/외부_일반",
          kind1: "국내",
          kind2: "정보사업자/언론사",
          billingCode: "10087543",
          billingName: "이미자",
          baseRate: "8,000,000",
          variableRate: "445,222",
          billingRate: "500,000",
          agency: "",
          liner: "",
          terminals: "",
          account: "50,300",
          member: "",
          item: "",
          billingCycle: "월",
          type: "신규",
          modifyDate: "2021-10-10",

          relation2: "○",
        },
        {
          month: "2020-06",
          marketKind1: "유가증권",
          marketKind2: "파생상품A",
          division: "배치",
          productCode: "3009201",
          productName: "코스닥종목별투자자별종가정보/배치/외부_일반",
          kind1: "국내",
          kind2: "정보사업자/언론사",
          billingCode: "10087543",
          billingName: "이미자",
          baseRate: "8,000,000",
          variableRate: "445,222",
          billingRate: "500,000",
          agency: "",
          liner: "",
          terminals: "",
          account: "50,300",
          member: "",
          item: "",
          billingCycle: "월",
          type: "해지",
          modifyDate: "2021-10-10",

          relation2: "○",
        },
        {
          month: "2020-06",
          marketKind1: "유가증권",
          marketKind2: "파생상품A",
          division: "실시간",
          productCode: "3009201",
          productName: "코스닥종목별투자자별종가정보/배치/외부_일반",
          kind1: "국내",
          kind2: "정보사업자/언론사",
          billingCode: "10087543",
          billingName: "이미자",
          baseRate: "8,000,000",
          variableRate: "445,222",
          billingRate: "500,000",
          agency: "",
          liner: "",
          terminals: "",
          account: "50,300",
          member: "",
          item: "",
          billingCycle: "월",
          type: "신규",
          modifyDate: "2021-10-10",

          relation2: "○",
        },
      ],
    };
  },
  methods: {},
});
</script>
