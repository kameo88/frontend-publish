<template>
  <div class="formsheet-wrap KRX">
    <div class="formsheet-area">
      <!-- title area -->
      <div class="top">
        <div class="logo">KOSCOMDATA</div>
        <div class="order">
          <span class="number">No. KRXDATA2021XXX, </span>
          <span>㈜코스콤 확인 완료 필 2021-09-10 10:20:30</span>
        </div>
        <h2 class="title">증권시세정보 제공 계약 사전확인 신청 (우리증권)</h2>
        <div class="customer">
          <span>고객사명</span>
          <span class="name">우리증권 주식회사</span>
        </div>
      </div>
      <!-- //title area -->
      <!-- table data -->
      <div class="data-area">
        <div class="table sheet">
          <table>
            <caption>
              <strong>정보상품</strong>
            </caption>
            <colgroup>
              <col style="width: 90px" />
              <col />
              <col style="width: 90px" />
              <col style="width: 100px" />
              <col style="width: 145px" />
              <col style="width: 145px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">구분</th>
                <th scope="col">상품명</th>
                <th scope="col">화폐단위</th>
                <th scope="col">이용료(월)</th>
                <th scope="col">제공방식</th>
                <th scope="col">계약 개시일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>신규</td>
                <td class="left">파생상품A/해외/실시간정보/[최종이용]간접/간접수신(정보벤더)</td>
                <td>USD</td>
                <td>1.375</td>
                <td>간접-Refinitiv</td>
                <td>2021-12-25</td>
              </tr>
              <tr>
                <td>신규</td>
                <td class="left">파생상품A/해외/실시간정보/[최종이용]간접/간접수신(정보벤더)</td>
                <td>USD</td>
                <td>1.375</td>
                <td>간접-Refinitiv</td>
                <td>2021-12-25</td>
              </tr>
              <tr class="bold">
                <td></td>
                <td>합계</td>
                <td>USD</td>
                <td>2,750</td>
                <td colspan="2"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="desc-sheet">주) 계약 개시일은 고객사의 사정에 따라 변경 가능</div>
      </div>
      <!-- //table data -->
      <!-- manager info -->
      <div class="bottom">
        <div>(주)코스콤 시장전략부</div>
        <div class="date">2021-09-10</div>
        <dl class="info-manager">
          <dt class="label">담당자</dt>
          <dd class="item">김소연 [연락처 : 002-757-0000, soyeon@koscom.com]</dd>
        </dl>
        <dl class="info-manager">
          <dt class="label">팀장</dt>
          <dd class="item">이명한 팀장</dd>
        </dl>
        <dl class="info-manager">
          <dt class="label">부서장</dt>
          <dd class="item">이명진[결재시점 : 2021-12-25 10:00:00]</dd>
        </dl>
      </div>
      <!-- //manager info -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "KRXTemplateTable1",
  setup() {
    return {};
  },
  data() {
    return {};
  },
  methods: {},
});
</script>
