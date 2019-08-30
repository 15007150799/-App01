<template>
<div id="carControll">
  <transition name="controll">
  <div class="car-left" v-show="carControllFlag" @click.stop.prevent="decrease()"><p>-</p></div>
  </transition>
 <span class="number">{{food.count}}</span>
 <div class="car-right" @click.stop.prevent="increase()">+</div>
</div>
</template>
<script>
import Vue from 'vue'
export default ({
    date(){
        return{
        }
    },
    props:{
     food:{
        type:Object
      }
    },
    methods:{
     increase(){
     if(this.food.count ==null || this.food.count ==undefined){
         this.$set(this.food,'count',0)
       }
         this.food.count +=1
     },
     decrease(){
        if(this.food.count==null || this.food.count==undefined){
            // Vue.set(this.food,'count',0);
            this.food.count=0
          }
        if(this.food.count>0){
          this.food.count  +=-1
        }
     }
    },
    computed:{
       carControllFlag(){
         if(this.food.count && this.food.count>0){
           return true
         }else{
           return false
         }
       }
    }
})
</script>
<style lang="stylus">
#carControll
  text-align center
 .car-left
  display inline-block
  width 14px
  height 14px
  border 4px solid #3399ff
  border-radius 50%
  color #3399ff
  font-size 24px
  font-weight 700
  line-height 10px
  cursor pointer
  &.controll-enter-active,&.controll-leave-active
    transition all 0.3s
    opacity 1
    transform translate3d(0,0,0)
  &.controll-enter,&.controll-leave-to
    opacity 0
    transform translate3d(24px,0,0)
 span 
  display inline-block
  width 24px
  font-size 10px
  color rgb(147,153,159)
  line-height 30px
 .car-right
  display inline-block
  width 22px
  height 22px
  background #3399ff
  border-radius 50%
  vertical-align top
  font-size 24px
  color #ffffff
  font-weight 700
  line-height 20px
  cursor pointer
</style>

