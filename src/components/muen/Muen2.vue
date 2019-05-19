<template>
  <div>
    <h1>demo2开发中</h1>
    <app-MuenUtils v-bind:colorType="colorType"></app-MuenUtils>

  </div>
</template>
<script>
  import MuenUtils from '@/components/muen/MuenUtils.vue';
  export default {
    name: 'muen2',
    data () {
      return {
        colorType:2
      }
    },
    components:{
      "app-MuenUtils":MuenUtils,
    }
  }
</script>

<!-- 样式  scoped表示只有当前页生效 -->
<style scoped>
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;

  }
</style>
