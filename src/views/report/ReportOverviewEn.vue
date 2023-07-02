<template>
  <div class="title-wrap">
    <h2 class="title">User Report Overview</h2>
  </div>
  <div class="cnts-common">
    <div class="guide-desc">이용하시는 서비스에 대한 리포트 통보를 진행해 주셔야 합니다.</div>
    <div class="txt-cnts mt-xl">
      The customers are required to submit a monthly report to Koscom on the use or distribution of real-time
      information under the Market Information Policies.<br /><br />

      The customer's report is submitted through Koscom's web-based report system and is used to calculate the monthly
      information usage fee (variable fee). Koscom treats information included in reports submitted by customers as
      confidential information.<br /><br />

      For detailed policy on the report, please refer to the Market Information Policies.
    </div>
    <div class="center">
      <button type="button" class="button small orange">
        <i class="iconset icon-down-file"></i>Download the Market Information Policies
      </button>
    </div>
    <div class="title-wrap sub"><h3 class="title">Submitting Information Service Providers’ Report</h3></div>
    <div>Vendors will be required to report every month per Information Product.</div>
    <ul class="list dot">
      <li>
        The number and location of Units within Vendor and its Affiliates granted access right to Real-time Information
        subject to Variable Fees.
      </li>
      <li>
        The name and location(s) of each Subscriber and the number of Units at each Subscriber location granted access
        right to Real-time Information subject to Variable Fees.
        <br />
        - For Subscriber receiving Information via Datafeed, the above information shall be distinguished with
        'Datafeed' indication in the report to enable Koscom to discern; and
      </li>
      <li>
        The name and address of each Sub-Vendor. (For the avoidance of doubt, any Sub-Vendor receiving Delayed
        Information will be also subject to this reporting obligation.)
      </li>
    </ul>
    <div class="title-wrap sub"><h3 class="title">Submitting End-Customers’ Report</h3></div>
    <div>End-Customer will be required to report every month per Information Product</div>
    <ul class="list dot">
      <li>
        The number and location of Units within End-Customer and its Affiliates granted access rights to Real-time
        Information subject to Variable Fees.
      </li>
    </ul>
    <div class="txt-cnts">
      If the End-Customer is a subscriber of the information service provider, he will submit to the information service
      provider the detailed use of the information received from them. Then, the information service provider will
      submit to Koscom those details.
    </div>
    <div class="title-wrap sub"><h3 class="title">Reporting Exemption</h3></div>
    <div class="txt-cnts">
      Reports are not required in respect of the recipients of Information via Website Last Sale Price Service or Public
      Media Service. However, the Vendor providing Website Last Sale Price Service shall, upon Koscom's request from
      time to time, provide Koscom URLs of the websites distributing Information and/or access (e.g. access ID) to such
      websites or mobile applications free of charge <br />
      (if log-in or payments are required to have access to those services).
    </div>
    <div class="txt-cnts">
      In general, the above reporting obligation (except for reporting obligation in respect of Sub-Vendor) shall not
      apply to
      <span class="txt-on txt-md">(1) use of Information Products for which Variable Fees are waived </span> and
      <span class="txt-on txt-md">(2) Users/Devices for which Variable Fees are waived under the Agreement.</span>
      <br />
      (However, the above reporting obligation to sub-vendors is not exempted)
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
