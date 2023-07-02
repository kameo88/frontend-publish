<template>
  <div class="guide-wrap">
    <h2 class="h2-title">Button</h2>
    <el-button @click="dialogAlert">Alert Message</el-button>
    <el-button @click="dialogMessage" type="primary">Confirm Message</el-button>

    <h2 class="h2-title">Tabs</h2>
    <!-- tab menu -->
    <div class="el-tabs-wrap" style="width: 700px">
      <div class="btn-area">
        <el-button class="gray" size="medium">기능버튼</el-button>
        <el-button class="blue" size="medium">주요버튼</el-button>
      </div>
      <el-tabs v-model="activeName">
        <el-tab-pane label="메뉴 노출 관리" name="treeMenuRole">
          <!-- Role tree -->
          <el-tree
            :data="dataTree"
            node-key="id"
            show-checkbox
            :default-expanded-keys="[2, 3]"
            :props="defaultProps"
            icon-class="icon-tree"
          >
            <template #default="{ node }">
              <span class="tree-node-desc">
                <span>{{ node.label }}</span>
                <span class="desc">{{ node.label }}.description</span>
              </span>
            </template>
          </el-tree>
          <!-- //Role tree -->
        </el-tab-pane>
        <el-tab-pane label="페이지 권한 관리" name="page">
          <!-- 페이지 권한 table -->
          <el-table ref="multipleTable" :data="tableData" style="width: 100%">
            <el-table-column type="selection" width="60"></el-table-column>
            <el-table-column
              prop="category"
              label="페이지 카테고리"
              width="160"
              sortable
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="pageName"
              label="페이지명"
              width="130"
              sortable
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column prop="URI" label="URI" align="left" sortable show-overflow-tooltip> </el-table-column>
          </el-table>
          <!-- //페이지 권한 table -->
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- //tab menu -->
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
    return {
      activeName: "treeMenuRole",
      dataTree: [
        {
          id: 1,
          label: "회원관리",
          children: [
            {
              id: 4,
              label: "회원관리 two 1-1",
            },
            {
              id: 5,
              label: "회원관리 two 1-2",
            },
          ],
        },
        {
          id: 2,
          label: "리포트관리",
          children: [
            {
              id: 6,
              label: "리포트제출관리",
            },
            {
              id: 7,
              label: "리포트현황관리",
            },
            {
              id: 8,
              label: "리포트 AUDIT관리",
            },
          ],
        },
        {
          id: 3,
          label: "고객니즈 & 주문서관리",
          children: [
            {
              id: 9,
              label: "고객니즈 & 주문서관리 3-1",
            },
            {
              id: 10,
              label: "고객니즈 & 주문서관리 3-2",
              children: [
                {
                  id: 11,
                  label: "고객니즈 & 주문서관리 3-2-1",
                },
                {
                  id: 12,
                  label: "고객니즈 & 주문서관리 3-2-2",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    dialogAlert() {
      this.$alert(" 저장되지 않았습니다. </br> This is a message", {
        dangerouslyUseHTMLString: true,
        showClose: false,
        confirmButtonText: "확인",
        cancelButtonClass: "gray",
        roundButton: true,
        buttonSize: "mini",
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
        buttonSize: "mini",
      });
    },
  },
});
</script>
