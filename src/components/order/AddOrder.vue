<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <div style="margin-left: 5%;margin-top: 4%;">
      <router-link to="/muen1">
        <span style="color:silver;font-size:18px"> < 返回 </span>
      </router-link>
    </div>

    <form id="from" class="layui-form" action="/order/vue_addUpd">
      <div class="layui-form-item">
        <label class="layui-form-label">类型选择</label>
        <div class="layui-input-block" style="width: 50%;margin-top: 10%">
          <select name="type" lay-filter="required">
            <option value="1">消费</option>
            <option value="2">收入</option>
          </select>
        </div>
      </div>

      <div class="layui-form-item">
        <label class="layui-form-label">支付方式</label>
        <div class="layui-input-block" style="width: 50%;margin-top: 6%">
          <select name="pay" lay-filter="required">
            <option value="1">支付宝</option>
            <option value="2">微信</option>
            <option value="3">现金</option>
            <option value="4">银行卡</option>
            <option value="5">其他</option>
          </select>
        </div>
      </div>

      <div class="layui-form-item">
        <label class="layui-form-label">支付金额</label>
        <div class="layui-input-block" style="width: 50%;margin-top: 6%">
          <input type="number" name="money" lay-filter="required" autocomplete="off" placeholder="请输入标题"
                 class="layui-input">
        </div>
      </div>

      <div class="layui-form-item layui-form-text">
        <label class="layui-form-label">备注信息</label>
        <div class="layui-input-block" style="width: 50%;margin-top: 6%">
          <textarea name="msg" placeholder="请输入内容" lay-filter="required" class="layui-textarea"></textarea>
        </div>
      </div>

      <div class="layui-form-item">
        <div class="layui-input-block"><!--lay-submit=""  lay-filter="demo1"-->
          <span class="layui-btn" v-on:click="submitFrom">立即提交</span>
          <button type="reset" class="layui-btn layui-btn-primary">重置</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

  export default {
    name: 'addOrder',
    data() {
      return {
        orders: {},
      }
    },
    methods: {
      submitFrom: function () {
            $.ajax({
              type: "post",
              dataType: "text",
              url: this.GLOBAL.baseURL + "/order/vue_addUpd",
              data: $('#from').serialize(),  //表单数据
              success: function (result) {
                if (result = "seccess") {
                  layer.msg('添加成功，即将跳到主页面');
                  setTimeout( function(){
                    window.location.href="/muen1";
                  }, 1 * 1000 );
                };
              },
              error: function () {
                layer.msg('后台异常！未添加成功');
              }
            });
      }
    },
  }
</script>
<style scoped>


</style>

