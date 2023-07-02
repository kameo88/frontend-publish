<template>
  <div class="title-wrap">
    <h2 class="title">계약 문의</h2>
  </div>
  <div class="guide-desc">계약 문의 작성 후 답변 내용은 이메일로 확인하실 수 있습니다.</div>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
    <!-- 고객정보 -->
    <div class="title-wrap sub">
      <h3 class="title v-m"><span class="list-order">1</span>고객정보(주요 회사정보)를 입력해주십시오.</h3>
    </div>
    <div class="info-box biz">
      <dl>
        <dt class="label required">회사명</dt>
        <dd class="items">
          <el-form-item prop="companyName">
            <el-input v-model="ruleForm.companyName" placeholder="회사명을 입력해 주세요."></el-input>
          </el-form-item>
        </dd>
      </dl>
      <dl>
        <dt class="label">홈페이지 정보</dt>
        <dd class="items">
          <el-form-item prop="url">
            <el-input v-model="ruleForm.url" placeholder="홈페이지 정보를 입력해 주세요."></el-input>
          </el-form-item>
        </dd>
      </dl>
      <dl>
        <dt class="label">회사 국가 정보</dt>
        <dd class="items">
          <el-form-item prop="companyInfo">
            <el-select v-model="ruleForm.companyInfo" placeholder="국가를 선택하세요.">
              <el-option
                v-for="item in ruleForm.optionsCompanyInfol"
                :key="item.companyInfo"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </dd>
      </dl>
      <dl>
        <dt class="label">회사 주소</dt>
        <dd class="items">
          <div class="address-wrap">
            <el-form-item prop="zipCode">
              <el-input v-model="ruleForm.zipCode" class="zipcode" placeholder="우편번호" clearable></el-input>
            </el-form-item>
            <el-form-item prop="city">
              <el-input v-model="ruleForm.city" class="address" placeholder="시도" clearable></el-input>
            </el-form-item>
            <el-form-item prop="address">
              <el-input v-model="ruleForm.address" class="address detail" placeholder="상세 주소" clearable></el-input>
            </el-form-item>
          </div>
        </dd>
      </dl>
      <dl>
        <dt class="label">담당자명</dt>
        <dd class="items">
          <div class="name-wrap">
            <el-form-item prop="lastName">
              <el-input
                v-model="ruleForm.lastName"
                placeholder="이름을 입력해 주세요."
                class="name last"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item prop="firstName">
              <el-input
                v-model="ruleForm.firstName"
                placeholder="성을 입력해 주세요."
                class="name"
                clearable
              ></el-input>
            </el-form-item>
          </div>
        </dd>
      </dl>
      <dl>
        <dt class="label required">담당자 이메일</dt>
        <dd class="items">
          <el-form-item prop="email">
            <el-input v-model="ruleForm.email" placeholder="이메일을 입력해 주세요."></el-input>
          </el-form-item>
        </dd>
      </dl>
      <dl>
        <dt class="label">담당자 연락처</dt>
        <dd class="items">
          <el-form-item prop="tel">
            <el-input v-model="ruleForm.tel" placeholder="+082-"></el-input>
          </el-form-item>
        </dd>
      </dl>
    </div>
    <!-- //고객정보 -->
    <!-- 개인정보 동의 -->
    <div class="title-wrap sub">
      <h3 class="title">개인정보 수집 및 이용동의에 동의해주십시오. (개인정보 수집 및 이용 동의 필수)</h3>
    </div>
    <div class="info-box biz">
      <ul class="terms-list">
        <li>
          <el-form-item prop="checkAgree">
            <el-checkbox v-model="ruleForm.checkAgree">[필수] 개인정보 수집 및 이용 동의</el-checkbox>
          </el-form-item>
          <a href="#none" @click="dialogAgreementVisible1 = true" class="viewer">내용보기</a>
        </li>
      </ul>
    </div>
    <!-- //개인정보 동의 -->
    <!-- 회사 주요 업종 -->
    <div class="title-wrap sub">
      <h3 class="title v-m"><span class="list-order">2</span>회사의 주요 업종을 선택해 주십시오. (복수선택 가능)</h3>
    </div>
    <div class="info-box biz">
      <div class="form-list check-list">
        <el-form-item prop="companyKind">
          <el-checkbox-group v-model="ruleForm.companyKind" class="col-5">
            <div class="item"><el-checkbox label="정보사업자"></el-checkbox></div>
            <div class="item"><el-checkbox label="증권/선물사"></el-checkbox></div>
            <div class="item"><el-checkbox label="은행/금융기관"></el-checkbox></div>
            <div class="item"><el-checkbox label="자산 운용사"></el-checkbox></div>
            <div class="item"><el-checkbox label="지수 사업자"></el-checkbox></div>
            <div class="item"><el-checkbox label="사무 관리사"></el-checkbox></div>
            <div class="item"><el-checkbox label="Hedge Fund"></el-checkbox></div>
            <div class="item"><el-checkbox label="투자회사"></el-checkbox></div>
            <div class="item"><el-checkbox label="채권 평가사"></el-checkbox></div>
            <div class="item"><el-checkbox label="소프트웨어 사업자"></el-checkbox></div>
            <div class="item"><el-checkbox label="언론사"></el-checkbox></div>
            <div class="item data">
              <el-checkbox label="기타">기타</el-checkbox>
              <el-form-item>
                <el-input class="label-input" placeholder="기타 업종을 입력해 주세요."></el-input>
              </el-form-item>
            </div>
            <div class="item">
              <el-checkbox label="중소기업 창업지원법 기준 설립 7년 이내 스타트업인 경우" class="orange"></el-checkbox>
            </div>
          </el-checkbox-group>
        </el-form-item>
      </div>
    </div>
    <!-- //회사 주요 업종 -->
    <!-- KRX 정보 상품 -->
    <div class="title-wrap sub">
      <h3 class="title v-m"><span class="list-order">3</span>KRX 정보 상품을 현재 이용중이십니까?</h3>
    </div>
    <div class="info-box biz">
      <div class="form-list">
        <el-form-item prop="krxProduct1" class="inline">
          <el-radio-group v-model="ruleForm.krxProduct1">
            <el-radio label="예"></el-radio>
            <el-radio label="아니오"></el-radio>
          </el-radio-group>
        </el-form-item>
        <ul class="list mark inline">
          <li>("예"인 경우 아래 선택, 복수 선택 가능)</li>
        </ul>
        <el-form-item prop="krxProduct2">
          <el-checkbox-group v-model="ruleForm.krxProduct2" class="col-5">
            <div class="item"><el-checkbox label="외부 제공"></el-checkbox></div>
            <div class="item"><el-checkbox label="최종 이용(내부 용도)"></el-checkbox></div>
            <div class="item data">
              <el-checkbox label="기타"></el-checkbox>
              <el-form-item>
                <el-input class="label-input" placeholder="기타 내용을 입력해 주세요."></el-input>
              </el-form-item>
            </div>
          </el-checkbox-group>
        </el-form-item>
      </div>
    </div>
    <!-- //KRX 정보 상품 -->
    <!-- 정보상품 선택 -->
    <div class="title-wrap sub">
      <h3 class="title v-m"><span class="list-order">4</span>이용하고자 하는 정보상품을 선택해주십시오.</h3>
    </div>
    <!-- 11/04 table 대신 check list로 대체 -->
    <div class="info-box biz">
      <div class="form-list check-list">
        <el-form-item prop="permission">
          <el-checkbox-group v-model="ruleForm.permission" class="col-1">
            <div class="item">
              <el-checkbox label="증권A">
                <span class="product">증권A</span>
                <span class="market">코스피 시장 주식</span>
              </el-checkbox>
            </div>
            <div class="item">
              <el-checkbox label="증권B">
                <span class="product">증권B</span>
                <span class="market">코스피 시장 주식</span>
              </el-checkbox>
            </div>
            <div class="item">
              <el-checkbox label="증권C">
                <span class="product">증권C</span>
                <span class="market">ELW, ETF, ETN</span>
              </el-checkbox>
            </div>
          </el-checkbox-group>
        </el-form-item>
      </div>
    </div>
    <!-- //11/04 table 대신 check list로 대체 -->
    <!-- <div class="tbl-wrap">
      <el-table :data="tableDataProduct" class="type2" style="width: 100%">
        <el-table-column label="사용여부" width="100">
          <template v-slot="scope"><el-checkbox v-model="scope.row.isEnabled"></el-checkbox></template>
        </el-table-column>
        <el-table-column prop="name" label="정보상품명" width="280"></el-table-column>
        <el-table-column prop="market" label="대상 시장" align="left"></el-table-column>
      </el-table>
    </div> -->
    <!-- //정보상품 선택 -->

    <!-- 정보 수신 주기 -->
    <div class="title-wrap sub">
      <h3 class="title v-m">
        <span class="list-order">5</span>정보이용목적 및 정보 수신 주기를 선택해 주십시오. (복수 선택 가능)
      </h3>
    </div>
    <div class="tbl-wrap">
      <el-table :data="tableDataCycle" :span-method="tableCycleHeaderMerge3" class="type2" style="width: 100%">
        <el-table-column label="구분" class-name="tbl-inner-wrap" width="480">
          <template #default>
            <el-table
              :data="tableDataCycleInner"
              :span-method="tableCycleRowMerge2"
              class="no-header"
              style="width: 100%"
            >
              <el-table-column prop="type1" width="240"></el-table-column>
              <el-table-column prop="type2" width="240"></el-table-column>
              <el-table-column prop="purpose">
                <el-table-column prop="purpose1">
                  <template v-slot="scope"><el-checkbox v-model="scope.row.isEnabled"></el-checkbox></template>
                </el-table-column>
                <el-table-column prop="purpose2">
                  <template v-slot="scope"><el-checkbox v-model="scope.row.isEnabled"></el-checkbox></template>
                </el-table-column>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column label="정보 이용목적">
          <el-table-column label="외부 제공"></el-table-column>
          <el-table-column label="최종 이용(내부용도)"></el-table-column>
        </el-table-column>
      </el-table>
    </div>
    <!-- //정보 수신 주기 -->
    <!-- 정보 분배 방식 -->
    <div class="title-wrap sub">
      <h3 class="title v-m">
        <span class="list-order">6</span>(외부 제공 시) 귀사의 고객사에 정보를 분배하는 방식을 선택해 주십시오. (복수
        선택 가능)
      </h3>
    </div>
    <div class="info-box biz">
      <div class="form-list check-list">
        <el-form-item prop="division">
          <el-checkbox-group v-model="ruleForm.division" class="col-5">
            <div class="item"><el-checkbox label="데이터피드"></el-checkbox></div>
            <div class="item"><el-checkbox label="조회 전용"></el-checkbox></div>
            <div class="item data">
              <el-checkbox label="기타"></el-checkbox>
              <el-form-item>
                <el-input class="label-input" placeholder="기타 내용을 입력해 주세요."></el-input>
              </el-form-item>
            </div>
          </el-checkbox-group>
        </el-form-item>
      </div>
    </div>
    <!-- //정보 분배 방식 -->
    <!-- 정보 이용 범위 -->
    <div class="title-wrap sub">
      <h3 class="title v-m"><span class="list-order">7</span>(외부 제공 시) 정보이용 범위를 선택해 주십시오.</h3>
    </div>
    <div class="info-box biz">
      <div class="form-list check-list">
        <el-form-item prop="permission">
          <el-checkbox-group v-model="ruleForm.permission" class="col-1">
            <div class="item">
              <el-checkbox
                label="일반용 (1. 내부 용도, 2. 내부 용도 가입자에게 제공, 3. 방송매체를 통한 제공)"
              ></el-checkbox>
            </div>
            <div class="item">
              <el-checkbox label="소매 전용 (개인 가입자 대상 정보제공)"></el-checkbox>
            </div>
            <div class="item">
              <el-checkbox label="웹사이트 체결가 (웹사이트 및 모바일을 통해 일반 대중 대상 정보제공)"></el-checkbox>
            </div>
            <div class="item">
              <el-checkbox label="방송 매체 전용"></el-checkbox>
            </div>
          </el-checkbox-group>
        </el-form-item>
        <ul class="list mark">
          <li>
            관련 자세한 내용은 정보이용 정책서 참조
            <a href="https://data.koscom.co.kr/epolicy" download>(https://data.koscom.co.kr/epolicy)</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- //정보 이용 범위 -->
    <!-- 정보 수신 방법 -->
    <div class="title-wrap sub">
      <h3 class="title v-m"><span class="list-order">8</span>정보 수신 방법을 선택해 주십시오.</h3>
    </div>
    <div class="info-box biz">
      <div class="form-list check-list">
        <el-form-item prop="reception">
          <el-checkbox-group v-model="ruleForm.reception" class="col-1">
            <div class="item">
              <el-checkbox
                label="일반용 (1. 내부 용도, 2. 내부 용도 가입자에게 제공, 3. 방송매체를 통한 제공)"
              ></el-checkbox>
            </div>
            <div class="item">
              <el-checkbox label="준 직접 (한국거래소의 회원사를 통해 수신): 회원사 명 기재"></el-checkbox>
              <el-form-item>
                <el-input class="label-input" placeholder="기타 내용을 입력해 주세요."></el-input>
              </el-form-item>
            </div>
            <div class="item">
              <el-checkbox label="간접: 이용 고려중인 벤더 명 기재"></el-checkbox>
              <el-form-item>
                <el-input class="label-input" placeholder="기타 내용을 입력해 주세요."></el-input>
              </el-form-item>
            </div>
          </el-checkbox-group>
        </el-form-item>
      </div>
    </div>
    <!-- //정보 수신 방법 -->
    <!-- 비조회형 -->
    <div class="title-wrap sub">
      <h3 class="title v-m"><span class="list-order">9</span>비조회형으로 정보이용 목적이 있으신가요?</h3>
    </div>
    <div class="info-box biz">
      <div class="form-list">
        <el-form-item prop="nonDisplay1" class="inline">
          <el-radio-group v-model="ruleForm.nonDisplay1">
            <el-radio label="예"></el-radio>
            <el-radio label="아니오"></el-radio>
          </el-radio-group>
        </el-form-item>
        <ul class="list mark inline">
          <li>("예"인 경우 아래 선택, 복수 선택 가능)</li>
        </ul>
        <el-form-item prop="nonDisplay2">
          <el-checkbox-group v-model="ruleForm.nonDisplay2" class="col-1">
            <div class="item">
              <el-checkbox label="트레이딩 용도 (알고리즘 트레이딩, 고빈도 매매 등)"></el-checkbox>
            </div>
            <div class="item">
              <el-checkbox label="기타 용도 (아래 상세 항목을 선택해주세요.)"></el-checkbox>
            </div>
            <div class="item">
              <el-checkbox label="리스크 관리"></el-checkbox>
            </div>
            <div class="item">
              <el-checkbox label="계량분석"></el-checkbox>
            </div>
            <div class="item">
              <el-checkbox label="포트폴리오 관리"></el-checkbox>
            </div>
            <div class="item">
              <el-checkbox label="기타"></el-checkbox>
              <el-form-item>
                <el-input class="label-input" placeholder="기타 내용을 입력해 주세요."></el-input>
              </el-form-item>
            </div>
          </el-checkbox-group>
        </el-form-item>
        <ul class="list mark">
          <li>조회형 정보이용이란 : 정보의 조회 또는 분배 이외 목적으로 실시간 정보를 접속, 가공 또는 이용하는 행위</li>
        </ul>
      </div>
    </div>
    <!-- //비조회형 -->
    <!-- 지수산출 -->
    <div class="title-wrap sub">
      <h3 class="title v-m"><span class="list-order">10</span>지수산출 또는 매매용금융상품 생성 목적이 있으신가요?</h3>
    </div>
    <div class="info-box biz">
      <div class="form-list">
        <el-form-item prop="index1" class="inline">
          <el-radio-group v-model="ruleForm.index1">
            <el-radio label="예"></el-radio>
            <el-radio label="아니오"></el-radio>
          </el-radio-group>
        </el-form-item>
        <ul class="list mark inline">
          <li>("예"인 경우 아래 선택)</li>
        </ul>
        <el-form-item prop="index2">
          <el-checkbox-group v-model="ruleForm.index2" class="col-1">
            <div class="item">
              <el-checkbox label="지수 산출"></el-checkbox>
            </div>
            <div class="item">
              <el-checkbox
                label="매매용 금융상품의 생성 또는 가격 도출 목적 (CFD, DLC, ETF, 지분증권, 파생계약 등)"
              ></el-checkbox>
            </div>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item prop="index3">
          <el-checkbox-group v-model="ruleForm.index3" class="sub col-1">
            <div class="item">
              <el-checkbox label="CFD"></el-checkbox>
            </div>
            <div class="item">
              <el-checkbox label="DLC"></el-checkbox>
            </div>
            <div class="item">
              <el-checkbox label="기타"></el-checkbox>
              <el-form-item>
                <el-input class="label-input" placeholder="기타 내용을 입력해 주세요."></el-input>
              </el-form-item>
            </div>
          </el-checkbox-group>
        </el-form-item>
      </div>
    </div>
    <!-- //지수산출 -->
    <!-- 관계사의 정보 사용 여부 -->
    <div class="title-wrap sub">
      <h3 class="title v-m"><span class="list-order">11</span>관계사의 정보 사용 계획이 있으신가요?</h3>
    </div>
    <div class="info-box biz">
      <div class="form-list">
        <el-form-item prop="relation" class="inline">
          <el-radio-group v-model="ruleForm.relation">
            <el-radio label="예"></el-radio>
            <el-radio label="아니오"></el-radio>
          </el-radio-group>
        </el-form-item>
        <ul class="list mark">
          <li>관계사: 귀사가 50% 초과 지분을 보유하고 통제권을 행사할 수 있는 회사</li>
        </ul>
      </div>
    </div>
    <!-- //관계사의 정보 사용 여부 -->
    <!-- 기술 대리인 여부 -->
    <div class="title-wrap sub">
      <h3 class="title v-m"><span class="list-order">12</span>정보 수신 시 기술 대리인을 이용할 계획이 있으신가요?</h3>
    </div>
    <div class="info-box biz">
      <div class="form-list">
        <el-form-item prop="agent" class="inline">
          <el-radio-group v-model="ruleForm.agent">
            <el-radio label="예"></el-radio>
            <el-radio label="아니오"></el-radio>
          </el-radio-group>
        </el-form-item>
        <ul class="list mark">
          <li>
            기술 대리인: 정보 이용 및 분배와 관련하여 기술적/기능적 역할의 일부를 위탁 받은 자를 말하며, 기술대리인에
            의한 정보 수신 또는 이용이 필요할 경우 코스콤의 승인이 필요합니다. <br />
            관련 자세한 내용은 정보이용 정책서 참조
            <a href="https://data.koscom.co.kr/epolicy" download>(https://data.koscom.co.kr/epolicy)</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- //기술 대리인 여부 -->
    <!-- 정보수신 희망일 -->
    <div class="title-wrap sub">
      <h3 class="title v-m"><span class="list-order">13</span>정보수신 희망일을 선택해 주십시오.</h3>
    </div>
    <div class="info-box biz">
      <dl>
        <dt class="label">정보수신 희망일</dt>
        <dd class="items">
          <el-form-item prop="date" class="inline">
            <el-date-picker v-model="ruleForm.date" type="date" placeholder="YYYY-MM-DD"></el-date-picker>
          </el-form-item>
          <ul class="list mark inline">
            <li>대략적인 일정 선택</li>
          </ul>
        </dd>
      </dl>
    </div>
    <!-- //정보수신 희망일 -->
    <!-- 기타 내용 -->
    <div class="title-wrap sub">
      <h3 class="title v-m"><span class="list-order">14</span>별도 문의 사항이 있으시면 자유롭게 작성해 주십시오.</h3>
    </div>
    <div class="info-box biz">
      <dl>
        <dt class="label">기타 내용</dt>
        <dd class="items">
          <el-form-item prop="desc">
            <el-input
              type="textarea"
              v-model="ruleForm.desc"
              maxlength="200"
              rows="6"
              resize="none"
              placeholder="기타내용을 입력해 주세요."
            ></el-input>
          </el-form-item>
        </dd>
      </dl>
    </div>
    <!-- //기타 내용 -->
    <!-- 파일첨부 -->
    <div class="title-wrap sub">
      <h3 class="title v-m"><span class="list-order">15</span>첨부파일을 업로드해 주십시오.(필요시)</h3>
    </div>
    <div class="info-box biz">
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
              <div class="desc">파일타입 :jpg, gif, png, pdf, zip / 최대 10M</div>
            </template>
          </el-upload>
        </dd>
      </dl>
    </div>
    <!-- //파일첨부 -->
  </el-form>

  <!-- button area -->
  <div class="btn-area">
    <el-button class="gray">취소</el-button>
    <el-button @click="submitForm('ruleForm')" type="primary">문의하기</el-button>
  </div>
  <!-- //button area -->

  <!-- modal popup ; 이용조건 동의정보 -->
  <el-dialog title="이용조건 동의정보" v-model="dialogAgreementVisible1" custom-class="el-large">
    <ul class="list-info orange">
      <li>아래 내용을 반드시 확인 및 동의해 주시기 바랍니다.</li>
    </ul>
    <el-scrollbar class="terms-cnts">
      <strong>제1조 (목적)</strong>
      본 약관은 (주)코스콤이 제공하는 마켓데이터 고객지원 서비스(Market Data Client Services, 이하 MDCS)의 이용조건 및
      절차, 기타 필요한 사항을 규정함을 목적으로 합니다.
      <strong>제2조 (약관의 효력과 변경)</strong>
      ① 본 약관은 MDCS 홈페이지(data.koscom.co.kr)에 게시됩니다. <br />
      ② 본 약관은 MDCS 홈페이지 화면을 통하여 이를 게시하거나 전자우편 기타의 방법으로 회원에게 통지함으로써 효력을
      발생합니다. <br />
      ③ MDCS는 이용자가 본 약관 내용에 동의하는 것을 조건으로 이용자에게 서비스를 제공할 것이며, 이용자가 본 약관의
      내용에 동의하는 경우 MDCS의 서비스 제공 행위 및 이용자의 MDCS 이용 행위에는 본 약관이 우선적으로 적용됩니다.
      <br />
      ④ (주)코스콤은 필요한 경우 본 약관을 개정할 수 있으며, 개정시에는 그 개정의 주요내용과 개정 후의 약관을 MDCS
      홈페이지에 게시하며 변경된 약관은 공지와 동시에 그 효력이 발생됩니다. <br />
      ⑤ 이용자가 변경된 약관에 동의하지 아니하는 경우, 이용자는 본인의 회원등록을 취소(회원탈퇴)할 수 있으며, 변경된
      약관의 효력 발생일로부터 7일 이내에 이메일 회신 등 별도의 거부의사를 표시하지 아니하고 서비스를 계속 사용할
      경우에는 약관 변경에 동의한 것으로 간주됩니다. 변경된 약관에 대한 정보를 알지 못해 발생하는 이용자의 피해는
      (주)코스콤에서 책임지지 않습니다. <br />
      ⑥ 본 약관에 명시되지 않은 사항은 전기통신기본법, 전기통신사업법,및 기타 관계 법령의 규정에 의합니다.
    </el-scrollbar>
    <div class="btn-area">
      <el-button @click="dialogAgreementVisible1 = false" type="primary" size="medium" round>동의함</el-button>
    </div>
  </el-dialog>
  <!-- //modal popup ; 이용조건 동의정보 -->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "InquireContract",
  setup() {
    return {};
  },
  data() {
    return {
      dialogAgreementVisible1: false,
      ruleForm: {
        companyName: "",
        url: "",
        companyInfo: "대한민국",
        optionsCompanyInfo: [
          {
            label: "대한민국",
            value: "대한민국",
          },
        ],
        zipCode: "",
        city: "",
        address: "",
        firstName: "",
        lastName: "",
        email: "",
        tel: "",
        checkAgree: [],
        companyKind: [],
        krxProduct1: "예",
        krxProduct2: [],
        division: [],
        permission: [],
        reception: [],
        nonDisplay1: "예",
        nonDisplay2: [],
        nonDisplay3: [],
        index1: "예",
        index2: [],
        index3: [],
        relation: "예",
        agent: "예",
        date: "",
        desc: "",
      },
      rules: {
        companyName: [{ required: true, message: "Please enter company name", trigger: "blur" }],
        email: [{ required: true, message: "Please enter your email", trigger: "blur" }],
        checkAgree: [{ type: "array", required: true, message: "필수 항목입니다.", trigger: "change" }],
      },
      tableDataProduct: [
        {
          name: "증권A",
          market: "코스피 시장 주식",
        },
        {
          name: "증권B",
          market: "코스피 시장 주식",
        },
        {
          name: "증권C",
          market: "ELW, ETF, ETN",
        },
        {
          name: "파생상품A",
          market: "선물, 옵션 (국내: 코스피200 지수 선물/옵션 등)",
        },
        {
          name: "파생상품B",
          market: "선물, 옵션 (해외: 유로스톡 50 지수 선물)",
        },
        {
          name: "KRX채권A",
          market: "KRX채권",
        },
        {
          name: "일반상품A",
          market: "금현물, 탄소배출권",
        },
        {
          name: "KRX 종합지수",
          market: "코스피 지수, 코스피200 지수, 코스닥 지수",
        },
        {
          name: "KRX 지수 그룹 1",
          market: "KRX 지수",
        },
        {
          name: "KRX 지수 그룹 2",
          market: "KRX 지수",
        },
        {
          name: "종목별 투자자 (코스피)",
          market: "참조 정보 (종가 수신만 가능)",
        },
        {
          name: "종목별 투자자 (코스닥)",
          market: "참조 정보 (종가 수신만 가능)",
        },
        {
          name: "종목별 투자자 (코넥스)",
          market: "참조 정보 (종가 수신만 가능)",
        },
        {
          name: "시장 조치 (코스피)",
          market: "참조 정보 (종가 수신만 가능)",
        },
        {
          name: "시장 조치 (코스닥)",
          market: "참조 정보 (종가 수신만 가능)",
        },
        {
          name: "시장 조치 (코넥스)",
          market: "참조 정보 (종가 수신만 가능)",
        },
        {
          name: "신용 거래 (코스피)",
          market: "참조 정보 (종가 수신만 가능)",
        },
        {
          name: "신용 거래 (코스닥)",
          market: "참조 정보 (종가 수신만 가능)",
        },
        {
          name: "신용 거래 (코넥스)",
          market: "참조 정보 (종가 수신만 가능)",
        },
      ],
      tableDataCycle: [{}],
      tableDataCycleInner: [
        {
          type1: "정보 수신 주기",
          type2: "실시간",
          purpose1: "",
          purpose2: "",
        },
        {
          type1: "정보 수신 주기",
          type2: "종가",
          purpose1: "",
          purpose2: "",
        },
      ],
    };
  },
  methods: {
    tableCycleHeaderMerge3({ columnIndex }) {
      if (columnIndex === 0) {
        return [1, 3];
      } else {
        return [0, 0];
      }
    },
    tableCycleRowMerge2({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return [2, 1];
        } else {
          return [0, 0];
        }
      }
    },
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
