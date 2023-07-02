<template>
  <div class="title-wrap">
    <h2 class="title">계약 상세 정보</h2>
    <div class="btn">
      <el-button size="small" class="orange" icon="iconset icon-write">기타신고 변경요청</el-button>
    </div>
  </div>
  <div class="title-wrap sub">
    <h3 class="title">고객사 기본 정보</h3>
  </div>
  <div class="info-box box gray">
    <div class="info-area"><h4 class="title">실시간/종가/외부제공/증권선물사용_외자계</h4></div>
    <dl>
      <dt class="label">계약 일자</dt>
      <dd class="items">2020-10-10</dd>
      <dt class="label">계약 시작일</dt>
      <dd class="items">2020-10-10</dd>
    </dl>
    <dl>
      <dt class="label">해지일자</dt>
      <dd class="items">-</dd>
      <dt class="label">주문서번호</dt>
      <dd class="items">12345678</dd>
    </dl>
    <dl>
      <dt class="label">상태</dt>
      <dd class="items">신규</dd>
      <dt class="label">시간</dt>
      <dd class="items">실시간</dd>
    </dl>
    <dl>
      <dt class="label">제공 권한</dt>
      <dd class="items">외부 제공</dd>
      <dt class="label">
        <span>주문서 제공</span>
        <span>영업 담당자</span>
      </dt>
      <dd class="items">이성미</dd>
    </dl>
  </div>
  <div class="title-wrap sub">
    <h3 class="title">계약 내용</h3>
  </div>
  <div class="cnts-box">기존 주문서 항목</div>
  <!-- button area -->
  <div class="btn-area">
    <el-button class="gray">목록</el-button>
    <el-button @click="dialogCancelContractVisible = true" class="gray">해지</el-button>
    <el-button type="primary">주문서 변경</el-button>
  </div>
  <!-- //button area -->

  <!-- modal popup ; 계약 해지 신청 -->
  <el-dialog title="전체 해지 신청" v-model="dialogCancelContractVisible">
    <div class="txt-info">
      계약 해지(전체상품해지)를 원하시는 경우 적절한 해지사유를 선택하시고 해지 사유를 입력해주세요, 또한 해지에 필요한
      파일들을 업로드하실 수 있습니다.
    </div>
    <ul class="list-info orange">
      <li>
        전체 상품의 해지가 아닌 개별 상품의 해지는 주문서변경을 통해서 가능합니다. <br />
        (해당 팝업을 닫고 주문서 변경 버튼 선택해주세요)
      </li>
    </ul>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <div class="info-box type2">
        <dl>
          <dt class="label">해지 사유</dt>
          <dd class="items">
            <el-form-item prop="reason" class="full">
              <el-select v-model="ruleForm.reason" class="full" placeholder="선택하세요.">
                <el-option
                  v-for="item in ruleForm.optionsReason"
                  :key="item.reason"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </dd>
        </dl>
        <dl>
          <dt class="label">해지 사유 입력</dt>
          <dd class="items">
            <el-form-item prop="desc">
              <el-input
                type="textarea"
                v-model="ruleForm.desc"
                maxlength="100"
                rows="5"
                resize="none"
                placeholder="해지 사유를 직접 입력해 주세요.(100자 이내)"
              ></el-input>
            </el-form-item>
          </dd>
        </dl>
        <dl>
          <dt class="label">파일첨부</dt>
          <dd class="items">
            <el-upload
              class="file-upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-exceed="handleExceed"
              multiple
              :limit="3"
              :file-list="fileList"
            >
              <el-button size="small">파일업로드</el-button>
              <template #tip>
                <div class="desc">파일타입: jpg, gif, png, pdf, zip / 최대 업로드 파일 크기 10M</div>
              </template>
            </el-upload>
          </dd>
        </dl>
      </div>
    </el-form>
    <div class="btn-area">
      <el-button @click="dialogCancelContractVisible = false" size="medium" class="gray" round>취소</el-button>
      <el-button type="primary" size="medium" round>해지신청</el-button>
    </div>
  </el-dialog>
  <!-- //modal popup ; 계약 해지 신청 -->
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
      dialogCancelContractVisible: false,
      ruleForm: {
        reason: "",
        optionsReason: [
          {
            label: "해지사유",
            value: "해지사유",
          },
        ],
        desc: "",
      },
    };
  },
  methods: {},
});
</script>
