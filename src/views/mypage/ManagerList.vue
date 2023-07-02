<template>
  <div class="title-wrap">
    <h2 class="title">업무담당자 관리</h2>
  </div>
  <div class="guide-box manager">
    <span class="txt"><span class="member-name">윤저축은행</span> 소속회사 직원을 추가, 관리할 수 있습니다.</span>
    <div class="btn">
      <el-button @click="dialogInviteManagerVisible = true" type="primary" size="medium">업무담당자 초대</el-button>
      <el-button @click="dialogInviteMemberVisible = true" type="primary" size="medium">구독회원 초대</el-button>
    </div>
  </div>
  <!-- table list -->
  <div class="tbl-wrap">
    <div class="tbl-top">
      <div class="left">
        <span class="sum">총<strong class="num txt-on">180</strong>건</span>
      </div>
      <div class="right">
        <el-button @click="dialogDeleteMemberVisible = true" size="medium" class="gray">선택 회원 내보내기</el-button>
      </div>
    </div>
    <el-table ref="multipleTable" :data="tableData" class="line link" style="width: 100%">
      <el-table-column type="selection" width="60"></el-table-column>
      <el-table-column prop="id" label="아이디(이메일)" show-overflow-tooltip></el-table-column>
      <el-table-column prop="name" label="담당자명" width="100"></el-table-column>
      <el-table-column prop="part" label="부서명" width="150" show-overflow-tooltip></el-table-column>
      <el-table-column prop="task" label="담당업무" width="140" show-overflow-tooltip></el-table-column>
      <el-table-column prop="status" label="상태" width="80"></el-table-column>
      <el-table-column prop="tel" label="사무실연락처" width="130"></el-table-column>
      <el-table-column prop="date1" label="가입(승인)일자" width="110"></el-table-column>
      <el-table-column prop="date2" label="최근 접속일자" width="110"></el-table-column>
    </el-table>
    <div class="btn-area">
      <el-button type="secondary">더보기</el-button>
    </div>
  </div>
  <!-- //table list -->

  <!-- modal popup ; 업무담당자 초대 -->
  <el-dialog title="업무담당자 초대" v-model="dialogInviteManagerVisible" custom-class="el-medium">
    <ul class="list-info orange">
      <li>업무담당자로 추가하실 회원님의 회사 메일주소를 입력해주세요.</li>
    </ul>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <div class="info-box type2">
        <dl>
          <dt class="label required">아이디(이메일)</dt>
          <dd class="items">
            <el-form-item prop="emailManager">
              <el-input v-model="emailManager" placeholder="이메일을 입력해 주세요." clearable></el-input>
            </el-form-item>
          </dd>
        </dl>
      </div>
    </el-form>
    <ul class="list dot small">
      <li>입력하신 회원의 이메일로 시장정보 사업시스템의 회원가입 안내 이메일이 발송됩니다.</li>
      <li>초대받으신 분은 해당 메일 내 링크를 클릭하시어 회원가입 절차를 완료해주세요.</li>
    </ul>
    <div class="btn-area">
      <el-button @click="dialogInviteManagerVisible = false" size="medium" class="gray" round>취소</el-button>
      <el-button @click="submitForm('ruleForm')" type="primary" size="medium" round>초대</el-button>
    </div>
  </el-dialog>
  <!-- //modal popup ; 업무담당자 초대 -->

  <!-- modal popup ; 구독회원 초대 -->
  <el-dialog title="구독회원 초대" v-model="dialogInviteMemberVisible" custom-class="el-medium">
    <ul class="list-info orange">
      <li>구독회원으로 추가하실 회원님의 회사 메일주소를 입력해주세요.</li>
    </ul>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <div class="info-box type2">
        <dl>
          <dt class="label required">아이디(이메일)</dt>
          <dd class="items">
            <el-form-item prop="emailMember">
              <el-input v-model="emailMember" placeholder="이메일을 입력해 주세요." clearable></el-input>
            </el-form-item>
          </dd>
        </dl>
      </div>
    </el-form>
    <ul class="list dot small">
      <li>입력하신 회원의 이메일로 시장정보 사업시스템의 뉴스레터 구독고객으로 추가되었다는 메일이 발송됩니다.</li>
      <li>초대받으신 분께는 메일을 받게 되며, 해당 메일 내 약관동의 후 뉴스레터를 정상적으로 수신이 가능합니다.</li>
    </ul>
    <div class="btn-area">
      <el-button @click="dialogInviteMemberVisible = false" size="medium" class="gray" round>취소</el-button>
      <el-button @click="submitForm('ruleForm')" type="primary" size="medium" round>초대</el-button>
    </div>
  </el-dialog>
  <!-- //modal popup ; 구독회원 초대 -->

  <!-- modal popup ; 업무담당자 삭제 -->
  <el-dialog title="업무담당자 삭제" v-model="dialogDeleteMemberVisible">
    <ul class="list-info orange">
      <li>업무 담당자에서 삭제하실 회원을 확인하시고, 삭제 사유를 입력해 주세요.</li>
    </ul>
    <!-- table list : 선택된 업무담당자 목록 -->
    <div class="tbl-wrap">
      <el-table :data="tableData" class="type2 line" style="width: 100%">
        <el-table-column prop="id" label="아이디(이메일)" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="이름" width="160"></el-table-column>
        <el-table-column prop="part" label="부서명" width="230" show-overflow-tooltip></el-table-column>
      </el-table>
    </div>
    <!-- //table list : 선택된 업무담당자 목록 -->
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <div class="info-box type2 vertical">
        <dl>
          <dt class="label">삭제 사유</dt>
          <dd class="items">
            <el-form-item prop="desc">
              <el-input
                type="textarea"
                v-model="ruleForm.desc"
                maxlength="200"
                rows="4"
                resize="none"
                placeholder="삭제 사유를 입력해 주세요."
              ></el-input>
            </el-form-item>
            <ul class="list dot small">
              <li>삭제 대상 회원의 이메일로 시장정보 사업시스템의 안내 이메일이 발송됩니다.</li>
              <li>퇴사 등의 이슈로 인해 회사 내 담당자를 소속회사에서 삭제하는 기능입니다.</li>
              <li>삭제된 직원은 별도 이메일 인증을 통해서 재인증 시 복귀할 수 있습니다.</li>
            </ul>
          </dd>
        </dl>
      </div>
    </el-form>
    <div class="btn-area">
      <el-button @click="dialogDeleteMemberVisible = false" size="medium" class="gray" round>취소</el-button>
      <el-button @click="submitForm('ruleForm')" type="primary" size="medium" round>삭제</el-button>
    </div>
  </el-dialog>
  <!-- //modal popup ; 구독회원 초대 -->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ContentLayout",
  setup() {
    return {};
  },
  data() {
    return {
      dialogInviteManagerVisible: false,
      dialogInviteMemberVisible: false,
      dialogDeleteMemberVisible: false,
      emailManager: "",
      emailMember: "",
      tableData: [
        {
          id: "kameo@kameo.com",
          name: "이기승",
          part: "자본시장마케팅팀",
          task: "계약, IT, 청구, 기타",
          status: "정상",
          tel: "02-2000-2222",
          date1: "2021.10.10",
          date2: "2021.11.10",
        },
        {
          id: "kameo@kameo.com",
          name: "이기승",
          part: "자본시장마케팅팀",
          task: "계약, 기타",
          status: "휴먼",
          tel: "02-2000-2222",
          date1: "2021.10.10",
          date2: "2021.11.10",
        },
      ],
      ruleForm: {
        emailManager: "",
        emailMember: "",
      },
      rules: {
        emailManager: [{ required: true, message: "이메일을 입력해 주세요.", trigger: "blur" }],
        emailMember: [{ required: true, message: "이메일을 입력해 주세요.", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
});
</script>
