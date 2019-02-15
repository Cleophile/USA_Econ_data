import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

######################### GDP #####################################
dta_gdp = pd.read_excel('usa_macro.xlsx',sheet_name='GDP',header=7)
dta_gdp.columns = ['gdp_time','real_gdp','nomimal_gdp','C','I','G','NX',1,1,1,1,1]

######################## 就业 ###################################
dta_emp = pd.read_excel('usa_macro.xlsx',sheet_name="劳动市场_就业调查",header=7)
dta_emp.columns = ['emp_time','emp_people',1,1,1,1,1,1,1,1]
this_year = dta_emp.loc[len(dta_emp)-1,'emp_time'].year
emp_m = [[None for i in range(12)] for i in range(10)]

i = len(dta_emp)-1
while i>=0:
        year = this_year - dta_emp.loc[i, 'emp_time'].year
        month = dta_emp.loc[i, 'emp_time'].month # 1 开始
        if dta_emp.loc[i, 'emp_time'].year <= this_year-10:
                break
        emp_m[-1-year][month-1] = dta_emp.loc[i,'emp_people']
        i-=1
####################### 汇总 ##############################

sal_index_dta = pd.read_excel('usa_macro.xlsx', sheet_name="工资和薪金指数", header=7)
sal_index_dta.columns = ['sal_index_time','sal_index_dta',1,1,1,1,1] # 可能需要改进

# 60个数据点


final_dict = {
        'gdp_time'      : dta_gdp['gdp_time'],
        'real_gdp'      : dta_gdp['real_gdp'],
        'emp_time'      : dta_emp['emp_time'],
        'emp_people'    : dta_emp['emp_people'],
        'sal_index_time': sal_index_dta[-60:]['sal_index_time'],
        'sal_index_data': sal_index_dta[-60:]['sal_index_dta'],
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
        #############################

        }

final_dta = pd.DataFrame(final_dict)
final_dta.to_json('./json/usa_macro_dta.json')

little_dta = pd.DataFrame(little_dict)
little_dta.to_json('./json/usa_panel_dta.json')

