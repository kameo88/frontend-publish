<template>
  <div class="formsheet-wrap KRX">
    <div class="formsheet-area">
      <!-- table data -->
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
            <col style="width: 130px" />
            <col style="width: 130px" />
            <col style="width: 150px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">구분</th>
              <th scope="col">상품명</th>
              <th scope="col">화폐단위</th>
              <th scope="col">이용료(월)</th>
              <th scope="col">제공방식</th>
              <th scope="col">임시정지 시작일</th>
              <th scope="col">임시정지 종료일</th>
              <th scope="col">임시정지 사유</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>임시정지</td>
              <td class="left">파생상품A/해외/실시간정보/[최종이용]간접/간접수신(정보벤더)</td>
              <td>USD</td>
              <td>2,750</td>
              <td>간접-Refinitiv</td>
              <td>2021-12-25</td>
              <td>2021-12-25</td>
              <td class="left">고객사 내부 시스템 개발</td>
            </tr>
            <tr class="bold">
              <td></td>
              <td>합계</td>
              <td>USD</td>
              <td>2,750</td>
              <td colspan="4"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //table data -->
      <div class="desc-sheet">주) 추가 내용</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "KRXTemplateTable3",
  setup() {
    return {};
  },
  data() {
    return {};
  },
  methods: {},
});
</script>
