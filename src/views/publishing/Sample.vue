<template>
  <splitpanes class="default-theme" style="height: 400px">
    <pane min-size="10" max-size="70">
      <span>1</span>
    </pane>
    <pane>
      <span>2</span>
    </pane>
    <pane max-size="70">
      <span>3</span>
    </pane>
  </splitpanes>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

export default defineComponent({
  components: { Splitpanes, Pane },
  setup() {
    return {};
  },
  methods: {
    resize() {
      console.log("aaaa");
    },
  },
});
</script>

<style scoped></style>
