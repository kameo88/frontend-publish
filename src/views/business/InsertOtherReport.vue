<template>
  <div class="title-wrap">
    <h2 class="title">기타 신고 변경</h2>
  </div>
  <div class="guide-desc">
    <ul class="list dot">
      <li>
        기타신고사항 변경을 통해 계약 내 기타사항 항목(연락처, 데이터피드 설치주소, 관계사, 기술대리인 등)을 변경할 수
        있습니다.
      </li>
      <li>
        기타사항 내용에 대한 내용을 변경하시고 변경요청하시면 관리자(영업담당자)의 승인 후에 반영됩니다.(단. 연락처의
        경우 관리자의 승인 없이 바로 반영)
      </li>
      <li>자세한 사항은 담당 영업담당자를 통해서 문의하시면 됩니다.</li>
    </ul>
  </div>
  <!-- "확인" 버튼 클릭 전 -->
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
    <div class="title-wrap sub">
      <h3 class="title">계약서 선택</h3>
    </div>
    <div class="info-box box">
      <dl>
        <dt class="label">계약서 선택</dt>
        <dd class="items">
          <el-form-item prop="contract" class="inline">
            <el-select v-model="ruleForm.contract" placeholder="선택하세요.">
              <el-option
                v-for="item in ruleForm.optionsContract"
                :key="item.contract"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <ul class="list mark inline">
            <li>기타신고사항을 변경할 계약서를 선택해 주세요.</li>
          </ul>
        </dd>
      </dl>
    </div>
    <div class="title-wrap sub">
      <h3 class="title">변경 항목 선택</h3>
    </div>
    <div class="info-box box">
      <dl>
        <dt class="label">항목 선택</dt>
        <dd class="items">
          <el-form-item prop="changeItems">
            <el-checkbox-group v-model="ruleForm.changeItems">
              <el-checkbox label="연락처"></el-checkbox>
              <el-checkbox label="데이터피드 설치주소"></el-checkbox>
              <el-checkbox label="관계사"></el-checkbox>
              <el-checkbox label="기술대리인"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <ul class="list mark">
            <li>중개사(회원사)항목 변경을 원하시면 데이터피드 항목을 선택해 주세요.</li>
          </ul>
        </dd>
      </dl>
    </div>
  </el-form>
  <!-- button area -->
  <div class="btn-area">
    <el-button class="gray">취소</el-button>
    <el-button type="primary">확인</el-button>
  </div>
  <!-- //button area -->
  <!-- //"확인" 버튼 클릭 전 -->

  <!-- "확인" 버튼 클릭 후 -->
  <div class="title-wrap sub">
    <h3 class="title">기타 신고 변경 요청 항목</h3>
  </div>
  <div class="info-box box gray">
    <dl>
      <dt class="label">
        <span>변경요청</span>
        <span>대상 계약</span>
      </dt>
      <dd class="items">
        <span class="txt">실시간/외부제공 (계약이름표시)</span>
        <el-button size="mini">주문서 보기</el-button>
      </dd>
    </dl>
    <dl>
      <dt class="label">
        <span>변경요청</span>
        <span>대상 항목</span>
      </dt>
      <dd class="items">연락처 / 데이터피드 설치주소 / 관계사 / 기술대리인</dd>
    </dl>
  </div>
  <div class="title-wrap sub">
    <h2 class="title"><span class="order etc">기타 신고 변경 항목</span></h2>
  </div>
  연락처, 데이터피드, 관계사, 기술대리인 contents ~~
  <div class="title-wrap sub">
    <h3 class="title">반려 사유</h3>
  </div>
  <div class="info-box box txt">반려 사유 - 영업사원이 등록한 내용이 보여집니다.</div>

  <!-- button area -->
  <div class="btn-area">
    <el-button class="gray">취소</el-button>
    <el-button type="primary">변경 요청하기</el-button>
  </div>
  <!-- //button area -->
  <!-- //"확인" 버튼 클릭 후 -->
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
      ruleForm: {
        contract: "",
        optionsContract: [
          {
            label: "계약서1",
            value: "계약서1",
          },
        ],
        changeItems: ["연락처", "관계사"],
      },
    };
  },
  methods: {},
});
</script>
