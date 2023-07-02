<template>
  <div class="title-wrap">
    <h2 class="title">Overview</h2>
  </div>
  <div class="cnts-common">
    <div class="tab-wrap">
      <input type="radio" id="menu1" name="tabmenu" checked />
      <label for="menu1">Information Product Overview</label>
      <div class="tab-cnts">
        <!-- Information Products -->
        <div class="guide-desc">정보상품은 주식, 파생, 채권 등 시장별로 아래와 같이 제공합니다.</div>
        <div class="title-wrap sub"><h3 class="title">Market Information</h3></div>
        <div class="table">
          <table>
            <caption>
              <strong>Market Information</strong>
            </caption>
            <colgroup>
              <col style="width: 280px" />
              <col />
              <col style="width: 164px" />
              <col style="width: 164px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Market Covered</th>
                <th scope="col">Real-time Information</th>
                <th scope="col">End of Day Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Securities A</td>
                <td class="left">KOSPI Stock</td>
                <td>○</td>
                <td>○</td>
              </tr>
              <tr>
                <td>Securities B</td>
                <td class="left">KOSDAQ Stock, KONEX Stock</td>
                <td>○</td>
                <td>○</td>
              </tr>
              <tr>
                <td>Securities C</td>
                <td class="left">ETF, ETN, ELW</td>
                <td>○</td>
                <td>○</td>
              </tr>
              <tr>
                <td>Derivatives A</td>
                <td class="left">
                  <strong class="txt-md">Stock Index Products :</strong><br />
                  KOSPI200 Futures, KOSDAQ150 Futures, KRX300 Futures, Sector Index Futures, Volatility Index Futures,
                  Dividend Index Futures, K-New Deal Index Futures, KOSPI200 Options, KOSPI150 Options <br /><br />
                  <strong class="txt-md">Equity Products :</strong><br />
                  Single Stock Futures, ETF Futures, Single Stock Options <br /><br />
                  <strong class="txt-md">Interest Rate Products :</strong><br />
                  KTB Futures (3yr/5yr/10yr), Inter-Product Spread <br /><br />
                  <strong class="txt-md">Currency Products :</strong><br />
                  USD Futures/Options, JPY Futures, EUR Futures, CNY Futures <br /><br />
                  <strong class="txt-md">Commodity Products :</strong><br />
                  Gold Futures, Lean hog Futures
                </td>
                <td>○</td>
                <td>○</td>
              </tr>
              <tr>
                <td>Derivatives B</td>
                <td class="left">Euro STOXX 50 Index Futures</td>
                <td>○</td>
                <td>○</td>
              </tr>
              <tr>
                <td>Commodities A</td>
                <td class="left">Gold Spot, Emissions</td>
                <td>○</td>
                <td>○</td>
              </tr>
              <tr>
                <td>KRX bonds</td>
                <td class="left">KRX bonds</td>
                <td>○</td>
                <td>○</td>
              </tr>
              <tr>
                <td>KRX Index 1</td>
                <td class="left">KRX Index</td>
                <td>○</td>
                <td>○</td>
              </tr>
              <tr>
                <td>KRX Index 1</td>
                <td class="left">KRX Index</td>
                <td>○</td>
                <td>○</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="title-wrap sub"><h3 class="title">Reference Information</h3></div>
        <div class="table">
          <table>
            <caption>
              <strong>Reference Information</strong>
            </caption>
            <colgroup>
              <col style="width: 284px" />
              <col />
              <col style="width: 164px" />
              <col style="width: 164px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Market Covered</th>
                <th scope="col">Real-time Information</th>
                <th scope="col">End of Day Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="3">Investors Activity</td>
                <td class="left">KOSPI</td>
                <td>×</td>
                <td>○</td>
              </tr>
              <tr>
                <td class="left">KOSDAQ</td>
                <td>×</td>
                <td>○</td>
              </tr>
              <tr>
                <td class="left">KONEX</td>
                <td>×</td>
                <td>○</td>
              </tr>
              <tr>
                <td rowspan="3">Market Action</td>
                <td class="left">KOSPI</td>
                <td>×</td>
                <td>○</td>
              </tr>
              <tr>
                <td class="left">KOSDAQ</td>
                <td>×</td>
                <td>○</td>
              </tr>
              <tr>
                <td class="left">KONEX</td>
                <td>×</td>
                <td>×</td>
              </tr>
              <tr>
                <td rowspan="3">Margin Trading</td>
                <td class="left">KOSPI</td>
                <td>×</td>
                <td>○</td>
              </tr>
              <tr>
                <td class="left">KOSDAQ</td>
                <td>×</td>
                <td>○</td>
              </tr>
              <tr>
                <td class="left">KONEX</td>
                <td>×</td>
                <td>○</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //Information Products -->
      </div>
      <input type="radio" id="menu2" name="tabmenu" />
      <label for="menu2">Information Use License</label>
      <div class="tab-cnts">
        <!-- Information Use License -->
        <div class="guide-desc">정보상품은 정보를 이용하는 목적에 따라 아래와 같이 계약하여 이용할 수 있습니다.</div>
        <div class="txt-cnts">
          Customers who wish to use or distribute KRX information are required to complete the Market Information
          Service Agreement with Koscom according to the purpose and scope of using the Information.
        </div>
        <div class="txt-cnts">
          Recipients of Information are broadly categorized as either Vendors or End-Customers. A Vendor subscribes to
          the Information to provide it to its Subscribers. By contrast, the party consuming Information for its
          internal purposes is referred to as End-Customer.
        </div>
        <div class="txt-cnts">
          In some instances, a single organization may be both an End-Customer/Subscriber and a Vendor within different
          parts of its business; an example being a broker systematically providing Information to its brokerage clients
          and consuming information part of its proprietary trading.
        </div>
        <div class="txt-cnts">
          An entity who has completed “Market Information Service Agreement” with Koscom is referred to as “Vendor”, and
          an entity who has completed “Market Information Agreement for End-Customer” or a Subscriber of Vendor(s) is
          referred to as “End-Customer” An entity who has completed “Market Information Service Agreement” with Koscom
          is referred to as “Vendor”, and an entity who has completed “Market Information Agreement for End-Customer” or
          a Subscriber of Vendor(s) is referred to as “End-Customer”
        </div>
        <ul class="list dot">
          <li>General Market Information Service Agreement: License to provide information to third parties</li>
          <li>End-Customer Market Information Service Agreement: License to use the information within the company</li>
        </ul>

        <div class="txt-cnts">Please refer to the Market Information Policies for a more detailed license policy.</div>
        <button type="button" class="button small orange">
          <i class="iconset icon-down-file"></i>Download the Market Information Policies
        </button>
        <!-- //Information Use License -->
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
