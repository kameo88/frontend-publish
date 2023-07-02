<template>
  <el-dialog
    title="프린트 화면"
    v-model="dialogPrintVisible"
    :close-on-click-modal="false"
    custom-class="el-extra-large print"
  >
    <template #title>
      <span class="el-dialog__title">주문서</span>
      <div class="btn">
        <el-button size="small" icon="iconset icon-print" v-print="'#orderFormArea'">프린트</el-button>
      </div>
    </template>
    <div class="orderform-wrap">
      <!-- 프린트 영역 -->
      <div id="orderFormArea" class="orderform-area">
        <div class="page-break">
          <!-- 표지 -->
          <div class="cover-area">
            <div class="title-wrap">
              <h2 class="title">주문서</h2>
            </div>
            <div class="order-number">
              <div class="number-box">
                <strong class="order-title">코스콤 기재</strong>
                <dl>
                  <dt class="label"><strong>주문서 번호</strong></dt>
                  <dd class="item">koscom123456</dd>
                </dl>
              </div>
            </div>
            <div class="desc">
              본 주문서(이하 "주문서")는 아래의 고객사(이하 "고객사")와 주식회사 코스콤(이하 "코스콤") 간 체결하는
              "종가정보이용계약"의 한 부분으로 적용된다.
            </div>
            <!-- 주문 정보 -->
            <div class="order-info">
              <dl>
                <dt class="label">고객사명</dt>
                <dd class="item">우리증권 주식회사</dd>
              </dl>
              <dl>
                <dt class="label">개&nbsp;&nbsp;시&nbsp;&nbsp;일</dt>
                <dd class="item">2010년 10월 10일</dd>
              </dl>
            </div>
            <!-- //주문 정보 -->
            <!-- 승인 정보 table -->
            <div class="table-wrap">
              <div class="table-top">
                <h3 class="table-title">승&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;인</h3>
              </div>
              <div class="table order">
                <table>
                  <caption>
                    <strong>승인 정보</strong>
                  </caption>
                  <colgroup>
                    <col />
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">고객사</th>
                      <th scope="col">코스콤</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="left">
                        <span class="label">이름</span>
                        <span class="item">홍길동</span>
                      </td>
                      <td class="left">
                        <span class="label">이름</span>
                        <span class="item">고길동</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="left">
                        <span class="label">직위</span>
                        <span class="item">대표이사</span>
                      </td>
                      <td class="left">
                        <span class="label">직위</span>
                        <span class="item">전무</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="left">서명</td>
                      <td class="left">서명</td>
                    </tr>
                    <tr>
                      <td class="left">서명일자</td>
                      <td class="left">서명일자</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- //승인 정보 table -->
          </div>
          <!-- //표지 -->
        </div>
        <div class="page-break">
          <!-- 정보 상품 선택 -->
          <div class="tbl-wrap">
            <div class="tbl-top"><h4 class="tbl-title">정보상품 선택</h4></div>
            <el-table :data="tableDataProduct1" :span-method="InfoProduct" class="type2" style="width: 100%">
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
                <el-checkbox v-model="productType21">
                  <span>주식옵션 기초자산 정보에 한하여 수신이용</span>
                  <ul class="list mark">
                    <li>주문유형이 증권선물사의 경우에만 적용, 증권A와 증권B일 경우에만 해당됩니다.</li>
                  </ul>
                </el-checkbox>
              </el-form-item>
            </div>
          </div>
        </div>
        <div class="page-break">
          <!-- 정보 수신방식 -->
          <div class="tbl-wrap">
            <div class="tbl-top"><h4 class="tbl-title">정보 수신방식</h4></div>
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
                <el-table-column label="직접1-정보상품명" width="240">
                  <template #default="scope">
                    <em>{{ scope.row.product1 }}</em>
                    <span>{{ scope.row.product2 }}</span>
                  </template>
                </el-table-column>
                <el-table-column class-name="tbl-inner-wrap" width="80">
                  <template #header>
                    <span>세트 수</span>
                  </template>
                  <template #default>
                    <el-table :data="tableData - DirectInner" class="tbl-inner" style="width: 100%">
                      <el-table-column width="80">
                        <template #default>
                          <el-input v-model="DataDirect11" clearable></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column class-name="tbl-inner-wrap">
                        <el-table :data="tableData - DirectInner1" class="tbl-inner multi" style="width: 100%">
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
                                  <el-form-item prop="DataDirect15">
                                    <el-input v-model="DataDirect15" clearable></el-input>
                                  </el-form-item>
                                </div>
                              </div>
                            </template>
                          </el-table-column>
                        </el-table>
                      </el-table-column>
                      <el-table-column width="110">
                        <template #default>
                          <el-input v-model="DataDirect16" class="w42" clearable readonly></el-input>
                        </template>
                      </el-table-column>
                    </el-table>
                  </template>
                </el-table-column>
                <el-table-column>
                  <template #header>
                    <span>데이터피드 수신설치 주소</span>
                    <span>(복수의 사이트일 경우 모두 기재)</span>
                  </template>
                </el-table-column>
                <el-table-column width="110">
                  <template #header>
                    <span>추가 수신료</span>
                    <span>적용개수</span>
                  </template>
                </el-table-column>
              </el-table>
              <el-table :data="tableDataDirect1" class="type2" style="width: 100%">
                <el-table-column label="직접1-정보상품명" width="240">
                  <template #default="scope">
                    <em>{{ scope.row.product1 }}</em>
                    <span>{{ scope.row.product2 }}</span>
                  </template>
                </el-table-column>
                <el-table-column class-name="tbl-inner-wrap">
                  <template #header>
                    <span>데이터피드 수신설치 주소</span>
                    <span>(복수의 사이트일 경우 모두 기재)</span>
                  </template>
                  <template #default>
                    <!-- 09/29 -->
                    <el-table :data="tableDataDirectInner" class="tbl-inner" style="width: 100%">
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
                                  <el-form-item prop="DataDirect15">
                                    <el-input v-model="DataDirect15" clearable></el-input>
                                  </el-form-item>
                                </div>
                              </div>
                            </template>
                          </el-table-column>
                        </el-table>
                      </el-table-column>
                    </el-table>
                    <!-- //09/29 -->
                  </template>
                </el-table-column>
              </el-table>
              <ul class="list-info">
                <li>
                  <strong class="txt-blue">이용안내</strong>
                  <ol class="list number">
                    <li>정보분배 시스템으로 부터 정보를 직접 수신하는 수신세트</li>
                    <li>
                      재해복구 목적에 한하고 실 이용이 없는 직접 수신에 대해서는 추가수신료를 적용하지 않음.(해당 목적의
                      직접 수신이 필요할 경우, '데이터피드 수신설치 주소' 란에 기재)
                    </li>
                  </ol>
                </li>
              </ul>
              <!-- //정보 수신방식 - 직접1 -->
              <!-- 정보 수신방식 - 직접2 -->
              <el-table :data="tableDataDirect2" :span-method="colsapnDirect6" class="type2" style="width: 100%">
                <el-table-column label="직접2-정보상품명" width="220">
                  <template #default="scope">
                    <em>{{ scope.row.product1 }}</em>
                    <span>{{ scope.row.product2 }}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="type" label="구분" width="80"></el-table-column>
                <el-table-column class-name="tbl-inner-wrap" width="80">
                  <template #header>
                    <span>세트 수</span>
                  </template>
                  <template #default>
                    <el-table :data="tableDataDirectInner2Wrap" class="tbl-inner" style="width: 100%">
                      <el-table-column width="80">
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
                              <template #default>
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
                                </el-table>
                              </template>
                            </el-table-column>
                          </el-table>
                        </template>
                      </el-table-column>
                      <el-table-column width="110">
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
                <el-table-column width="110">
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
                      재해복구 목적에 한하고 실 이용이 없는 직접 수신에 대해서는 추가수신료를 적용하지 않음.(해당 목적의
                      직접 수신이 필요할 경우, '데이터피드 수신설치 주소' 란에 기재)
                    </li>
                  </ol>
                </li>
              </ul>
              <!-- //정보 수신방식 - 직접2 -->
              <!-- 정보 수신방식 - 직접3 -->
              <el-table :data="tableDataDirect3" :span-method="colsapnDirect6" class="type2" style="width: 100%">
                <el-table-column label="직접3-정보상품명" width="220">
                  <template #default="scope">
                    <em>{{ scope.row.product1 }}</em>
                    <span>{{ scope.row.product2 }}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="type" label="구분" width="80"></el-table-column>
                <el-table-column class-name="tbl-inner-wrap" width="80">
                  <template #header>
                    <span>세트 수</span>
                  </template>
                  <template #default>
                    <el-table :data="tableDataDirectInner3Wrap" class="tbl-inner" style="width: 100%">
                      <el-table-column width="80">
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
                          </el-table>
                        </template>
                      </el-table-column>
                      <el-table-column width="110">
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
                <el-table-column width="110">
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
                <el-table-column prop="product" label="간접-정보상품명" width="240">
                  <template #default="scope">
                    <em>{{ scope.row.product1 }}</em>
                    <span>{{ scope.row.product2 }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="정보사업자명" class-name="tbl-inner-wrap" width="270">
                  <template #default>
                    <el-table :data="tableDataInDirectInner1" class="tbl-inner" style="width: 100%">
                      <el-table-column class-name="upper-row" width="270">
                        <template #default>
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
                <el-table-column label="정보사업자명" width="290">
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
        </div>
        <div class="page-break">
          <div class="tbl-wrap">
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
          </div>
          <!-- //정보 상품 선택 -->
        </div>
        <div class="page-break">
          <!-- 비조회형 정보이용 -->
          <div class="tbl-wrap">
            <div class="tbl-top"><h4 class="tbl-title">비조회형 정보이용 (Non-Display Use)</h4></div>
            <div class="desc">
              비조회형 정보이용은 정보의 조회 또는 분배 이외 목적으로 실시간정보를 접속, 가공 또는 이용하는 행위로서,
              비조회형 정보이용이 있을 경우 코스콤에 고지해야 합니다. 본 계약상 고지 대상이 되는 비조회형 정보이용은
              다음과 같이 분류됩니다.
            </div>
            <ol class="list number">
              <li>
                트레이딩 관련 이용 : 자동/반자동 주문·호가 생성, 스마트오더라우팅(최선조건 주문·제출),
                시장조성(마켓메이킹), 알고리즘매매, 프로그램매매, 고빈도매매
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
              <el-table-column label="트레이딩 관련 이용" width="170">
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
              <el-table-column prop="etc" label="기타 용도" align="left"></el-table-column>
            </el-table>
          </div>
          <!-- //비조회형 정보이용 -->
        </div>
        <div class="page-break">
          <!-- 주문서 기타정보 ; 대분류 -->
          <div class="title-wrap sub">
            <h2 class="title">주문서 기타정보</h2>
          </div>
          <!-- 기술대리인 -->
          <div class="title-wrap sub">
            <h3 class="title">기술대리인 정보</h3>
          </div>
          <div class="info-box biz">
            <dl>
              <dt class="label">기술대리인 동의시점</dt>
              <dd class="items">
                <span class="date">2010-10-10</span>
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
              </h4>
              <dl>
                <dt class="label">회사명</dt>
                <dd class="items">우리투자증권</dd>
                <dt class="label">회사주소</dt>
                <dd class="items">서울 영등포구 여의도동 987-8 9</dd>
              </dl>
              <dl>
                <dt class="label">담당자 이름</dt>
                <dd class="items">김소연</dd>
                <dt class="label">담당자 직책</dt>
                <dd class="items">과장</dd>
              </dl>
              <dl>
                <dt class="label">이메일 주소</dt>
                <dd class="items">abcd1234@abc.com</dd>
                <dt class="label">
                  <span>고객사의</span>
                  <span>정보이용목적</span>
                </dt>
                <dd class="items">정보이용목적</dd>
              </dl>
              <dl>
                <dt class="label">
                  <span>기술대리인이</span>
                  <span>제공하는 서비스</span>
                </dt>
                <dd class="items">제공서비스 입력 제공서비스 입력 제공서비스 입력 제공서비스 입력 제공서비스 입력</dd>
              </dl>
            </div>
            <!-- //기술대리인1 -->
            <!-- 기술대리인2 -->
            <div class="item-group">
              <h4 class="sub-title">
                <span class="txt">기술대리인2</span>
              </h4>
              <dl>
                <dt class="label">회사명</dt>
                <dd class="items">우리투자증권</dd>
              </dl>
              <dl>
                <dt class="label">회사주소</dt>
                <dd class="items">서울 영등포구 여의도동 987-8 9</dd>
              </dl>
              <dl>
                <dt class="label">담당자 이름</dt>
                <dd class="items">김소연</dd>
                <dt class="label">담당자 직책</dt>
                <dd class="items">과장</dd>
              </dl>
              <dl>
                <dt class="label">이메일 주소</dt>
                <dd class="items">abcd1234@abc.com</dd>
                <dt class="label">
                  <span>고객사의</span>
                  <span>정보이용목적</span>
                </dt>
                <dd class="items">정보이용목적</dd>
              </dl>
              <dl>
                <dt class="label">
                  <span>기술대리인이</span>
                  <span>제공하는 서비스</span>
                </dt>
                <dd class="items">제공서비스 입력 제공서비스 입력 제공서비스 입력 제공서비스 입력 제공서비스 입력</dd>
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
            <dl>
              <dt class="label">이용조건 동의시점</dt>
              <dd class="items">
                <span class="date">2010-10-10</span>
                <ul class="list mark inline">
                  <li>
                    당일 주문서 제출시 적용되는 이용조건입니다. <br />
                    상세 내용 확인 후 동의하셔야 주문서 작성이 완료됩니다.
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          <!-- //이용조건 -->
          <!-- 정책서 -->
          <div class="title-wrap sub">
            <h3 class="title">정책서 동의정보</h3>
          </div>
          <div class="info-box biz">
            <dl>
              <dt class="label">정책서 동의시점</dt>
              <dd class="items">
                <span class="date">2010-10-10</span>
                <ul class="list mark inline">
                  <li>
                    당일 주문서 제출시 적용되는 이용조건입니다. <br />
                    상세 내용 확인 후 동의하셔야 주문서 작성이 완료됩니다.
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          <!-- //정책서  -->
          <!-- 사이드 레터 -->
          <div class="title-wrap sub">
            <h3 class="title">사이드 레터</h3>
          </div>
          <div class="info-box biz">
            <dl>
              <dt class="label">사이드 레터</dt>
              <dd class="items">
                <a href="#none" download>부속 논의서_20210614.pdf, 부속 논의서_20210614.pdf</a>
                <ul class="list mark">
                  <li>당일 주문서 제출시 적용되는 사이드 레터입니다. 고객과 협의된 별도 부속서 항목입니다.</li>
                </ul>
              </dd>
            </dl>
          </div>
          <!-- //사이드 레터 -->
        </div>
        <div class="page-break">
          <!--  계약/주문서 담당 연락처 -->
          <div class="title-wrap sub">
            <h3 class="title">계약/주문서 담당 연락처</h3>
          </div>
          <div class="info-box box">
            <!-- 연락처 1 -->
            <div class="item-group">
              <h4 class="sub-title">
                <span class="txt">연락처 정보 1</span>
              </h4>
              <dl>
                <dt class="label">성명</dt>
                <dd class="items">김소연</dd>
                <dt class="label">담당자 직책</dt>
                <dd class="items">과장</dd>
              </dl>
              <dl>
                <dt class="label">전화번호</dt>
                <dd class="items">02-1234-5678</dd>
                <dt class="label">이메일 주소</dt>
                <dd class="items">abcd1234@abc.com</dd>
              </dl>
              <dl>
                <dt class="label">국가</dt>
                <dd class="items">대한민국</dd>
              </dl>
              <dl>
                <dt class="label">회사 주소</dt>
                <dd class="items">서울 영등포구 여의도동 987-8 9</dd>
              </dl>
            </div>
            <!-- //연락처 1 -->
            <!-- 연락처 2 -->
            <div class="item-group">
              <h4 class="sub-title">
                <span class="txt">연락처 정보 2</span>
              </h4>
              <dl>
                <dt class="label">성명</dt>
                <dd class="items">김소연</dd>
                <dt class="label">담당자 직책</dt>
                <dd class="items">과장</dd>
              </dl>
              <dl>
                <dt class="label">전화번호</dt>
                <dd class="items">02-1234-5678</dd>
                <dt class="label">이메일 주소</dt>
                <dd class="items">abcd1234@abc.com</dd>
              </dl>
              <dl>
                <dt class="label">국가</dt>
                <dd class="items">대한민국</dd>
              </dl>
              <dl>
                <dt class="label">회사 주소</dt>
                <dd class="items">서울 영등포구 여의도동 987-8 9</dd>
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
              </h4>
              <dl>
                <dt class="label">성명</dt>
                <dd class="items">김소연</dd>
                <dt class="label">담당자 직책</dt>
                <dd class="items">과장</dd>
              </dl>
              <dl>
                <dt class="label">전화번호</dt>
                <dd class="items">02-1234-5678</dd>
                <dt class="label">이메일 주소</dt>
                <dd class="items">abcd1234@abc.com</dd>
              </dl>
              <dl>
                <dt class="label">국가</dt>
                <dd class="items">대한민국</dd>
              </dl>
              <dl>
                <dt class="label">회사 주소</dt>
                <dd class="items">서울 영등포구 여의도동 987-8 9</dd>
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
              </h4>
              <dl>
                <dt class="label">성명</dt>
                <dd class="items">김소연</dd>
                <dt class="label">담당자 직책</dt>
                <dd class="items">과장</dd>
              </dl>
              <dl>
                <dt class="label">전화번호</dt>
                <dd class="items">02-1234-5678</dd>
                <dt class="label">이메일 주소</dt>
                <dd class="items">abcd1234@abc.com</dd>
              </dl>
              <dl>
                <dt class="label">국가</dt>
                <dd class="items">대한민국</dd>
              </dl>
              <dl>
                <dt class="label">회사 주소</dt>
                <dd class="items">서울 영등포구 여의도동 987-8 9</dd>
              </dl>
            </div>
          </div>
          <!-- //IT 담당 연락처 -->
        </div>
        <div class="page-break">
          <!-- 계약관련 서류 -->
          <div class="title-wrap sub">
            <h3 class="title">계약관련 서류</h3>
          </div>
          <div class="info-box biz">
            <dl>
              <dt class="label">계약관련 서류</dt>
              <dd class="items">
                <a href="#none" download>부속 논의서_20210614.pdf, 부속 논의서_20210614.pdf</a>
                <ul class="list mark">
                  <li>사업자등록증, 정관, 등본</li>
                </ul>
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
          <div class="info-box box txt">영업사원이 등록한 내용이 보여집니다.</div>
          <!-- //기타 사항 -->
          <!-- 확약 사항 -->
          <div class="title-wrap sub">
            <h3 class="title">확약 사항</h3>
          </div>
          <div class="info-box box txt">영업사원이 등록한 내용이 보여집니다.</div>
          <!-- //확약 사항 -->
        </div>
      </div>
      <!-- 프린트 영역 -->
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import print from "vue3-print-nb";

export default defineComponent({
  name: "Print",
  directives: {
    print,
  },
  setup() {
    return {
      dialogPrintVisible: true,
      ruleForm: {
        baseCurrency: "원화(￦)",
        productType21: false,
        productType22: false,
        productType3: false,
        infoLicense: ["직접", "간접"],
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
      tableDataDirectInner: [
        {
          DataDirectInner00: "1",
        },
      ],
      tableDataDirectInner1: [
        {
          DataDirectInner100: "1",
        },
      ],
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
          etc: "기타 용도 내용입니다. ",
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
    };
  },
  methods: {
    InfoProduct1({ rowIndex }) {
      if (rowIndex === 8) {
        return [3, 1];
      } else {
        return [0, 0];
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
    rowsapnMerge10({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 10 === 0) {
          return [10, 1];
        } else {
          return [0, 0];
        }
      }
    },
  },
});
</script>

<style scoped></style>
