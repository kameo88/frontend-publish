<template>
  <div class="guide-wrap">
    <!-- size style -->
    <h2 class="h2-title">Button Size</h2>
    <div class="guide-group">
      <el-button size="mini">Button size="mini" 30</el-button>
      <el-button size="small">Button size="small" 36</el-button>
      <el-button size="medium">Button size="medium" 40</el-button>
      <el-button>Button Default 50</el-button>
    </div>

    <!-- color style -->
    <h2 class="h2-title">Button color</h2>
    <div class="guide-group">
      <el-button>Default Line</el-button>
      <el-button class="none">text button</el-button>
      <el-button class="gray">Gray Line</el-button>
      <el-button class="blue">Blue Line</el-button>
      <el-button class="orange">Orange Line</el-button>
      <el-button type="primary">Orange Full Color</el-button>
      <el-button type="info">Dark Gray Full Color</el-button>
    </div>

    <!-- round style -->
    <h2 class="h2-title">Button Round - in Dialog</h2>
    <div class="guide-group">
      <el-button size="medium" round>Button Round</el-button>
      <el-button size="medium" class="gray" round>Gray Line Round</el-button>
      <el-button size="medium" class="blue" round>Blue Line Round</el-button>
      <el-button size="medium" class="orange" round>Orange Line Round</el-button>
      <el-button type="primary" size="medium" round>Orange Full Color Round </el-button>
      <el-button type="info" size="medium" round>Dark Gray Full Color Round </el-button>
      <br /><br />
      <el-button size="medium" class="gray" round>취소</el-button>
      <el-button size="medium" class="orange" round>일반</el-button>
      <el-button type="primary" size="medium" round>확인</el-button>
      <el-button type="primary" size="medium" round>동의함</el-button>
    </div>

    <!-- function style ; kameo 작업 전 -->
    <h2 class="h2-title">Button Function style</h2>
    <p class="sub-desc">
      Mother page Confirm Button <strong>Size 50</strong> / 등록, 수정 등 주요한 Button은 Full color
    </p>
    <div class="guide-group">
      <el-button class="gray">이전</el-button>
      <el-button type="primary">입력완료</el-button>
      <el-button type="info">재발송</el-button>

      <el-button class="gray">취소</el-button>
      <el-button type="primary">수정하기</el-button>

      <el-button class="gray">취소</el-button>
      <el-button type="primary">회원탈퇴</el-button>

      <el-button type="primary">목록</el-button>
    </div>

    <!-- icon style -->
    <h2 class="h2-title">Button Icon + Text</h2>
    <div class="guide-group">
      <el-button size="mini">Icon + Text </el-button>
      <el-button size="mini" icon="iconset icon-down-excel">엑셀 다운로드</el-button>
      <el-button size="mini" class="orange" icon="iconset icon-contact">연락처 추가</el-button>
      <el-button size="mini" class="orange" icon="iconset icon-add">추가</el-button>
      <el-button size="mini" icon="iconset icon-delete">삭제</el-button>
      <el-button size="small" icon="iconset icon-down-doc">PDF 다운로드</el-button>
      <el-button size="small" icon="iconset icon-print">PDF 출력</el-button>
      <el-button size="small" class="orange" icon="iconset icon-link">바로가기</el-button>
      <el-button size="small" icon="iconset icon-document">주문서 샘플</el-button>
      <el-button size="medium" class="orange" icon="iconset icon-down-file">정보이용 정책서 다운로드</el-button>
      <el-button type="primary" size="medium" icon="iconset icon-search">검색</el-button>
    </div>

    <hr />
    <h2 class="h2-title">Button Icon + Text</h2>
    <div>
      <i class="iconset icon-down-doc">다운로드</i>
      <i class="iconset icon-down-document">다운로드</i>
      <i class="iconset icon-down-file">다운로드</i>
      <i class="iconset icon-down-attach">다운로드</i>
    </div>
    <hr />
    <el-button class="icon orange">
      <i class="iconset icon-add-row">추가</i>
    </el-button>
    <button type="button" class="icon orange">
      <i class="iconset icon-add-row">추가</i>
    </button>
    <button type="button" class="icon orange">
      <i class="iconset icon-delete-row">삭제</i>
    </button>
    <button type="button" class="icon small orange">
      <i class="iconset icon-add-row">추가</i>
    </button>
    <button type="button" class="icon small orange">
      <i class="iconset icon-delete-row">삭제</i>
    </button>

    <hr />
    <h2 class="h2-title">Alert</h2>
    <div class="guide-group">
      <el-button @click="dialogAlert" size="small">Alert Message</el-button>
    </div>

    <h2 class="h2-title">Message</h2>
    <div class="guide-group">
      <el-button @click="messageInfo" size="small">Information</el-button>
      <el-button @click="messageSuccess" size="small">Success</el-button>
      <el-button @click="messageWarning" size="small">Warning</el-button>
      <el-button @click="messageError" size="small">Error</el-button>
    </div>
    <h2 class="h2-title">Notification</h2>
    <div class="guide-group">
      <el-button @click="openInfo" size="small">Information</el-button>
      <el-button @click="openSuccess" size="small">Success</el-button>
      <el-button @click="openWarning" size="small">Warning</el-button>
      <el-button @click="openError" size="small">Error</el-button>
    </div>

    <h2 class="h2-title">Dialog</h2>
    <div class="guide-group">
      <el-button @click="dialogVisible" size="small">Dialog small size</el-button>
      <el-button @click="dialogVisible" size="small">Dialog medium size</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ContentLayout",
  setup() {
    return {};
  },
  data() {
    return {};
  },
  methods: {
    dialogAlert() {
      this.$alert(" 저장되지 않았습니다. </br> This is a message", {
        dangerouslyUseHTMLString: true,
        showClose: false,
        confirmButtonText: "확인",
        cancelButtonClass: "gray",
        roundButton: true,
        buttonSize: "medium",
      });
    },
    dialogMessage() {
      this.$confirm(" 수정하시겠습니까? </br> This is a message", {
        dangerouslyUseHTMLString: true,
        closeOnClickModal: false,
        showClose: false,
        confirmButtonText: "확인",
        cancelButtonText: "취소",
        cancelButtonClass: "gray",
        roundButton: true,
        buttonSize: "medium",
      });
    },
    messageInfo() {
      this.$message({
        message: "알림 메시지",
        showClose: "true",
        //duration: 0,
      });
    },
    messageSuccess() {
      this.$message.success({
        message: "성공 메시지",
        showClose: "true",
        //duration: 0,
      });
    },
    messageWarning() {
      this.$message.warning({
        message: "경고 메시지",
        showClose: "true",
        //duration: 0,
      });
    },
    messageError() {
      this.$message.error({
        message: "에러 메시지",
        showClose: "true",
        //duration: 0,
      });
    },
    openInfo() {
      this.$notify.info({
        message: "문의사항 접수가 완료되었습니다.",
        type: "success",
        // duration: 0,
        customClass: "info",
      });
    },
    openSuccess() {
      this.$notify.success({
        title: "임시 비밀번호 발송되었습니다.",
        message: "아이디(이메일)로 발송된 임시 비밀번호로 로그인 후 비밀번호를 변경해주세요.",
        type: "success",
        // duration: 0,
        customClass: "success",
      });
    },
    openWarning() {
      this.$notify.warning({
        message: "예) 입력 제한 문자가 포함되어 있습니다.",
        type: "warning",
        duration: 0,
        customClass: "warning",
      });
    },
    openError() {
      this.$notify.error({
        message: "가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.",
        type: "error",
        // duration: 0,
        customClass: "error",
      });
    },
  },
});
</script>
