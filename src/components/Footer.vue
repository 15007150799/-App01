<template>
  <div id="foot">
     <ul>
       <router-link class="routerLink" to="/home">首页</router-link>
       <router-link class="routerLink" to="/fujin">附近</router-link>
       <router-link class="routerLink" to="/faxian">发现</router-link>
       <router-link class="routerLink" to="/order">订单</router-link>
       <router-link class="routerLink" to="/userInfo">个人中心</router-link>
    </ul>
  </div>

</template>
<script>
  
  export default{
    name:'footer1'
  }
</script>

<style scoped>
@import url('../assets/css/index.css');

</style>
