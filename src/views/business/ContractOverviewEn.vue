<template>
  <div class="title-wrap">
    <h2 class="title">Agreement Procedure</h2>
  </div>
  <div class="cnts-common">
    <!-- Market Information Service Agreement Procedure -->
    <div class="guide-desc">
      The order/contract procedure for customers to use KRX information products is as follows.
    </div>
    <!-- New Customer -->
    <div class="title-wrap sub"><h3 class="title">New Customer</h3></div>
    <ol class="contract-step">
      <li class="step01">
        <div class="sub-title"><span class="txt-step">STEP 01</span>Membership Registration</div>
        <ul class="list dot">
          <li>
            Customers register on Koscom's web platform
            <a href="https://dataservice.koscom.co.kr" class="underline" target="_blank"
              >(https://dataservice.koscom.co.kr)</a
            >
          </li>
          <li>
            Before or after the customer's membership registration, Koscom may request the customer to fill out a
            'contract inquiry' on the web platform to understand the customer's needs.
          </li>
        </ul>
      </li>
      <li class="step02">
        <div class="sub-title"><span class="txt-step">STEP 02</span>Completing and Submitting Order</div>
        <ul class="list dot">
          <li>
            Koscom representative will register the order form for the customer according to the contract inquiry
            submitted by the customer or the needs of the customer.
          </li>
          <li>
            The customer can check the order form in the [My Work] menu on the website, and fill out the order form in
            the menu.
          </li>
        </ul>
      </li>
      <li class="step03">
        <div class="sub-title"><span class="txt-step">STEP 03</span>Order Approval</div>
        <ul class="list dot">
          <li>Koscom confirms and approves the order form submitted by the customer.</li>
          <li>
            If necessary, Koscom may request additional information or correction of the order form from the customer.
          </li>
        </ul>
      </li>
      <li class="step04">
        <div class="sub-title">
          <span class="txt-step">STEP 04</span>Completing Market Information Service Agreement
        </div>
        <ul class="list dot">
          <li>
            <strong class="txt-md">(General Case)</strong> The customer prints out the contract (order form and terms of
            use), signs it, and submits it to Koscom; Koscom countersigns it and returns it to the customer.
          </li>
          <li>
            <strong class="txt-md">(Vendor's Datafeed Subscriber)</strong> Without printing or signing the contract,
            Koscom delivers the Approval Notice to the customer for the order submitted by them and notifies the
            information service provider of approval.
          </li>
        </ul>
      </li>
    </ol>
    <!-- Existing Customer -->
    <div class="title-wrap sub"><h3 class="title">Existing Customer</h3></div>
    <ol class="contract-step">
      <li class="step02">
        <div class="sub-title"><span class="txt-step">STEP 01</span>Completing and Submitting Order</div>
        <ul class="list dot">
          <li>
            <strong class="txt-md">[Changing the Existing Order]</strong>
            Customers can edit and submit the previously registered order form after logging in to Koscom's web platform
            <a href="https://dataservice.koscom.co.kr" class="underline" target="_blank"
              >(https://dataservice.koscom.co.kr)</a
            >
          </li>
          <li>
            <strong class="txt-md">[Adding a New Order]</strong>
            The Koscom representative will register an order form suitable for the customer after the customer consults
            with the Koscom representative.
          </li>
          <li>
            The customer can check the order form in the [My Work] menu on the website, and fill out the order form in
            the menu.
          </li>
        </ul>
      </li>
      <li class="step03">
        <div class="sub-title"><span class="txt-step">STEP 02</span>Order Approval</div>
        <ul class="list dot">
          <li>Koscom confirms and approves the order submitted by the customer.</li>
          <li>
            If necessary, Koscom may request additional information or correction of the order form from the customer.
          </li>
        </ul>
      </li>
      <li class="step04">
        <div class="sub-title">
          <span class="txt-step">STEP 03</span>Completing Market Information Service Agreement
        </div>
        <ul class="list dot">
          <li>
            <strong class="txt-md">(General Case)</strong>
            The customer prints out the contract (order form and terms of use), signs it, and submits it to Koscom;
            Koscom countersigns it and returns it to the customer.
          </li>
          <li>
            <strong class="txt-md">(Vendor's Datafeed Subscriber)</strong>
            Without printing or signing the contract, Koscom delivers the Approval Notice to the customer for the order
            submitted by them and notifies the information service provider of approval.
          </li>
        </ul>
      </li>
    </ol>
    <!-- //Market Information Service Agreement Procedure -->
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
