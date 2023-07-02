<template>
  <el-dialog v-model="dialogPrintCover1Visible" custom-class="el-extra-large print">
    <template #title>
      <span class="el-dialog__title">Print Cover Type 1</span>
      <div class="btn">
        <el-button size="small" icon="iconset icon-print" v-print="'#orderFormArea'">프린트</el-button>
      </div>
    </template>
    <div class="orderform-wrap">
      <!-- 프린트 영역 -->
      <div id="orderFormArea" class="orderform-area">
        <div class="page-break">
          <!-- 표지 -->
          <div class="cover-area">
            <div class="title-wrap">
              <h2 class="title">주문서</h2>
            </div>
            <div class="order-number">
              <div class="number-box">
                <strong class="order-title">코스콤 기재</strong>
                <dl>
                  <dt class="label"><strong>주문서 번호</strong></dt>
                  <dd class="item">koscom123456</dd>
                </dl>
              </div>
            </div>
            <div class="desc">
              본 주문서(이하 "주문서")는 아래의 고객사(이하 "고객사")와 주식회사 코스콤(이하 "코스콤") 간 체결하는
              "종가정보이용계약"의 한 부분으로 적용된다.
            </div>
            <!-- 주문 정보 -->
            <div class="order-info">
              <dl>
                <dt class="label">고객사명</dt>
                <dd class="item">우리증권 주식회사</dd>
              </dl>
              <dl>
                <dt class="label">개시일</dt>
                <dd class="item">2010년 10월 10일</dd>
              </dl>
            </div>
            <!-- //주문 정보 -->
            <!-- 승인 정보 table -->
            <div class="table-wrap">
              <div class="table-top">
                <h3 class="table-title">승인</h3>
              </div>
              <div class="table order">
                <table>
                  <caption>
                    <strong>승인 정보</strong>
                  </caption>
                  <colgroup>
                    <col />
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">고객사</th>
                      <th scope="col">코스콤</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="left">
                        <span class="label">이름</span>
                        <span class="item">홍길동</span>
                      </td>
                      <td class="left">
                        <span class="label">이름</span>
                        <span class="item">고길동</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="left">
                        <span class="label">직위</span>
                        <span class="item">대표이사</span>
                      </td>
                      <td class="left">
                        <span class="label">직위</span>
                        <span class="item">전무</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="left">서명</td>
                      <td class="left">서명</td>
                    </tr>
                    <tr>
                      <td class="left">서명일자</td>
                      <td class="left">서명일자</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- //승인 정보 table -->
          </div>
          <!-- //표지 -->
        </div>
        <div class="page-break">next page contents</div>
      </div>
      <!-- 프린트 영역 -->
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import print from "vue3-print-nb";

export default defineComponent({
  name: "Print",
  directives: {
    print,
  },
  setup() {
    return {
      dialogPrintCover1Visible: true,
    };
  },
  methods: {},
});
</script>

<style scoped></style>
