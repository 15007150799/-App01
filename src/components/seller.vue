<template>
    <div id="seller">
    <ul>
       <router-link class="sl-item" to="/good">商品</router-link>
       <router-link class="sl-item" to="/rating">评价</router-link>
       <router-link class="sl-item" to="/seller">商家</router-link>
    </ul>
    </div>
</template>
<script>
export default {
    // props:{
    //   hoverFlag:{
    //       type:Boolean
    //   }  
    // }
}
</script>
<style lang="stylus" scoped>
#seller
 width 100%
 position absolute
 left 0px
 top 0px
 ul
  width 100%
  display flex
  border-bottom 5px solid color rgb(77,85,93)
  .sl-item
   flex 1
   height 40px
   font-size 24px
   line-height 40px
   color rgb(77,85,93)
   text-decoration none
   text-align center
   &:hover
     color red
</style>


