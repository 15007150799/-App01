<template>
  <transition name="fold"><!--transition="fold"-->
   <div  id="food"  v-show="foodShowFlag"  ref="foodWrapper">
       <div class="wrap">
            <div class="food-top">
            <span class="back" @click.stop.prevent="back()">&#9668</span>
            <img :src="this.food.image" alt="1" >
            <div class="titile-content">
              <div class="title">{{this.food.name}}</div>
              <div class="fncId"><span>{{this.food.sellCount}}</span><span>{{this.food.rating}}</span></div>
              <div class="money"><span class="money1">￥{{this.food.price}}</span><span class="money2">￥{{this.food.oldPrice}}</span></div>
            </div>
            <div class="shopCar">加入购物车</div>
        </div>
        <div class="line-through"></div>
        <div class="food-center">
            <div class="center-tltle">
                商品介绍
            </div>
            <div class="center-text">
                烦得很大客户反馈，对甲方的健身房健身房，时刻货到付款就是发送。神剑股份极速空港富士康。我也给一万个舞。
                速度解决施工技术。时间段和归属感发生的，我要人工一，申达股份就是感觉发送，额UR护额育儿园不表VB小。的解放军到
                的计划覆盖到更广泛，的房交会的好感度。入口和合肥接电话后方可见死不救吧。点击发货大家好感慨的火锅店客户是法典化vdv。精神抖擞
            </div>
        </div>
        <div class="line-through"></div>
        <div class="food-rating">
           <div class="center-tltle">
                商品评价
            </div>
            <div class="center-text">
              烦得很大客户反馈，对甲方的健身房健身房，时刻货到付款就是发送。神剑股份极速空港富士康。我也给一万个舞。
              速度解决施工技术。时间段和归属感发生的，我要人工一，申达股份就是感觉发送，额UR护额育儿园不表VB小。的解放军到
              的计划覆盖到更广泛，的房交会的好感度。入口和合肥接电话后方可见死不救吧。点击发货大家好感慨的火锅店客户是法典化vdv。精神抖擞
           </div>
        </div>
     </div>
   </div> 
 </transition>
  
</template>

<script>
import BSscroll from 'better-scroll'
export default({
    date(){
      return {
        foodShowFlag:false 
      }
    },
    props:{
        food:{
            type:Object
        }
    },
    methods:{
        show(){
            this.foodShowFlag=true
            this.$nextTick(() => {
          if (!this.scroll) {
                this.scroll = new BSscroll(this.$refs.foodWrapper, {
                click: true
                });
            } else {
                this.scroll.refresh();
            }
            });
            // this.imgSrc='./bulletin@3x.png'
            // this.$nextTick(()=>{
            //     this._foodScorll()
            // })
        },
        // _foodScorll(){
        //    this.foodScorll=new BSscroll(this.$refs.foodWrapper,{click:true})
        // },
        back(){
          this.foodShowFlag=!this.foodShowFlag
          console.log("this.foodShowFla="+this.foodShowFlag);
        }
    }
    
})
</script>
<style lang="stylus">
// transform: translate3d(0, 0, 0)   transform: translate3d(100%, 0, 0)
#food
 position: fixed
 left: 0
 top: 0
 bottom: 48px
 z-index: 30
 width: 100%
 background: #fff
 &.fold-enter-active, &.fold-leave-active
   transition: all .3s linear
   transform :translate3d(0,0,0)
 &.fold-enter, &.fold-leave-to
   transform: translate3d(100%, 10px, 0)
 .food-top
   width  100%
  .back 
   color black 
   font-size 20px
   margin-left 8px
  img 
   display block
   width 100%
   height 376px
  .titile-content
   padding 18px
   .title
    width 100%
    font-size 14px
    color rgb(7,17,27)
    line-height 14px
    font-weight 700
   .fncId
    width 100%
    font-size 10px
    color rgb(147,153,159)
    span
     margin-right 100px
   .money
    .money1
     font-size 14px
     color red
     line-height 24px
    .money2
     font-size 10px
     color rgb(7,17,27)
     text-decoration line-through
     margin-left 50px
  
  .shopCar
    position relative
    right -70%
    bottom 18px
    width 74px
    height 24px
    background-color rgb(0,160,220)
    font-size 12px
    color #ffffff
    line-height 24px
    border-radius 12px
    text-align center
 .line-through
  width 100%
  height 16px
  background #f3f5f7
 .food-center
  padding 18px
  .center-text
   padding-right 8px
   font-size 12px
   font-weight 200
   color  rgb(77,85,93)
   line-height 24px
  .food-rating
   padding 18px
 </style>
