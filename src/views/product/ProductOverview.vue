<template>
  <div class="title-wrap">
    <h2 class="title">정보상품 개요</h2>
  </div>
  <div class="cnts-common">
    <div class="tab-wrap">
      <input type="radio" id="menu1" name="tabmenu" checked />
      <label for="menu1">정보상품</label>
      <div class="tab-cnts">
        <!-- 정보상품 -->
        <div class="guide-desc">정보상품은 주식, 파생, 채권 등 시장별로 아래와 같이 제공합니다.</div>
        <div class="title-wrap sub"><h3 class="title">시장정보</h3></div>
        <div class="table">
          <table>
            <caption>
              <strong>시장정보</strong>
            </caption>
            <colgroup>
              <col style="width: 280px" />
              <col />
              <col style="width: 164px" />
              <col style="width: 164px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">정보상품</th>
                <th scope="col">시장</th>
                <th scope="col">실시간</th>
                <th scope="col">종가</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>증권A</td>
                <td class="left">유가증권 주식</td>
                <td>○</td>
                <td>○</td>
              </tr>
              <tr>
                <td>증권B</td>
                <td class="left">코스닥시장 주식, 코넥스시장 주식</td>
                <td>○</td>
                <td>○</td>
              </tr>
              <tr>
                <td>증권C</td>
                <td class="left">ETF, ETN, ELW</td>
                <td>○</td>
                <td>○</td>
              </tr>
              <tr>
                <td>파생상품A</td>
                <td class="left">
                  지수 : 코스피200선물, 코스닥150선물, K300선물, 섹터지수선물, 변동성지수선물, 배당지수선물,
                  뉴딜지수선물, KOSPI200옵션, KOSPI150옵션 <br />
                  주식 : 주식선물, ETF선물, 주식옵션 <br />
                  금리 : 국채선물(3년/5년/10년), 상품간 스프레드 <br />
                  외환 : 미국달러선물·옵션, 엔선물, 유로선물, 위안선물 <br />
                  일반상품 : 금선물, 돈육선물
                </td>
                <td>○</td>
                <td>○</td>
              </tr>
              <tr>
                <td>파생상품B</td>
                <td class="left">유로스톡스50선물</td>
                <td>○</td>
                <td>○</td>
              </tr>
              <tr>
                <td>일반상품A</td>
                <td class="left">금, 배출권</td>
                <td>○</td>
                <td>○</td>
              </tr>
              <tr>
                <td>KRX채권A</td>
                <td class="left">KRX채권</td>
                <td>○</td>
                <td>○</td>
              </tr>
              <tr>
                <td>KRX지수1</td>
                <td class="left">KRX산출지수</td>
                <td>○</td>
                <td>○</td>
              </tr>
              <tr>
                <td>KRX지수2</td>
                <td class="left">KRX산출지수</td>
                <td>○</td>
                <td>○</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="title-wrap sub"><h3 class="title">참조정보</h3></div>
        <div class="table">
          <table>
            <caption>
              <strong>참조정보</strong>
            </caption>
            <colgroup>
              <col style="width: 284px" />
              <col />
              <col style="width: 164px" />
              <col style="width: 164px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">정보상품</th>
                <th scope="col">시장</th>
                <th scope="col">실시간</th>
                <th scope="col">종가</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="3">종목별투자자별</td>
                <td class="left">유가증권시장</td>
                <td>×</td>
                <td>○</td>
              </tr>
              <tr>
                <td class="left">코스닥시장</td>
                <td>×</td>
                <td>○</td>
              </tr>
              <tr>
                <td class="left">코넥스시장</td>
                <td>×</td>
                <td>○</td>
              </tr>
              <tr>
                <td rowspan="3">시장조치정보</td>
                <td class="left">유가증권시장</td>
                <td>×</td>
                <td>○</td>
              </tr>
              <tr>
                <td class="left">코스닥시장</td>
                <td>×</td>
                <td>○</td>
              </tr>
              <tr>
                <td class="left">코넥스시장</td>
                <td>×</td>
                <td>×</td>
              </tr>
              <tr>
                <td rowspan="3">신용거래정보</td>
                <td class="left">유가증권시장</td>
                <td>×</td>
                <td>○</td>
              </tr>
              <tr>
                <td class="left">코스닥시장</td>
                <td>×</td>
                <td>○</td>
              </tr>
              <tr>
                <td class="left">코넥스시장</td>
                <td>×</td>
                <td>○</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 정보상품 -->
      </div>
      <input type="radio" id="menu2" name="tabmenu" />
      <label for="menu2">정보이용 라이선스</label>
      <div class="tab-cnts">
        <!-- 정보이용 라이선스 -->
        <div class="guide-desc">정보상품은 정보를 이용하는 목적에 따라 아래와 같이 계약하여 이용할 수 있습니다.</div>
        <div class="txt-cnts">
          KRX 정보를 이용 또는 분배하고자 하는 고객사는 정보를 이용하는 목적과 범위에 따라 코스콤과 정보이용계약을
          체결하여야 합니다.
        </div>
        <div class="txt-cnts">
          정보이용자는 크게 정보사업자와 최종이용사로 분류됩니다. 정보사업자는 정보를 가입자에게 제공하는 용도로 계약을
          체결한 사업자를 의미하며, 정보의 실제 소비자로서 자신의 내부 목적에 한하여 이용하는 자는 최종이용사를
          의미합니다.
        </div>
        <div class="txt-cnts">
          경우에 따라서는 하나의 정보이용자가 최종이용사/가입자인 동시에 타 부문의 사업에서는 정보사업자에 해당될 수
          있습니다. (예를 들면 자신의 위탁매매 고객에게 전용 어플 리케이션을 통해 정보를 제공하는 동시에, 자체 매매거래
          용도로도 정보를 이용하는 회사)
        </div>
        <div class="txt-cnts">
          코스콤과 “일반 정보이용계약”을 체결한 이용사는 “정보사업자”로 간주되며, 코스콤과 “최종이용사 정보이용계약”을
          체결한 이용사 또는 정보사업자의 가입자는 “최종이용 사”로 간주됩니다.
        </div>
        <ul class="list dot">
          <li>일반정보이용계약 : 제3자에게 정보를 제공할 수 있는 라이선스</li>
          <li>최종이용사 정보이용계약 : 자사 내부에서 정보를 이용할 수 있는 라이선스</li>
        </ul>

        <div class="txt-cnts">보다 상세한 내역을 정보이용정책서를 참고하여 주십시요.</div>
        <button type="button" class="button small orange">
          <i class="iconset icon-down-file"></i>정보이용 정책서 다운로드
        </button>
        <!-- //정보이용 라이선스 -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AuthEmailConfirmed",
  setup() {
    return {};
  },
  data() {
    return {
      activeName: "third",
    };
  },
  methods: {},
});
</script>
