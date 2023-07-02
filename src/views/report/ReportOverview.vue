<template>
  <div class="title-wrap">
    <h2 class="title">사용자 리포트 개요</h2>
  </div>
  <div class="cnts-common">
    <div class="guide-desc">이용하시는 서비스에 대한 리포트 통보를 진행해 주셔야 합니다.</div>
    <div class="txt-cnts mt-xl">
      고객사는 정보이용계약에 의거 실시간정보의 이용 또는 분배내역에 대해 코스콤에게 월 단위로 리포트를 제출하여야
      합니다. <br />
      고객사의 리포트는 코스콤의 웹기반 리포트 시스템을 통해 제출되며, 매월의 정보이용료(변동료) 산출을 위한 근거로
      사용됩니다. 코스콤은 고객사가 제출한 리포트에 포함된 정보를 기밀정보로 취급합니다. <br />
      리포트에 대한 상세 정책은 정보이용정책서를 참고하여 주시기 바랍니다.
    </div>
    <div class="center">
      <button type="button" class="button small orange">
        <i class="iconset icon-down-file"></i>정보이용 정책서 다운로드
      </button>
    </div>
    <div class="title-wrap sub"><h3 class="title">정보사업자의 사용자 리포트 제출</h3></div>
    <div>정보사업자는 정보상품별로 정보의 이용내역을 매월 다음과 같이 제출하여야 합니다.</div>
    <ul class="list dot">
      <li>정보사업자와 승인된 관계사 내부의 정보 이용 주소 및 실시간정보 사용량 단위 수(변동료 부과 대상)</li>
      <li>
        정보 이용권한이 부여된 개별 가입자의 이름, 주소 및 개별 주소에서의 실시간정보 사용량 단위 수(변동료 부과 대상)
        <br />
        - 데이터 피드 방식으로 정보를 수신하는 가입자에 대해서는 코스콤이 식별할 수 있도록 리포트에서 구분하여 표시
      </li>
      <li>
        정보사업자로부터 정보를 수신하는 2차 정보사업자의 이름 및 주소(지연정보를 수신하는 2차 정보사업자도 리포트
        대상에 포함)
      </li>
    </ul>
    <div class="title-wrap sub"><h3 class="title">최종이용사의 사용자 리포트 제출(매월/정보상품별)</h3></div>
    <div>최종이용사는 정보상품별로 정보의 이용내역을 매월 다음과 같이 제출하여야 합니다.</div>
    <ul class="list dot">
      <li>
        최종이용사 자신과 승인된 관계사 내부의 정보 이용 주소 및 개별 주소에서의 실시간 정보 사용량 단위 수(변동료 부과
        대상) <br />
      </li>
    </ul>
    <div class="txt-cnts">
      최종이용사가 정보사업자의 가입자일 경우 정보사업자로부터 수신한 정보의 이용내역에 대해서는 해당 정보사업자에게
      제출합니다.(정보사업자는 해당 가입자의 정보이용 내역을 코스콤에 제출)
    </div>
    <div class="title-wrap sub"><h3 class="title">리포팅 면제 대상</h3></div>
    <div class="txt-cnts">
      웹사이트 체결가서비스 및 방송매체를 통해 정보를 수신한 자에 대해서는 리포트 제출이 요구되지 않습니다. 단, 웹사이트
      체결가서비스를 제공하는 정보사업자는 코스콤이 요청할 경우 정보를 제공중인 웹사이트의 주소(URL)와 해당 웹사이트
      또는 모바일어플리케이션의 접속권한(ID 등)을 코스콤에게 무상으로 제공하여야 합니다. <br />
      (로그인이 요구되거나 유상 서비스일 경우) <br />
    </div>
    <div class="txt-cnts">
      일반적으로는 <span class="txt-on txt-md">변동료가 면제된 정보의 이용</span> 및
      <span class="txt-on txt-md">계약에 의거 변동료가 면제된 기기/사용자</span>에 대해서는 상기의 리포팅 의무가
      면제됩니다. <br />
      (단, 2차 정보사업자에 대한 상기 리포팅 의무는 면제되지 않음)
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ReportOverview",
  setup() {
    return {};
  },
  data() {
    return {};
  },
  methods: {},
});
</script>
