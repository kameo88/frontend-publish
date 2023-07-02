<template>
  <div class="title-wrap">
    <h2 class="title">종가상품</h2>
  </div>
  <div class="cnts-common">
    <div class="guide-desc">
      KRX 시장의 장종료 후 당일의 종가 및 마감정보를 제공합니다. 종가정보는 업무 자동화, 위험관리 등 다양한 백오피스
      업무 용도로 활용되고 있습니다.
    </div>
    <!-- 종가정보 -->
    <div class="title-wrap sub"><h3 class="title">정보상품</h3></div>
    <div class="title-wrap sub-h4"><h4 class="sub-title">시장정보</h4></div>
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
              KOSPI200옵션, KOSPI150옵션<br />
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

    <div class="title-wrap sub-h4"><h4 class="sub-title">참조정보</h4></div>
    <div class="table">
      <table>
        <caption>
          <strong>참조정보</strong>
        </caption>
        <colgroup>
          <col style="width: 284px" />
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
            <td rowspan="3">종목별투자자별</td>
            <td class="left">유가증권시장</td>
          </tr>
          <tr>
            <td class="left">코스닥시장</td>
          </tr>
          <tr>
            <td class="left">코넥스시장</td>
          </tr>
          <tr>
            <td rowspan="3">시장조치정보</td>
            <td class="left">유가증권시장</td>
          </tr>
          <tr>
            <td class="left">코스닥시장</td>
          </tr>
          <tr>
            <td class="left">코넥스시장</td>
          </tr>
          <tr>
            <td rowspan="3">신용거래정보</td>
            <td class="left">유가증권시장</td>
          </tr>
          <tr>
            <td class="left">코스닥시장</td>
          </tr>
          <tr>
            <td class="left">코넥스시장</td>
          </tr>
        </tbody>
      </table>
    </div>
    <ul class="list-info orange">
      <li>
        정보상품별 세부 제공내용은 <a href="#none" class="txt-on" target="_blank">개발가이드</a>를 참고하여 주십시오.
      </li>
    </ul>
    <!-- //종가정보 -->
    <!-- FTP 전송서비스 -->
    <div class="title-wrap sub"><h3 class="title">FTP 전송서비스 특징</h3></div>
    <div>종가정보는 파일보안 전송시스템(SFTP)을 통해 고객사에게 안정적으로 제공됩니다.</div>
    <ul class="list dot">
      <li>업무프로세스 자동화 및 파일 보안전송을 통해 안전하게 데이터 전송</li>
      <li>파일 송수신에 대한 이력관리를 통해 모니터링 지원</li>
      <li>고객사의 시스템 개통 시 사전 테스트 지원</li>
      <li>다양한 프로토콜 및 운영체제 지원</li>
    </ul>
    <!-- //FTP 전송서비스 -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ClosingPriceProduct",
  setup() {
    return {};
  },
  data() {
    return {};
  },
  methods: {},
});
</script>
