<template>
  <div class="title-wrap">
    <h2 class="title">임시정지 신청</h2>
  </div>
  <div class="guide-desc">
    <ul class="list dot">
      <li>임시정지 신청을 통해 계약 내 이용상품을 일시적으로 사용을 정지할 수 있습니다.</li>
      <li>정지신청 후 관리자(영업담당자)의 승인 후에 반영됩니다.</li>
      <li>자세한 사항은 담당 영업담당자를 통해서 문의하시면 됩니다.</li>
    </ul>
  </div>
  <!-- 임시정지 신청 양식 -->
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
    <div class="title-wrap sub">
      <h3 class="title">계약서 선택</h3>
    </div>
    <div class="info-box box">
      <dl>
        <dt class="label">계약서 선택</dt>
        <dd class="items">
          <el-form-item prop="contract" class="inline">
            <el-select v-model="ruleForm.contract" placeholder="선택하세요.">
              <el-option
                v-for="item in ruleForm.optionsContract"
                :key="item.contract"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <ul class="list mark inline">
            <li>임시정지를 신청할 계약서를 선택해 주세요.</li>
          </ul>
        </dd>
      </dl>
    </div>
    <!-- 신청 항목 및 기간 -->
    <div class="title-wrap sub">
      <h3 class="title">신청 항목 및 기간 선택</h3>
    </div>
    <div class="tbl-wrap">
      <el-table ref="multipleTable" :data="tableData" class="type2" style="width: 100%">
        <el-table-column type="selection" width="60"></el-table-column>
        <el-table-column prop="name" label="정보상품명" width="200"></el-table-column>
        <el-table-column prop="market" label="대상시장"></el-table-column>
        <el-table-column label="신청기간" width="400">
          <template #default>
            <el-form-item prop="startDate1" class="inline">
              <el-date-picker v-model="ruleForm.startDate1" placeholder="YYYY-MM-DD"></el-date-picker>
              <el-tooltip content="Description" effect="light" popper-class="warning">
                <i class="iconset icon-warning"></i>
              </el-tooltip>
            </el-form-item>
            <span class="date-bar"></span>
            <el-form-item prop="endDate1" class="inline">
              <el-date-picker v-model="ruleForm.endDate1" placeholder="YYYY-MM-DD"></el-date-picker>
              <el-tooltip content="Description" effect="light" popper-class="warning">
                <i class="iconset icon-warning"></i>
              </el-tooltip>
            </el-form-item>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- //신청 항목 및 기간 -->
    <!-- 신청 사유 -->
    <div class="title-wrap sub">
      <h3 class="title">신청 사유</h3>
    </div>
    <div class="textarea-wrap">
      <el-form-item prop="insertDesc1">
        <el-input
          type="textarea"
          v-model="ruleForm.insertDesc1"
          maxlength="200"
          rows="4"
          resize="none"
          placeholder="내용을 입력해주세요."
        ></el-input>
      </el-form-item>
    </div>
    <!-- //신청 사유 -->
  </el-form>
  <!-- button area -->
  <div class="btn-area">
    <el-button class="gray">목록</el-button>
    <el-button class="orange">재설정하기</el-button>
    <el-button type="primary">승인 요청하기</el-button>
  </div>
  <!-- //button area -->
  <!-- //임시정지 신청 양식 -->

  <!-- 임시정지 상세 ; "승인 요청하기" 버튼 클릭 후 -->
  <div class="title-wrap sub">
    <h3 class="title">임시정지 신청 항목</h3>
  </div>
  <div class="info-box box gray">
    <dl>
      <dt class="label">임시정지 대상 계약</dt>
      <dd class="items">
        <span class="txt">실시간/외부제공 (계약이름표시)</span>
      </dd>
      <dt class="label">진행현황</dt>
      <dd class="items">요청 or 승인 or 반려</dd>
    </dl>
  </div>
  <!-- 신청 항목 및 기간 -->
  <div class="title-wrap sub">
    <h3 class="title">신청 대상 항목</h3>
  </div>
  <div class="tbl-wrap">
    <el-table ref="multipleTable" :data="tableData" class="type2" style="width: 100%">
      <el-table-column prop="name" label="정보상품명" width="200"></el-table-column>
      <el-table-column prop="market" label="대상시장"></el-table-column>
      <el-table-column label="신청기간" width="400">
        <template #default="scope">
          <span>{{ scope.row.startDate2 }}</span>
          <span class="date-bar"></span>
          <span>{{ scope.row.endDate2 }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <!-- //신청 항목 및 기간 -->
  <!-- 신청 사유 -->
  <div class="title-wrap sub">
    <h3 class="title">신청 사유</h3>
  </div>
  <div class="info-box box txt">내부 시스템 개편으로 인한 개발 기간이 연장되어 임시정지를 신청합니다.</div>
  <!-- //신청 사유 -->
  <!-- 반려 사유 ; 진행 상황이 반려인 경우-->
  <div class="title-wrap sub">
    <h3 class="title">반려 사유</h3>
  </div>
  <div class="info-box box txt">반려 사유 - 영업사원이 등록한 내용이 보여집니다.</div>
  <!-- //반려 사유 ; 진행 상황이 반려인 경우 -->
  <!-- button area -->
  <div class="btn-area">
    <el-button class="gray">목록</el-button>
  </div>
  <!-- //button area -->
  <!-- //임시정지 상세 ; "승인 요청하기" 버튼 클릭 후 -->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "InsertSuspension",
  setup() {
    return {};
  },
  data() {
    return {
      ruleForm: {
        contract: "",
        optionsContract: [
          {
            label: "계약서1",
            value: "계약서1",
          },
        ],
      },
      tableData: [
        {
          name: "증권A",
          market: "유가증권 주식",
          startDate1: "",
          endDate1: "",
          startDate2: "2021-10-11",
          endDate2: "2021-10-15",
        },
        {
          name: "증권B",
          market: "코스닥시장 주식, 코넥스시장 주식",
          startDate1: "",
          endDate1: "",
          startDate2: "2021-10-11",
          endDate2: "2021-10-15",
        },
        {
          name: "증권C",
          market: "ETF, ETN, ELW",
          startDate1: "",
          endDate1: "",
          startDate2: "2021-10-11",
          endDate2: "2021-10-15",
        },
      ],
    };
  },
  methods: {},
});
</script>
