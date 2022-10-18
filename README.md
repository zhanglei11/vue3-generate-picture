# vue3 + html2canvas将div生成图片

#### 介绍

针对打印机打印时候存在一些div无法被打印出来，只能先将其转为图片，再打印,
采用了两个第三方插件库html2canvas，vue-easy-print结合，

#### 软件架构

没有架构，后期我想想同不同步我的架构设置

#### 安装教程

1. yarn install
2. yarn run dev / yarn run serve
3. yarn run build

#### 使用说明

1. 对打印模块进行了封装，只需要引入组件printImage模块即可
2. 针对打印两个重要的值，一个是body.document,我们采用ref,将ref传过来，一个事内置函数clickImage,也是通过组件的ref,由父组件调用子组件的方法触发
3. 使用很方便
  `
  import PrintImage from "@/components/printImage.vue";
  <PrintImage :divRef="divRef" ref="PrintRef"/>;
  const divRef = ref();
  const PrintRef = ref();
  const clickImage = () => {
    PrintRef.value.clickImage()
  };
  `
4. 采用组件化的方式是为了让公司成员更方便地使用
