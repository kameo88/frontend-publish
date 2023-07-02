<template>
  <div class="title-wrap">
    <h2 class="title">오시는 길</h2>
  </div>
  <div class="cnts-common">
    <div class="img-area map"></div>
    <div class="title-wrap sub"><h3 class="title">주소 및 연락처</h3></div>
    <div class="tbl-box">
      <dl>
        <dt class="label">주소</dt>
        <dd class="items">
          <div class="txt-area">
            <span class="info-label orange">본사</span>
            <span class="txt">07329 서울시 영등포구 여의나루로 76 (여의도동) 코스콤</span>
          </div>
        </dd>
      </dl>
      <dl>
        <dt class="label">대표번호</dt>
        <dd class="items">02-767-7114</dd>
      </dl>
      <dl>
        <dt class="label">교통</dt>
        <dd class="items">
          <div class="txt-area">
            <span class="info-label">지하철</span>
            <span class="txt">
              <span class="subway line5">5</span>
              <span class="subway line9">9</span>
              여의도역 5번 출구
            </span>
          </div>
          <div class="txt-area">
            <span class="info-label">버스</span>
            <span class="txt">
              <span class="line">[거래소정문 앞] 88, 300, 600, 700, 753, 5012, 5713, 6628, 7613, M7613, M7625</span>
              <span class="line">[거래소 건너편] 162, 753, 5012, 5610, 6513</span>
            </span>
          </div>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Map",
  setup() {
    return {};
  },
  data() {
    return {};
  },
  methods: {},
});
</script>
