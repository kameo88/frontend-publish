<template>
  <div class="title-wrap">
    <h2 class="title">Treasury Stock Information</h2>
  </div>
  <div class="cnts-common">
    <div class="tab-wrap">
      <input type="radio" id="menu2" name="tabmenu" checked />
      <label for="menu2">Treasury Stock Information</label>
      <div class="tab-cnts">
        <!-- Overview -->
        <div class="guide-desc">Use real-time stock price Information of listed companies of your own.</div>
        <div class="title-wrap sub"><h3 class="title">Treasury Stock Information</h3></div>
        <dl class="faq-cnts">
          <dt>
            <i class="iconset icon-question">Questions</i>
            <span>What is Treasury Stock Information?</span>
          </dt>
          <dd>
            <i class="iconset icon-answer">Answer</i>
            <span>
              It refers to the real-time stock price information of listed companies of your own, and is generally used
              to post on the website, etc., and for corporate promotion activities
            </span>
          </dd>
        </dl>
        <dl class="faq-cnts">
          <dt>
            <i class="iconset icon-question">Questions</i>
            <span>What are the necessary procedures to use Information?</span>
          </dt>
          <dd>
            <i class="iconset icon-answer">Answer</i>
            <span>
              A Treasury Stock Information Usage Contract is required between the listed company, the user, and Koscom
              (a subsidiary of the Korea Exchange), the Information Provider to use Treasury Stock Price Information.
            </span>
          </dd>
        </dl>
        <div class="title-wrap sub-h4"><h4 class="sub-title">Contract Inquiry</h4></div>
        <ul class="list dot">
          <li>Koscom Market Strategy Department</li>
          <li>TEL : 02-767-7318</li>
          <li>email : irstock@koscom.co.kr</li>
        </ul>
        <div class="mt-xl">
          <button type="button" class="button small orange">
            <i class="iconset icon-link"></i>Go to Treasury Stock Information FAQ
          </button>
        </div>
        <!-- //Overview -->
      </div>
      <input type="radio" id="menu1" name="tabmenu" />
      <label for="menu1">How to Use Information</label>
      <div class="tab-cnts">
        <!-- How to Use Information -->
        <div class="guide-desc">Here is how to use Treasury Stock Price Information.</div>
        <div class="title-wrap sub"><h3 class="title">Information Product</h3></div>
        <div class="table">
          <table>
            <caption>
              <strong>Information Product</strong>
            </caption>
            <colgroup>
              <col style="width: 170px" />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Stock Price Information</td>
                <td class="left">
                  Basic stock price Information, asking price, execution price by time, transaction by the member
                  company, transaction by date
                </td>
              </tr>
              <tr>
                <td>Major Indices</td>
                <td class="left">KOSPI Composite Index, KOSPI200, KOSDAQ Composite Index</td>
              </tr>
              <tr>
                <td>Disclosure Information</td>
                <td class="left">Recent Disclosure</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="title-wrap sub"><h3 class="title">API Service</h3></div>
        <div class="txt-cnts">
          (API method) Choose between the JSON method and the XML method (No additional cost other than Information
          Usage fee).
        </div>
        <div class="title-wrap sub"><h3 class="title">API Service Example</h3></div>
        <ul class="api-cnts">
          <li>
            <a href="#none" download>JSON Service <br />Data Specification</a>
          </li>
          <li>
            <a href="#none" download>How to <br />Use JSON Service</a>
          </li>
          <li>
            <a href="#none" download>XML Service <br />Data Specification</a>
          </li>
          <li>
            <a href="#none" download>How to <br />Use XML Service</a>
          </li>
        </ul>
        <div class="title-wrap sub"><h3 class="title">To Use Treasury Stock Price Information</h3></div>
        <div>
          Choose between directly receiving from Koscom (API method) or Information providers (vendors) that can provide
          the company’s stock pric through web services.
        </div>
        <div class="title-wrap sub-h4"><h4 class="sub-title">Inquiry</h4></div>
        <ul class="list dot">
          <li>Koscom Market Strategy Department</li>
          <li>TEL : 02-767-7318</li>
          <li>email : irstock@koscom.co.kr</li>
        </ul>
        <div class="mt-xl">
          <button type="button" class="button small orange">
            <i class="iconset icon-link"></i>Go to Treasury Stock Information FAQ
          </button>
        </div>
        <!-- //How to Use Information -->
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
