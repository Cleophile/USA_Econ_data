import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

print("美国宏观经济数据库:后台数据生成")
print("正在运行")
######################### GDP #####################################
dta_gdp = pd.read_excel('usa_macro.xlsx',sheet_name='GDP',header=7)
dta_gdp.columns = ['gdp_time','real_gdp','nomimal_gdp','C','I','G','NX',1,1,1,1,1]

######################## 就业 ###################################
dta_emp = pd.read_excel('usa_macro.xlsx',sheet_name="劳动市场_就业调查",header=7)
dta_emp.columns = ['emp_time','emp_people','sal_data',1,1,1,1,1,1,1]
this_year = dta_emp.loc[len(dta_emp)-1,'emp_time'].year
emp_m = [[None for i in range(12)] for i in range(10)]
sal_m = [[None for i in range(12)] for i in range(10)]

i = len(dta_emp)-1
while i>=0:
        year = this_year - dta_emp.loc[i, 'emp_time'].year
        month = dta_emp.loc[i, 'emp_time'].month # 1 开始
        if dta_emp.loc[i, 'emp_time'].year <= this_year-10:
                break
        emp_m[-1-year][month-1] = dta_emp.loc[i,'emp_people']
        sal_m[-1-year][month-1] = dta_emp.loc[i,'sal_data']
        i-=1

sal_index_dta = pd.read_excel('usa_macro.xlsx', sheet_name="工资和薪金指数", header=7)
sal_index_dta.columns = ['sal_index_time','sal_index_dta',1,1,1,1,1] # 可能需要改进
# 60个数据点

labor_emp = pd.read_excel('usa_macro.xlsx',sheet_name="家庭劳动力调查",header=7)
labor_emp.columns = ['time','unemp','u1','u2','u3','u4','u5','u6','labor',1,1,1]

first_unemp_dta = pd.read_excel('usa_macro.xlsx',sheet_name="初请",header=7)
first_unemp_dta.columns = ['first_unemp_time','first_unemp_data',1,1,1,1]

emp_vct = pd.read_excel("usa_macro.xlsx",sheet_name="新设工作岗位和离职率",header=7)
emp_vct.columns = ['vct_time','resg_data','vct_data','emp_new_dta',1,1,1,1]

resg_m = [[None for i in range(12)] for i in range(10)]
i = len(emp_vct) - 1
while i>=0:
        year = this_year - emp_vct.loc[i, 'vct_time'].year
        month = emp_vct.loc[i, 'vct_time'].month # 1 开始
        if emp_vct.loc[i, 'vct_time'].year <= this_year-10:
                break
        resg_m[-1-year][month-1] = emp_vct.loc[i,'resg_data']
        i-=1

expd_dta =  pd.read_excel("usa_macro.xlsx",sheet_name="个人收入和消费",header=7)
expd_dta.columns = ['expd_time',1,'expd_dta',1,1,1,1,1,1]

rtl_dta = pd.read_excel("usa_macro.xlsx",sheet_name="零售",header=7)
rtl_dta.columns = ['rtl_time','rtl_dta','rtl_without',1,1,1,1,1,1]
rtl_m = [[None for i in range(12)] for i in range(10)]
rtl_without_m = [[None for i in range(12)] for i in range(10)]
i = len(rtl_dta)-1
while i>=0:
        year = this_year - rtl_dta.loc[i, 'rtl_time'].year
        month = rtl_dta.loc[i, 'rtl_time'].month
        if rtl_dta.loc[i,'rtl_time'].year <= this_year-10:
                break
        rtl_m[-1-year][month-1] = rtl_dta.loc[i,'rtl_dta']
        rtl_without_m[-1-year][month-1] = rtl_dta.loc[i,'rtl_without']
        i-=1


car_dta = pd.read_excel("usa_macro.xlsx",sheet_name="零售",header=7)
car_dta.columns = ['car_time','car_dta','truct_dta',1,1,1,1,1,1]
car_m = [[None for i in range(12)] for i in range(10)]
truct_m = [[None for i in range(12)] for i in range(10)]

i = len(car_dta)-1
while i>=0:
        year = this_year - car_dta.loc[i,'car_time'].year
        month = car_dta.loc[i,'car_time'].month
        if car_dta.loc[i,'car_time'].year<=this_year-10:
                break
        car_m[-1-year][month-1] = car_dta.loc[i,'car_dta']
        truct_m[-1-year][month-1] = car_dta.loc[i,'truct_dta']
        i-=1

conf_dta = pd.read_excel("usa_macro.xlsx",sheet_name="消费者信心",header=7)
conf_dta.columns = ['conf_time','conf_dta',1,1,1,1,1]
conf_m = [[None for i in range(12)] for i in range(10)]
i = len(conf_dta) - 1
while i>=0:
        year = this_year - conf_dta.loc[i,'conf_time'].year
        month = conf_dta.loc[i,'conf_time'].month
        if conf_dta.loc[i,'conf_time'].year<=this_year-10:
                break
        conf_m[-1-year][month-1] = conf_dta.loc[i,'conf_dta']
        i-=1


# 周度数据: 200周
money_dta = pd.read_excel("usa_macro.xlsx",sheet_name='货币供给',header=7)
money_dta.columns = ['money_time','m1','m2',1,1,1,1,1,1,1]

house_dta = pd.read_excel('usa_macro.xlsx',sheet_name='住房和建筑业_开工和批准',header=7)
house_dta.columns = ['house_time','house_begin',1,1,1,1,'house_apprv',1,1,1,1,1,1,1,1] 
house_apprv_m = [[None for i in range(12)] for i in range(10)]
house_begin_m = [[None for i in range(12)] for i in range(10)]

i = len(house_dta) - 1
while i>=0:
        year = this_year - house_dta.loc[i,'house_time'].year
        month = house_dta.loc[i,'house_time'].month
        if house_dta.loc[i,'house_time'].year<=this_year-10:
                break
        house_begin_m[-1-year][month-1] = house_dta.loc[i,'house_begin']
        house_apprv_m[-1-year][month-1] = house_dta.loc[i,'house_apprv']
        i-=1

new_house = pd.read_excel('usa_macro.xlsx',sheet_name="新屋销售",header=7)
new_house.columns = ['house_sell_time','house_sell_dta',1,1,1,1]
new_house_m = [[None for i in range(12)] for i in range(10)]

i = len(new_house) - 1
while i>=0:
        year = this_year - new_house.loc[i,'house_sell_time'].year
        month = new_house.loc[i,'house_sell_time'].month
        if new_house.loc[i,'house_sell_time'].year<=this_year-10:
                break
        new_house_m[-1-year][month-1] = new_house.loc[i,'house_sell_dta']
        i-=1

cons_spend_dta = pd.read_excel('usa_macro.xlsx',sheet_name='建造开支',header=7)   
cons_spend_dta.columns=['cons_spend_time','cons_spend_dta','cons_spend_aprt','cons_spend_non_aprt']

pmi_dta = pd.read_excel('usa_macro.xlsx',sheet_name='采购经理人指数(PMI)',header=7)
pmi_dta.columns = ['pmi_time','pmi_dta','pmi_none',1,1,1,1,1,1]
pmi_m = [[None for i in range(12)] for i in range(10)]
pmi_none_m = [[None for i in range(12)] for i in range(10)]
i = len(pmi_dta) - 1
while i >= 0:
        year = this_year - pmi_dta.loc[i, 'pmi_time'].year
        month = pmi_dta.loc[i, 'pmi_time'].month
        if pmi_dta.loc[i, 'pmi_time'].year <= this_year-10:
                break
        pmi_m[-1-year][month-1] = pmi_dta.loc[i, 'pmi_dta']
        pmi_none_m[-1-year][month-1] = pmi_dta.loc[i, 'pmi_none']
        i -= 1


inds_dta = pd.read_excel('usa_macro.xlsx',sheet_name='工业产值',header=7)
inds_dta.columns = ['inds_time','inds_ratio_dta','indus_prod_final_dta',1,'indus_prod_auto_dta',1,1,1,1,1,1,1,1] 
inds_ratio_m = [[None for i in range(12)] for i in range(10)]
inds_final_m = [[None for i in range(12)] for i in range(10)]
i = len(inds_dta) - 1
while i >= 0:
        year = this_year - inds_dta.loc[i, 'inds_time'].year
        month = inds_dta.loc[i, 'inds_time'].month
        if inds_dta.loc[i, 'inds_time'].year <= this_year-10:
                break
        inds_ratio_m[-1-year][month-1] = inds_dta.loc[i, 'inds_ratio_dta']
        inds_final_m[-1-year][month-1] = inds_dta.loc[i, 'indus_prod_final_dta']
        i -= 1

order_dta = pd.read_excel('usa_macro.xlsx', sheet_name='生产者发货存货及订单调查', header=7)
order_dta.columns = ['order_time', 'manu_order_dta', 1, 'manu_dura_dta', 'manu_dura_unfi', 'manu_dura_trans',1,'manu_dura_prod','manu_dura_own', 1, 1, 1, 1, 1]
order_m = [[None for i in range(12)] for i in range(10)]
dura_m = [[None for i in range(12)] for i in range(10)]
dura_unfi_m = [[None for i in range(12)] for i in range(10)]
i = len(order_dta) - 1
while i >=0:
        year = this_year - order_dta.loc[i, 'order_time'].year
        month = order_dta.loc[i, 'order_time'].month
        if order_dta.loc[i, 'order_time'].year <= this_year-10:
                break
        order_m[-1-year][month-1] = order_dta.loc[i,'manu_order_dta']
        dura_m[-1-year][month-1] = order_dta.loc[i,'manu_dura_dta']
        dura_unfi_m[-1-year][month-1] = order_dta.loc[i,'manu_dura_unfi']
        i-=1


trade_dta = pd.read_excel('usa_macro.xlsx', sheet_name='贸易', header=7)
trade_dta.columns = ['trade_time','trade_compare','trade_goods_compare','trade_service_compare',1,1,1,1,1,1,1]
trade_m = [[None for i in range(12)] for i in range(10)]
trgoods_m = [[None for i in range(12)] for i in range(10)]
trser_m = [[None for i in range(12)] for i in range(10)]
i = len(trade_dta) - 1
while i>=0:
        year = this_year - trade_dta.loc[i,'trade_time'].year
        month = trade_dta.loc[i, 'trade_time'].month
        if trade_dta.loc[i, 'trade_time'].year <= this_year - 10:
                break
        trade_m[-1-year][month-1] = trade_dta.loc[i,'trade_compare']
        trgoods_m[-1-year][month-1] = trade_dta.loc[i,'trade_goods_compare']
        trser_m[-1-year][month-1] = trade_dta.loc[i,'trade_service_compare']
        i-=1

inex_dta = pd.read_excel('usa_macro.xlsx',sheet_name='进口和出口价格',header=7)
inex_dta.columns = ['inex_time','in_dta','ex_dta',1,1,1,1,1]

cpi_dta = pd.read_excel('usa_macro.xlsx',sheet_name='CPI',header=7)
cpi_dta.columns = ['cpi_time','cpi_dta','cpi_core',1,1,1,1,1]

pce_dta = pd.read_excel('usa_macro.xlsx',sheet_name='PCE',header=7) 
pce_dta.columns = ['pce_time', 'pce_dta', 'pce_core', 1, 1, 1, 1]

ppi_dta = pd.read_excel('usa_macro.xlsx',sheet_name='PPI',header=7)
ppi_dta.columns = ['ppi_time','ppi_dta',1,'ppi_core',1,1,1,1,1,1]

gdpdefl_dta = pd.read_excel('usa_macro.xlsx',sheet_name='GDP_Deflator',header=7)
gdpdefl_dta.columns = ['gdpdefl_time', 'gdpdefl_dta', 1, 1, 1, 1]

final_dict = {
        'gdp_time'        : dta_gdp['gdp_time'],
        'real_gdp'        : dta_gdp['real_gdp'],
        'emp_time'        : dta_emp['emp_time'],
        'emp_people'      : dta_emp['emp_people'],
        'sal_data'        : dta_emp[-120:]['sal_data'],
        'sal_index_time'  : sal_index_dta[-60:]['sal_index_time'],
        'sal_index_data'  : sal_index_dta[-60:]['sal_index_dta'],
        'unemp'           : labor_emp[-120:]['unemp'],
        'labor'           : labor_emp[-120:]['labor'],
        'unemp_time'      : labor_emp[-120:]['time'],
        'first_unemp_data': first_unemp_dta[-200:]['first_unemp_data'],
        'first_unemp_time': first_unemp_dta[-200:]['first_unemp_time'],
        'vct_time'        : emp_vct[-120:]['vct_time'],
        'resg_data'       : emp_vct[-120:]['resg_data'],
        'vct_data'        : emp_vct[-120:]['vct_data'],
        'emp_new_dta'     : emp_vct[-120:]['emp_new_dta'],
        'expd_time'       : expd_dta[-80:]['expd_time'],
        'expd_dta'        : expd_dta[-80:]['expd_dta'],
        'rtl_time'        : rtl_dta[-120:]['rtl_time'],
        'rtl_dta'         : rtl_dta[-120:]['rtl_dta'],
        'rtl_without'     : rtl_dta[-120:]['rtl_without'],
        'car_time'        : car_dta[-120:]['car_time'],
        'car_dta'         : car_dta[-120:]['car_dta'],
        'truct_dta'       : car_dta[-120:]['truct_dta'],
        'conf_dta'        : conf_dta[-120:]['conf_dta'],
        'conf_time'       : conf_dta[-120:]['conf_time'],
        'money_time'      : money_dta[-200:]['money_time'],
        'm1'              : money_dta[-200:]['m1'],
        'm2'              : money_dta[-200:]['m2'],
        'house_begin'     : house_dta[-120:]['house_begin'],
        'house_time'      : house_dta[-120:]['house_time'],
        'house_apprv'     : house_dta[-120:]['house_apprv'],
        'house_sell_time' : new_house[-120:]['house_sell_time'],
        'house_sell_dta'  : new_house[-120:]['house_sell_dta'],
        'cons_spend_time' : cons_spend_dta[-120:]['cons_spend_time'],
        'cons_spend_dta'  : cons_spend_dta[-120:]['cons_spend_dta'],
        'pmi_time'        : pmi_dta[-120:]['pmi_time'],
        'pmi_dta'         : pmi_dta[-120:]['pmi_dta'],
        'inds_time'       : inds_dta[-120:]['inds_time'],
        'inds_ratio_dta'  : inds_dta[-120:]['inds_ratio_dta'],
        'inds_prod_final' : inds_dta[-120:]['indus_prod_final_dta'],
        'inds_prod_auto'  : inds_dta[-120:]['indus_prod_auto_dta'],
        'order_time'      : order_dta[-120:]['order_time'],
        'manu_order_dta'  : order_dta[-120:]['manu_order_dta'],
        'manu_dura_dta'   : order_dta[-120:]['manu_dura_dta'],
        'manu_dura_unfi'  : order_dta[-120:]['manu_dura_unfi'],
        'manu_dura_trans' : order_dta[-120:]['manu_dura_trans'],
        'manu_dura_prod'  : order_dta[-120:]['manu_dura_prod'],
        'manu_dura_own'   : order_dta[-120:]['manu_dura_own'],
        'trade_time'      : trade_dta[-120:]['trade_time'],
        'trade_compare'   : trade_dta[-120:]['trade_compare'],
        'trade_goods_compare':trade_dta[-120:]['trade_goods_compare'],
        'trade_service_compare':trade_dta[-120:]['trade_service_compare'],
        'inex_time'       : inex_dta[-120:]['inex_time'],
        'in_dta'          : inex_dta[-120:]['in_dta'],
        'ex_dta'          : inex_dta[-120:]['ex_dta'],
        'cpi_time'        : cpi_dta[-120:]['cpi_time'],
        'cpi_dta'         : cpi_dta[-120:]['cpi_dta'],
        'cpi_core'        : cpi_dta[-120:]['cpi_core'],
        'pce_time'        : pce_dta[-120:]['pce_time'],
        'pce_dta'         : pce_dta[-120:]['pce_dta'],
        'pce_core'        : pce_dta[-120:]['pce_core'],
        'ppi_time'        : ppi_dta[-100:]['ppi_time'],
        'ppi_dta'         : ppi_dta[-100:]['ppi_dta'],
        'ppi_core'        : ppi_dta[-100:]['ppi_core'],
        'gdpdefl_time'    : gdpdefl_dta[-120:]['gdpdefl_time'],
        'gdpdefl_dta'     : gdpdefl_dta[-120:]['gdpdefl_dta']
}

little_dict = { # 注意可能比较长 注意分隔
        'emp_pm0'   : emp_m[-1],
        'emp_pm1'   : emp_m[-2],
        'emp_pm2'   : emp_m[-3],
        'emp_pm3'   : emp_m[-4],
        'emp_pm4'   : emp_m[-5],
        'emp_pm5'   : emp_m[-6],
        'emp_pm6'   : emp_m[-7],
        'emp_pm7'   : emp_m[-8],
        'emp_pm8'   : emp_m[-9],
        'emp_pm9'   : emp_m[-10],
        'sal_pm0'   : sal_m[-1],
        'sal_pm1'   : sal_m[-2],
        'sal_pm2'   : sal_m[-3],
        'sal_pm3'   : sal_m[-4],
        'sal_pm4'   : sal_m[-5],
        'sal_pm5'   : sal_m[-6],
        'sal_pm6'   : sal_m[-7],
        'sal_pm7'   : sal_m[-8],
        'sal_pm8'   : sal_m[-9],
        'sal_pm9'   : sal_m[-10],
        'resg_pm0'  : resg_m[-1],
        'resg_pm1'  : resg_m[-2],
        'resg_pm2'  : resg_m[-3],
        'resg_pm3'  : resg_m[-4],
        'resg_pm4'  : resg_m[-5],
        'resg_pm5'  : resg_m[-6],
        'resg_pm6'  : resg_m[-7],
        'resg_pm7'  : resg_m[-8],
        'resg_pm8'  : resg_m[-9],
        'resg_pm9'  : resg_m[-10],
        'rtl_pm0'   : rtl_m[-1],
        'rtl_pm1'   : rtl_m[-2],
        'rtl_pm2'   : rtl_m[-3],
        'rtl_pm3'   : rtl_m[-4],
        'rtl_pm4'   : rtl_m[-5],
        'rtl_pm5'   : rtl_m[-6],
        'rtl_pm6'   : rtl_m[-7],
        'rtl_pm7'   : rtl_m[-8],
        'rtl_pm8'   : rtl_m[-9],
        'rtl_pm9'   : rtl_m[-10],
        'rtl_wht0'  : rtl_without_m[-1],
        'rtl_wht1'  : rtl_without_m[-2],
        'rtl_wht2'  : rtl_without_m[-3],
        'rtl_wht3'  : rtl_without_m[-4],
        'rtl_wht4'  : rtl_without_m[-5],
        'rtl_wht5'  : rtl_without_m[-6],
        'rtl_wht6'  : rtl_without_m[-7],
        'rtl_wht7'  : rtl_without_m[-8],
        'rtl_wht8'  : rtl_without_m[-9],
        'rtl_wht9'  : rtl_without_m[-10],
        'car_pm0'   : car_m[-1],
        'car_pm1'   : car_m[-2],
        'car_pm2'   : car_m[-3],
        'car_pm3'   : car_m[-4],
        'car_pm4'   : car_m[-5],
        'car_pm5'   : car_m[-6],
        'car_pm6'   : car_m[-7],
        'car_pm7'   : car_m[-8],
        'car_pm8'   : car_m[-9],
        'car_pm9'   : car_m[-10],
        'truct_pm0' : truct_m[-1],
        'truct_pm1' : truct_m[-2],
        'truct_pm2' : truct_m[-3],
        'truct_pm3' : truct_m[-4],
        'truct_pm4' : truct_m[-5],
        'truct_pm5' : truct_m[-6],
        'truct_pm6' : truct_m[-7],
        'truct_pm7' : truct_m[-8],
        'truct_pm8' : truct_m[-9],
        'truct_pm9' : truct_m[-10],
        'conf_pm0'  : conf_m[-1],
        'conf_pm1'  : conf_m[-2],
        'conf_pm2'  : conf_m[-3],
        'conf_pm3'  : conf_m[-4],
        'conf_pm4'  : conf_m[-5],
        'conf_pm5'  : conf_m[-6],
        'conf_pm6'  : conf_m[-7],
        'conf_pm7'  : conf_m[-8],
        'conf_pm8'  : conf_m[-9],
        'conf_pm9'  : conf_m[-10],
        'hs_app_pm0': house_apprv_m[-1],
        'hs_app_pm1': house_apprv_m[-2],
        'hs_app_pm2': house_apprv_m[-3],
        'hs_app_pm3': house_apprv_m[-4],
        'hs_app_pm4': house_apprv_m[-5],
        'hs_app_pm5': house_apprv_m[-6],
        'hs_app_pm6': house_apprv_m[-7],
        'hs_app_pm7': house_apprv_m[-8],
        'hs_app_pm8': house_apprv_m[-9],
        'hs_app_pm9': house_apprv_m[-10],
        'hs_bgn_pm0': house_begin_m[-1],
        'hs_bgn_pm1': house_begin_m[-2],
        'hs_bgn_pm2': house_begin_m[-3],
        'hs_bgn_pm3': house_begin_m[-4],
        'hs_bgn_pm4': house_begin_m[-5],
        'hs_bgn_pm5': house_begin_m[-6],
        'hs_bgn_pm6': house_begin_m[-7],
        'hs_bgn_pm7': house_begin_m[-8],
        'hs_bgn_pm8': house_begin_m[-9],
        'hs_bgn_pm9': house_begin_m[-10],
        'new_house0': new_house_m[-1],
        'new_house1': new_house_m[-2],
        'new_house2': new_house_m[-3],
        'new_house3': new_house_m[-4],
        'new_house4': new_house_m[-5],
        'new_house5': new_house_m[-6],
        'new_house6': new_house_m[-7],
        'new_house7': new_house_m[-8],
        'new_house8': new_house_m[-9],
        'new_house9': new_house_m[-10],
        'pmi0'      : pmi_m[-1],
        'pmi1'      : pmi_m[-2],
        'pmi2'      : pmi_m[-3],
        'pmi3'      : pmi_m[-4],
        'pmi4'      : pmi_m[-5],
        'pmi5'      : pmi_m[-6],
        'pmi6'      : pmi_m[-7],
        'pmi7'      : pmi_m[-8],
        'pmi8'      : pmi_m[-9],
        'pmi9'      : pmi_m[-10],
        'pmi_none0' : pmi_none_m[-1],
        'pmi_none1' : pmi_none_m[-2],
        'pmi_none2' : pmi_none_m[-3],
        'pmi_none3' : pmi_none_m[-4],
        'pmi_none4' : pmi_none_m[-5],
        'pmi_none5' : pmi_none_m[-6],
        'pmi_none6' : pmi_none_m[-7],
        'pmi_none7' : pmi_none_m[-8],
        'pmi_none8' : pmi_none_m[-9],
        'pmi_none9' : pmi_none_m[-10],
        'inds_rto0' : inds_ratio_m[-1],
        'inds_rto1' : inds_ratio_m[-2],
        'inds_rto2' : inds_ratio_m[-3],
        'inds_rto3' : inds_ratio_m[-4],
        'inds_rto4' : inds_ratio_m[-5],
        'inds_rto5' : inds_ratio_m[-6],
        'inds_rto6' : inds_ratio_m[-7],
        'inds_rto7' : inds_ratio_m[-8],
        'inds_rto8' : inds_ratio_m[-9],
        'inds_rto9' : inds_ratio_m[-10],
        'inds_fnl0' : inds_final_m[-1],
        'inds_fnl1' : inds_final_m[-2],
        'inds_fnl2' : inds_final_m[-3],
        'inds_fnl3' : inds_final_m[-4],
        'inds_fnl4' : inds_final_m[-5],
        'inds_fnl5' : inds_final_m[-6],
        'inds_fnl6' : inds_final_m[-7],
        'inds_fnl7' : inds_final_m[-8],
        'inds_fnl8' : inds_final_m[-9],
        'inds_fnl9' : inds_final_m[-10],
        'order_pm0' : order_m[-1],
        'order_pm1' : order_m[-2],
        'order_pm2' : order_m[-3],
        'order_pm3' : order_m[-4],
        'order_pm4' : order_m[-5],
        'order_pm5' : order_m[-6],
        'order_pm6' : order_m[-7],
        'order_pm7' : order_m[-8],
        'order_pm8' : order_m[-9],
        'order_pm9' : order_m[-10],
        'dura_pm0'  : dura_m[-1],
        'dura_pm1'  : dura_m[-2],
        'dura_pm2'  : dura_m[-3],
        'dura_pm3'  : dura_m[-4],
        'dura_pm4'  : dura_m[-5],
        'dura_pm5'  : dura_m[-6],
        'dura_pm6'  : dura_m[-7],
        'dura_pm7'  : dura_m[-8],
        'dura_pm8'  : dura_m[-9],
        'dura_pm9'  : dura_m[-10],
        'dura_unfi0': dura_unfi_m[-1],
        'dura_unfi1': dura_unfi_m[-2],
        'dura_unfi2': dura_unfi_m[-3],
        'dura_unfi3': dura_unfi_m[-4],
        'dura_unfi4': dura_unfi_m[-5],
        'dura_unfi5': dura_unfi_m[-6],
        'dura_unfi6': dura_unfi_m[-7],
        'dura_unfi7': dura_unfi_m[-8],
        'dura_unfi8': dura_unfi_m[-9],
        'dura_unfi9': dura_unfi_m[-10],
        'trade_pm0' : trade_m[-1],
        'trade_pm1' : trade_m[-2],
        'trade_pm2' : trade_m[-3],
        'trade_pm3' : trade_m[-4],
        'trade_pm4' : trade_m[-5],
        'trade_pm5' : trade_m[-6],
        'trade_pm6' : trade_m[-7],
        'trade_pm7' : trade_m[-8],
        'trade_pm8' : trade_m[-9],
        'trade_pm9' : trade_m[-10],
        'tr_good0'  : trgoods_m[-1],
        'tr_good1'  : trgoods_m[-2],
        'tr_good2'  : trgoods_m[-3],
        'tr_good3'  : trgoods_m[-4],
        'tr_good4'  : trgoods_m[-5],
        'tr_good5'  : trgoods_m[-6],
        'tr_good6'  : trgoods_m[-7],
        'tr_good7'  : trgoods_m[-8],
        'tr_good8'  : trgoods_m[-9],
        'tr_good9'  : trgoods_m[-10],
        'tr_ser0'   : trser_m[-1],
        'tr_ser1'   : trser_m[-2],
        'tr_ser2'   : trser_m[-3],
        'tr_ser3'   : trser_m[-4],
        'tr_ser4'   : trser_m[-5],
        'tr_ser5'   : trser_m[-6],
        'tr_ser6'   : trser_m[-7],
        'tr_ser7'   : trser_m[-8],
        'tr_ser8'   : trser_m[-9],
        'tr_ser9'   : trser_m[-10],
#########################################################
        }

final_dta = pd.DataFrame(final_dict)
final_dta.to_json('./json/usa_macro_dta.json')

little_dta = pd.DataFrame(little_dict)
little_dta.to_json('./json/usa_panel_dta.json')

