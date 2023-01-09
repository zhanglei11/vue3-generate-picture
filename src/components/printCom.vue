<template>
  <div ref="templateRef" style="display: none">
    <slot></slot>
  </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue'
const props = defineProps({})
const templateRef = ref()
onMounted(() => {
  init()
})
const init = () => {
  let printI = document.getElementById('easyPrintIframe')
  if (!printI) {
    printI = document.createElement('iframe')
    printI.id = 'easyPrintIframe'
    printI.style.position = 'fixed'
    printI.style.width = '0'
    printI.style.height = '0'
    printI.style.top = '0'
    // 兼容ie
    if (window.location.hostname !== document.domain && navigator.userAgent.match(/msie/i)) {
      printI.src =
        'javascript:document.write("<head><script>document.domain=\\"' +
        document.domain +
        '\\";</s' +
        'cript></head><body></body>")'
    }
    printI.onload = () => {
      getStyle()
    }
    document.body.appendChild(printI)
  } else {
    // getStyle();
  }
}
const print = () => {
  let $iframe = document.getElementById('easyPrintIframe')
  // 复制body，打印内容
  $iframe.contentDocument.body.innerHTML = templateRef.value.innerHTML
  // 执行打印
  nextTick(() => {
    setTimeout(() => {
      $iframe.contentWindow.print()
    }, 100)
  })
}
const getStyle = () => {
  let printI = document.getElementById('easyPrintIframe')
  var str = '',
    styles1 = document.querySelectorAll('style')
  for (var i = 0; i < styles1.length; i++) {
    str += styles1[i].outerHTML
  }
  printI.contentDocument.head.innerHTML = str
  // 添加link引入
  let styles = document.querySelectorAll('link')
  for (let i = 0; i < styles.length; i++) {
    // chrome 正常，firefox不正常，能执行到，但是添加没结果
    let link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    if (styles[i].type) link.setAttribute('type', styles[i].type)
    else link.setAttribute('type', 'text/css')
    link.setAttribute('href', styles[i].href)
    link.setAttribute('media', 'all')
    printI.contentDocument.head.appendChild(link)
  }
}
defineExpose({
  print
})
</script>
