<template>
  <div>
    <Editor api-key="no-api-key" :init="initOptions" />
  </div>
</template>

<script lang="ts">
// 참조 사이트 : https://www.tiny.cloud/blog/tinymce-vue-3-support/

import { defineComponent } from "vue";
import Editor from "@tinymce/tinymce-vue";

export default defineComponent({
  name: "TinymceEditor",
  components: {
    Editor,
  },
  setup(props, context) {
    const initOptions: any = {
      menubar: false,
      plugins: [
        "advlist autolink lists link image charmap print preview anchor",
        "searchreplace visualblocks code fullscreen",
        "insertdatetime media table paste code help wordcount",
      ],
      toolbar:
        "undo redo | formatselect | " +
        "bold italic backcolor | alignleft aligncenter " +
        "alignright alignjustify | bullist numlist outdent indent | " +
        "removeformat | help",
      content_style:
        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
    };

    return {
      initOptions,
    };
  },
});
</script>

<style scoped></style>
