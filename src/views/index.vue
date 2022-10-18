<template>
  <div class="w1000 top">
    <div ref="divRef">
      <h1>打印HTML,先将其生成图片，再打印图片</h1>
      <div id="mainBar" ref="mainBar"></div>
      <QrcodeVue :value="12345678" size="100" level="H"></QrcodeVue>
      <vxe-toolbar>
        <template #buttons>
          <vxe-button @click="allAlign = 'left'">居左</vxe-button>
          <vxe-button @click="allAlign = 'center'">居中</vxe-button>
          <vxe-button @click="allAlign = 'right'">居右</vxe-button>
        </template>
      </vxe-toolbar>
      <vxe-table :align="allAlign" :data="tableData1">
        <vxe-column type="seq" width="60"></vxe-column>
        <vxe-column field="name" title="Name"></vxe-column>
        <vxe-column field="sex" title="Sex"></vxe-column>
        <vxe-column field="age" title="Age"></vxe-column>
      </vxe-table>
      <a-breadcrumb>
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
        <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
        <a-breadcrumb-item>An Application</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <a-row class="mt20">
      <a-button type="primary" @click="clickImage">生成图片</a-button>
    </a-row>
    <PrintImage :divRef="divRef" ref="PrintRef"/>
  </div>
</template>
<script setup>
import { init } from "echarts";
import { ref, onMounted, nextTick } from "vue";
import QrcodeVue from "qrcode.vue";
import PrintImage from "@/components/printImage.vue";
const mainBar = ref();
const divRef = ref();
const allAlign = ref(null);
const tableData1 = ref([
  { id: 10001, name: "Test1", role: "Develop", sex: "Man", age: 28, address: "test abc" },
  { id: 10002, name: "Test2", role: "Test", sex: "Women", age: 22, address: "Guangzhou" },
  { id: 10003, name: "Test3", role: "PM", sex: "Man", age: 32, address: "Shanghai" },
  {
    id: 10004,
    name: "Test4",
    role: "Designer",
    sex: "Women",
    age: 24,
    address: "Shanghai",
  },
]);
const myChart = () => {
  let barChart = init(document.getElementById("mainBar"));
  const option = {
    title: {
      text: "Stacked Line",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Email",
        type: "line",
        stack: "Total",
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Union Ads",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Video Ads",
        type: "line",
        stack: "Total",
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "Search Engine",
        type: "line",
        stack: "Total",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  };
  barChart.setOption(option);
  const chartObserver = new ResizeObserver(() => {
    barChart.resize();
  });
  chartObserver.observe(mainBar.value);
  window.onresize = barChart.resize;
};

const PrintRef = ref();
const clickImage = () => {
  PrintRef.value.clickImage()
};

onMounted(() => {
  myChart();
});
</script>
<style lang="less" scoped>
.top {
  width: 1000px;
  background: #fff;
  padding-bottom: 20px;
}
#mainBar {
  width: 1000px;
  height: 500px;
}
h1{
  text-align: center;
}
</style>
