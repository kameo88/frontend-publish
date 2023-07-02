<template>
  <div class="title-wrap">
    <h2 class="title">Visit Us</h2>
  </div>
  <div class="cnts-common">
    <div class="img-area map en"></div>
    <div class="title-wrap sub"><h3 class="title">Address and Contact Information</h3></div>
    <div class="tbl-box">
      <dl>
        <dt class="label">Address</dt>
        <dd class="items">
          <div class="txt-area">
            <span class="info-label orange">Head Quarter</span>
            <span class="txt">76 Yeouinaru-ro (Yeouido-dong), Yeongdeungpo-gu, Seoul, Korea 07329</span>
          </div>
        </dd>
      </dl>
      <dl>
        <dt class="label">Contact Number</dt>
        <dd class="items">02-767-7114</dd>
      </dl>
      <dl>
        <dt class="label">Transportation</dt>
        <dd class="items">
          <div class="txt-area">
            <span class="info-label">Subway</span>
            <span class="txt">
              <span class="subway line5">5</span>
              <span class="subway line9">9</span>
              Yeouido Station Exit 5
            </span>
          </div>
          <div class="txt-area">
            <span class="info-label">Bus</span>
            <span class="txt">
              <span class="line">
                [In front of the main gate of the Exchange] 88, 300, 600, 700, 753, 5012, 5713, 6628, 7613, M7613, M7625
              </span>
              <span class="line">[Across the Exchange] 162, 753, 5012, 5610, 6513 </span>
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
