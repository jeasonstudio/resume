<template>
<div class="page-wrapper">
  <div class="page">
    <div class="page-inner">
      <component :is="'concise'"></component>
      <!-- <component :is="$route.params.resumeid"></component> -->
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
// import * as chromeShadowFixer from 'chrome-shadow-fixer';
// import * as chromeShadowFixer from './chromeShadowFixer';
import '../resumes/resumes';
export default Vue.component('resume', {
  name: 'app'
  // mounted: () => {
  //   const els = chromeShadowFixer.fix();
  //   if (
  //     els &&
  //     els.length > 0
  //   ) window.onhashchange = () => { location.reload(); };
  // }
});
</script>

<style scoped>
.page-inner{
  height: 100%;
  width: 100%;
}
.page-wrapper {
  overflow-x: hidden;
  background: #EFEFEF;
  margin: 0;
  padding: 0;
  -webkit-print-color-adjust: exact;
  box-sizing: border-box;
}

.resume {
  height: 100%;
  width: 100%;
}

.page {
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  background: white;
  position: relative;
  width: 21cm;
  height: 29.68cm;
  display: flex;
  margin: 40px auto;
  justify-content: center;
  page-break-after: auto;
  overflow: hidden;
}
</style>
