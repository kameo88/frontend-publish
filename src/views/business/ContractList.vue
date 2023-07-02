<template>
  <div class="title-wrap">
    <h2 class="title">계약 현황</h2>
  </div>
  <div class="guide-desc">계약 사항을 확인하실 수 있습니다.</div>
  <!-- no Data -->
  <div class="result-box type2">
    <div class="no-data"></div>
    <div class="desc">등록된 계약서가 없습니다.</div>
  </div>
  <!-- //no Data -->
  <!-- 주문서 현황 1 -->
  <div class="border-box biz items-3">
    <div class="title-area">
      <h3 class="title">실시간/종가/외부제공/증권선물사용_외자계</h3>
    </div>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-goods"></i>
        <span>이용상품</span>
      </dt>
      <dd class="items">증권A 외 2개</dd>
    </dl>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-contract"></i>
        <span>계약일자</span>
      </dt>
      <dd class="items">2021-10-10</dd>
    </dl>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-manager"></i>
        <span>계약 담당자</span>
      </dt>
      <dd class="items">이미숙</dd>
    </dl>
    <div class="btn-more">
      <el-button class="icon"><i class="iconset icon-detail">상세보기</i></el-button>
    </div>
  </div>
  <!-- 주문서 현황 2 -->
  <div class="border-box biz items-3">
    <div class="title-area">
      <h3 class="title"><span class="txt-badge gray small">해지</span>실시간/종가/외부제공/증권선물사용_외자계</h3>
    </div>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-goods"></i>
        <span>이용상품</span>
      </dt>
      <dd class="items">증권B 외 2개</dd>
    </dl>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-cancel"></i>
        <span>해지일자</span>
      </dt>
      <dd class="items">2021-10-10</dd>
    </dl>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-manager"></i>
        <span>계약 담당자</span>
      </dt>
      <dd class="items">이미숙</dd>
    </dl>
    <div class="btn-more">
      <el-button class="icon"><i class="iconset icon-detail">상세보기</i></el-button>
    </div>
  </div>
  <!-- 주문서 현황 3 -->
  <div class="border-box biz items-3">
    <div class="title-area">
      <h3 class="title">실시간/종가/외부제공/증권선물사용_외자계</h3>
    </div>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-goods"></i>
        <span>이용상품</span>
      </dt>
      <dd class="items">증권A 외 2개</dd>
    </dl>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-contract"></i>
        <span>계약일자</span>
      </dt>
      <dd class="items">2021-10-10</dd>
    </dl>
    <dl class="list">
      <dt class="label">
        <i class="iconset icon-biz-manager"></i>
        <span>계약 담당자</span>
      </dt>
      <dd class="items">이미숙</dd>
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
