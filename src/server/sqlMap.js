// sql语句
var sqlMap = {
    // 用户
    user: {
        add: 'insert into userTest(id, name, banlance) values (?, ?, ?)',
        select:"select id ,name from ec_org_role where weight='1'"
    },
    fnc: {
        selectFnc: " SELECT bfmi.fnc_jrnl_id AS 'fncId',  bfmi.ths_fnc_amt AS 'fncAmt',"+
        " bfmi.fnc_dt AS 'fncDt', bfmi.fnc_bg_dt AS 'fncBgDt',  bfmi.fnc_ex_dt AS 'fncExDt',  bfmi.mrgn_pct_new AS 'mrgnPct',"+
        " bfmi.mrgn_amt_new AS 'mrgnAmt', bfmi.fnc_mod_cd AS 'fncModCd', bfmi.iou_amt AS 'iouAmt',"+
        " bfbi.ctr_id AS 'ctrId',bfbi.pd_nm AS 'pdNm',bfbi.aprv_st AS 'aprvSt',"+
        " bfbi.fns_st_cd AS 'fnsStCd', bfbi.hgst_can_fnc_amt AS 'hgstCanFncAmt',bfbi.bsn_mode_cd AS 'bsnModeCd' "+ 
        " FROM biz_fnc_mod_inf bfmi, biz_fnc_bsc_inf bfbi WHERE bfbi.fnc_jrnl_id = bfmi.fnc_jrnl_id"+
        " AND bfbi.del_ind = '0'",
        select:"select id ,name from ec_org_role where weight='1'",
        selectOrdr:"select id ,ordr_id, ctr_id ,pd_id,Pd_nm,cst_nm , spl_mnt_nm ,ordr_amt,ordr_dt ,ordr_st_cd from biz_ordr_inf where del_ind='0'",
        selectAccNo:"select id ,cst_id,acc_no,acc_nm,acc_blng_bnk,acc_tp_cd,ccy_cd,acc_st_cd from biz_cst_ac_no where del_ind='0'",
        selectBizRcvbInf:"select id,rcvb_id,cst_id,trsfer_aply_id,cntpr_id,doc_tp_cd,face_amt,trsfer_dt,trsfer_amt,rcvb_amt from biz_rcvb_inf where del_ind='0'",
        selectMenu:"select id,MENU_ID,MENU_NM,PRN_MENU_ID,MENU_URL,SEQ,LEAF_NODE_CD,MENU_ICON from sys_res_menu where del_ind='0'",
        selectDict:'select id as "id",dct_val as "dctVal", dct_val_nm as "dctValNm",dct_tp_cd as "dctTpCd",dct_tp_nm as "dctTpNm" from base_ddct where st_cd="1"',
        selectCtr:'select ctr_id,ctr_sn,pd_id,pd_nm,cst_id,cst_nm,ctr_amt,ctr_st_dt,ctr_exp_dt,ctr_avl_bal,ctr_st_cd from biz_pre_ctr_bsc_inf where del_ind="0" and ctr_st_cd="1"',
        selectBizCst:'select cst_id,cst_nm,cst_tp_cd,org_code,email,tel,cst_st_cd,crt_tm from biz_cst_bsc_inf where del_ind="0"',
        selectCmdty:'select cmdty_id,cmdty_nm,supr_ctlg_nm,cmdty_spec,pd_bn,ms_unit_cd,cmdty_mkt_prc,hdl_dt   from biz_cmdty_inf  where del_ind="0"',
       },
   
   
}
module.exports = sqlMap;