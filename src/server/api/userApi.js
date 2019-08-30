var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

// 增加用户接口
router.post('/addUser', (req, res) => {
    var sql = $sql.user.add;
    var sqlSelecet=$sql.user.select;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.id,params.username, params.banlance], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

// 查询用户信息
router.post('/selectUser', (req, res) => {
    var sql=$sql.user.select;
    // var params = req.body;
    // console.log(params);
    //params.id,params.username, params.banlance
    conn.query(sql, [], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});


// 查询订单信息
router.post('/selectOrdr', (req, res) => {
    var sql=$sql.fnc.selectOrdr;
    // var params = req.body;
    console.log("sql---selectOrdr="+sql);
    //params.id,params.username, params.banlance
    conn.query(sql, [], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
//selectMenu 查看菜单列表信息
router.post('/selectMenu', (req, res) => {
    var sql=$sql.fnc.selectMenu;
    // var params = req.body;
    console.log("sql---selectMenu="+sql);
    //params.id,params.username, params.banlance
    conn.query(sql, [], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
// 查询账号信息
router.post('/selectAccNo', (req, res) => {
    var sql=$sql.fnc.selectAccNo;
    // var params = req.body;
    console.log("sql---selectAccNo="+sql);
    //params.id,params.username, params.banlance
    conn.query(sql, [], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

// 查询应收账款信息
router.post('/selectBizRcvbInf', (req, res) => {
    var sql=$sql.fnc.selectBizRcvbInf;
    // var params = req.body;
    console.log("sql---selectBizRcvbInf="+sql);
    //params.id,params.username, params.banlance
    conn.query(sql, [], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
//selectDict 数据字典查询数据值
router.post('/selectDict', (req, res) => {
    var sql=$sql.fnc.selectDict;
    var params = req.body;
    if(params!=null && params.dctTpCd!=null){
        sql+='and dct_tp_cd= "'+params.dctTpCd+'"'
    }
    console.log("sql---selectDict ="+sql);
    //params.id,params.username, params.banlance
    conn.query(sql, [], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
//selectCtr 合同列表查询‘
router.post('/selectCtr',(req,res)=>{
    var sql=$sql.fnc.selectCtr;
    console.log("sql---selectCtr="+sql);
    conn.query(sql, [], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })  
})
//selectBizCst 客户列表信息查询
router.post('/selectBizCst',(req,res)=>{
    var sql=$sql.fnc.selectBizCst;
    conn.query(sql,[],function(err,result){
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
})
//selectCmdty 查询商品列表
router.post('/selectCmdty',(req,res)=>{
    var sql=$sql.fnc.selectCmdty;
    conn.query(sql,[],function(err,result){
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
})
router.post('/selectFnc',(req,res)=>{
    var sql=$sql.fnc.selectFnc;
    var params = req.body;
    var param=[ ];
    if(params.pdNm!=null){
        console.log("params="+params.pdNm);
        sql+="AND bfbi.pd_nm ='"+params.pdNm+"'";
    }
    console.log("sql---selectFnc="+sql);
    conn.query(sql,[],function(err,result){
        console.log("sql="+sql);
        if(err){
            return res.json({
                code:'1',
                msg:'数据接口信息查询失败！+'+err.message}
            )
        }
      if(result){
          console.log( {code:'200',
          msg:'数据接口信息查询成功！',
          data:result
          })
          return res.json(
              {code:'200',
               msg:'数据接口信息查询成功！',
               data:result
            }
          )
      }
    })
})
module.exports = router;