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
####################### 汇总 ##############################

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

while i>=0:
        year = this_year - emp_vct.loc[i, 'vct_time'].year
        month = emp_vct.loc[i, 'vct_time'].month # 1 开始
        if emp_vct.loc[i, 'vct_time'].year <= this_year-10:
                break
        resg_m[-1-year][month-1] = emp_vct.loc[i,'resg_data']
        i-=1

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

        #############################
        }

final_dta = pd.DataFrame(final_dict)
final_dta.to_json('./json/usa_macro_dta.json')

little_dta = pd.DataFrame(little_dict)
little_dta.to_json('./json/usa_panel_dta.json')

