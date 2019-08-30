<template>
  <div class="home" >
      <div class="header-img"><img :src="navList.avatar" alt="1" /></div>
      <div class="header-title"  v-if="navList!=null">
          <h5><i class="i-icon"></i>{{navList.name}}</h5>
          <p>{{navList.description}}/{{navList.deliveryTime}}分钟送达</p>
          <h6  v-if="navList.supports!=null"><i ></i>{{navList.supports[1].description}}</h6>
      </div>
      <div class="header-cl" @click="showDetail">
         <span  >5个 ></span> 
      </div>
      <div class="ad">
          <i></i>{{navList.bulletin}}
      </div>
      <div v-show="!detailShow" class="seller"> <seller :hoverFlag="hoverFlag"></seller></div>

      <div v-show="detailShow">
         <div class="detail-hidden">
            <div class="detail-wrap">
                <h2  v-if="navList!=null">{{navList.name}}</h2>
                <div class="star"></div>
                <div class="line-text">
                    <div class="line"></div>
                    <div class="text">优惠信息</div>
                    <div class="line"></div>
                </div>
                <ul v-if="navList.supports!=null && navList.supports.length>0" class="supports">
                   <li   class="support-item" v-for="(item,index) in navList.supports">
                      <span class="icon"  :class="classMap[item.type]"></span>
                      <span class="support-text">{{item.description}}</span>
                   </li>
                </ul>
                <div class="line-text">
                    <div class="line"></div>
                    <div class="text">商家公告</div>
                    <div class="line"></div>
                </div>
                <div class="decrition">
                 {{navList.bulletin}}
                </div>
                <div class="close" @click="hideDetail">
                   关闭
                </div>
            </div>
         </div>
      </div>
  </div>

</template>

<script>
import seller from './seller.vue'
 export default{
      data(){
            return{
              navList:{},
              detailShow:false,
              hoverFlag:true,
              name:''
            }
        },
      created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee','decrease', 'discount', 'special', 'invoice', 'guarantee'];
      },
       components:{
          seller:seller, 
       },

        mounted(){
            this.fetchData();
        },
       methods:{
           showDetail(){
            this.detailShow=true;
        },
        hideDetail(){
            this.detailShow=false;
        },
             fetchData(){
            var _this=this;
            this.$http.get('api/seller', {},{}).then((response) => {///api/user/selectUser
                if(response.status=='200'){
                     if(response.data!=null){
                        _this.navList=response.data.data;
                        console.log("supports="+response.data.data.supports);
                        //  for(var i=0;i<response.data.length;i++){
                        //      var nav=response.data[i];
                        //        _this.navList.push(nav);
                             
                        //  }
                            //  console.log("navList="+_this.navList);
                     }

                }
      }).catch(function(err) {
          console.log(err)
      });

           
        }
        
        
       }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../assets/css/mixin.styl'
.home
  position absolute
  left 0px
  top 0px
  width 100%
  background rgba(7,17,27,0.5)
  blur 10px
  z-index 1
  .seller
   position relative
   top 0px
   font-size 0px
  .header-img
   display inline-block
   margin 24px 16px 18px 24px
   vertical-align top
   img 
    display inline-block
    width 64px
    height 64px
    background red
    border-radius 4px
  .header-title
   display inline-block
   margin-top 26px
   h5
    color rgb(255,255,255)
    font-size 16px
    .i-icon
     display inline-block
     width 30px
     height 18px
     bg-image('brand')
     background-size:30px 18px
     vertical-align top
     margin-right 6px
   p
     font-size 12px
     margin 10px 0px
     color rgb(255,255,255)
   h6
     font-size 10px
     color rgb(255,255,255)
     i 
      display inline-block
      width 16px
      height 16px
      bg-image('decrease_1')
      background-size 16px 16px
      vertical-align top
      margin-right 4px
  .header-cl
    float right 
    margin-right 24px
    cursor pointer
    span
      display inline-block
      width 48px
      height 24px
      line-height 24px
      font-size 10px
      color rgb(255,255,255)
      background rgba(0,0,0,0.1)
      border-radius 32px
      text-align center
      font-weight 200
      vertical-align bottom
      text-decoration none
  .ad
   width 100%
   height 28px
   background rgba(7,17,27,0.2)
   line-height 28px
   font-size 10px
   color rgb(255,255,255)
   white-space nowrap
   overflow hidden
   text-overflow ellipsis
   margin-right 12px
   i 
    display inline-block
    vertical-align middle
    width 20px
    height 14px
    bg-image('bulletin')
    background-size 20px 14px
    margin-left 12px
    margin-right 4px
   
.detail-hidden
 position absolute
 left 0
 top 0
 width 100%
 height 800px
 background rgba(0,0,0,0.8)
 z-index 10
 .detail-wrap
  margin 64px 36px 0 36px
  h2
   font-size 16px
   color rgb(255,255,255)
   line-height 16px
   margin-bottom 16px
   text-align center
  .line-text
   display flex
   margin-top 28px
   .line
    flex 1
    border-bottom 1px solid rgba(255,255,255,0.2)
    position: relative
    top: -6px
    margin-top -6px
   .text
    font-size 14px
    font-weight 700
    line-height 14px
    color #ffffff
    margin 0 12px 0 12px
  .supports
   list-style none 
   margin-top 24px
   margin-left 12px
   .support-item
    margin-bottom 12px
    .icon
     display inline-block
     width 16px
     height 16px
     margin-right 6px
     background-size: 16px 16px
     background-repeat: no-repeat
     &.invoice
       bg-image('brand');
     &.discount
       bg-image('./discount_2');
     &.guarantee
       bg-image('./guarantee_1');
     &.special
       bg-image('./special_1');
     &.decrease
       bg-image('./decrease_1');
    .support-text
     display inline-block
     width 70%
     font-size 12px
     font-weight 200
     line-height 16px
     color #ffffff
     vertical-align top
  .decrition
   margin 24px 12px 0 12px
   color #ffffff
   font-size 12px
   line-height 24px
  .close
   margin 56px auto 28px auto
   font-size 32px
   color #ffffff
   text-align center
   vertical-align bottom
   cursor pointer
</style>



