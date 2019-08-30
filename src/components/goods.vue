<template>
  <div id="good">
    <Home></Home>
   <div id="goods">
   <div class="good-title" ref="goodTitle">
   <ul   v-if="contentData!=null && contentData.length>0" class="title-goods" >
       <li  class="title-item" v-for="(item,index) in contentData" @click.stop.prevent="changeContent(index,item)">
          <span>{{item.name}}</span>
       </li>
   </ul>
   </div>
   <div class="good-content"    ref="goodContent"><!--v-el:good-content    <h6>{{titleName}}</h6>-->
        <ul  v-if="contentData!=null && contentData.length>0" class="content-goods" ref="list">
          <li class="tilte-name" v-for="bigItem,index in contentData">
           <h6>{{bigItem.name}}</h6>
            <ul v-if="bigItem.foods!=null && bigItem.foods.length>0">
              <li  class="content-item"  @click.stop.prevent="selectFoods(item,index)" v-for="item,index in bigItem.foods">
                 <img :src="item.image" atl="1" />
                  <div class="text">
                    <div class="fncId">{{item.name}}</div>
                    <div class="ctrId">{{item.ctrId}}</div>
                    <div class="yueshou"><span>月售{{item.sellCount}}份额</span><span>好评率{{item.rating}}</span></div>
                    <div class="money"><span>￥{{item.price}}</span><span class="money1">￥{{item.oldPrice}}</span></div>
                 </div>
               <div class="car"><car :food="item"></car></div>
              </li>
            </ul> 
            
          </li>
      </ul>
   </div>
 </div> 
<shopCar :selectCarFoods="selectCarFoods" ></shopCar>
<food :food="selectFood" ref="foodWrapper"></food>
</div>
</template>
<script >
import vue from 'vue'
import Home from './Home'
import Car from './carControll'
import shopCar from './shopCar'
import food from './food'
import axios from 'axios'
import BScroll from 'better-scroll'
import goodModel from './goodModel'
export default({
    data(){
        return{
         goodsData:[],
         contentData:[],
        //  contentData.goods:[],
         titleName:'单人特色套餐',
         sendFlag:true,
         scrollY:0,
         i:0,
         selectFood:{},
         imgSrc:'',
        //  foodShowFlag:false
        //  num:0
        }
    },
    components:{
    Home,
    car:Car,
    shopCar,
    food
    },
   mounted(){
     this.selectDate();
    },
  computed:{
   selectCarFoods(){
     let result=[]
     if(this.contentData.length>0){
        this.contentData.forEach((item)=>{
         if(item.count){
           result.push(item)
         }
        })
     }
     console.log(result)
     return result
   }
  },
    created() {//('http://www.nipic.com/show/4/141/9617157.html')  跨域不行
        this.classMap = [require('./brand@2x.png'),require('./guarantee_1@3x.png'),require('./brand@3x.png'),require('./special_2@2x.png'),require('./decrease_1@2x.png'),require('./brand@2x.png'),
      require('./bulletin@3x.png'),require('./brand@2x.png'),require('./guarantee_2@3x.png'),require('./invoice_1@2x - 副本.png'),require('./decrease_1@2x.png'),require('./brand@2x.png'),require('./brand@2x.png'),
      require('./bulletin@3x.png'),require('./brand@2x.png'),];
      },
  methods:{
      selectDate(){
        var _this=this;
          //  this.$axios.get
           this.$http.get('/api/goods',{}).then(res=>{
            if(res.status=='200' && res.data!=null){
              //  res.data.forEach((element)=> {
              //    var toBeExist =_this.goodsData.indexOf(element.pdNm);
              //    if(toBeExist===-1){
              //      _this.goodsData[_this.i]=element.pdNm
              //      _this.i++
              //    }
              //  });
               _this.sendFlag=false
               _this.contentData=res.data.data;
               _this.goodsData=res.data.data;
              //  _this.contentData=this._normalizeGoods(res.data,_this.goodsData)
               this.$nextTick(()=>{
                 this._scrollgoodTitle()
               })
              
             }
              if(res.code=='1'){
               console.log(res.msg);
             }
          }).catch(err=>{
            console.log(err)
          })
     },
     changeContent(index,item){
        //  var param={'pdNm':item}
        //  this.titleName=item
        // commonMethod(param).then((res)=>{
        //  if(res.code=='200'){
        //     this.contentData=res.data;
        //    }
        //  if(res.code=='1'){
        //        console.log(res.msg);
        //      }
        // })
         
     },
    _normalizeGoods(list,keys) {
     let map={
         data:{
          titleName:String,
          goods:[]
         }
     }
     keys.forEach((itemtitle,index)=>{
      //  map.data.push(item)
        list.forEach((item,index)=>{
            // console.log("itemtitle"+itemtitle+",item.pdnm="+item.pdNm);
            // console.log(itemtitle ===item.pdNm)
        if(itemtitle ===item.pdNm){
            map.data.titleName=item.pdNm
            map.data.goods.push(new goodModel({
              fncId:item.fncId,
              fncAmt:item.fncAmt,
              ctrId:item.ctrId,
              mrgnAmt:item.mrgnAmt,
              fncModCd:item.fncModCd,
              iouAmt:item.iouAmt,
              pdNm:item.pdNm,
              hgstCanFncAmt:item.hgstCanFncAmt,
              bsnModeCd:item.bsnModeCd
            }))
          }
        })
     })
     
    //  console.log(map)
     return map.data.goods
    },
    _scrollgoodTitle(){
      this.goodTitle=new BScroll(this.$refs.goodTitle,{  click: true})
      if(!this.goodContent){
        this.goodContent=new BScroll(this.$refs.goodContent,{click:true, bounce:true,probeType: 3})
      }else{
        this.goodContent.refresh()
      }
      this.goodContent.on('scroll',(pos)=>{
      this.scrollY=Math.round(pos.y)
        //  const bottom = '48px'
        //  this.$refs.goodContent.style.bottom = bottom
         console.log("this.$refs.goodContent.style.bottom="+this.$refs.goodContent.style.bottom);
     })
    //  this.goodContent.on('scroll',function(e){
    //    console.log("e="+e)
    //    console.log("e.y="+Math.abs(e.y))
    //  })
  },
  selectFoods(item,index){
   this.selectFood=item
   this.imgSrc="require('./bulletin@3x.png')";//'./bulletin@3x.png';//this.classMap[index]
   vue.set(this.selectFood,'imgSrc',this.classMap[index])
  //  vue.set(this.selectFood,'foodShowFlag',this.foodShowFlag)
   this.$refs.foodWrapper.show()
  //  this.selectFood.push()
  }
   
  } 
})
</script>
<style lang="stylus">
#goods
 position absolute 
 left 0
 top 174px
 bottom 48px
 width 100%
 overflow hidden
 display flex
 .good-title
  flex 0 0 80px
  width 80px
  h6
  display block
  font-size 12px
  background #f3f5f7
  width 100%
  height 54px
  color rgb(240,20,20)
  line-height 14px
  text-align center
  .title-goods
    width 100%
   .title-item
    width 100%
    background #f3f5f7
    span 
     display block
     width 56px
     height 54px
     font-size 12px
     color rgb(7,17,27)
     border-bottom 1px solid rgba(7,17,27,0.1)
     margin  0px 12px 0 12px
     padding-top 20px
    &:first-child
      background red
    &:last-child
      padding-top none
      border-bottom none 
    /*
     position relative
     top 50%
     transform translateY(-50%)
     word-wrap break-word
     word-break normal
     overflow auto
    overflow hidden 
     white-space normal
      word-break break-all
     word-wrap break-word*/
 .good-content
  flex 1
  list-style none 
  h6
  height 24px
  font-size 18px
  line-height 24px
  background #f3f5f7
  height 28px
  color rgba(7,17,27,0.2)
  .content-goods
   list-style none 
   background #ffffff
   padding  0px 18px 0px 18px
   .content-item
    list-style none 
    border-bottom 1px solid rgba(7,17,27,0.1)
    padding 18px 0 18px 0
    display flex
    &:last-child
     border-bottom none
    img 
     flex 0 0 57px
     width 64px
     height 64px
     margin-right 10px
    .text
     flex 1
     vertical-align top
     font-size 0px
     .fncId
      font-size 14px
      color rgb(7,17,27)
      margin-top 2px
      line-height 14px
     .ctrId
      display inline-block
      font-size 10px
      color rgb(147,153,159)
      line-height 10px 
      margin-top 8px
     .yueshou
      font-size 0px
      margin-top -4px
      span 
       display inline-block
       margin-right 12px
       font-size 10px
       line-height 10px
       color rgb(147,153,159)
     .money
      color red
      font-size 14px
      margin-top -6px
      .money1
       color rgb(147,153,159)
       font-size 10px
       margin-left 8px
       text-decoration line-through
    .car
     position relative
     right 0px
     bottom 0px
</style>

