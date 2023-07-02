<template>
  <div class="title-wrap">
    <h2 class="title">End of Day Information</h2>
  </div>
  <div class="cnts-common">
    <div class="guide-desc">
      We provide the End of Day information and closing information of the day after the KRX market closes. The End of
      Day information is used for various back-office business purposes, such as business automation and risk
      management.
    </div>
    <!-- End of Day Information -->
    <div class="title-wrap sub"><h3 class="title">Information Products</h3></div>
    <div class="title-wrap sub-h4"><h4 class="sub-title">Market Information</h4></div>
    <div class="table">
      <table>
        <caption>
          <strong>Information Products</strong>
        </caption>
        <colgroup>
          <col style="width: 164px" />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Market Covered</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Securities A</td>
            <td class="left">KOSPI Stock</td>
          </tr>
          <tr>
            <td>Securities B</td>
            <td class="left">KOSDAQ Stock, KONEX Stock</td>
          </tr>
          <tr>
            <td>Securities C</td>
            <td class="left">ETF, ETN, ELW</td>
          </tr>
          <tr>
            <td>Derivatives A</td>
            <td class="left">
              <strong class="txt-md">Stock Index Products : </strong><br />
              KOSPI200 Futures, KOSDAQ150 Futures, KRX300 Futures, Sector Index Futures, Volatility Index Futures,
              Dividend Index Futures, K-New Deal Index Futures, KOSPI200 Options, KOSPI150 Options<br /><br />
              <strong class="txt-md">Equity Products : </strong><br />
              Single Stock Futures, ETF Futures, Single Stock Options<br /><br />
              <strong class="txt-md">Interest Rate Products : </strong><br />
              KTB Futures (3yr/5yr/10yr), Inter-Product Spread<br /><br />
              <strong class="txt-md">Currency Products : </strong><br />
              USD Futures/Options, JPY Futures, EUR Futures, CNY Futures<br /><br />
              <strong class="txt-md">Commodity Products : </strong><br />
              Gold Futures, Lean hog Futures
            </td>
          </tr>
          <tr>
            <td>Derivatives B</td>
            <td class="left">Euro STOXX 50 Index Futures</td>
          </tr>
          <tr>
            <td>Commodities A</td>
            <td class="left">Gold Spot, Emissions</td>
          </tr>
          <tr>
            <td>KRX bonds</td>
            <td class="left">KRX bonds</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="title-wrap sub-h4"><h4 class="sub-title">Reference Information</h4></div>
    <div class="table">
      <table>
        <caption>
          <strong>Reference Information</strong>
        </caption>
        <colgroup>
          <col style="width: 284px" />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Market Covered</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="3">Investors Activity</td>
            <td class="left">KOSPI</td>
          </tr>
          <tr>
            <td class="left">KOSDAQ</td>
          </tr>
          <tr>
            <td class="left">KONEX</td>
          </tr>
          <tr>
            <td rowspan="3">Market Action</td>
            <td class="left">KOSPI</td>
          </tr>
          <tr>
            <td class="left">KOSDAQ</td>
          </tr>
          <tr>
            <td class="left">KONEX</td>
          </tr>
          <tr>
            <td rowspan="3">Margin Trading</td>
            <td class="left">KOSPI</td>
          </tr>
          <tr>
            <td class="left">KOSDAQ</td>
          </tr>
          <tr>
            <td class="left">KONEX</td>
          </tr>
        </tbody>
      </table>
    </div>
    <ul class="list-info orange">
      <li>
        Please refer to the
        <a href="https://data.koscom.co.kr" class="txt-on" target="_blank">Development Guide (data.koscom.co.kr)</a>
        for details of each Information Product and transfer time.
      </li>
    </ul>
    <!-- //End of Day Information -->
    <!-- FTP Transfer Service -->
    <div class="title-wrap sub"><h3 class="title">FTP Transfer Service</h3></div>
    <div>We provide End of Day Information stably to customers through a Secure File Transfer Protocol (SFTP).</div>
    <ul class="list dot">
      <li>We provide safe data transfer through automation and secured transfer.</li>
      <li>We provide monitoring support through file transfer and reception history.</li>
      <li>We provide pre-testing when a customer's system is opened.</li>
      <li>We support various protocols and operating systems.</li>
    </ul>
    <!-- //FTP Transfer Service -->
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
