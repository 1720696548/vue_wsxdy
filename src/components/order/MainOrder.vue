<template>
  <div>
    <app-AddOrder></app-AddOrder>
    <!--<div>-->
      <!--<input type="text" placeholder="搜索" class="layui-input">-->
      <!--<button class="button1 layui-btn layui-btn-disabled layui-btn-radius">搜索</button>-->
      <!--<button class="button2 layui-btn layui-btn-disabled layui-btn-radius">添加</button>-->
    <!--</div>-->
    <!--<fieldset class="layui-elem-field layui-field-title" style="margin-top: 5%;"> </fieldset>-->
      <!--&lt;!&ndash;<legend>开支明细</legend>&ndash;&gt;-->
    <!--<div style="margin-left: 2%;">-->
      <!--<ul class="layui-timeline">-->


        <!--<li class="layui-timeline-item" v-for="order in orders">-->
          <!--<i class="layui-icon layui-timeline-axis"></i>-->
          <!--<div class="layui-timeline-content layui-text" >-->
            <!--<div class="layui-timeline-title">-->
              <!--{{order.pay==1?'支付宝':order.pay==2?'微信':order.pay==3?'现金':order.pay==4?'银行卡':'其他'}} /-->
              <!--{{order.type==1?'消费':'收入'}} /-->
              <!--{{order.money+' 元'}} /-->
              <!--{{order.time | formatDate}}-->
              <!--<br>-->
              <!--备注：{{order.msg}}-->

            <!--</div>-->
          <!--</div>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->
  </div>
</template>


<script>
  import AddOrder from '@/components/order/AddOrder.vue';
  export default {
    name: 'mainOrder',
    data() {
      return {
        orders:[]
      }
    },
    components:{
      "app-AddOrder":AddOrder,
    },
    // components: {},
    created(){
      this.$http.get("http://localhost:8888/order/findOrderAll")
        .then((data) =>{
          //返回结果赋值 users  v-for="order in orders"
          this.orders=data.body;
          //this.users=data.body;
        })
    },
  }
</script>


<style scoped>

  input {
    margin-left: 5%;
    margin-top: 5%;
    width: 52.5%;
    /*display: block;*/
    /*position: fixed;*/
    /*top: 0.3%;*/
    /*left: 1%;*/
    /*text-decoration: none;*/
  }

  .button1 {
    display: block;
    position: fixed;
    top: 3%;
    right: 22%;
    text-decoration: none;
  }
  .button2 {
    display: block;
    position: fixed;
    top: 3%;
    right: 2%;
    text-decoration: none;
  }
</style>
