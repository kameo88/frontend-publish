<template>
  <div class="title-wrap">
    <h2 class="title">About Us</h2>
  </div>
  <div class="cnts-common">
    <div class="guide-desc">This is a guide to using the Koscom Market Data Customer Services website.</div>
    <div class="title-wrap sub"><h3 class="title">Website Overview</h3></div>
    <div class="txt-cnts">
      The name of this website is Market Data Customer Services, and the access URL is
      <a href="https://data.koscom.co.kr" class="txt-on" target="_blank">https://data.koscom.co.kr</a>
    </div>
    <div class="txt-cnts">
      The Market Data Customer Services is a website that provides related information to customers who use the Korea
      Exchange and Korea Financial Investment Association market information and provides the following contents.
    </div>
    <ul class="list dot">
      <li>Information Products: Information on market Information Products in Market Data Customer Services.</li>
      <li>
        Customer Needs (Contract Inquiry): Identifying needs for customers who want to apply for Market Data Customer
        Services.
      </li>
      <li>
        Announcement: Announcements regarding changes in the market system related to market information data reception.
      </li>
      <li>
        Customer Service: Frequently asked questions (FAQs) and answers related to the use of market information and a
        1:1 inquiry service.
      </li>
      <li>Member Information: Modifying member information, contract, and user report.</li>
    </ul>
    <div class="title-wrap sub"><h3 class="title">Homepage Inquiry</h3></div>
    <div class="txt-cnts">
      If you have any inquiries regarding the use of the website, please contact us through 1:1 inquiry and we will
      reply to you as soon as possible.
    </div>
    <button type="button" class="button small orange">Go to 1:1 Inquiry</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HomepageInfo",
  setup() {
    return {};
  },
  data() {
    return {};
  },
  methods: {},
});
</script>
