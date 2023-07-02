<template>
  <div class="title-wrap">
    <h2 class="title">결재 정보</h2>
  </div>
  <!-- 결재 정보 -->
  <div class="title-wrap sub">
    <h3 class="title">결재 정보</h3>
  </div>
  <div class="info-box box gray">
    <dl>
      <dt class="label">결재 종류</dt>
      <dd class="items">사전확인/체결통보/해지통보</dd>
      <dt class="label">작성자</dt>
      <dd class="items">김소연</dd>
    </dl>
    <dl>
      <dt class="label">문서번호</dt>
      <dd class="items">KRXDATA2021XXX</dd>
      <dt class="label">등록일</dt>
      <dd class="items">2010-10</dd>
    </dl>
    <dl>
      <dt class="label">주문서 보기</dt>
      <dd class="items">
        <a href="#none" class="file-link" download>
          <span class="name">삼성증권 - 신규- 실시간/종가/외부제공 - 20130412</span>
          <span class="iconset icon-down-attach">파일 다운로드</span>
        </a>
      </dd>
      <dt class="label">요약본 다운로드</dt>
      <dd class="items">
        <a href="#none" class="file-link" download>
          <span class="name">다운로드</span>
          <span class="iconset icon-down-attach">파일 다운로드</span>
        </a>
      </dd>
    </dl>
  </div>
  <!-- //결재 정보 -->

  <!-- KRX 기안 내용 -->
  <div class="title-wrap sub">
    <h3 class="title">KRX 기안 내용</h3>
  </div>
  <div class="post-view basic">
    <div class="title-area">
      <span class="txt"> [사전확인]증권시세정보 제공 신규 계약 삼성증권 </span>
    </div>
    <div class="cnts">기안 내용 출력</div>
    <dl class="files-area">
      <dt class="label">첨부파일</dt>
      <dd class="files">
        <ul class="files-list">
          <li>
            <a href="#none" class="file-link" download>
              <span class="name">코드값모음집_20210614.xlsx</span>
              <span class="iconset icon-down-attach">파일 다운로드</span>
            </a>
          </li>
          <li>
            <a href="#none" class="file-link" download>
              <span class="name">코드값모음집_20210614.xlsx</span>
              <span class="iconset icon-down-attach">파일 다운로드</span>
            </a>
          </li>
        </ul>
      </dd>
    </dl>
    <dl class="etc-area">
      <dt class="label">메모</dt>
      <dd class="item">
        결재등록자(작성자)가 등록 시 입력한 메모 내용이 표시됩니다. (KRX 담당자에게 메모내용이 표시됩니다.)
        결재등록자(작성자)가 등록 시 입력한 메모 내용이 표시됩니다. (KRX 담당자에게 메모내용이 표시됩니다.)
        결재등록자(작성자)가 등록 시 입력한 메모 내용이 표시됩니다. (KRX 담당자에게 메모내용이 표시됩니다.)
      </dd>
    </dl>
  </div>
  <!-- //KRX 기안 내용 -->

  <!-- 결재현황 -->
  <div class="title-wrap sub">
    <h3 class="title">결재 현황</h3>
  </div>
  <div class="info-box biz">
    <dl>
      <dt class="label">KRX 확인</dt>
      <dd class="items">
        <div class="approver-wrap">
          <span class="status">확인 전</span>
          <el-form-item prop="approvalDesc11" class="inline">
            <el-input v-model="approvalDesc11" class="w500" clearable readonly></el-input>
          </el-form-item>
          <span class="approver-time">
            <span class="time-line">확인일시</span>
            <span class="date">2021-10-10</span>
          </span>
        </div>
      </dd>
    </dl>
  </div>
  <!-- //결재현황 -->

  <!-- 결재현황 -->
  <div class="title-wrap sub">
    <h3 class="title">결재 현황</h3>
  </div>
  <div class="info-box biz">
    <dl>
      <dt class="label">KRX 확인</dt>
      <dd class="items">
        <div class="approver-wrap">
          <span class="status ok">통보완료</span>
          <span class="approver-time">
            <span class="time-line">통보일시</span>
            <span class="date">2021-10-20</span>
            <span class="time">10:00:00</span>
          </span>
        </div>
      </dd>
    </dl>
  </div>
  <!-- //결재현황 -->

  <!-- button area -->
  <div class="btn-area">
    <el-button class="gray">목록</el-button>
    <el-button @click="dialogRejectVisible = true" class="orange">반려</el-button>
    <el-button @click="dialogApprovalVisible = true" type="primary">승인</el-button>
  </div>
  <!-- //button area -->

  <!-- 반려 사유 modal popup -->
  <el-dialog title="반려 사유" v-model="dialogRejectVisible" custom-class="el-medium">
    <ul class="list-info orange">
      <li>반려 시 메시지를 작성해주세요.(필수 아님)</li>
    </ul>
    <el-form>
      <el-form-item prop="opinion">
        <el-input type="textarea" v-model="opinion" maxlength="200" rows="4" resize="none" show-word-limit></el-input>
      </el-form-item>
    </el-form>
    <div class="btn-area">
      <el-button @click="dialogRejectVisible = false" size="medium" class="gray" round>취소</el-button>
      <el-button type="primary" size="medium" round>확인</el-button>
    </div>
  </el-dialog>
  <!-- //반려 사유 modal popup -->
  <!-- 결재 의견 modal popup -->
  <el-dialog title="결재 의견" v-model="dialogApprovalVisible" custom-class="el-medium">
    <ul class="list-info orange">
      <li>결재 시 메시지를 작성해주세요.(필수 아님)</li>
    </ul>
    <el-form>
      <el-form-item prop="opinion">
        <el-input type="textarea" v-model="opinion" maxlength="200" rows="4" resize="none" show-word-limit></el-input>
      </el-form-item>
    </el-form>
    <div class="btn-area">
      <el-button @click="dialogApprovalVisible = false" size="medium" class="gray" round>취소</el-button>
      <el-button type="primary" size="medium" round>확인</el-button>
    </div>
  </el-dialog>
  <!-- //결재 의견 modal popup -->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "KRXApprovalDetails",
  setup() {
    return {};
  },
  data() {
    return {
      dialogRejectVisible: false,
      dialogApprovalVisible: false,
    };
  },
  methods: {},
});
</script>
