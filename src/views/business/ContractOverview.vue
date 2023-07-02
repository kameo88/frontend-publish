<template>
  <div class="title-wrap">
    <h2 class="title">정보이용계약 절차</h2>
  </div>
  <div class="cnts-common">
    <!-- 정보이용 계약절차 -->
    <div class="guide-desc">고객사가 KRX 정보상품을 이용하기 위한 주문/계약 절차는 다음과 같습니다.</div>
    <!-- 신규 고객사 -->
    <div class="title-wrap sub"><h3 class="title">신규 고객사</h3></div>
    <ol class="contract-step">
      <li class="step01">
        <div class="sub-title"><span class="txt-step">STEP 01</span>회원등록</div>
        <ul class="list dot">
          <li>
            고객사는 코스콤의 웹 플랫폼(<a href="https://dataservice.koscom.co.kr" class="underline" target="_blank"
              >https://dataservice.koscom.co.kr)</a
            >에서 회원으로 등록합니다.
          </li>
          <li>
            고객사의 회원 등록 이전 또는 이후 시점에, 코스콤은 고객사의 니즈 파악을 위해 고객사에게 웹 플랫폼의
            ‘계약문의’ 작성을 요청할 수 있습니다.
          </li>
        </ul>
      </li>
      <li class="step02">
        <div class="sub-title"><span class="txt-step">STEP 02</span>주문서 작성 및 제출</div>
        <ul class="list dot">
          <li>
            코스콤 담당자는 고객사가 제출한 계약문의 또는 고객사로부터 청취한 니즈에 따라 고객사에게 적합한 주문서를
            등록합니다.
          </li>
          <li>
            고객사는 해당 주문서를 웹 사이트의 [주문 현황] 메뉴에서 확인할 수 있으며, 해당 메뉴에서 주문서를 입력합니다.
          </li>
        </ul>
      </li>
      <li class="step03">
        <div class="sub-title"><span class="txt-step">STEP 03</span>주문서 승인</div>
        <ul class="list dot">
          <li>코스콤은 고객사가 제출한 주문서를 확인하고 승인합니다.</li>
          <li>필요시 코스콤은 고객사에게 추가적 정보 또는 주문서 입력내용의 수정을 요청할 수 있습니다.</li>
        </ul>
      </li>
      <li class="step04">
        <div class="sub-title"><span class="txt-step">STEP 04</span>정보이용계약 체결</div>
        <ul class="list dot">
          <li>
            코스콤은 계약서(주문서 및 이용조건)를 2부 출력 후 서명하여 고객사에 전달하며, 고객사는 이에 서명후 1부를
            코스콤에 반환합니다.
          </li>
        </ul>
      </li>
    </ol>
    <!-- 기존 고객사 -->
    <div class="title-wrap sub"><h3 class="title">기존 고객사</h3></div>
    <ol class="contract-step">
      <li class="step02">
        <div class="sub-title"><span class="txt-step">STEP 01</span>주문서 작성 및 제출</div>
        <ul class="list dot">
          <li>
            <span class="bold">[기존 주문서를 변경하는 경우]</span> 고객사가 코스콤의 웹 플랫폼에 로그인 후 기존에
            등록된 주문서를 수정하여 제출
          </li>
          <li>
            <span class="bold">[신규 주문서를 추가하는 경우]</span> 고객사는 코스콤 담당자와 사전 협의하고, 코스콤
            담당자는 고객사에게 적합한 주문서를 등록합니다.
          </li>
          <li>
            고객사는 해당 주문서를 웹 사이트의 [주문 현황] 메뉴에서 확인할 수 있으며, 해당 메뉴에서 주문서를 입력합니다.
          </li>
        </ul>
      </li>
      <li class="step03">
        <div class="sub-title"><span class="txt-step">STEP 02</span>주문서 승인</div>
        <ul class="list dot">
          <li>코스콤은 고객사가 제출한 주문서를 확인하고 승인합니다.</li>
          <li>필요시 코스콤은 고객사에게 추가적 정보 또는 주문서 입력내용의 수정을 요청할 수 있습니다.</li>
        </ul>
      </li>
      <li class="step04">
        <div class="sub-title"><span class="txt-step">STEP 03</span>정보이용계약 체결</div>
        <ul class="list dot">
          <li>
            코스콤은 계약서(주문서 및 이용조건)를 2부 출력 후 서명하여 고객사에 전달하며, 고객사는 이에 서명후 1부를
            코스콤에 반환합니다.
          </li>
        </ul>
      </li>
    </ol>
    <!-- //정보이용 계약절차 -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ContractOverview",
  setup() {
    return {};
  },
  data() {
    return {};
  },
  methods: {},
});
</script>
