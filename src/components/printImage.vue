<template>
  <PrintCom ref="printRef" tableShow>
    <img :src="imgSrc" style="width: 1000px" />
  </PrintCom>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue'
import html2canvas from 'html2canvas'
import PrintCom from './printCom.vue'
const props = defineProps({
  divRef: {
    required: true
  }
})
const printRef = ref()
const imgSrc = ref()
const clickImage = () => {
  html2canvas(props.divRef)
    .then((canvas) => {
      let dataURL = canvas.toDataURL('image/png', 1)
      imgSrc.value = dataURL
      nextTick(() => {
        printRef.value.print()
      })
    })
    .catch((e) => {
      console.log('不知道为什么生成错误')
    })
    .finally(() => {
      console.log('已完成')
    })
}
defineExpose({
  clickImage
})

onMounted(() => {})
</script>
