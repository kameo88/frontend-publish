import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";

/**
 * Route 등록시 Home을 제외한 나머지는 Lazy loading을 사용하기로 한다.
 * 또한, 모든 페이지는
 */
const routes: Array<RouteRecordRaw> = [
  {
    name: "Home",
    path: "/",
    component: Home,
    meta: {
      authorized: false,
      layout: "EmptyLayout",
    },
  },
  {
    name: "SubLayout",
    path: "/SubLayout",
    component: () => import("@/views/common/SubLayout.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "sample",
    path: "/sample",
    component: () => import("@/views/publishing/Sample.vue"),
    meta: {
      authorized: false,
      layout: "EmptyLayout",
    },
  },
  {
    name: "GuideList",
    path: "/GuideList",
    component: () => import("@/views/publishing/GuideList.vue"),
    meta: {
      authorized: false,
      layout: "GuideLayout",
    },
  },
  {
    name: "GuideButton",
    path: "/GuideButton",
    component: () => import("@/views/publishing/GuideButton.vue"),
    meta: {
      authorized: false,
      layout: "GuideLayout",
    },
  },
  {
    name: "Main",
    path: "/Main",
    component: () => import("@/views/Main.vue"),
    meta: {
      authorized: false,
      layout: "MainLayout",
    },
  },
  {
    name: "SignupInfo",
    path: "/SignupInfo",
    component: () => import("@/views/signup/SignupInfo.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "SignupTerms",
    path: "/SignupTerms",
    component: () => import("@/views/signup/SignupTerms.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "SignupForm",
    path: "/SignupForm",
    component: () => import("@/views/signup/SignupForm.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "SignupDone",
    path: "/SignupDone",
    component: () => import("@/views/signup/SignupDone.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "AuthEmailFailed",
    path: "/AuthEmailFailed",
    component: () => import("@/views/signup/AuthEmailFailed.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "AuthEmailConfirmed",
    path: "/AuthEmailConfirmed",
    component: () => import("@/views/signup/AuthEmailConfirmed.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "ReconsentTerms",
    path: "/ReconsentTerms",
    component: () => import("@/views/signup/ReconsentTerms.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "AuthEmailConfirm",
    path: "/AuthEmailConfirm",
    component: () => import("@/views/signin/AuthEmailConfirm.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("@/views/Login.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "FindingID",
    path: "/FindingID",
    component: () => import("@/views/signin/FindingID.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "ResultFindingID",
    path: "/ResultFindingID",
    component: () => import("@/views/signin/ResultFindingID.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "ResetPassword",
    path: "/ResetPassword",
    component: () => import("@/views/signin/ResetPassword.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "SendingPassword",
    path: "/SendingPassword",
    component: () => import("@/views/signin/SendingPassword.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "ChangePassword",
    path: "/ChangePassword",
    component: () => import("@/views/signin/ChangePassword.vue"),
    meta: {
      authorized: false,
      layout: "EmptyLayout",
    },
  },
  {
    name: "ApprovingUser",
    path: "/ApprovingUser",
    component: () => import("@/views/signin/ApprovingUser.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "DeletedCompany",
    path: "/DeletedCompany",
    component: () => import("@/views/signin/DeletedCompany.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "PasswordError",
    path: "/PasswordError",
    component: () => import("@/views/signin/PasswordError.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "DormantUser",
    path: "/DormantUser",
    component: () => import("@/views/signin/DormantUser.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "ProductOverview",
    path: "/ProductOverview",
    component: () => import("@/views/product/ProductOverview.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "ProductOverviewEn",
    path: "/ProductOverviewEn",
    component: () => import("@/views/product/ProductOverviewEn.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "RealTimeProduct",
    path: "/RealTimeProduct",
    component: () => import("@/views/product/RealTimeProduct.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "RealTimeProductEn",
    path: "/RealTimeProductEn",
    component: () => import("@/views/product/RealTimeProductEn.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "ClosingPriceProduct",
    path: "/ClosingPriceProduct",
    component: () => import("@/views/product/ClosingPriceProduct.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "ClosingPriceProductEn",
    path: "/ClosingPriceProductEn",
    component: () => import("@/views/product/ClosingPriceProductEn.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "PastData",
    path: "/PastData",
    component: () => import("@/views/product/PastData.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "PastDataEn",
    path: "/PastDataEn",
    component: () => import("@/views/product/PastDataEn.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "CompanyInfo",
    path: "/CompanyInfo",
    component: () => import("@/views/product/CompanyInfo.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "CompanyInfoEn",
    path: "/CompanyInfoEn",
    component: () => import("@/views/product/CompanyInfoEn.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "MemberInfo",
    path: "/MemberInfo",
    component: () => import("@/views/mypage/MemberInfo.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "MemberWithdrawal",
    path: "/MemberWithdrawal",
    component: () => import("@/views/mypage/MemberWithdrawal.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "MemberWithdrawalDone",
    path: "/MemberWithdrawalDone",
    component: () => import("@/views/mypage/MemberWithdrawalDone.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "ManagerList",
    path: "/ManagerList",
    component: () => import("@/views/mypage/ManagerList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "NewsletterConfirm",
    path: "/NewsletterConfirm",
    component: () => import("@/views/mypage/NewsletterConfirm.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "MyAlarmList",
    path: "/MyAlarmList",
    component: () => import("@/views/mypage/MyAlarmList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "MyInquireList",
    path: "/MyInquireList",
    component: () => import("@/views/mypage/MyInquireList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "MyInquireDetails",
    path: "/MyInquireDetails",
    component: () => import("@/views/mypage/MyInquireDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "MyInquireAnswerDetails",
    path: "/MyInquireAnswerDetails",
    component: () => import("@/views/mypage/MyInquireAnswerDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "InsertMyInquire",
    path: "/InsertMyInquire",
    component: () => import("@/views/mypage/InsertMyInquire.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "ReportOverview",
    path: "/ReportOverview",
    component: () => import("@/views/report/ReportOverview.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "ReportOverviewEn",
    path: "/ReportOverviewEn",
    component: () => import("@/views/report/ReportOverviewEn.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "ReportList",
    path: "/ReportList",
    component: () => import("@/views/report/ReportList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "ReprotExemption",
    path: "/ReprotExemption",
    component: () => import("@/views/report/ReprotExemption.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "ReportDetails",
    path: "/ReportDetails",
    component: () => import("@/views/report/ReportDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "InsertReport",
    path: "/InsertReport",
    component: () => import("@/views/report/InsertReport.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "InsertReportRevision",
    path: "/InsertReportRevision",
    component: () => import("@/views/report/InsertReportRevision.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "KRXApprovalList",
    path: "/KRXApprovalList",
    component: () => import("@/views/KRX/KRXApprovalList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "KRXApprovalDetails",
    path: "/KRXApprovalDetails",
    component: () => import("@/views/KRX/KRXApprovalDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "KRXBusinessList",
    path: "/KRXBusinessList",
    component: () => import("@/views/KRX/KRXBusinessList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "KRXContractList",
    path: "/KRXContractList",
    component: () => import("@/views/KRX/KRXContractList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "KRXTemplate",
    path: "/KRXTemplate",
    component: () => import("@/views/KRX/KRXTemplate.vue"),
    meta: {
      authorized: false,
      layout: "EmptyLayout",
    },
  },
  {
    name: "KRXTemplateTable1",
    path: "/KRXTemplateTable1",
    component: () => import("@/views/KRX/KRXTemplateTable1.vue"),
    meta: {
      authorized: false,
      layout: "EmptyLayout",
    },
  },
  {
    name: "KRXTemplateTable2",
    path: "/KRXTemplateTable2",
    component: () => import("@/views/KRX/KRXTemplateTable2.vue"),
    meta: {
      authorized: false,
      layout: "EmptyLayout",
    },
  },
  {
    name: "KRXTemplateTable3",
    path: "/KRXTemplateTable3",
    component: () => import("@/views/KRX/KRXTemplateTable3.vue"),
    meta: {
      authorized: false,
      layout: "EmptyLayout",
    },
  },
  {
    name: "NoticeList",
    path: "/NoticeList",
    component: () => import("@/views/notice/NoticeList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "NoticeDetails",
    path: "/NoticeDetails",
    component: () => import("@/views/notice/NoticeDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "FaqList",
    path: "/FaqList",
    component: () => import("@/views/service/FaqList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "HomepageInfo",
    path: "/HomepageInfo",
    component: () => import("@/views/service/HomepageInfo.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "HomepageInfoEn",
    path: "/HomepageInfoEn",
    component: () => import("@/views/service/HomepageInfoEn.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "Map",
    path: "/Map",
    component: () => import("@/views/service/Map.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "MapEn",
    path: "/MapEn",
    component: () => import("@/views/service/MapEn.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "InsertInquire",
    path: "/InsertInquire",
    component: () => import("@/views/service/InsertInquire.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "OrderOverview",
    path: "/OrderOverview",
    component: () => import("@/views/business/OrderOverview.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "ContractOverview",
    path: "/ContractOverview",
    component: () => import("@/views/business/ContractOverview.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "ContractOverviewEn",
    path: "/ContractOverviewEn",
    component: () => import("@/views/business/ContractOverviewEn.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "OrderList",
    path: "/OrderList",
    component: () => import("@/views/business/OrderList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "OrderDetails",
    path: "/OrderDetails",
    component: () => import("@/views/business/OrderDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "InsertOrder",
    path: "/InsertOrder",
    component: () => import("@/views/business/InsertOrder.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "InquireContract",
    path: "/InquireContract",
    component: () => import("@/views/business/InquireContract.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "InquireContractDone",
    path: "/InquireContractDone",
    component: () => import("@/views/business/InquireContractDone.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "ContractList",
    path: "/ContractList",
    component: () => import("@/views/business/ContractList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "ContractDetails",
    path: "/ContractDetails",
    component: () => import("@/views/business/ContractDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "OtherReportList",
    path: "/OtherReportList",
    component: () => import("@/views/business/OtherReportList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "InsertOtherReport",
    path: "/InsertOtherReport",
    component: () => import("@/views/business/InsertOtherReport.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "SuspensionList",
    path: "/SuspensionList",
    component: () => import("@/views/business/SuspensionList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "SuspensionList-old",
    path: "/SuspensionList-old",
    component: () => import("@/views/business/SuspensionList-old.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "InsertSuspension",
    path: "/InsertSuspension",
    component: () => import("@/views/business/InsertSuspension.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "Print",
    path: "/Print",
    component: () => import("@/views/business/Print.vue"),
    meta: {
      authorized: false,
      layout: "EmptyLayout",
    },
  },
  {
    name: "PrintCover1",
    path: "/PrintCover1",
    component: () => import("@/views/business/PrintCover1.vue"),
    meta: {
      authorized: false,
      layout: "EmptyLayout",
    },
  },
  {
    name: "PrintCover2",
    path: "/PrintCover2",
    component: () => import("@/views/business/PrintCover2.vue"),
    meta: {
      authorized: false,
      layout: "EmptyLayout",
    },
  },
  {
    name: "Privacy",
    path: "/Privacy",
    component: () => import("@/views/common/Privacy.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "PrivacyEn",
    path: "/PrivacyEn",
    component: () => import("@/views/common/PrivacyEn.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "TermsOfUse",
    path: "/TermsOfUse",
    component: () => import("@/views/common/TermsOfUse.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "TermsOfUseEn",
    path: "/TermsOfUseEn",
    component: () => import("@/views/common/TermsOfUseEn.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "Error",
    path: "/:pathMatch(.*)*",
    // route level code-splitting, lazy-loaded
    component: () => import(/* webpackChunkName: "pageNotFound" */ "../views/PageNotFound.vue"),
    meta: {
      authorized: false,
      layout: "EmptyLayout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

/**
 * Route 되기 전에 실행
 * 권한 체크는 DB 설정에 따라 동작하게 처리 한다.
 */
router.beforeEach((to, from, next) => {
  // to: 이동할 url에 해당하는 라우팅 객체
  if (
    to.matched.some(function (routeInfo) {
      // 권한이 있는지 없는지 결과를 돌려줌

      return false;
    })
  ) {
    // 권한이 없을 경우
    alert("Login Please!");
  } else {
    // 권한이 있을 경우
    console.log("routing success : '" + to.path + "'");
    next(); // 페이지 전환
  }
});

export default router;
