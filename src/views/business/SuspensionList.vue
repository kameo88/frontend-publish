<template>
  <div class="title-wrap">
    <h2 class="title">임시정지 신청 현황</h2>
    <div class="btn">
      <el-button size="small" class="orange" icon="iconset icon-write">임시정지 신청</el-button>
    </div>
  </div>
  <div class="guide-desc">임시정지를 요청하신 신고사항을 확인하실 수 있습니다.</div>
  <!-- no Data -->
  <div class="result-box type2">
    <div class="no-data"></div>
    <div class="desc">등록된 임시정지 신청서가 없습니다.</div>
  </div>
  <!-- //no Data -->
  <!-- 임시정지 신청 현황 1 -->
  <div class="border-box biz">
    <div class="title-area">
      <h3 class="title">실시간/종가/외부제공/증권선물사용_외자계</h3>
    </div>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-status"></i>
        <span>진행현황</span>
      </dt>
      <dd class="items">임시저장 요청</dd>
    </dl>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-application"></i>
        <span>신청일</span>
      </dt>
      <dd class="items">2021-10-10</dd>
    </dl>
    <dl class="list manager">
      <dt class="label">
        <i class="iconset icon-biz-approver"></i>
        <span>승인 담당자</span>
      </dt>
      <dd class="items">이나영</dd>
    </dl>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-approval"></i>
        <span>승인일</span>
      </dt>
      <dd class="items">-</dd>
    </dl>
    <div class="btn-more">
      <el-button class="icon"><i class="iconset icon-detail">상세보기</i></el-button>
    </div>
  </div>
  <!-- 임시정지 신청 현황 2 -->
  <div class="border-box biz">
    <div class="title-area">
      <h3 class="title">실시간/종가/외부제공/증권선물사용_외자계</h3>
    </div>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-status"></i>
        <span>진행현황</span>
      </dt>
      <dd class="items">
        반려
        <el-tooltip effect="light" popper-class="info">
          <template #content>
            <span
              >반려인 경우만 <br />
              tooltip으로 해당 사유 표기</span
            >
          </template>
          <i class="iconset icon-help-warning">도움말</i>
        </el-tooltip>
      </dd>
    </dl>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-application"></i>
        <span>신청일</span>
      </dt>
      <dd class="items">2021-10-10</dd>
    </dl>
    <dl class="list manager">
      <dt class="label">
        <i class="iconset icon-biz-approver"></i>
        <span>승인 담당자</span>
      </dt>
      <dd class="items">이나영</dd>
    </dl>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-approval"></i>
        <span>승인일</span>
      </dt>
      <dd class="items">2021-10-11</dd>
    </dl>
    <div class="btn-more">
      <el-button class="icon"><i class="iconset icon-detail">상세보기</i></el-button>
    </div>
  </div>
  <!-- 임시정지 신청 현황 3 -->
  <div class="border-box biz">
    <div class="title-area">
      <h3 class="title">실시간/종가/외부제공/증권선물사용_외자계</h3>
    </div>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-status"></i>
        <span>진행현황</span>
      </dt>
      <dd class="items">승인</dd>
    </dl>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-application"></i>
        <span>신청일</span>
      </dt>
      <dd class="items">2021-10-10</dd>
    </dl>
    <dl class="list manager">
      <dt class="label">
        <i class="iconset icon-biz-approver"></i>
        <span>승인 담당자</span>
      </dt>
      <dd class="items">이나영</dd>
    </dl>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-approval"></i>
        <span>승인일</span>
      </dt>
      <dd class="items">2021-10-20</dd>
    </dl>
    <div class="btn-more">
      <el-button class="icon"><i class="iconset icon-detail">상세보기</i></el-button>
    </div>
  </div>
  <!-- //임시정지 신청 현황 -->
  <div class="btn-area">
    <el-button type="info">더보기</el-button>
  </div>
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
