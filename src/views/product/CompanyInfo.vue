<template>
  <div class="title-wrap">
    <h2 class="title">상장기업 자사주 정보</h2>
  </div>
  <div class="cnts-common">
    <div class="tab-wrap">
      <input type="radio" id="menu2" name="tabmenu" checked />
      <label for="menu2">개요</label>
      <div class="tab-cnts">
        <!-- 개요 -->
        <div class="guide-desc">상장사 자신의 실시간 주가정보를 이용할 수 있습니다.</div>
        <div class="title-wrap sub"><h3 class="title">자사주 시세 정보</h3></div>
        <dl class="faq-cnts">
          <dt>
            <i class="iconset icon-question">질문</i>
            <span>자사주 시세 정보란 무엇인가요?</span>
          </dt>
          <dd>
            <i class="iconset icon-answer">답변</i>
            <span
              >상장사 자신의 실시간 주가정보를 의미하며, 일반적으로 홈페이지 게시 등, 기업홍보활동 등의 목적으로
              사용합니다.</span
            >
          </dd>
        </dl>
        <dl class="faq-cnts">
          <dt>
            <i class="iconset icon-question">질문</i>
            <span>정보이용을 위해 필요한 절차는 무엇인가요?</span>
          </dt>
          <dd>
            <i class="iconset icon-answer">답변</i>
            <span
              >자사주 시세정보를 이용하기 위해서는 이용 주체인 상장사와 정보제공 주체인 코스콤(한국거래소 자회사)간에
              자사주 정보이용계약이 필요합니다.</span
            >
          </dd>
        </dl>
        <div class="title-wrap sub-h4"><h4 class="sub-title">계약 문의</h4></div>
        <ul class="list dot">
          <li>코스콤 시장전략부</li>
          <li>TEL : 02-767-7318</li>
          <li>email : irstock@koscom.co.kr</li>
        </ul>
        <div class="mt-xl">
          <button type="button" class="button small orange">
            <i class="iconset icon-link"></i>자사주정보 FAQ 바로가기
          </button>
        </div>
        <!-- //개요 -->
      </div>
      <input type="radio" id="menu1" name="tabmenu" />
      <label for="menu1">정보이용방법</label>
      <div class="tab-cnts">
        <!-- 정보이용방법 -->
        <div class="guide-desc">자사주 시세정보의 제공이용방법을 안내해 드립니다.</div>
        <div class="title-wrap sub"><h3 class="title">정보상품</h3></div>
        <div class="table">
          <table>
            <caption>
              <strong>정보상품</strong>
            </caption>
            <colgroup>
              <col style="width: 170px" />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">구분</th>
                <th scope="col">제공정보</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>주가정보</td>
                <td class="left">주가기본정보, 호가, 시간대별 체결가, 회원사별거래, 일자별거래</td>
              </tr>
              <tr>
                <td>주요지수</td>
                <td class="left">KOSPI종합지수, KOSPI200, KOSDAQ종합지수</td>
              </tr>
              <tr>
                <td>공시정보</td>
                <td class="left">최근 공시</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="title-wrap sub"><h3 class="title">API 서비스</h3></div>
        <div class="txt-cnts">(API 방식) JSON방식과 XML방식 중에 선택이 가능합니다. (정보이용료 외 추가비용 없음)</div>
        <div class="title-wrap sub"><h3 class="title">API 서비스 예제</h3></div>
        <ul class="api-cnts">
          <li>
            <a href="#none" download>JSON서비스<br />데이터 스펙</a>
          </li>
          <li>
            <a href="#none" download>JSON서비스<br />활용방법</a>
          </li>
          <li>
            <a href="#none" download>XML서비스<br />데이터 스펙</a>
          </li>
          <li>
            <a href="#none" download>XML서비스<br />활용방법</a>
          </li>
        </ul>
        <div class="title-wrap sub"><h3 class="title">자사주 시세정보 이용방법</h3></div>
        <div>
          코스콤으로부터 직접 수신(API방식) 하거나, 기업주가 웹서비스 가능한 정보사업자(벤더사)를 통한 서비스 중에
          선택가능합니다.
        </div>
        <div class="title-wrap sub-h4"><h4 class="sub-title">이용문의</h4></div>
        <ul class="list dot">
          <li>코스콤 시장전략부</li>
          <li>TEL : 02-767-7318</li>
          <li>email : irstock@koscom.co.kr</li>
        </ul>
        <div class="mt-xl">
          <button type="button" class="button small orange">
            <i class="iconset icon-link"></i>자사주정보 FAQ 바로가기
          </button>
        </div>
        <!-- 정보이용방법 -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "CompanyInfo",
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
