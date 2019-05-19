<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <div class="footer">
      <ul class="layui-nav">
        <li class="layui-nav-item" style="width: 22%"><router-link to="/muen1"  v-bind:style="muenColor1">开支</router-link></li>
        <li class="layui-nav-item" style="width: 25%"><router-link to="/muen2"  v-bind:style="muenColor2">名句</router-link></li>
        <li class="layui-nav-item" style="width: 22%"><router-link to="/muen3"  v-bind:style="muenColor3">功能</router-link></li>
        <li class="layui-nav-item" style="width: 30%"><router-link to="/muen4"  v-bind:style="muenColor4">个人中心</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'muen',
    props:{
      colorType:{
        type:Number,
        request:true
      }
    },
    data() {
      return {
        muenColor1: "color:darkorchid",
        muenColor2: "color:darkorchid",
        muenColor3: "color:darkorchid",
        muenColor4: "color:darkorchid"
      }
    },
    methods:{

    },
    computed: {
      type:function(){
        if(this.colorType === 1){
          this.muenColor1="color:chartreuse";
        }else  if(this.colorType === 2){
          this.muenColor2="color:chartreuse";
        }else  if(this.colorType === 3){
          this.muenColor3="color:chartreuse";
        }else  if(this.colorType === 4){
          this.muenColor4="color:chartreuse";
        }
      },
      filters: {
        formatDate(time) {
          var date = new Date(time);
          return formatDate(date, 'yyyy-MM-dd');
        }
      },
    }
  }
</script>


<!-- 样式  scoped表示只有当前页生效 固定菜单在底部-->
<style scoped>
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>
