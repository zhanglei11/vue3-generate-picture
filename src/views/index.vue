<template>
  <div class="w1000 top">
    <div id="mainBar" ref="mainBar"></div>
  </div>
</template>
<script setup>
import { init } from "echarts";
import { ref, onMounted } from "vue";
const mainBar = ref();
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
onMounted(() => {
  myChart();
});
</script>
<style lang="less" scoped>
.top {
  width: 1000px;
}
#mainBar {
  border: 1px solid #54aba5;
  width: 800px;
  height: 76vh;
}
</style>
