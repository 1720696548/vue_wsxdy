<template>
  <div>
     add
  </div>
</template>


<script>

  export default {
    name: 'addOrder',
    data() {
      return {
        orders:[]
      }
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


</style>
