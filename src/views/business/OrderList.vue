<template>
  <div class="title-wrap">
    <h2 class="title">주문 현황</h2>
  </div>
  <div class="guide-desc">신규 주문서 작성, 주문서 확인 및 변경사항을 확인하실 수 있습니다.</div>
  <!-- no Data -->
  <div class="result-box type2">
    <div class="no-data"></div>
    <div class="desc">등록된 주문서가 없습니다.</div>
  </div>
  <!-- //no Data -->
  <!-- 주문서 현황 1 -->
  <div class="border-box biz">
    <div class="title-area">
      <h3 class="title">실시간/종가/외부제공/증권선물사용_외자계</h3>
    </div>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-type"></i>
        <span>신청구분</span>
      </dt>
      <dd class="items">신규</dd>
    </dl>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-status"></i>
        <span>주문상태</span>
      </dt>
      <dd class="items">접수</dd>
    </dl>
    <dl class="list manager">
      <dt class="label">
        <i class="iconset icon-biz-manager"></i>
        <span>주문서 제공 담당자</span>
      </dt>
      <dd class="items">이나영</dd>
    </dl>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-modify"></i>
        <span>최근 수정일</span>
      </dt>
      <dd class="items">-</dd>
    </dl>
    <div class="btn-more">
      <el-button class="icon"><i class="iconset icon-detail">상세보기</i></el-button>
    </div>
  </div>
  <!-- 주문서 현황 2 -->
  <div class="border-box biz">
    <div class="title-area">
      <h3 class="title">실시간/종가/외부제공/증권선물사용_외자계</h3>
    </div>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-type"></i>
        <span>신청구분</span>
      </dt>
      <dd class="items">신규</dd>
    </dl>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-status"></i>
        <span>주문상태</span>
      </dt>
      <dd class="items">반려</dd>
    </dl>
    <dl class="list manager">
      <dt class="label">
        <i class="iconset icon-biz-manager"></i>
        <span>주문서 제공 담당자</span>
      </dt>
      <dd class="items">이나영</dd>
    </dl>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-modify"></i>
        <span>최근 수정일</span>
      </dt>
      <dd class="items">-</dd>
    </dl>
    <div class="btn-more">
      <el-button class="icon"><i class="iconset icon-detail">상세보기</i></el-button>
    </div>
  </div>
  <!-- 주문서 현황 3 -->
  <div class="border-box biz">
    <div class="title-area">
      <h3 class="title">실시간/종가/외부제공/증권선물사용_외자계</h3>
    </div>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-type"></i>
        <span>신청구분</span>
      </dt>
      <dd class="items">신규</dd>
    </dl>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-status"></i>
        <span>주문상태</span>
      </dt>
      <dd class="items">접수</dd>
    </dl>
    <dl class="list manager">
      <dt class="label">
        <i class="iconset icon-biz-manager"></i>
        <span>주문서 제공 담당자</span>
      </dt>
      <dd class="items">이나영</dd>
    </dl>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-modify"></i>
        <span>최근 수정일</span>
      </dt>
      <dd class="items">2021-10-12</dd>
    </dl>
    <div class="btn-more">
      <el-button class="icon"><i class="iconset icon-detail">상세보기</i></el-button>
    </div>
  </div>
  <!-- //주문서 현황 -->
  <div class="btn-area">
    <el-button type="info">더보기</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ContentLayout",
  setup() {
    return {};
  },
  data() {
    return {};
  },
  methods: {},
});
</script>
