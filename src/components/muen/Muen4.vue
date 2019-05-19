<template xmlns:font-size="http://www.w3.org/1999/xhtml">

  <div >
    <div class="head" >
      <a style="margin-top: 5%;">
        <img style="width: 20%;height: 48%;margin-top: 2%;" src="//t.cn/RCzsdCq" class="layui-nav-img">
         <h1>ws-兮</h1>
        <h3>开心每一天</h3>
      </a>
    </div>
    <div>
      <fieldset class="layui-elem-field layui-field-title">

      </fieldset><h2 style="margin-left: 8%"><img style="width: 8%;height: 5%;margin-top: 2%;margin-right: 3%" src="//t.cn/RCzsdCq">个人信息 </h2><hr>
      </fieldset><h2 style="margin-left: 8%"><img style="width: 8%;height: 5%;margin-top: 2%;margin-right: 3%" src="//t.cn/RCzsdCq">开发中 </h2><hr>
      </fieldset><h2 style="margin-left: 8%"><img style="width: 8%;height: 5%;margin-top: 2%;margin-right: 3%" src="//t.cn/RCzsdCq">开发中 </h2><hr>
      </fieldset><h2 style="margin-left: 8%"><img style="width: 8%;height: 5%;margin-top: 2%;margin-right: 3%" src="//t.cn/RCzsdCq">开发中 </h2><hr>
      </fieldset><h2 style="margin-left: 8%"><img style="width: 8%;height: 5%;margin-top: 2%;margin-right: 3%" src="//t.cn/RCzsdCq">开发中 </h2><hr>
      </fieldset><h2 style="margin-left: 8%"><img style="width: 8%;height: 5%;margin-top: 2%;margin-right: 3%" src="//t.cn/RCzsdCq">开发中 </h2><hr>
    </div>
    <app-MuenUtils v-bind:colorType="colorType"></app-MuenUtils>
  </div>
</template>
<script>
  import MuenUtils from '@/components/muen/MuenUtils.vue';
  export default {
    name: 'muen4',
    data () {
      return {
        colorType:4
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
  .head{
    text-align:center;
    width:100%;
    height:155px;
    background-color:moccasin; /* 背景颜色 */
  }
</style>
