<template>
  <div class="title-wrap">
    <h2 class="title">주문서 등록</h2>
  </div>
  <!-- button area -->
  <div class="btn-area right">
    <el-button size="small" icon="iconset icon-down-doc">PDF 다운로드</el-button>
    <el-button size="small" icon="iconset icon-document">주문서 샘플</el-button>
  </div>
  <!-- //button area -->
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
    <!-- 주문서 정보 total wrap -->
    <!-- 주문서 내용 -->
    <div class="title-wrap sub mt-s">
      <h2 class="title"><span class="order basic">주문서 정보</span></h2>
    </div>
    <div class="guide-desc">주문서 등록 관련 문의사항은 주문서 제공 영업담당자에게 연락해주십시오.</div>
    <!-- 주문서 기본 정보 -->
    <div class="title-wrap sub">
      <h3 class="title">주문서 기본 정보</h3>
    </div>
    <div class="info-box box gray">
      <dl>
        <dt class="label">주문서 번호</dt>
        <dd class="items">123456789</dd>
        <dt class="label">구분</dt>
        <dd class="items">표준</dd>
      </dl>
      <dl>
        <dt class="label">시간</dt>
        <dd class="items">실시간</dd>
        <dt class="label">제공 권한</dt>
        <dd class="items">외부제공</dd>
      </dl>
      <dl>
        <dt class="label">상태</dt>
        <dd class="items">신규</dd>
        <dt class="label">
          <span>주문서 제공</span>
          <span>영업 담당자</span>
        </dt>
        <dd class="items">이소연</dd>
      </dl>
    </div>
    <div class="info-box box">
      <dl>
        <dt class="label">
          <span>고객사 주소</span>
          <span>(시/도)</span>
        </dt>
        <dd class="items">
          <el-form-item prop="addressSido">
            <el-input v-model="ruleForm.addressSido" placeholder="시/도를 입력해 주세요." clearable></el-input>
          </el-form-item>
        </dd>
        <dt class="label">
          <span>고객사 주소</span>
          <span>(상세주소)</span>
        </dt>
        <dd class="items">
          <el-form-item prop="addressDetail">
            <el-input v-model="ruleForm.addressDetail" placeholder="상세주소를 입력해 주세요." clearable></el-input>
          </el-form-item>
        </dd>
      </dl>
      <dl>
        <dt class="label">우편번호</dt>
        <dd class="items">
          <el-form-item prop="postMember">
            <el-input v-model="ruleForm.postMember" placeholder="우편번호를 입력해 주세요." clearable></el-input>
          </el-form-item>
        </dd>
        <dt class="label">대표이사 이름</dt>
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
    </div>
    <!-- //주문서 기본 정보 -->
    <!-- 주문 내용 ; 대분류 -->
    <div class="title-wrap sub">
      <h3 class="title">주문 내용</h3>
      <div class="right">
        <dl class="post-date">
          <dt class="label">게시 예정일</dt>
          <dd class="items">
            <el-form-item prop="postedDate" class="inline">
              <el-date-picker v-model="ruleForm.postedDate" type="date" placeholder="YYYY-MM-DD"></el-date-picker>
            </el-form-item>
            <ul class="list mark inline">
              <li>해당 게시일 확정일자가 아닌 계약상황에 따라 변경될 수 있습니다.</li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
    <!-- 10/05 추가 ; 상품요금 선택 -->
    <div class="tbl-wrap order">
      <div class="tbl-top"><h4 class="tbl-title price">상품요금 선택</h4></div>
      <dl>
        <dt class="label">상품요금 선택</dt>
        <dd class="items">
          <el-form-item prop="productPriceCheck">
            <el-radio-group v-model="ruleForm.productPriceCheck">
              <el-radio label="표준"></el-radio>
              <el-radio label="정액"></el-radio>
            </el-radio-group>
          </el-form-item>
        </dd>
      </dl>
    </div>
    <!-- 정보 상품 선택 -->
    <div class="tbl-wrap order">
      <div class="tbl-top"><h4 class="tbl-title goods">정보상품 선택</h4></div>
      <!-- 10/05 추가 ; 지연 시세 (지수) -->
      <el-table :data="tableDataProductType11" class="type2" style="width: 100%">
        <el-table-column prop="name" label="정보상품명"></el-table-column>
        <el-table-column label="사용여부" width="230">
          <template v-slot="scope"><el-checkbox v-model="scope.row.isEnabled"></el-checkbox></template>
        </el-table-column>
      </el-table>
      <!-- //10/05 추가 ; 지연 시세 (지수) -->
      <!-- 데이터몰 프리미엄 -->
      <el-table :data="tableDataProductType12" class="type2" style="width: 100%">
        <el-table-column prop="name" label="정보상품명"></el-table-column>
        <el-table-column prop="price" label="가격(월)" width="310">
          <el-form-item prop="productTypePrice">
            <el-input v-model="productTypePrice" class="right" clearable></el-input>
          </el-form-item>
        </el-table-column>
      </el-table>
      <!-- //데이터몰 프리미엄-->
      <el-table :data="tableDataProductPrice" :span-method="rowsapnMerge3" class="type2" style="width: 100%">
        <el-table-column prop="productType" label="구분" width="350"></el-table-column>
        <el-table-column prop="productName" label="정보상품명"></el-table-column>
        <el-table-column label="가격(월)" width="315">
          <el-form-item prop="productPrice">
            <el-input v-model="productPrice" class="right" clearable></el-input>
          </el-form-item>
        </el-table-column>
      </el-table>
      <!-- //10/05 추가 ; 상품요금 선택 -->
      <!-- 10/05 추가 ; 기준 통화 선택 -->
      <dl>
        <dt class="label">기준 통화 선택</dt>
        <dd class="items">
          <el-form-item prop="baseCurrency">
            <el-radio-group v-model="ruleForm.baseCurrency">
              <el-radio label="원화(￦)"></el-radio>
              <el-radio label="USD(＄)"></el-radio>
            </el-radio-group>
          </el-form-item>
        </dd>
      </dl>
      <!-- //10/05 추가 ; 기준 통화 선택 -->
      <el-table :data="tableDataProduct1" class="type2" style="width: 100%">
        <el-table-column label="정보상품명">
          <el-table-column prop="product1" label="Type1"></el-table-column>
          <el-table-column prop="product2" label="Type2"></el-table-column>
        </el-table-column>
        <el-table-column prop="market" label="대상시장" width="530"></el-table-column>
        <el-table-column label="사용여부" width="100">
          <template v-slot="scope"><el-checkbox v-model="scope.row.isEnabled"></el-checkbox></template>
        </el-table-column>
      </el-table>
      <div class="option check-list">
        <el-form-item prop="productType21">
          <el-checkbox v-model="ruleForm.productType21">
            <span>주식옵션 기초자산 정보에 한하여 수신이용</span>
            <ul class="list mark">
              <li>주문유형이 증권선물사의 경우에만 적용, 증권A와 증권B일 경우에만 해당됩니다.</li>
            </ul>
          </el-checkbox>
        </el-form-item>
        <el-form-item prop="productType22">
          <el-checkbox v-model="ruleForm.productType22">시스템 접속료 선택</el-checkbox>
        </el-form-item>
      </div>
      <el-table :data="tableDataProduct2" :span-method="rowsapnMerge10" class="type2" style="width: 100%">
        <el-table-column prop="type" label="구분" width="200"></el-table-column>
        <el-table-column label="정보상품명">
          <el-table-column prop="product1" label="Type1"></el-table-column>
          <el-table-column prop="product2" label="Type2"></el-table-column>
        </el-table-column>
        <el-table-column prop="market" label="대상시장" width="400"></el-table-column>
        <el-table-column label="사용여부" width="100">
          <template v-slot="scope"><el-checkbox v-model="scope.row.isEnabled"></el-checkbox></template>
        </el-table-column>
      </el-table>
      <div class="option">
        <el-form-item prop="productType3">
          <el-checkbox v-model="ruleForm.productType3"> FTP 이용료 선택</el-checkbox>
        </el-form-item>
      </div>
    </div>
    <!-- //정보 상품 선택 -->

    <!-- 정보 수신방식 -->
    <div class="tbl-wrap order">
      <div class="tbl-top"><h4 class="tbl-title info">정보 수신방식</h4></div>
      <dl>
        <dt class="label">라이선스 수신방식</dt>
        <dd class="items">
          <el-form-item prop="infoLicense">
            <el-checkbox-group v-model="ruleForm.infoLicense">
              <el-checkbox label="직접"></el-checkbox>
              <el-checkbox label="간접"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </dd>
      </dl>
      <!-- 10/05 추가 -->
      <div class="sub-title">갑에게 정보를 제공할 수 있도록 허가된 정보사업자</div>
      <!-- //10/05 추가 -->
      <div class="select-cnts">
        <!-- 정보 수신방식 - 직접1 -->
        <el-table :data="tableDataDirect1" :span-method="colsapnMerge4" class="type2" style="width: 100%">
          <el-table-column label="직접1-정보상품명" width="200">
            <template #default="scope">
              <em>{{ scope.row.product1 }}</em>
              <span>{{ scope.row.product2 }}</span>
            </template>
          </el-table-column>
          <el-table-column class-name="tbl-inner-wrap" width="52">
            <template #header>
              <span>세트 수</span>
            </template>
            <template #default>
              <div class="btn">
                <el-button class="gray" size="mini" icon="iconset icon-add-data">정보 입력하기</el-button>
              </div>
              <!-- 09/29 -->
              <el-table :data="tableDataDirectInner" class="tbl-inner" style="width: 100%">
                <el-table-column width="52">
                  <template #default>
                    <el-input v-model="DataDirect11" clearable></el-input>
                  </template>
                </el-table-column>
                <el-table-column class-name="tbl-inner-wrap">
                  <el-table :data="tableDataDirectInner1" class="tbl-inner multi" style="width: 100%">
                    <el-table-column>
                      <template #default>
                        <div class="inner-item">
                          <div class="inner-form">
                            <el-form-item prop="DataDirect12">
                              <el-select v-model="DataDirect12" placeholder="선택">
                                <el-option
                                  v-for="item in optionsDataDirect12"
                                  :key="item.DataDirect12"
                                  :label="item.label"
                                  :value="item.value"
                                >
                                </el-option>
                              </el-select>
                            </el-form-item>
                            <el-form-item>
                              <el-select v-model="DataDirect13" placeholder="선택">
                                <el-option
                                  v-for="item in optionsDataDirect13"
                                  :key="item.DataDirect13"
                                  :label="item.label"
                                  :value="item.value"
                                >
                                </el-option>
                              </el-select>
                            </el-form-item>
                            <el-form-item>
                              <el-select v-model="DataDirect14" placeholder="선택">
                                <el-option
                                  v-for="item in optionsDataDirect14"
                                  :key="item.DataDirect14"
                                  :label="item.label"
                                  :value="item.value"
                                >
                                </el-option>
                              </el-select>
                            </el-form-item>
                          </div>
                          <div class="inner-form">
                            <el-input v-model="DataDirect15" clearable></el-input>
                          </div>
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column width="70">
                      <template #default="scope">
                        <div class="btn-group">
                          <el-button @click.prevent="addRow(scope.$index, tableDataDirectInner1)" class="icon orange">
                            <i class="iconset icon-add-row">추가</i>
                          </el-button>
                          <el-button
                            @click.prevent="deleteRow(scope.$index, tableDataDirectInner1)"
                            class="icon orange"
                          >
                            <i class="iconset icon-delete-row">삭제</i>
                          </el-button>
                        </div>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-table-column>
                <el-table-column width="82">
                  <template #default>
                    <el-input v-model="DataDirect16" class="w42" clearable readonly></el-input>
                  </template>
                </el-table-column>
              </el-table>
              <!-- //09/29 -->
            </template>
          </el-table-column>
          <el-table-column>
            <template #header>
              <span>데이터피드 수신설치 주소</span>
              <span>(복수의 사이트일 경우 모두 기재)</span>
            </template>
          </el-table-column>
          <el-table-column width="82">
            <template #header>
              <span>추가 수신료</span>
              <span>적용개수</span>
            </template>
          </el-table-column>
        </el-table>
        <ul class="list-info">
          <li>
            <strong class="txt-blue">이용안내</strong>
            <ol class="list number">
              <li>정보분배 시스템으로 부터 정보를 직접 수신하는 수신세트</li>
              <li>
                재해복구 목적에 한하고 실 이용이 없는 직접 수신에 대해서는 추가수신료를 적용하지 않음.(해당 목적의 직접
                수신이 필요할 경우, '데이터피드 수신설치 주소' 란에 기재)
              </li>
            </ol>
          </li>
        </ul>
        <!-- //정보 수신방식 - 직접1 -->
        <!-- 정보 수신방식 - 직접2 -->
        <el-table :data="tableDataDirect2" :span-method="colsapnDirect6" class="type2" style="width: 100%">
          <el-table-column label="직접2-정보상품명" width="200">
            <template #default="scope">
              <em>{{ scope.row.product1 }}</em>
              <span>{{ scope.row.product2 }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="type" label="구분" width="74"></el-table-column>
          <el-table-column class-name="tbl-inner-wrap" width="52">
            <template #header>
              <span>세트 수</span>
            </template>
            <template #default>
              <el-table :data="tableDataDirectInner2Wrap" class="tbl-inner" style="width: 100%">
                <el-table-column width="52">
                  <!-- 세트 수 -->
                  <template #default>
                    <el-input v-model="DataDirect21" clearable></el-input>
                  </template>
                </el-table-column>
                <el-table-column class-name="tbl-inner-wrap">
                  <template #default>
                    <el-table :data="tableDataDirectInner2" class="tbl-inner" style="width: 100%">
                      <el-table-column class-name="upper-row" width="252">
                        <!-- 중개사명(회원사) -->
                        <template #default="scope">
                          <div class="inner-item inner-search">
                            <div class="search-box single">
                              <el-form-item>
                                <el-input v-model="DataDirect22" clearable readonly>
                                  <template #append>
                                    <el-button @click="dialogMemberVisible = true">
                                      <i class="iconset icon-search">검색</i>
                                    </el-button>
                                  </template>
                                </el-input>
                              </el-form-item>
                            </div>
                            <div class="btn-group">
                              <el-button
                                @click.prevent="addRow(scope.$index, tableDataDirectInner2)"
                                class="icon orange"
                              >
                                <i class="iconset icon-add-row">추가</i>
                              </el-button>
                              <el-button
                                @click.prevent="deleteRow(scope.$index, tableDataDirectInner2)"
                                class="icon orange"
                              >
                                <i class="iconset icon-delete-row">삭제</i>
                              </el-button>
                            </div>
                          </div>
                        </template>
                      </el-table-column>
                      <el-table-column class-name="upper-row">
                        <!-- 데이터피드 수신설치 주소 -->
                        <template #default>
                          <el-table :data="tableDataDirectInner3" class="tbl-inner multi" style="width: 100%">
                            <el-table-column>
                              <template #default>
                                <div class="inner-item vertical">
                                  <div class="inner-form">
                                    <el-form-item prop="DataDirect23">
                                      <el-select v-model="DataDirect23" placeholder="선택">
                                        <el-option
                                          v-for="item in optionsDataDirect23"
                                          :key="item.DataDirect23"
                                          :label="item.label"
                                          :value="item.value"
                                        >
                                        </el-option>
                                      </el-select>
                                    </el-form-item>
                                    <el-form-item prop="DataDirect24">
                                      <el-select v-model="DataDirect24" placeholder="선택">
                                        <el-option
                                          v-for="item in optionsDataDirect24"
                                          :key="item.DataDirect24"
                                          :label="item.label"
                                          :value="item.value"
                                        >
                                        </el-option>
                                      </el-select>
                                    </el-form-item>
                                    <el-form-item prop="DataDirect25">
                                      <el-select v-model="DataDirect25" placeholder="선택">
                                        <el-option
                                          v-for="item in optionsDataDirect25"
                                          :key="item.DataDirect25"
                                          :label="item.label"
                                          :value="item.value"
                                        >
                                        </el-option>
                                      </el-select>
                                    </el-form-item>
                                  </div>
                                  <div class="inner-form">
                                    <el-input v-model="DataDirect26" clearable></el-input>
                                  </div>
                                </div>
                              </template>
                            </el-table-column>
                            <el-table-column width="70">
                              <template #default="scope">
                                <div class="btn-group">
                                  <el-button
                                    @click.prevent="addRow(scope.$index, tableDataDirectInner3)"
                                    class="icon orange"
                                  >
                                    <i class="iconset icon-add-row">추가</i>
                                  </el-button>
                                  <el-button
                                    @click.prevent="deleteRow(scope.$index, tableDataDirectInner3)"
                                    class="icon orange"
                                  >
                                    <i class="iconset icon-delete-row">삭제</i>
                                  </el-button>
                                </div>
                              </template>
                            </el-table-column>
                          </el-table>
                        </template>
                      </el-table-column>
                    </el-table>
                  </template>
                </el-table-column>
                <el-table-column width="82">
                  <!-- 추가 수신료 적용개수 -->
                  <template #default>
                    <el-input v-model="DataDirect27" class="w42" clearable readonly></el-input>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-table-column>
          <el-table-column width="252">
            <template #header>
              <span>준 직접수신 시</span>
              <span>중개사명(회원사)</span>
            </template>
          </el-table-column>
          <el-table-column>
            <template #header>
              <span>데이터피드 수신설치 주소</span>
              <span>(복수의 사이트일 경우 모두 기재)</span>
            </template>
          </el-table-column>
          <el-table-column width="82">
            <template #header>
              <span>추가 수신료</span>
              <span>적용개수</span>
            </template>
          </el-table-column>
        </el-table>
        <ul class="list-info">
          <li>
            <strong class="txt-blue">이용안내</strong>
            <ol class="list number">
              <li>정보분배 시스템으로 부터 정보를 직접 수신하는 수신세트</li>
              <li>
                재해복구 목적에 한하고 실 이용이 없는 직접 수신에 대해서는 추가수신료를 적용하지 않음.(해당 목적의 직접
                수신이 필요할 경우, '데이터피드 수신설치 주소' 란에 기재)
              </li>
            </ol>
          </li>
        </ul>
        <!-- //정보 수신방식 - 직접2 -->
        <!-- 정보 수신방식 - 직접3 -->
        <el-table :data="tableDataDirect3" :span-method="colsapnDirect6" class="type2" style="width: 100%">
          <el-table-column label="직접3-정보상품명" width="200">
            <template #default="scope">
              <em>{{ scope.row.product1 }}</em>
              <span>{{ scope.row.product2 }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="type" label="구분" width="74"></el-table-column>
          <el-table-column class-name="tbl-inner-wrap" width="52">
            <template #header>
              <span>세트 수</span>
            </template>
            <template #default>
              <el-table :data="tableDataDirectInner3Wrap" class="tbl-inner" style="width: 100%">
                <el-table-column width="52">
                  <!-- 세트 수 -->
                  <template #default>
                    <el-input v-model="DataDirect21" clearable></el-input>
                  </template>
                </el-table-column>
                <el-table-column class-name="tbl-inner-wrap">
                  <!-- 데이터피드 수신설치 주소 -->
                  <template #default>
                    <el-table :data="tableDataDirectInner3" class="tbl-inner multi" style="width: 100%">
                      <el-table-column width="252"></el-table-column>
                      <el-table-column>
                        <template #default>
                          <div class="inner-item vertical">
                            <div class="inner-form">
                              <el-select v-model="DataDirect23" placeholder="선택">
                                <el-option
                                  v-for="item in optionsDataDirect23"
                                  :key="item.DataDirect23"
                                  :label="item.label"
                                  :value="item.value"
                                >
                                </el-option>
                              </el-select>
                              <el-select v-model="DataDirect24" placeholder="선택">
                                <el-option
                                  v-for="item in optionsDataDirect24"
                                  :key="item.DataDirect24"
                                  :label="item.label"
                                  :value="item.value"
                                >
                                </el-option>
                              </el-select>
                              <el-select v-model="DataDirect25" placeholder="선택">
                                <el-option
                                  v-for="item in optionsDataDirect25"
                                  :key="item.DataDirect25"
                                  :label="item.label"
                                  :value="item.value"
                                >
                                </el-option>
                              </el-select>
                            </div>
                            <div class="inner-form">
                              <el-input v-model="DataDirect26" clearable></el-input>
                            </div>
                          </div>
                        </template>
                      </el-table-column>
                      <el-table-column width="70">
                        <template #default="scope">
                          <div class="btn-group">
                            <el-button @click.prevent="addRow(scope.$index, tableDataDirectInner3)" class="icon orange">
                              <i class="iconset icon-add-row">추가</i>
                            </el-button>
                            <el-button
                              @click.prevent="deleteRow(scope.$index, tableDataDirectInner3)"
                              class="icon orange"
                            >
                              <i class="iconset icon-delete-row">삭제</i>
                            </el-button>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </template>
                </el-table-column>
                <el-table-column width="82">
                  <template #default>
                    <el-input v-model="DataDirect27" class="w42" clearable readonly></el-input>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-table-column>
          <el-table-column width="252">
            <!-- 중개사명(회원사) -->
            <template #header>
              <span>준 직접수신 시</span>
              <span>중개사명(회원사)</span>
            </template>
          </el-table-column>
          <el-table-column>
            <template #header>
              <span>데이터피드 수신설치 주소</span>
              <span>(복수의 사이트일 경우 모두 기재)</span>
            </template>
          </el-table-column>
          <el-table-column width="82">
            <!-- 추가 수신료 적용개수 -->
            <template #header>
              <span>추가 수신료</span>
              <span>적용개수</span>
            </template>
          </el-table-column>
        </el-table>
        <!-- //정보 수신방식 - 직접3 -->
      </div>

      <div class="select-cnts">
        <!-- 정보 수신방식 - 간접 -->
        <el-table :data="tableDataInDirect" :span-method="colsapnMerge3" class="type2" style="width: 100%">
          <el-table-column prop="product" label="간접-정보상품명" width="200">
            <template #default="scope">
              <em>{{ scope.row.product1 }}</em>
              <span>{{ scope.row.product2 }}</span>
            </template>
          </el-table-column>
          <el-table-column label="정보사업자명" class-name="tbl-inner-wrap" width="270">
            <template #default>
              <el-table :data="tableDataInDirectInner1" class="tbl-inner" style="width: 100%">
                <el-table-column class-name="upper-row" width="270">
                  <template #default="scope">
                    <div class="inner-item inner-search">
                      <div class="search-box single">
                        <el-form-item>
                          <el-input v-model="DataInDirect1" clearable readonly>
                            <template #append>
                              <el-button @click="dialogProviderVisible = true">
                                <i class="iconset icon-search">검색</i>
                              </el-button>
                            </template>
                          </el-input>
                        </el-form-item>
                      </div>
                      <div class="btn-group">
                        <el-button @click.prevent="addRow(scope.$index, tableDataInDirectInner1)" class="icon orange">
                          <i class="iconset icon-add-row">추가</i>
                        </el-button>
                        <el-button
                          @click.prevent="deleteRow(scope.$index, tableDataInDirectInner1)"
                          class="icon orange"
                        >
                          <i class="iconset icon-delete-row">삭제</i>
                        </el-button>
                      </div>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column class-name="upper-row">
                  <template #default>
                    <el-table :data="tableDataInDirectInner2" class="tbl-inner multi" style="width: 100%">
                      <el-table-column>
                        <template #default>
                          <div class="inner-item vertical">
                            <div class="inner-form">
                              <el-form-item prop="DataInDirect2">
                                <el-select v-model="DataInDirect2" placeholder="선택">
                                  <el-option
                                    v-for="item in optionsDataInDirect2"
                                    :key="item.DataInDirect2"
                                    :label="item.label"
                                    :value="item.value"
                                  >
                                  </el-option>
                                </el-select>
                              </el-form-item>
                              <el-form-item prop="DataInDirect3">
                                <el-select v-model="DataInDirect3" placeholder="선택">
                                  <el-option
                                    v-for="item in optionsDataInDirect3"
                                    :key="item.DataInDirect3"
                                    :label="item.label"
                                    :value="item.value"
                                  >
                                  </el-option>
                                </el-select>
                              </el-form-item>
                            </div>
                            <div class="inner-form">
                              <el-input v-model="DataInDirect4" clearable></el-input>
                            </div>
                          </div>
                        </template>
                      </el-table-column>
                      <el-table-column width="70">
                        <template #default="scope">
                          <div class="btn-group">
                            <el-button
                              @click.prevent="addRow(scope.$index, tableDataInDirectInner2)"
                              class="icon orange"
                            >
                              <i class="iconset icon-add-row">추가</i>
                            </el-button>
                            <el-button
                              @click.prevent="deleteRow(scope.$index, tableDataInDirectInner2)"
                              class="icon orange"
                            >
                              <i class="iconset icon-delete-row">삭제</i>
                            </el-button>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-table-column>
          <el-table-column label="데이터피드 수신설치 주소"></el-table-column>
        </el-table>
        <div class="option">
          <el-form-item prop="stockOption3">
            <el-checkbox v-model="ruleForm.stockOption3">주식옵션 기초자산 정보에 한하여 수신이용</el-checkbox>
          </el-form-item>
        </div>
        <!-- 정보사업자 입력 table -->
        <el-table :data="tableDataBiz" :span-method="colsapnMerge4" class="type2" style="width: 100%">
          <el-table-column label="정보사업자명" class-name="va-t" width="290">
            <template #default>
              <el-input v-model="DataBizName" clearable readonly></el-input>
            </template>
          </el-table-column>
          <el-table-column label="담당자명" class-name="tbl-inner-wrap">
            <template #default>
              <el-table :data="tableDataBizInner" class="tbl-inner" style="width: 100%">
                <el-table-column>
                  <template #default>
                    <el-form-item prop="DataBizManager">
                      <el-input v-model="DataBizManager" clearable></el-input>
                    </el-form-item>
                  </template>
                </el-table-column>
                <el-table-column>
                  <template #default>
                    <el-form-item prop="DataBizEmail">
                      <el-input v-model="DataBizEmail" clearable></el-input>
                    </el-form-item>
                  </template>
                </el-table-column>
                <el-table-column>
                  <template #default>
                    <el-form-item prop="DataBizPhone">
                      <el-input v-model="DataBizPhone" clearable></el-input>
                    </el-form-item>
                  </template>
                </el-table-column>
                <el-table-column width="70">
                  <template #default="scope">
                    <div class="btn-group">
                      <el-button @click.prevent="addRow(scope.$index, tableDataBizInner)" class="icon orange">
                        <i class="iconset icon-add-row">추가</i>
                      </el-button>
                      <el-button @click.prevent="deleteRow(scope.$index, tableDataBizInner)" class="icon orange">
                        <i class="iconset icon-delete-row">삭제</i>
                      </el-button>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-table-column>
          <el-table-column label="이메일 주소"></el-table-column>
          <el-table-column label="전화"></el-table-column>
        </el-table>
        <!-- //정보사업자 입력 table -->
        <!-- //정보 수신방식 - 간접 -->
      </div>
    </div>
    <!-- //정보 수신방식 -->
    <!-- 지수 산출 내역 -->
    <div class="tbl-wrap order">
      <div class="tbl-top"><h4 class="tbl-title index">지수 산출 내역</h4></div>
      <div class="guide-desc">
        갑은 갑이 산출하려는 지수에 대해 다음의 양식을 이용하여 을에게 통지하여야 한다.<br />
        KRX 종목 비중 : KRX에 등록된 종목의 시가총액 ÷ 지수 구성종목 전체의 시가총액 (최근 3개월 평균 기준)
      </div>
      <el-table :data="tableDataIndex" class="type2" style="width: 100%">
        <el-table-column label="지수명">
          <template #default>
            <el-form-item prop="indexName">
              <el-input v-model="indexName" class="full" clearable></el-input>
              <el-tooltip content="Description" effect="light" popper-class="warning">
                <i class="iconset icon-warning"></i>
              </el-tooltip>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="지수산출 이용정보">
          <template #default>
            <el-form-item prop="indexInfo">
              <el-input v-model="indexInfo" class="full" clearable></el-input>
              <el-tooltip content="Description" effect="light" popper-class="warning">
                <i class="iconset icon-warning"></i>
              </el-tooltip>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="KRX 종목 비중">
          <template #default>
            <el-form-item prop="indexKRX">
              <el-input v-model="indexKRX" clearable></el-input>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="제3자 권한제공여부(Y/N)" width="165">
          <template #default>
            <el-form-item prop="indexThirdParty" class="center">
              <el-radio-group v-model="indexThirdParty">
                <el-radio label="Yes"></el-radio>
                <el-radio label="No"></el-radio>
              </el-radio-group>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="산출기준">
          <el-table-column label="실시간정보" width="90">
            <template v-slot="scope"><el-checkbox v-model="scope.row.isEnabled"></el-checkbox></template>
          </el-table-column>
          <el-table-column label="지연정보" width="90">
            <template v-slot="scope"><el-checkbox v-model="scope.row.isEnabled"></el-checkbox></template>
          </el-table-column>
          <el-table-column label="종가정보" width="90">
            <template v-slot="scope"><el-checkbox v-model="scope.row.isEnabled"></el-checkbox></template>
          </el-table-column>
        </el-table-column>
        <el-table-column width="70">
          <template #default="scope">
            <div class="btn-group">
              <el-button @click.prevent="addRow(scope.$index, tableDataIndex)" class="icon orange">
                <i class="iconset icon-add-row">추가</i>
              </el-button>
              <el-button @click.prevent="deleteRow(scope.$index, tableDataIndex)" class="icon orange">
                <i class="iconset icon-delete-row">삭제</i>
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- //지수 산출 내역 -->

    <!-- 외부제공 권한 옵션 -->
    <div class="tbl-wrap order">
      <div class="tbl-top"><h4 class="tbl-title permission">외부제공 권한 옵션</h4></div>
      <div class="guide-desc">
        고객사의 정보 외부제공 범위(서비스 범위)에 따라 외부제공 권한 옵션을 선택하여 다음 표에 체크하여 주시기
        바랍니다.(필요시 복수선택 가능)
      </div>
      <el-table :data="tableDataPermissions" class="type2" style="width: 100%">
        <el-table-column label="정보상품명">
          <el-table-column prop="product1" label="Type1" width="170"></el-table-column>
          <el-table-column prop="product2" label="Type2"></el-table-column>
        </el-table-column>
        <el-table-column label="외부제공권한 옵션">
          <el-table-column label="일반용" width="190">
            <template v-slot="scope"><el-checkbox v-model="scope.row.isEnabled"></el-checkbox></template>
          </el-table-column>
          <el-table-column label="소매사업 전용" width="190">
            <template v-slot="scope"><el-checkbox v-model="scope.row.isEnabled"></el-checkbox></template>
          </el-table-column>
          <el-table-column label="웹사이트 체결가 사이트용">
            <el-table-column label="일반" width="95">
              <template v-slot="scope"><el-checkbox v-model="scope.row.isEnabled"></el-checkbox></template>
            </el-table-column>
            <el-table-column label="보이스" width="95">
              <template v-slot="scope"><el-checkbox v-model="scope.row.isEnabled"></el-checkbox></template>
            </el-table-column>
          </el-table-column>
          <el-table-column label="방송매체 전용" width="190">
            <template v-slot="scope"><el-checkbox v-model="scope.row.isEnabled"></el-checkbox></template>
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>
    <!-- //외부제공 권한 옵션 -->

    <!-- 웹사이트 체결가 서비스 옵션 -->
    <div class="tbl-wrap order">
      <div class="tbl-top"><h4 class="tbl-title web">웹사이트 체결가 서비스 옵션</h4></div>
      <!-- 12/30 변경 & 추가 -->
      <div class="guide-desc">
        본 옵션을 선택하는 경우 일반 대중에게 웹사이트 또는 모바일용 애플리케이션을 통해 실시간 체결가 정보(호가 관련
        정보 등은 제외)를 조회 방식으로 제공할 수 있습니다. <br />
      </div>
      <div class="desc">※ 본 옵션을 통한 정보 제공 시 준수사항</div>
      <ol class="list number">
        <li>
          정보를 이용하는 제3자(일반대중 등)가 전자적인 방법으로 정보를 가공, 저장 또는 재분배할 수 있는 수단, 도구 또는
          지원(Excel DDE, API 등)의 제공은 엄격히 금지된다.
        </li>
        <li>본 옵션에 의한 정보 제공은 전문가형 사용자를 대상으로 하는 서비스에는 허용되지 않는다.</li>
      </ol>
      <!-- //12/30 변경 & 추가 -->
      <el-table :data="tableDataWebsite" class="type2" style="width: 100%">
        <el-table-column prop="product" label="정보상품명"></el-table-column>
        <el-table-column label="웹사이트 체결가 사이트 옵션">
          <el-table-column label="일반" width="280">
            <template v-slot="scope"><el-checkbox v-model="scope.row.isEnabled"></el-checkbox></template>
          </el-table-column>
          <el-table-column label="보이스" width="280">
            <template v-slot="scope"><el-checkbox v-model="scope.row.isEnabled"></el-checkbox></template>
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>
    <!-- //웹사이트 체결가 서비스 옵션 -->

    <!-- 관계사 확장 옵션 -->
    <div class="tbl-wrap order">
      <div class="tbl-top"><h4 class="tbl-title relation">관계사 확장 옵션</h4></div>
      <div class="guide-desc">갑은 아래에 기재된 자를 통해서만 정보를 저장 또는 가공할 수 있습니다.</div>
      <el-table :data="tableDataExpand1" class="type2" style="width: 100%">
        <el-table-column label="정보상품명">
          <el-table-column prop="product1" label="Type1"></el-table-column>
          <el-table-column prop="product2" label="Type2"></el-table-column>
        </el-table-column>
        <el-table-column label="관계사 확장 옵션" width="230">
          <template v-slot="scope"><el-checkbox v-model="scope.row.isEnabled"></el-checkbox></template>
        </el-table-column>
      </el-table>
      <el-table :data="tableDataExpand2" :span-method="rowsapnMerge10" class="type2" style="width: 100%">
        <el-table-column prop="type" label="구분" width="250"></el-table-column>
        <el-table-column label="정보상품명">
          <el-table-column prop="product1" label="Type1"></el-table-column>
          <el-table-column prop="product2" label="Type2"></el-table-column>
        </el-table-column>
        <el-table-column label="관계사 확장 옵션" width="230">
          <template v-slot="scope"><el-checkbox v-model="scope.row.isEnabled"></el-checkbox></template>
        </el-table-column>
      </el-table>
      <!-- 입력 table -->
      <el-table :data="tableDataExpand3" class="type2" style="width: 100%">
        <el-table-column prop="exCompanyName" label="회사명" width="300">
          <template #default>
            <el-input v-model="inputExCompanyName" clearable></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="exCompanyAddress" label="주소">
          <template #default>
            <div class="address-wrap">
              <el-form-item prop="zipcode">
                <el-input v-model="ruleForm.zipcode" class="zipcode" placeholder="우편번호" clearable></el-input>
              </el-form-item>
              <el-form-item prop="companyCity">
                <el-input v-model="ruleForm.companyCity" class="address" placeholder="시도" clearable></el-input>
              </el-form-item>
              <el-form-item prop="companyAddress">
                <el-input
                  v-model="ruleForm.companyAddress"
                  class="address detail"
                  placeholder="상세주소"
                  clearable
                ></el-input>
              </el-form-item>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="exWidthCustomer" label="고객사와 관계(소유지분)" width="200">
          <template #default>
            <el-input v-model="inputExWidthCustomer" clearable></el-input>
          </template>
        </el-table-column>
        <el-table-column width="70">
          <template #default="scope">
            <div class="btn-group">
              <el-button @click.prevent="addRow(scope.$index, tableDataExpand3)" class="icon orange">
                <i class="iconset icon-add-row">추가</i>
              </el-button>
              <el-button @click.prevent="deleteRow(scope.$index, tableDataExpand3)" class="icon orange">
                <i class="iconset icon-delete-row">삭제</i>
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <!-- //입력 table -->
    </div>
    <!-- //관계사 확장 옵션 -->
    <!-- 비조회형 정보이용 -->
    <div class="tbl-wrap order">
      <div class="tbl-top"><h4 class="tbl-title nondisplay">비조회형 정보이용 (Non-Display Use)</h4></div>
      <div class="desc">
        비조회형 정보이용은 정보의 조회 또는 분배 이외 목적으로 실시간정보를 접속, 가공 또는 이용하는 행위로서, 비조회형
        정보이용이 있을 경우 코스콤에 고지해야 합니다. 본 계약상 고지 대상이 되는 비조회형 정보이용은 다음과 같이
        분류됩니다.
      </div>
      <ol class="list number">
        <li>
          트레이딩 관련 이용 : 자동/반자동 주문·호가 생성, 스마트오더라우팅(최선조건 주문·제출), 시장조성(마켓메이킹),
          알고리즘매매, 프로그램매매, 고빈도매매
        </li>
        <li>
          기타 비조회형 정보이용 : 다음 용도의 비조회형 어플리케이션을 통한 실시간정보 이용
          <ul class="list dot">
            <li>위험관리</li>
            <li>계량분석</li>
            <li>포트폴리오 관리</li>
            <li>가공지표 산출 등</li>
          </ul>
        </li>
      </ol>
      <div class="guide-desc">고객사에 해당되는 비조회형 정보이용에 체크하여 주시기 바랍니다.</div>
      <div class="option">
        <el-form-item prop="nonDisplay">
          <el-checkbox v-model="ruleForm.nonDisplay">비조회형 정보이용 없음</el-checkbox>
        </el-form-item>
      </div>
      <el-table :data="tableDataDisplay" class="type2" style="width: 100%">
        <el-table-column label="정보상품명">
          <el-table-column prop="product1" label="Type1"></el-table-column>
          <el-table-column prop="product2" label="Type2"></el-table-column>
        </el-table-column>
        <el-table-column label="트레이딩 관련 이용" width="150">
          <template v-slot="scope"><el-checkbox v-model="scope.row.isEnabled"></el-checkbox></template>
        </el-table-column>
        <el-table-column label="기타 비조회형 정보이용">
          <el-table-column label="위험관리" width="150">
            <template v-slot="scope"><el-checkbox v-model="scope.row.isEnabled"></el-checkbox></template>
          </el-table-column>
          <el-table-column label="계량분석" width="150">
            <template v-slot="scope"><el-checkbox v-model="scope.row.isEnabled"></el-checkbox></template>
          </el-table-column>
          <el-table-column label="포트폴리오관리" width="150">
            <template v-slot="scope"><el-checkbox v-model="scope.row.isEnabled"></el-checkbox></template>
          </el-table-column>
          <el-table-column width="150">
            <template #header>
              <span>가공지표 산출 또는</span>
              <span>기타 용도</span>
            </template>
            <template v-slot="scope"><el-checkbox v-model="scope.row.isEnabled"></el-checkbox></template>
          </el-table-column>
        </el-table-column>
      </el-table>
      <el-table :data="tableDataDisplayEtc" class="type2 add" style="width: 100%">
        <el-table-column label="기타 용도" align="left">
          <template #default>
            <el-input
              v-model="ruleForm.orderNumber"
              placeholder="기타 용도가 있는 경우 기재하세요."
              clearable
            ></el-input>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- //비조회형 정보이용 -->
    <!-- //주문 내용 ; 대분류 -->

    <!-- 주문서 기타정보 ; 대분류 -->
    <div class="title-wrap sub">
      <h2 class="title"><span class="order etc">주문서 기타정보</span></h2>
    </div>
    <!-- 기술대리인 -->
    <div class="title-wrap sub">
      <h3 class="title">기술대리인 정보</h3>
    </div>
    <div class="info-box biz">
      <ul class="terms-list">
        <li>
          <el-form-item prop="checkAgree1">
            <el-checkbox v-model="ruleForm.checkAgree1">이용조건 동의</el-checkbox>
          </el-form-item>
          <a href="#none" @click="dialogAgreementVisible1 = true" class="viewer">내용보기</a>
        </li>
      </ul>
      <dl>
        <dt class="label">기술대리인 동의시점</dt>
        <dd class="items">
          <el-form-item prop="agreeDate0" class="inline">
            <el-input v-model="ruleForm.agreeDate0" class="w200" clearable readonly></el-input>
          </el-form-item>
          <ul class="list mark inline">
            <li>
              당일 주문서 제출 시 적용되는 기술대리인 동의 항목 입니다. <br />
              상세 내용 확인 후 동의하시고 기술대리인 정보를 입력 하셔야 주문서 작성이 완료됩니다.
            </li>
          </ul>
        </dd>
      </dl>
    </div>
    <div class="info-box box">
      <!-- 기술대리인1 -->
      <div class="item-group">
        <h4 class="sub-title">
          <span class="txt">기술대리인1</span>
          <div class="btn-group">
            <el-button class="icon orange">
              <i class="iconset icon-add-row">추가</i>
            </el-button>
          </div>
        </h4>
        <dl>
          <dt class="label">회사명</dt>
          <dd class="items">
            <el-form-item prop="agentCompanyName">
              <el-input v-model="ruleForm.agentCompanyName" clearable></el-input>
            </el-form-item>
          </dd>
        </dl>
        <dl>
          <dt class="label">회사주소</dt>
          <dd class="items">
            <div class="address-wrap">
              <el-form-item prop="zipcode">
                <el-input v-model="ruleForm.zipcode" class="zipcode" placeholder="우편번호" clearable></el-input>
              </el-form-item>
              <el-form-item prop="companyCity">
                <el-input v-model="ruleForm.companyCity" class="address" placeholder="시도" clearable></el-input>
              </el-form-item>
              <el-form-item prop="companyAddress">
                <el-input
                  v-model="ruleForm.companyAddress"
                  class="address detail"
                  placeholder="상세주소"
                  clearable
                ></el-input>
              </el-form-item>
            </div>
          </dd>
        </dl>
        <dl>
          <dt class="label">담당자 이름</dt>
          <dd class="items">
            <div class="name-wrap">
              <el-form-item prop="agentLastName">
                <el-input v-model="ruleForm.agentLastName" class="name last" placeholder="이름" clearable></el-input>
              </el-form-item>
              <el-form-item prop="agentFirstName">
                <el-input v-model="ruleForm.agentFirstName" class="name" placeholder="성" clearable></el-input>
              </el-form-item>
            </div>
          </dd>
          <dt class="label">담당자 직책</dt>
          <dd class="items">
            <el-form-item prop="agentPosition">
              <el-input v-model="ruleForm.agentPosition" clearable></el-input>
            </el-form-item>
          </dd>
        </dl>
        <dl>
          <dt class="label">이메일 주소</dt>
          <dd class="items">
            <el-form-item prop="agentEmail">
              <el-input v-model="ruleForm.agentEmail" clearable></el-input>
            </el-form-item>
          </dd>
          <dt class="label">
            <span>고객사의</span>
            <span>정보이용목적</span>
          </dt>
          <dd class="items">
            <el-form-item prop="agentPurpose">
              <el-input v-model="ruleForm.agentPurpose" clearable></el-input>
            </el-form-item>
          </dd>
        </dl>
        <dl>
          <dt class="label">
            <span>기술대리인이</span>
            <span>제공하는 서비스</span>
          </dt>
          <dd class="items">
            <el-form-item prop="agentService">
              <el-input v-model="ruleForm.agentService" class="w839" clearable></el-input>
            </el-form-item>
          </dd>
        </dl>
      </div>
      <!-- //기술대리인1 -->
      <!-- 기술대리인2 -->
      <div class="item-group">
        <h4 class="sub-title">
          <span class="txt">기술대리인2</span>
          <div class="btn-group">
            <el-button class="icon orange">
              <i class="iconset icon-add-row">추가</i>
            </el-button>
            <el-button class="icon orange">
              <i class="iconset icon-delete-row">삭제</i>
            </el-button>
          </div>
        </h4>
        <dl>
          <dt class="label">회사명</dt>
          <dd class="items">
            <el-form-item prop="agentCompanyName">
              <el-input v-model="ruleForm.agentCompanyName" clearable></el-input>
            </el-form-item>
          </dd>
        </dl>
        <dl>
          <dt class="label">회사주소</dt>
          <dd class="items">
            <div class="address-wrap">
              <el-form-item prop="zipcode">
                <el-input v-model="ruleForm.zipcode" class="zipcode" placeholder="우편번호" clearable></el-input>
              </el-form-item>
              <el-form-item prop="companyCity">
                <el-input v-model="ruleForm.companyCity" class="address" placeholder="시도" clearable></el-input>
              </el-form-item>
              <el-form-item prop="companyAddress">
                <el-input
                  v-model="ruleForm.companyAddress"
                  class="address detail"
                  placeholder="상세주소"
                  clearable
                ></el-input>
              </el-form-item>
            </div>
          </dd>
        </dl>
        <dl>
          <dt class="label">담당자 이름</dt>
          <dd class="items">
            <div class="name-wrap">
              <el-form-item prop="agentLastName">
                <el-input v-model="ruleForm.agentLastName" class="name last" placeholder="이름" clearable></el-input>
              </el-form-item>
              <el-form-item prop="agentFirstName">
                <el-input v-model="ruleForm.agentFirstName" class="name" placeholder="성" clearable></el-input>
              </el-form-item>
            </div>
          </dd>
          <dt class="label">담당자 직책</dt>
          <dd class="items">
            <el-form-item prop="agentPosition">
              <el-input v-model="ruleForm.agentPosition" clearable></el-input>
            </el-form-item>
          </dd>
        </dl>
        <dl>
          <dt class="label">이메일 주소</dt>
          <dd class="items">
            <el-form-item prop="agentEmail">
              <el-input v-model="ruleForm.agentEmail" clearable></el-input>
            </el-form-item>
          </dd>
          <dt class="label">
            <span>고객사의</span>
            <span>정보이용목적</span>
          </dt>
          <dd class="items">
            <el-form-item prop="agentPurpose">
              <el-input v-model="ruleForm.agentPurpose" clearable></el-input>
            </el-form-item>
          </dd>
        </dl>
        <dl>
          <dt class="label">
            <span>기술대리인이</span>
            <span>제공하는 서비스</span>
          </dt>
          <dd class="items">
            <el-form-item prop="agentService">
              <el-input v-model="ruleForm.agentService" class="w839" clearable></el-input>
            </el-form-item>
          </dd>
        </dl>
      </div>
      <!-- //기술대리인2 -->
    </div>
    <!-- //기술대리인 -->
    <!-- 이용조건 -->
    <div class="title-wrap sub">
      <h3 class="title">이용조건 동의정보</h3>
    </div>
    <div class="info-box biz">
      <ul class="terms-list">
        <li>
          <el-form-item prop="checkAgree1">
            <el-checkbox v-model="ruleForm.checkAgree1">이용조건 동의</el-checkbox>
          </el-form-item>
          <a href="#none" @click="dialogAgreementVisible1 = true" class="viewer">내용보기</a>
        </li>
      </ul>
      <dl>
        <dt class="label">이용조건 동의시점</dt>
        <dd class="items">
          <el-form-item prop="agreeDate1" class="inline">
            <el-input v-model="ruleForm.agreeDate1" class="w200" clearable readonly></el-input>
          </el-form-item>
          <ul class="list mark inline">
            <li>
              당일 주문서 제출시 적용되는 이용조건입니다. <br />
              상세 내용 확인 후 동의하셔야 주문서 작성이 완료됩니다.
            </li>
          </ul>
        </dd>
        <dd class="right">
          <el-button size="small" icon="iconset icon-down-doc">이용조건 다운로드</el-button>
        </dd>
      </dl>
    </div>
    <!-- //이용조건 -->
    <!-- 정책서 -->
    <div class="title-wrap sub">
      <h3 class="title">정책서 동의정보</h3>
    </div>
    <div class="info-box biz">
      <ul class="terms-list">
        <li>
          <el-form-item prop="checkAgree2">
            <el-checkbox v-model="ruleForm.checkAgree2">정책서 동의</el-checkbox>
          </el-form-item>
          <a href="#none" @click="dialogAgreementVisible1 = true" class="viewer">내용보기</a>
        </li>
      </ul>
      <dl>
        <dt class="label">정책서 동의시점</dt>
        <dd class="items">
          <el-form-item prop="agreeDate2" class="inline">
            <el-input v-model="ruleForm.agreeDate2" class="w200" clearable readonly></el-input>
          </el-form-item>
          <ul class="list mark inline">
            <li>
              당일 주문서 제출시 적용되는 이용조건입니다. <br />
              상세 내용 확인 후 동의하셔야 주문서 작성이 완료됩니다.
            </li>
          </ul>
        </dd>
        <dd class="right">
          <el-button size="small" icon="iconset icon-down-doc">정책서 다운로드</el-button>
        </dd>
      </dl>
    </div>
    <!-- //정책서  -->
    <!-- 가격정보  -->
    <div class="title-wrap sub">
      <h3 class="title">가격정보 동의정보</h3>
    </div>
    <div class="info-box biz">
      <ul class="terms-list">
        <li>
          <el-form-item prop="checkAgree3">
            <el-checkbox v-model="ruleForm.checkAgree3">가격정보 동의</el-checkbox>
          </el-form-item>
          <a href="#none" @click="dialogAgreementVisible1 = true" class="viewer">내용보기</a>
        </li>
      </ul>
      <dl>
        <dt class="label">정보제공 동의시점</dt>
        <dd class="items">
          <el-form-item prop="agreeDate3" class="inline">
            <el-input v-model="ruleForm.agreeDate3" class="w200" clearable readonly></el-input>
          </el-form-item>
          <ul class="list mark inline">
            <li>
              당일 주문서 제출시 적용되는 이용조건입니다. <br />
              상세 내용 확인 후 동의하셔야 주문서 작성이 완료됩니다.
            </li>
          </ul>
        </dd>
        <dd class="right">
          <el-button size="small" icon="iconset icon-down-doc">가격정보 다운로드</el-button>
        </dd>
      </dl>
    </div>
    <!-- //가격정보  -->
    <!-- 비계좌 부속 계약서  -->
    <div class="title-wrap sub">
      <h3 class="title">비계좌 가입자 정보제공 부속계약서 동의정보</h3>
    </div>
    <div class="info-box biz">
      <ul class="terms-list">
        <li>
          <el-form-item prop="checkAgree4">
            <el-checkbox v-model="ruleForm.checkAgree4">정책서 동의</el-checkbox>
          </el-form-item>
          <a href="#none" @click="dialogAgreementVisible1 = true" class="viewer">내용보기</a>
        </li>
      </ul>
      <dl>
        <dt class="label">정보제공 동의시점</dt>
        <dd class="items">
          <el-form-item prop="agreeDate4" class="inline">
            <el-input v-model="ruleForm.agreeDate4" class="w200" clearable readonly></el-input>
          </el-form-item>
          <ul class="list mark inline">
            <li>
              당일 주문서 제출시 적용되는 이용조건입니다. <br />
              상세 내용 확인 후 동의하셔야 주문서 작성이 완료됩니다.
            </li>
          </ul>
        </dd>
        <dd class="right">
          <el-button size="small" icon="iconset icon-down-doc">비계좌 부속서 다운로드</el-button>
        </dd>
      </dl>
    </div>
    <!-- //비계좌 부속 계약서  -->
    <!-- 사이드 레터 -->
    <div class="title-wrap sub">
      <h3 class="title">사이드 레터</h3>
    </div>
    <div class="info-box biz">
      <dl>
        <dt class="label">사이드 레터</dt>
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
              <ul class="list mark inline">
                <li>당일 주문서 제출시 적용되는 사이드 레터입니다. 고객과 협의된 별도 부속서 항목입니다.</li>
              </ul>
            </template>
          </el-upload>
        </dd>
      </dl>
    </div>
    <!-- //사이드 레터 -->
    <!--  계약/주문서 담당 연락처 -->
    <div class="title-wrap sub">
      <h3 class="title">계약/주문서 담당 연락처</h3>
    </div>
    <div class="info-box box">
      <!-- 연락처 1 -->
      <div class="item-group">
        <h4 class="sub-title">
          <span class="txt">연락처 정보 1</span>
          <div class="btn-group">
            <el-button class="icon orange">
              <i class="iconset icon-delete-row">삭제</i>
            </el-button>
          </div>
        </h4>
        <dl>
          <dt class="label">성명</dt>
          <dd class="items">
            <div class="name-wrap">
              <el-form-item prop="contactLastName">
                <el-input v-model="ruleForm.contactLastName" class="name last" placeholder="이름" clearable></el-input>
              </el-form-item>
              <el-form-item prop="contactFirstName">
                <el-input v-model="ruleForm.contactFirstName" class="name" placeholder="성" clearable></el-input>
              </el-form-item>
            </div>
          </dd>
          <dt class="label">담당자 직책</dt>
          <dd class="items">
            <el-form-item prop="contactPosition">
              <el-input v-model="ruleForm.contactPosition" clearable></el-input>
            </el-form-item>
          </dd>
        </dl>
        <dl>
          <dt class="label">전화번호</dt>
          <dd class="items">
            <el-form-item prop="contactPhone">
              <el-input v-model="ruleForm.contactPhone" clearable></el-input>
            </el-form-item>
          </dd>
          <dt class="label">이메일 주소</dt>
          <dd class="items">
            <el-form-item prop="contactEmail">
              <el-input v-model="ruleForm.contactEmail" clearable></el-input>
            </el-form-item>
          </dd>
        </dl>
        <dl>
          <dt class="label">국가</dt>
          <dd class="items">
            <el-form-item prop="contactNational">
              <el-select v-model="ruleForm.contactNational" placeholder="선택">
                <el-option
                  v-for="item in ruleForm.optionsContactNational"
                  :key="item.contactNational"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </dd>
        </dl>
        <dl>
          <dt class="label">회사 주소</dt>
          <dd class="items">
            <div class="address-wrap">
              <el-form-item prop="zipcode">
                <el-input v-model="ruleForm.zipcode" class="zipcode" placeholder="우편번호" clearable></el-input>
              </el-form-item>
              <el-form-item prop="companyCity">
                <el-input v-model="ruleForm.companyCity" class="address" placeholder="시도" clearable></el-input>
              </el-form-item>
              <el-form-item prop="companyAddress">
                <el-input
                  v-model="ruleForm.companyAddress"
                  class="address detail"
                  placeholder="상세주소"
                  clearable
                ></el-input>
              </el-form-item>
            </div>
          </dd>
        </dl>
      </div>
      <!-- //연락처 1 -->
      <!-- 연락처 2 -->
      <div class="item-group">
        <h4 class="sub-title">
          <span class="txt">연락처 정보 2</span>
          <div class="btn-group">
            <el-button class="icon orange">
              <i class="iconset icon-add-row">추가</i>
            </el-button>
            <el-button class="icon orange">
              <i class="iconset icon-delete-row">삭제</i>
            </el-button>
          </div>
        </h4>
        <dl>
          <dt class="label">성명</dt>
          <dd class="items">
            <div class="name-wrap">
              <el-form-item prop="contactLastName">
                <el-input v-model="ruleForm.contactLastName" class="name last" placeholder="이름" clearable></el-input>
              </el-form-item>
              <el-form-item prop="contactFirstName">
                <el-input v-model="ruleForm.contactFirstName" class="name" placeholder="성" clearable></el-input>
              </el-form-item>
            </div>
          </dd>
          <dt class="label">담당자 직책</dt>
          <dd class="items">
            <el-form-item prop="contactPosition">
              <el-input v-model="ruleForm.contactPosition" clearable></el-input>
            </el-form-item>
          </dd>
        </dl>
        <dl>
          <dt class="label">전화번호</dt>
          <dd class="items">
            <el-form-item prop="contactPhone">
              <el-input v-model="ruleForm.contactPhone" clearable></el-input>
            </el-form-item>
          </dd>
          <dt class="label">이메일 주소</dt>
          <dd class="items">
            <el-form-item prop="contactEmail">
              <el-input v-model="ruleForm.contactEmail" clearable></el-input>
            </el-form-item>
          </dd>
        </dl>
        <dl>
          <dt class="label">국가</dt>
          <dd class="items">
            <el-form-item prop="contactNational">
              <el-select v-model="ruleForm.contactNational" placeholder="선택">
                <el-option
                  v-for="item in ruleForm.optionsContactNational"
                  :key="item.contactNational"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </dd>
        </dl>
        <dl>
          <dt class="label">회사 주소</dt>
          <dd class="items">
            <div class="address-wrap">
              <el-form-item prop="zipcode">
                <el-input v-model="ruleForm.zipcode" class="zipcode" placeholder="우편번호" clearable></el-input>
              </el-form-item>
              <el-form-item prop="companyCity">
                <el-input v-model="ruleForm.companyCity" class="address" placeholder="시도" clearable></el-input>
              </el-form-item>
              <el-form-item prop="companyAddress">
                <el-input
                  v-model="ruleForm.companyAddress"
                  class="address detail"
                  placeholder="상세주소"
                  clearable
                ></el-input>
              </el-form-item>
            </div>
          </dd>
        </dl>
      </div>
      <!-- //연락처 2 -->
    </div>
    <!-- //계약/주문서 담당 연락처 -->
    <!-- 청구 담당 연락처 -->
    <div class="title-wrap sub">
      <h3 class="title">청구 담당 연락처</h3>
    </div>
    <div class="info-box box">
      <div class="item-group">
        <h4 class="sub-title">
          <span class="txt">연락처 정보 1</span>
          <div class="btn-group">
            <el-button class="icon orange">
              <i class="iconset icon-add-row">추가</i>
            </el-button>
          </div>
        </h4>
        <dl>
          <dt class="label">성명</dt>
          <dd class="items">
            <div class="name-wrap">
              <el-form-item prop="contactLastName">
                <el-input v-model="ruleForm.contactLastName" class="name last" placeholder="이름" clearable></el-input>
              </el-form-item>
              <el-form-item prop="contactFirstName">
                <el-input v-model="ruleForm.contactFirstName" class="name" placeholder="성" clearable></el-input>
              </el-form-item>
            </div>
          </dd>
          <dt class="label">담당자 직책</dt>
          <dd class="items">
            <el-form-item prop="contactPosition">
              <el-input v-model="ruleForm.contactPosition" clearable></el-input>
            </el-form-item>
          </dd>
        </dl>
        <dl>
          <dt class="label">전화번호</dt>
          <dd class="items">
            <el-form-item prop="contactPhone">
              <el-input v-model="ruleForm.contactPhone" clearable></el-input>
            </el-form-item>
          </dd>
          <dt class="label">이메일 주소</dt>
          <dd class="items">
            <el-form-item prop="contactEmail">
              <el-input v-model="ruleForm.contactEmail" clearable></el-input>
            </el-form-item>
          </dd>
        </dl>
        <dl>
          <dt class="label">국가</dt>
          <dd class="items">
            <el-form-item prop="contactNational">
              <el-select v-model="ruleForm.contactNational" placeholder="선택">
                <el-option
                  v-for="item in ruleForm.optionsContactNational"
                  :key="item.contactNational"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </dd>
        </dl>
        <dl>
          <dt class="label">회사 주소</dt>
          <dd class="items">
            <div class="address-wrap">
              <el-form-item prop="zipcode">
                <el-input v-model="ruleForm.zipcode" class="zipcode" placeholder="우편번호" clearable></el-input>
              </el-form-item>
              <el-form-item prop="companyCity">
                <el-input v-model="ruleForm.companyCity" class="address" placeholder="시도" clearable></el-input>
              </el-form-item>
              <el-form-item prop="companyAddress">
                <el-input
                  v-model="ruleForm.companyAddress"
                  class="address detail"
                  placeholder="상세주소"
                  clearable
                ></el-input>
              </el-form-item>
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <!-- //청구 담당 연락처 -->
    <!-- IT 담당 연락처 -->
    <div class="title-wrap sub">
      <h3 class="title">IT 담당 연락처</h3>
    </div>
    <div class="info-box box">
      <div class="item-group">
        <h4 class="sub-title">
          <span class="txt">연락처 정보 1</span>
          <div class="btn-group">
            <el-button class="icon orange">
              <i class="iconset icon-add-row">추가</i>
            </el-button>
          </div>
        </h4>
        <dl>
          <dt class="label">성명</dt>
          <dd class="items">
            <div class="name-wrap">
              <el-form-item prop="contactLastName">
                <el-input v-model="ruleForm.contactLastName" class="name last" placeholder="이름" clearable></el-input>
              </el-form-item>
              <el-form-item prop="contactFirstName">
                <el-input v-model="ruleForm.contactFirstName" class="name" placeholder="성" clearable></el-input>
              </el-form-item>
            </div>
          </dd>
          <dt class="label">담당자 직책</dt>
          <dd class="items">
            <el-form-item prop="contactPosition">
              <el-input v-model="ruleForm.contactPosition" clearable></el-input>
            </el-form-item>
          </dd>
        </dl>
        <dl>
          <dt class="label">전화번호</dt>
          <dd class="items">
            <el-form-item prop="contactPhone">
              <el-input v-model="ruleForm.contactPhone" clearable></el-input>
            </el-form-item>
          </dd>
          <dt class="label">이메일 주소</dt>
          <dd class="items">
            <el-form-item prop="contactEmail">
              <el-input v-model="ruleForm.contactEmail" clearable></el-input>
            </el-form-item>
          </dd>
        </dl>
        <dl>
          <dt class="label">국가</dt>
          <dd class="items">
            <el-form-item prop="contactNational">
              <el-select v-model="ruleForm.contactNational" placeholder="선택">
                <el-option
                  v-for="item in ruleForm.optionsContactNational"
                  :key="item.contactNational"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </dd>
        </dl>
        <dl>
          <dt class="label">회사 주소</dt>
          <dd class="items">
            <div class="address-wrap">
              <el-form-item prop="zipcode">
                <el-input v-model="ruleForm.zipcode" class="zipcode" placeholder="우편번호" clearable></el-input>
              </el-form-item>
              <el-form-item prop="companyCity">
                <el-input v-model="ruleForm.companyCity" class="address" placeholder="시도" clearable></el-input>
              </el-form-item>
              <el-form-item prop="companyAddress">
                <el-input
                  v-model="ruleForm.companyAddress"
                  class="address detail"
                  placeholder="상세주소"
                  clearable
                ></el-input>
              </el-form-item>
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <!-- //IT 담당 연락처 -->
    <!-- 계약관련 서류 -->
    <div class="title-wrap sub">
      <h3 class="title">계약관련 서류</h3>
    </div>
    <div class="info-box biz">
      <dl>
        <dt class="label">계약관련 서류</dt>
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
              <ul class="list mark inline">
                <li>사업자등록증, 정관, 등본</li>
              </ul>
            </template>
          </el-upload>
        </dd>
      </dl>
    </div>
    <!-- //계약관련 서류 -->
    <!-- 특례사항 -->
    <div class="title-wrap sub">
      <h3 class="title">특례사항</h3>
    </div>
    <div class="tbl-wrap">
      <el-table :data="tableDataSpecial" class="type2" style="width: 100%">
        <el-table-column prop="title" label="특례조건" width="240"></el-table-column>
        <el-table-column prop="contents" label="내용" align="left" show-overflow-tooltip></el-table-column>
      </el-table>
    </div>
    <!-- //특례사항 -->
    <!-- 프로모션 -->
    <div class="title-wrap sub">
      <h3 class="title">프로모션</h3>
    </div>
    <div class="tbl-wrap">
      <el-table :data="tableDataPromotion" class="type2" style="width: 100%">
        <el-table-column prop="contents" label="프로모션 이름" show-overflow-tooltip></el-table-column>
      </el-table>
    </div>
    <!-- //프로모션 -->
    <!-- 기타 사항 -->
    <div class="title-wrap sub">
      <h3 class="title">기타 사항</h3>
    </div>
    <div class="textarea-wrap">
      <el-form-item prop="insertDesc1">
        <el-input
          type="textarea"
          v-model="ruleForm.insertDesc1"
          maxlength="200"
          rows="4"
          resize="none"
          placeholder="영업사원이 등록한 내용이 보여집니다."
        ></el-input>
      </el-form-item>
    </div>
    <!-- //기타 사항 -->
    <!-- 확약 사항 -->
    <div class="title-wrap sub">
      <h3 class="title">확약 사항</h3>
    </div>
    <div class="textarea-wrap">
      <el-form-item prop="insertDesc2">
        <el-input
          type="textarea"
          v-model="ruleForm.insertDesc2"
          maxlength="200"
          rows="4"
          resize="none"
          placeholder="영업사원이 등록한 내용이 보여집니다."
        ></el-input>
      </el-form-item>
    </div>
    <!-- //확약 사항 -->

    <!-- //주문서 기타정보 ; 대분류 -->
  </el-form>
  <!-- button area -->
  <div class="btn-area">
    <el-button class="el-button--large gray">취소</el-button>
    <el-button class="el-button--large orange">임시저장</el-button>
    <el-button @click="submitForm('ruleForm')" type="primary" class="el-button--large">제출하기</el-button>
  </div>
  <!-- //button area -->

  <!-- 회원사명 검색 modal popup -->
  <el-dialog title="회원사명 검색" v-model="dialogMemberVisible" custom-class="el-medium">
    <el-form>
      <div class="search-wrap single">
        <el-form-item class="full">
          <el-input v-model="insertMember" clearable></el-input>
          <el-button type="info" size="small">검색</el-button>
        </el-form-item>
      </div>
    </el-form>
    <!-- 검색 전 -->
    <div class="result-box">
      <div class="no-search"></div>
      <div class="desc">회원사명을 검색 후 선택해 주세요.</div>
    </div>
    <!-- //검색 전 -->
    <div class="tbl-wrap type2">
      <el-table :data="tableDataMember" style="width: 100%" height="389">
        <el-table-column prop="companyCode" label="회원사 코드" width="110"></el-table-column>
        <el-table-column prop="userName" label="회원사명" class-name="bd-r-no" align="left" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="select" width="60">
          <el-button class="gray" size="mini">선택</el-button>
        </el-table-column>
      </el-table>
    </div>
  </el-dialog>
  <!-- //회원사명 검색 modal popup -->

  <!-- 정보사업자 검색 modal popup -->
  <el-dialog title="정보사업자명 검색" v-model="dialogProviderVisible" custom-class="el-medium">
    <el-form>
      <div class="search-wrap single">
        <el-form-item class="full">
          <el-input v-model="insertProvider" clearable></el-input>
          <el-button type="info" size="small">검색</el-button>
        </el-form-item>
      </div>
    </el-form>
    <!-- 검색 전 -->
    <div class="result-box">
      <div class="no-search"></div>
      <div class="desc">정보사업자명을 검색 후 선택해 주세요.</div>
    </div>
    <!-- //검색 전 -->
    <div class="tbl-wrap type2">
      <el-table :data="tableDataProvider" style="width: 100%" height="389">
        <el-table-column prop="companyCode" label="정보사업자 코드" width="110"></el-table-column>
        <el-table-column prop="userName" label="정보사업자명" class-name="bd-r-no" align="left" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="select" width="60">
          <el-button class="gray" size="mini">선택</el-button>
        </el-table-column>
      </el-table>
    </div>
  </el-dialog>
  <!-- //정보사업자명 검색 modal popup -->

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
  name: "ContentLayout",
  setup() {
    return {};
  },
  data() {
    return {
      ruleForm: {
        addressSido: "",
        addressDetail: "",
        addressPost: "",
        firstName: "",
        lastName: "",
        postedDate: "",
        productType1: false,
        productPriceCheck: "표준",
        baseCurrency: "원화(￦)",
        productType21: false,
        productType22: false,
        productType3: false,
        agentFirstName: "",
        agentLastName: "",
        contactFirstName: "",
        contactLastName: "",
        infoLicense: ["직접", "간접"],
        agreeDate0: "",
        agreeDate1: "",
        agreeDate2: "",
        agreeDate3: "",
        agreeDate4: "",
      },
      rules: {
        lastName: [{ required: true, message: "Please input your last name", trigger: "blur" }],
        insertDesc1: [
          { required: true, message: "Please input description", trigger: "blur" },
          { min: 3, max: 200, message: "Length should be 3 to 200", trigger: "blur" },
        ],
        insertDesc2: [
          { required: true, message: "Please input description", trigger: "blur" },
          { min: 3, max: 200, message: "Length should be 3 to 200", trigger: "blur" },
        ],
      },
      tableDataProductType11: [
        {
          name: "지연 시세 (지수)",
        },
      ],
      productTypePrice: "",
      tableDataProductType12: [
        {
          name: "데이터몰 프리미엄",
        },
      ],
      productPrice: "",
      tableDataProductPrice: [
        {
          productType: "실시간정보",
          productName: "유가증권",
          productPrice: "",
        },
        {
          productType: "실시간정보",
          productName: "코스닥주식",
          productPrice: "",
        },
        {
          productType: "실시간정보",
          productName: "KRX 채권",
          productPrice: "",
        },
        {
          productType: "지연정보",
          productName: "유가증권",
          productPrice: "",
        },
        {
          productType: "지연정보",
          productName: "코스닥주식",
          productPrice: "",
        },
      ],
      // 정보상품 선택 table 1
      tableDataProduct1: [
        {
          product1: "증권A",
          product2: "증권A",
          market: "유가증권 주식",
          isEnabled: false,
        },
        {
          product1: "증권B",
          product2: "증권B",
          market: "코스닥시장 주식, 코넥스시장 주식",
          isEnabled: false,
        },
        {
          product1: "증권C",
          product2: "증권C",
          market: "ETF, ETN, ELW",
          isEnabled: false,
        },
        {
          product1: "파생상품A",
          product2: "파생상품A",
          market: "선물, 옵션",
          isEnabled: false,
        },
        {
          product1: "파생상품B",
          product2: "파생상품B",
          market: "선물, 옵션(해외)",
          isEnabled: false,
        },
        {
          product1: "일반상품A",
          product2: "일반상품A",
          market: "금, 배출권",
          isEnabled: false,
        },
        {
          product1: "KRX채권A",
          product2: "KRX채권A",
          market: "KRX 채권",
          isEnabled: false,
        },
        {
          product1: "KRX지수",
          product2: "그룹1",
          market: "유가증권 주식",
          isEnabled: false,
        },
        {
          product1: "KRX지수",
          product2: "그룹2",
          market: "코스닥시장 주식, 코넥스시장 주식",
          isEnabled: false,
        },
        {
          product1: "KRX지수",
          product2: "종합주가지수",
          market: "코스피, 코스닥, 코스피200 ",
          isEnabled: false,
        },
      ],
      // 정보상품 선택 table 2
      tableDataProduct2: [
        {
          type: "종가정보",
          product1: "증권A",
          product2: "증권A",
          market: "유가증권 주식",
          isEnabled: false,
        },
        {
          type: "종가정보",
          product1: "증권B",
          product2: "증권B",
          market: "코스닥시장 주식, 코넥스시장 주식",
          isEnabled: false,
        },
        {
          type: "종가정보",
          product1: "증권C",
          product2: "증권C",
          market: "ETF, ETN, ELW",
          isEnabled: false,
        },
        {
          type: "종가정보",
          product1: "파생상품A",
          product2: "파생상품A",
          market: "선물, 옵션",
          isEnabled: false,
        },
        {
          type: "종가정보",
          product1: "파생상품B",
          product2: "파생상품B",
          market: "선물, 옵션(해외)",
          isEnabled: false,
        },
        {
          type: "종가정보",
          product1: "일반상품A",
          product2: "일반상품A",
          market: "금, 배출권",
          isEnabled: false,
        },
        {
          type: "종가정보",
          product1: "KRX채권A",
          product2: "KRX채권A",
          market: "KRX 채권",
          isEnabled: false,
        },
        {
          type: "종가정보",
          product1: "KRX지수",
          product2: "그룹1",
          market: "유가증권 주식",
          isEnabled: false,
        },
        {
          type: "종가정보",
          product1: "KRX지수",
          product2: "그룹2",
          market: "코스닥시장 주식, 코넥스시장 주식",
          isEnabled: false,
        },
        {
          type: "종가정보",
          product1: "KRX지수",
          product2: "종합주가지수",
          market: "코스피, 코스닥, 코스피200 ",
          isEnabled: false,
        },
        {
          type: "참조정보",
          product1: "종목별투자자",
          product2: "유가증권 주식",
          market: "유가증권 주식",
          isEnabled: false,
        },
        {
          type: "참조정보",
          product1: "종목별투자자",
          product2: "코스닥시장 주식",
          market: "코스닥시장 주식",
          isEnabled: false,
        },
        {
          type: "참조정보",
          product1: "종목별투자자",
          product2: "코넥스시장 주식",
          market: "코넥스시장 주식",
          isEnabled: false,
        },
        {
          type: "참조정보",
          product1: "시장조치",
          product2: "유가증권 주식",
          market: "유가증권 주식",
          isEnabled: false,
        },
        {
          type: "참조정보",
          product1: "시장조치",
          product2: "코스닥시장 주식",
          market: "코스닥시장 주식",
          isEnabled: false,
        },
        {
          type: "참조정보",
          product1: "시장조치",
          product2: "코넥스시장 주식",
          market: "코넥스시장 주식",
          isEnabled: false,
        },
        {
          type: "참조정보",
          product1: "신용거래",
          product2: "유가증권 주식",
          market: "유가증권 주식",
          isEnabled: false,
        },
        {
          type: "참조정보",
          product1: "신용거래",
          product2: "코스닥시장 주식",
          market: "코스닥시장 주식",
          isEnabled: false,
        },
        {
          type: "참조정보",
          product1: "신용거래",
          product2: "코넥스시장 주식",
          market: "코넥스시장 주식",
          isEnabled: false,
        },
      ],
      // Start tableDataDirect1
      DataDirect11: "",
      DataDirect12: "",
      optionsDataDirect12: [
        {
          value: "UDP",
          label: "UDP",
        },
        {
          value: "TCP",
          label: "TCP",
        },
      ],
      DataDirect13: "",
      optionsDataDirect13: [
        {
          value: "서울_서울",
          label: "서울_서울",
        },
        {
          value: "서울_부산",
          label: "서울_부산",
        },
      ],
      DataDirect14: "",
      optionsDataDirect14: [
        {
          value: "메인",
          label: "메인",
        },
        {
          value: "백업",
          label: "백업",
        },
      ],
      DataDirect15: "",
      DataDirect16: "",
      tableDataDirect1: [
        {
          product1: "실시간 정보",
          product2: "증권A",
          number: "",
          address: "",
          addNumber: "",
        },
        {
          product1: "실시간정보/KRX지수",
          product2: "그룹1",
          number: "",
          address: "",
          addNumber: "",
        },
      ],
      // Start tableDataDirect2
      DataDirect21: "",
      DataDirect22: "",
      DataDirect23: "",
      optionsDataDirect23: [
        {
          value: "UDP",
          label: "UDP",
        },
        {
          value: "TCP",
          label: "TCP",
        },
      ],
      DataDirect24: "",
      optionsDataDirect24: [
        {
          value: "서울_서울",
          label: "서울_서울",
        },
      ],
      DataDirect25: "",
      optionsDataDirect25: [
        {
          value: "메인",
          label: "메인",
        },
        {
          value: "백업",
          label: "백업",
        },
      ],
      DataDirect26: "",
      DataDirect27: "",
      tableDataDirect2: [
        {
          product1: "종가정보",
          product2: "증권A",
          type: "직접 수신",
          number: "",
          address: "",
          addNumber: "",
        },
        {
          product1: "종가정보",
          product2: "증권A",
          type: "준직접 수신",
          number: "",
          address: "",
          addNumber: "",
        },
        {
          product1: "종가정보/KRX지수",
          product2: "그룹1",
          type: "직접 수신",
          number: "",
          address: "",
          addNumber: "",
        },
        {
          product1: "종가정보/KRX지수",
          product2: "그룹1",
          type: "준직접 수신",
          number: "",
          address: "",
          addNumber: "",
        },
        {
          product1: "참조지수/종목별투자자",
          product2: "코넥스시장주식",
          type: "직접 수신",
          number: "",
          address: "",
          addNumber: "",
        },
        {
          product1: "참조지수/종목별투자자",
          product2: "코넥스시장주식",
          type: "준직접 수신",
          number: "",
          address: "",
          addNumber: "",
        },
      ],
      tableDataDirect3: [
        {
          product1: "종가정보",
          product2: "증권A",
          type: "직접 수신",
          number: "",
          address: "",
          addNumber: "",
        },
      ],
      tableDataDirectInner: [{}],
      tableDataDirectInner1: [{}],
      tableDataDirectInner2Wrap: [{}],
      tableDataDirectInner2: [{}],
      tableDataDirectInner3Wrap: [{}],
      tableDataDirectInner3: [{}],
      // Start tableDataInDirect
      DataInDirect1: "",
      DataInDirect2: "",
      DataInDirect3: "",
      optionsDataInDirect3: [
        {
          value: "UDP(서울_서울)",
          label: "UDP(서울_서울)",
        },
        {
          value: "메인",
          label: "메인",
        },
      ],
      DataInDirect4: "",
      tableDataInDirect: [
        {
          product1: "실시간 정보",
          product2: "증권A",
        },
      ],
      tableDataInDirectInner1: [{}],
      tableDataInDirectInner2: [{}],
      DataBizName: "",
      DataBizManager: "",
      DataBizEmail: "",
      DataBizPhone: "",
      tableDataBiz: [{}],
      tableDataBizInner: [{}],
      indexName: "",
      indexInfo: "",
      indexKRX: "",
      indexThirdParty: "Yes",
      tableDataIndex: [{}],
      tableDataPermissions: [
        {
          product1: "증권A",
          product2: "증권A",
          isEnabled: false,
        },
        {
          product1: "증권B",
          product2: "증권B",
          isEnabled: false,
        },
        {
          product1: "증권C",
          product2: "증권C",
          isEnabled: false,
        },
        {
          product1: "파생상품A",
          product2: "파생상품A",
          isEnabled: false,
        },
        {
          product1: "파생상품B",
          product2: "파생상품B",
          isEnabled: false,
        },
        {
          product1: "일반상품A",
          product2: "일반상품A",
          isEnabled: false,
        },
        {
          product1: "KRX채권A",
          product2: "KRX채권A",
          isEnabled: false,
        },
        {
          product1: "KRX지수",
          product2: "그룹1",
          isEnabled: false,
        },
        {
          product1: "KRX지수",
          product2: "그룹2",
          isEnabled: false,
        },
        {
          product1: "KRX지수",
          product2: "종합주가지수",
          isEnabled: false,
        },
      ],
      tableDataWebsite: [
        {
          product: "증권A",
          isEnabled: false,
        },
        {
          product: "증권B",
          isEnabled: false,
        },
        {
          product: "증권C",
          isEnabled: false,
        },
        {
          product: "파생상품A",
          isEnabled: false,
        },
        {
          product: "파생상품B",
          isEnabled: false,
        },
        {
          product: "일반상품A",
          isEnabled: false,
        },
        {
          product: "KRX채권A",
          isEnabled: false,
        },
      ],
      tableDataExpand1: [
        {
          product1: "증권A",
          product2: "증권A",
          isEnabled: false,
        },
        {
          product1: "증권B",
          product2: "증권B",
          isEnabled: false,
        },
        {
          product1: "증권C",
          product2: "증권C",
          isEnabled: false,
        },
        {
          product1: "파생상품A",
          product2: "파생상품A",
          isEnabled: false,
        },
        {
          product1: "파생상품B",
          product2: "파생상품B",
          isEnabled: false,
        },
        {
          product1: "일반상품A",
          product2: "일반상품A",
          isEnabled: false,
        },
        {
          product1: "KRX채권A",
          product2: "KRX채권A",
          isEnabled: false,
        },
        {
          product1: "KRX지수",
          product2: "그룹1",
          isEnabled: false,
        },
        {
          product1: "KRX지수",
          product2: "그룹2",
          isEnabled: false,
        },
        {
          product1: "KRX지수",
          product2: "종합주가지수",
          isEnabled: true,
        },
      ],
      tableDataExpand2: [
        {
          type: "종가정보",
          product1: "증권A",
          product2: "증권A",
          isEnabled: false,
        },
        {
          type: "종가정보",
          product1: "증권B",
          product2: "증권B",
          isEnabled: false,
        },
        {
          type: "종가정보",
          product1: "증권C",
          product2: "증권C",
          isEnabled: false,
        },
        {
          type: "종가정보",
          product1: "파생상품A",
          product2: "파생상품A",
          isEnabled: false,
        },
        {
          type: "종가정보",
          product1: "파생상품B",
          product2: "파생상품B",
          isEnabled: false,
        },
        {
          type: "종가정보",
          product1: "일반상품A",
          product2: "일반상품A",
          isEnabled: false,
        },
        {
          type: "종가정보",
          product1: "KRX채권A",
          product2: "KRX채권A",
          isEnabled: false,
        },
        {
          type: "종가정보",
          product1: "KRX지수",
          product2: "그룹1",
          isEnabled: false,
        },
        {
          type: "종가정보",
          product1: "KRX지수",
          product2: "그룹2",
          isEnabled: false,
        },
        {
          type: "종가정보",
          product1: "KRX지수",
          product2: "종합주가지수",
          isEnabled: false,
        },
        {
          type: "참조정보",
          product1: "종목별투자자",
          product2: "유가증권 주식",
          isEnabled: false,
        },
        {
          type: "참조정보",
          product1: "종목별투자자",
          product2: "코스닥시장 주식",
          isEnabled: false,
        },
        {
          type: "참조정보",
          product1: "종목별투자자",
          product2: "코넥스시장 주식",
          isEnabled: false,
        },
        {
          type: "참조정보",
          product1: "시장조치",
          product2: "유가증권 주식",
          isEnabled: false,
        },
        {
          type: "참조정보",
          product1: "시장조치",
          product2: "코스닥시장 주식",
          isEnabled: false,
        },
        {
          type: "참조정보",
          product1: "시장조치",
          product2: "코넥스시장 주식",
          isEnabled: false,
        },
        {
          type: "참조정보",
          product1: "신용거래",
          product2: "유가증권 주식",
          isEnabled: false,
        },
        {
          type: "참조정보",
          product1: "신용거래",
          product2: "코스닥시장 주식",
          isEnabled: false,
        },
        {
          type: "참조정보",
          product1: "신용거래",
          product2: "코넥스시장 주식",
          isEnabled: false,
        },
      ],
      inputExCompanyName: "",
      inputExWidthCustomer: "",
      tableDataExpand3: [
        {
          exCompanyName: "",
          exCompanyAddress: "",
          exWidthCustomer: "",
        },
      ],
      //비조회형
      tableDataDisplay: [
        {
          product1: "증권A",
          product2: "증권A",
        },
        {
          product1: "증권B",
          product2: "증권B",
        },
        {
          product1: "증권C",
          product2: "증권C",
        },
        {
          product1: "파생상품A",
          product2: "파생상품A",
        },
        {
          product1: "파생상품B",
          product2: "파생상품B",
        },
        {
          product1: "일반상품A",
          product2: "일반상품A",
        },
        {
          product1: "KRX채권A",
          product2: "KRX채권A",
        },
        {
          product1: "KRX지수",
          product2: "그룹1",
        },
        {
          product1: "KRX지수",
          product2: "그룹2",
        },
        {
          product1: "KRX지수",
          product2: "종합주가지수",
        },
      ],
      tableDataDisplayEtc: [
        {
          use: "",
        },
      ],
      // 특례
      tableDataSpecial: [
        {
          title: "사무관리사",
          contents: "제3자(운용사) 사무관리 목적에 한하여 이용 시 기본료 및 변동료 60% 할인 (실시간정보에 한함)",
        },
        {
          title: "채권평가사",
          contents:
            "파생상품 A 정보 중에서 국제선물만을 이용 시 파생상품A 정보의 기본료 및 변동료 60%할인(실시간/종가)",
        },
      ],
      //프로모션
      tableDataPromotion: [
        {
          contents: "호가정보 미사용시 기본료 40% 할인, 지수선물 정보만 이용 시 파생상품A 기본료 50% 할인",
        },
        {
          contents:
            "파생상품 A 정보 중에서 국제선물만을 이용 시 파생상품A 정보의 기본료 및 변동료 60%할인(실시간/종가)",
        },
      ],
      // 상품목록
      tableDataProductList: [
        {
          name: "증권A/해외/실시간정보/[최종이용]일반용/준직접(서울_서울/한국투자)",
        },
        {
          name: "증권A/해외/실시간정보/[최종이용]일반용/준직접(서울_서울/한국투자)",
        },
      ],
      // 고객사 검색 팝업
      dialogCustomerVisible: false,
      insertCustomer: "",
      tableDataCustomer: [
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
      ],
      // 회원사 검색 팝업
      dialogMemberVisible: false,
      insertMember: "",
      tableDataMember: [
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
      ],
      dialogProviderVisible: false,
      insertProvider: "",
      tableDataProvider: [
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
        {
          companyCode: "1125998745",
          userName: "우리들 증권",
        },
      ],
      // 이용조건 동의
      dialogAgreementVisible1: false,
      checkAgree1: [],
      // 정책서 동의
      dialogAgreementVisible2: false,
      checkAgree2: [],
      // 가격정보 동의
      dialogAgreementVisible3: false,
      checkAgree3: [],
      // 비계좌가입자 동의
      dialogAgreementVisible4: false,
      checkAgree4: [],
      // 특례팝업
      dialogSpecialSrchVisible: false,
      insertSpecialSrch: "",
      tableDataSpecialSrch: [
        {
          name: "특례조건 이름 ",
        },
        {
          name: "특례조건 이름 ",
        },
        {
          name: "특례조건 이름 ",
        },
        {
          name: "특례조건 이름 ",
        },
        {
          name: "특례조건 이름 ",
        },
        {
          name: "특례조건 이름 ",
        },
        {
          name: "특례조건 이름 ",
        },
        {
          name: "특례조건 이름 ",
        },
        {
          name: "특례조건 이름 ",
        },
        {
          name: "특례조건 이름 ",
        },
        {
          name: "특례조건 이름 ",
        },
        {
          name: "특례조건 이름 ",
        },
      ],
      // 프로모션 팝업
      dialogPromotionSrchVisible: false,
      insertPromotionSrch: "",
      tableDataPromotionSrch: [
        {
          name: "프로모션이름 프로모션이름 프로모션이름 프로모션이름",
        },
        {
          name: "프로모션이름 프로모션이름 프로모션이름 프로모션이름",
        },
        {
          name: "프로모션이름 프로모션이름 프로모션이름 프로모션이름",
        },
      ],
    };
  },
  methods: {
    rowsapnMerge3({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 3 === 0) {
          return [3, 1];
        } else {
          return [0, 0];
        }
      }
    },
    rowsapnMerge10({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 10 === 0) {
          return [10, 1];
        } else {
          return [0, 0];
        }
      }
    },
    colsapnMerge3({ columnIndex }) {
      if (columnIndex === 1) {
        return [1, 2];
      } else if (columnIndex === 2) {
        return [0, 0];
      }
    },
    colsapnMerge4({ columnIndex }) {
      if (columnIndex === 1) {
        return [1, 3];
      } else if (columnIndex === 2 || columnIndex === 3) {
        return [0, 0];
      }
    },
    colsapnMerge5({ columnIndex }) {
      if (columnIndex === 2) {
        return [1, 2];
      } else if (columnIndex === 3) {
        return [0, 0];
      }
    },
    colsapnMerge6({ columnIndex }) {
      if (columnIndex === 3) {
        return [1, 2];
      } else if (columnIndex === 4) {
        return [0, 0];
      }
    },
    colsapnDirect6({ columnIndex }) {
      if (columnIndex === 2) {
        return [1, 4];
      } else if (columnIndex === 3 || columnIndex === 4 || columnIndex === 5) {
        return [0, 0];
      }
    },
    addRow(index, rows) {
      rows.push(index, 1);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
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
