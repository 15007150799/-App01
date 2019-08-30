import axios from 'axios'

export function  commonMethod(param){
    // var _this=this;
    // _this.$http.post('/api/user/selectFnc',param,{}).then((res)=>{
    //      return res.data;
    //  })
    // return axios.post('/api/user/selectFnc',param).then((res)=>{
    //     return Promise.resolve(res.data)
    // })

    return axios.get('/api/seller',param).then((res)=>{
        return Promise.resolve(res.data)
    })
  }

  export function  goodsMethod(param){
    return axios.get('/api/goods',param).then((res)=>{
        return Promise.resolve(res.data)
    })
  }

  export function  ratingsMethod(param){
    return axios.get('/api/ratings',param).then((res)=>{
        return Promise.resolve(res.data)
    })
  }