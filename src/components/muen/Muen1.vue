<template>
  <div>
    <app-MainOrder></app-MainOrder>
    <app-MuenUtils v-bind:colorType="colorType"></app-MuenUtils>

  </div>
</template>
<script>
  import MuenUtils from '@/components/muen/MuenUtils.vue';
  import MainOrder from '@/components/order/MainOrder.vue';
  export default {
    name: 'muen1',
    data () {
      return {
        colorType:1
      }
    },
    components:{
      "app-MuenUtils":MuenUtils,
      "app-MainOrder":MainOrder,
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
