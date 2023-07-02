<template>
  <el-dialog v-model="dialogPrintCover1Visible" custom-class="el-extra-large print">
    <template #title>
      <span class="el-dialog__title">Print Cover Type 2</span>
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
              <span class="sub">(최종이용사 정보 이용계약용)</span>
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
            <!-- 주문 정보 -->
            <div class="order-info">
              <dl>
                <dt class="label">고객사명</dt>
                <dd class="item">우리증권 주식회사</dd>
              </dl>
              <dl>
                <dt class="label">주소</dt>
                <dd class="item">서울시 영등포구 여의나루로 76 ㈜코스콤 5층</dd>
              </dl>
              <dl>
                <dt class="label">우편번호</dt>
                <dd class="item">07329</dd>
              </dl>
              <dl>
                <dt class="label">개시일</dt>
                <dd class="item">2010년 10월 10일</dd>
              </dl>
            </div>
            <!-- //주문 정보 -->
            <!-- 확약 -->
            <h3 class="sub-title">확약</h3>
            <div class="desc">
              <div class="br">
                본 주문서(이하 "주문서")는 아래의 고객사(이하 "고객사")가 정보사업자로부터 데이터 피드 방식으로 정보를
                수신 이용하기 위해 요구된다. 본 주문서는 고객사가 본 주문서를 대한민국 서울 영등포구 여의나루로 76에
                주소를 두고 있는 주식회사 코스콤(이하 "코스콤")에서 제출하고, 이에 코스콤이 고객사에 서면 확정동의를
                전달하면 효력이 발생한다.
              </div>

              <div class="br">고객사는 다음 사항에 동의한다.</div>

              <div class="br">
                - 고객사는 상기 개시일로부터 본 주문서, 이용조건 및 코스콤에 의해 정책서에 의거하여 정보를 수신 및
                이용한다. 본 주문서, 이용조건 및 정책서를 합하여 고객사와 코스콤간 "최종이용사
                정보이용계약"(이하"계약")을 형성한다.
              </div>

              <div class="br">
                - 코스콤은 가격표(이용조건의 부록 A)에 의거 고객사에게 매월 직접 정보이용료를 청구하여, 고객사는 해당
                정보이용료를 코스콤에 납부한다.
              </div>
            </div>
            <!-- //확약 -->
            <!-- 고객사 정보 table -->
            <div class="table-wrap">
              <div class="table order">
                <table>
                  <caption>
                    <strong>고객사 정보</strong>
                  </caption>
                  <colgroup>
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">고객사</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="left">
                        <span class="label">이름</span>
                        <span class="item">홍길동</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="left">
                        <span class="label">직위</span>
                        <span class="item">대표이사</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="left">
                        <span class="label">서명일자</span>
                        <span class="item"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- //고객사 정보 table -->
          </div>
          <!-- //표지 -->
        </div>
        <div class="page-break">next page - contents</div>
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
