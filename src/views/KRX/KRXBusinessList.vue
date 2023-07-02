<template>
  <div class="title-wrap">
    <h2 class="title">영업현황 조회</h2>
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
          <dt class="label">고객사 대분류</dt>
          <dd class="items">
            <el-form-item prop="customerKind1">
              <el-select v-model="ruleForm.customerKind1" placeholder="선택하세요.">
                <el-option
                  v-for="item in ruleForm.optionsCustomerKind1"
                  :key="item.customerKind1"
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
            <el-form-item prop="customerKind2">
              <el-select v-model="ruleForm.customerKind2" placeholder="선택하세요.">
                <el-option
                  v-for="item in ruleForm.optionsCustomerKind2"
                  :key="item.customerKind2"
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
      <el-table-column fixed prop="month" label="청구년월" width="80"></el-table-column>
      <el-table-column fixed prop="marketKind1" label="시장대분류" width="80" show-overflow-tooltip></el-table-column>
      <el-table-column fixed prop="marketKind2" label="시장소분류" width="100"></el-table-column>
      <el-table-column fixed prop="optionName" label="옵션명" width="130" show-overflow-tooltip></el-table-column>
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
      <el-table-column fixed prop="kind1" label="대분류" width="70"></el-table-column>
      <el-table-column fixed prop="kind2" label="중분류" width="100"></el-table-column>
      <el-table-column prop="billingCycle" label="청구주기" width="80"></el-table-column>
      <el-table-column prop="api" width="80">
        <template #header>
          <span>코스콤</span>
          <span>오픈API</span>
          <span>이용</span>
        </template>
      </el-table-column>
      <el-table-column prop="manage" width="80">
        <template #header>
          <span>사무관리</span>
          <span>업무이용</span>
        </template>
      </el-table-column>
      <el-table-column prop="PB" label="PB여부" width="80"></el-table-column>
      <el-table-column label="기준시점">
        <el-table-column prop="realTime" label="실시간" width="60"></el-table-column>
        <el-table-column prop="delaiy" label="지연" width="60"></el-table-column>
        <el-table-column prop="batch" label="Batch" width="60"></el-table-column>
      </el-table-column>
      <el-table-column label="라이선스">
        <el-table-column label="외부">
          <el-table-column prop="general" label="일반" width="60"></el-table-column>
          <el-table-column prop="retail" label="소매전용" width="60"></el-table-column>
          <el-table-column prop="web" label="웹정액제" width="60"></el-table-column>
          <el-table-column prop="broadcast" label="방송전용" width="60"></el-table-column>
          <el-table-column prop="etc1" label="기타" width="60"></el-table-column>
        </el-table-column>
        <el-table-column prop="last" label="최종" width="60"></el-table-column>
      </el-table-column>
      <el-table-column label="분배방식">
        <el-table-column label="직접">
          <el-table-column label="UDP">
            <el-table-column prop="UDP1" label="직접" width="60"></el-table-column>
            <el-table-column prop="UDP2" label="준직접" width="60"></el-table-column>
          </el-table-column>
          <el-table-column prop="TCP" label="TCP" width="60"></el-table-column>
          <el-table-column prop="FTP" label="FTP" width="60"></el-table-column>
          <el-table-column prop="etc2" label="기타" width="60"></el-table-column>
        </el-table-column>
        <el-table-column prop="indirect" label="간접" width="60"></el-table-column>
      </el-table-column>
      <el-table-column prop="additional" label="추가수신" width="60"></el-table-column>
      <el-table-column prop="nonDisplay" label="비조회형" width="60"></el-table-column>
      <el-table-column label="관계사확장">
        <el-table-column prop="relation1" label="실시간" width="60"></el-table-column>
        <el-table-column prop="relation2" label="종가" width="60"></el-table-column>
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
        customerKind1: "",
        optionsCustomerKind1: [
          {
            label: "전체",
            value: "전체",
          },
        ],
        customerKind2: "",
        optionsCustomerKind2: [
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
            label: "옵션명",
            value: "옵션명",
          },
        ],
        searchWord: "",
      },
      tableData: [
        {
          month: "2020-06",
          marketKind1: "주식",
          marketKind2: "증권A",
          optionName: "증권A/국내/실시간정보/[외부제공]일반용_증권선물사용/UDP(서울_서울)",
          billingCode: "10000047",
          billingName: "이미숙",
          kind1: "국내",
          kind2: "회원사_증권",
          billingCycle: "월",
          api: "",
          manage: "",
          PB: "",
          realTime: "○",
          delaiy: "",
          batch: "",
          general: "○",
          retail: "",
          web: "",
          broadcast: "",
          etc1: "",
          last: "",
          UDP1: "○",
          UDP2: "",
          TCP: "",
          FTP: "○",
          etc2: "",
          indirect: "",
          additional: "",
          nonDisplay: "○",
          relation1: "",
          relation2: "○",
        },
        {
          month: "2020-06",
          marketKind1: "주식",
          marketKind2: "증권A",
          optionName: "증권A/국내/실시간정보/[외부제공]일반용_증권선물사용/UDP(서울_서울)",
          billingCode: "10000047",
          billingName: "이미숙",
          kind1: "국내",
          kind2: "회원사_증권",
          billingCycle: "월",
          api: "",
          manage: "",
          PB: "",
          realTime: "○",
          delaiy: "",
          batch: "",
          general: "○",
          retail: "",
          web: "",
          broadcast: "",
          etc1: "",
          last: "",
          UDP1: "○",
          UDP2: "",
          TCP: "",
          FTP: "○",
          etc2: "",
          indirect: "",
          additional: "",
          nonDisplay: "○",
          relation1: "",
          relation2: "○",
        },
        {
          month: "2020-06",
          marketKind1: "주식",
          marketKind2: "증권A",
          optionName: "증권A/국내/실시간정보/[외부제공]일반용_증권선물사용/UDP(서울_서울)",
          billingCode: "10000047",
          billingName: "이미숙",
          kind1: "국내",
          kind2: "회원사_증권",
          billingCycle: "월",
          api: "",
          manage: "",
          PB: "",
          realTime: "○",
          delaiy: "",
          batch: "",
          general: "○",
          retail: "",
          web: "",
          broadcast: "",
          etc1: "",
          last: "",
          UDP1: "○",
          UDP2: "",
          TCP: "",
          FTP: "○",
          etc2: "",
          indirect: "",
          additional: "",
          nonDisplay: "○",
          relation1: "",
          relation2: "○",
        },
        {
          month: "2020-06",
          marketKind1: "주식",
          marketKind2: "증권A",
          optionName: "증권A/국내/실시간정보/[외부제공]일반용_증권선물사용/UDP(서울_서울)",
          billingCode: "10000047",
          billingName: "이미숙",
          kind1: "국내",
          kind2: "회원사_증권",
          billingCycle: "월",
          api: "",
          manage: "",
          PB: "",
          realTime: "○",
          delaiy: "",
          batch: "",
          general: "○",
          retail: "",
          web: "",
          broadcast: "",
          etc1: "",
          last: "",
          UDP1: "○",
          UDP2: "",
          TCP: "",
          FTP: "○",
          etc2: "",
          indirect: "",
          additional: "",
          nonDisplay: "○",
          relation1: "",
          relation2: "○",
        },
        {
          month: "2020-06",
          marketKind1: "주식",
          marketKind2: "증권A",
          optionName: "증권A/국내/실시간정보/[외부제공]일반용_증권선물사용/UDP(서울_서울)",
          billingCode: "10000047",
          billingName: "이미숙",
          kind1: "국내",
          kind2: "회원사_증권",
          billingCycle: "월",
          api: "",
          manage: "",
          PB: "",
          realTime: "○",
          delaiy: "",
          batch: "",
          general: "○",
          retail: "",
          web: "",
          broadcast: "",
          etc1: "",
          last: "",
          UDP1: "○",
          UDP2: "",
          TCP: "",
          FTP: "○",
          etc2: "",
          indirect: "",
          additional: "",
          nonDisplay: "○",
          relation1: "",
          relation2: "○",
        },
      ],
    };
  },
  methods: {},
});
</script>
