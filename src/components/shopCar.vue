<template>
    <div id="shopCar">
      <div class="bottom-content" @click.stop.prevent="tigger()">
        <div class="icon">&#9855<span></span></div><!--&#9855-->
        <div class="bottom-center">另需要配送费￥4元</div>
        <div class="bottom-right">还差￥10元起送</div>
      </div>
        <transition name="move">
          <div v-show="carListFlag" class="food-car-list" >
          <div class="car-list-wrap" ref="carListWrap">
            <ul v-if="this.selectCarFoods.length>0" >
            <li class="list-item" v-for="item,index in selectCarFoods">
              <span>{{item.pdNm}}</span>
              <span>{{item.fncId}}</span>
              <span>{{item.ctrId}}</span>
            </li>
          </ul>
          </div>
        </div>
        </transition>
      <div  v-show="carListFlag" class="list-mask">343ffgfgfgf,dfgfgfgfgf</div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default ({
    data(){
        return{
          carListFlag:false
        }
    },
    props:{
      selectCarFoods:{
        type:Array,
        default(){
           return[{
             
           }]
        }
      }
    },
    methods:{
      tigger(){
        if(this.selectCarFoods.length<=0){
          this.carListFlag=false
          return
       }else{
         this.carListFlag=!this.carListFlag
       }
       if(this.carListFlag){
         if(!this.carScroll){
           this.carScroll=new  BScroll(this.$refs.carListWrap,{click:true})
          //  this.goodContent=new BScroll(this.$refs.goodContent,{click:true, bounce:true,probeType: 3})
         }else{
           this.carScroll.refresh()
         }
       }
      }
    }
})

</script>
<style lang="stylus">
//- background-color #141d27-->
#shopCar
 position fixed
 left 0px
 bottom 0px
 width 100%
 z-index 50
 .bottom-content
   display flex
   width 100%
   height 48px
   color rgba(0,0,0,0.4)
   background yellow 
  .icon
    flex 0 0 44px
    width 16px
    height 16px
    border-radius 6px
    backgroud rgba(0,0,0,0.2)
 .food-car-list
  position absolute
  left 0px
  bottom 48px
  width 100%
  background red
  z-index 100
  &.move-enter-active,&.move-leave-active
    transition: all 5s
    transform: translate3d(0, -100%, 0)
  &.move-enter, &.move-leave-to
    transform: translate3d(0, 0, 0)
  .car-list-wrap
   list-style none
   padding: 0 18px
   max-height: 217px
   overflow: hidden
   background: #fff
   .list-item
    list-style none 
    border-bottom 2px solid rgba(0,0,0,0.2)
 .list-mask
  position fixed
  left 0px
  bottom 310px
  width: 100%
  height: 100%
  z-index: 40
  backgroud rgba(0,0,0,0.2)
</style>


