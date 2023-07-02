<template>
  <div class="formsheet-wrap KRX">
    <div class="formsheet-area">
      <!-- table data -->
      <!-- 신규 table -->
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
            <col style="width: 115px" />
            <col style="width: 115px" />
            <col style="width: 115px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">구분</th>
              <th scope="col">상품명</th>
              <th scope="col">화폐단위</th>
              <th scope="col">이용료(월)</th>
              <th scope="col">제공방식</th>
              <th scope="col">계약적용일</th>
              <th scope="col">사전확인신청</th>
              <th scope="col">사전확인통보</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>신규</td>
              <td class="left">파생상품A/해외/실시간정보/[최종이용]간접/간접수신(정보벤더)</td>
              <td>USD</td>
              <td>2,750</td>
              <td>간접-Refinitiv</td>
              <td>2021-12-25</td>
              <td>2021-12-25</td>
              <td>2021-12-25</td>
            </tr>
            <tr>
              <td>신규</td>
              <td class="left">파생상품A/해외/실시간정보/[최종이용]간접/간접수신(정보벤더)</td>
              <td>USD</td>
              <td>2,750</td>
              <td>간접-Refinitiv</td>
              <td>2021-12-25</td>
              <td>2021-12-25</td>
              <td>2021-12-25</td>
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
      <div class="desc-sheet">주) 추가 내용</div>
      <!-- //신규 table -->
      <!-- 해지 table -->
      <div class="table sheet mt-xxl">
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
            <col style="width: 115px" />
            <col style="width: 130px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">구분</th>
              <th scope="col">상품명</th>
              <th scope="col">화폐단위</th>
              <th scope="col">이용료(월)</th>
              <th scope="col">제공방식</th>
              <th scope="col">계약적용일</th>
              <th scope="col">사유</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>해지</td>
              <td class="left">파생상품A/해외/실시간정보/[최종이용]간접/간접수신(정보벤더)</td>
              <td>USD</td>
              <td>2,750</td>
              <td>간접-Refinitiv</td>
              <td>2021-12-25</td>
              <td class="left">해지 사유</td>
            </tr>
            <tr class="bold">
              <td></td>
              <td>합계</td>
              <td>USD</td>
              <td>2,750</td>
              <td colspan="3"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="desc-sheet">주) 추가 내용</div>
      <!-- //해지 table -->
      <!-- //table data -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "KRXTemplateTable2",
  setup() {
    return {};
  },
  data() {
    return {};
  },
  methods: {},
});
</script>
