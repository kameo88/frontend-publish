<template>
  <div class="title-wrap">
    <h2 class="title">실시간 상품</h2>
  </div>
  <div class="cnts-common">
    <div class="guide-desc">
      KRX의 시장시스템에서 생성된 체결가와 호가를 포함한 거래 관련 정보를 증권회사, 정보사업자, 금융기관, 기타
      시장참여자 등에게 실시간으로 제공합니다.
    </div>
    <div class="title-wrap sub"><h3 class="title">정보상품</h3></div>
    <div class="table">
      <table>
        <caption>
          <strong>정보상품</strong>
        </caption>
        <colgroup>
          <col style="width: 164px" />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">정보상품</th>
            <th scope="col">시장</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>증권A</td>
            <td class="left">유가증권시장 주식</td>
          </tr>
          <tr>
            <td>증권B</td>
            <td class="left">코스닥시장 주식, 코넥스시장 주식</td>
          </tr>
          <tr>
            <td>증권C</td>
            <td class="left">ETF, ETN, ELW</td>
          </tr>
          <tr>
            <td>파생상품A</td>
            <td class="left">
              지수 : 코스피200선물, 코스닥150선물, K300선물, 섹터지수선물, 변동성지수선물, 배당지수선물, 뉴딜지수선물,
              KOSPI200옵션, KOSPI150옵션 <br />
              주식 : 주식선물, ETF선물, 주식옵션 <br />
              금리 : 국채선물(3년/5년/10년), 상품간 스프레드 <br />
              외환 : 미국달러선물·옵션, 엔선물, 유로선물, 위안선물 <br />
              일반상품 : 금선물, 돈육선물
            </td>
          </tr>
          <tr>
            <td>파생상품B</td>
            <td class="left">유로스톡스50선물</td>
          </tr>
          <tr>
            <td>일반상품A</td>
            <td class="left">금, 배출권</td>
          </tr>
          <tr>
            <td>KRX채권A</td>
            <td class="left">KRX채권</td>
          </tr>
          <tr>
            <td>KRX지수1</td>
            <td class="left">KRX산출지수</td>
          </tr>
          <tr>
            <td>KRX지수2</td>
            <td class="left">KRX산출지수</td>
          </tr>
        </tbody>
      </table>
    </div>
    <ul class="list-info orange">
      <li>
        정보상품별 세부 제공내용은
        <a href="https://data.koscom.co.kr/kor/main.do" class="txt-on" target="_blank">개발가이드</a>를 참고하여
        주십시오.
      </li>
    </ul>

    <div class="title-wrap sub"><h3 class="title">정보 수신방법</h3></div>
    <div class="title-wrap sub-h4"><h4 class="sub-title">정보 수신방법</h4></div>
    <div>실시간 시장정보는 라이선스를 취득한 정보벤더를 통해서도 간접적으로 수신하여 이용할 수 있습니다.</div>
    <div class="title-wrap sub-h5"><h5 class="sub-title">시세전용망 STOCK-NET</h5></div>
    <ul class="list dot">
      <li>초고속 DWDM(800Gbps) 및 MSPP(10GBPS) Dual Backbone으로 초고속의 시세전송서비스 제공</li>
      <li>자체적으로 보유한 네트워크 백업센터 보유 및 이원화로 국지적 재해에도 중단 없는 초고속 시세 제공</li>
      <li>별도의 테스트망을 통해 필요 시 시세수신을 점검할 수 있도록 지원</li>
    </ul>
    <div class="title-wrap sub-h5"><h5 class="sub-title">인터넷망</h5></div>
    <ul class="list dot">
      <li>TCP/IP 통신방식으로 공용 인터넷망을 통해 시장정보 직접 데이터피드를 제공합니다.</li>
    </ul>
    <div class="title-wrap sub-h4"><h4 class="sub-title">정보사업자를 통한 간접 데이터피드</h4></div>
    <div>코스콤으로부터 승인받은 정보사업자를 통해 실시간 시장정보를 수신하여 이용할 수 있습니다.</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "RealTimeProduct",
  setup() {
    return {};
  },
  data() {
    return {};
  },
  methods: {},
});
</script>
