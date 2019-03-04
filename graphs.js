var gdp_Chart = echarts.init(document.getElementById("gdp_all"));
var date = new Date();
var this_year = date.getFullYear();
var year_gap = 20;
var points = year_gap * 40;
var gdp_data;
var files = document.getElementById('files');

// 80个季度
var option = {tooltip: {trigger: 'item'},
    legend: {data: ['Real GDP of USA']},
    grid: {left: '3%',right: '4%',bottom: '3%',containLabel: true},
    toolbox: {feature:{saveAsImage:{}}},
    xAxis: {type: 'category',name: "时间",data: []},
    yAxis: {type: 'value',name: 'GDP十亿美元'},
    series: [{name: 'Real GDP of USA', type: 'line', stack: '总量',data: []}]};
gdp_Chart.setOption(option);

var fed_defi_opt = {
    tooltip: {trigger: "axis" }, legend: {data: ['预算赤字', 'GDP占比'], orient: 'horizontal', show: true }, toolbox:{feature:{saveAsImage:{}}},
    xAxis: {type: 'category', name: "",
        data: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028]},
    yAxis: [{ type: 'value', scale: true, axisTick: { show: true }, splitLine: { show: false }, splitNumber: 10, name: "预算赤字" },
    { type: 'value', scale: true, axisTick: { show: true }, axisLabel: { show: true, formatter: '{value}%' }, splitNumber: 10, name: "GDP占比" },],
    series: [{ name: '预算赤字', type: 'line', yAxisIndex: '0', data: [459.0, 1413.0, 1293.0, 1300.0, 1087.0, 680.0, 485.0, 438.0, 585.0, 665.0, 873.0, 984.0, 987.0, 916.0, 852.0, 774.0, 672.0, 579.0, 517.0, 450.0, 363.0] },
    { name: 'GDP占比', type: 'line', yAxisIndex: '1', data: [3.2, 9.9, 8.9, 8.7, 7.0, 4.1, 2.8, 2.5, 3.2, 3.5, 4.4, 4.7, 4.5, 3.9, 3.5, 3.0, 2.5, 2.1, 1.7, 1.4, 1.1] }]
};
var fed_defi = echarts.init(document.getElementById("fed_defi"));
fed_defi.setOption(fed_defi_opt);

var emp_compare = echarts.init(document.getElementById("emp_compare"));
var emp_all = echarts.init(document.getElementById("emp_all"));
var years = [];
for (var i = 0; i < 10; i++)
    years.push(String(this_year - i));
option = {
    tooltip: {trigger: 'item'},
    legend: {data: years},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {feature:{saveAsImage:{}}},
    xAxis: {type: 'category',name: "时间",},
    yAxis: {type: 'value',name: '千人'},series: []
};
/*************************************** 仅为占位符，后面的程序注意写x轴y轴的名称、单位距离等数据 *************************************************/
emp_compare.setOption(option);
emp_all.setOption(option);
var sal_all = echarts.init(document.getElementById("sal_all"));
sal_all.setOption(option);
var sal_compare = echarts.init(document.getElementById("sal_compare"));
sal_compare.setOption(option);
var sal_index = echarts.init(document.getElementById("sal_index"));
sal_index.setOption(option);
var unemp_all = echarts.init(document.getElementById("unemp_all"));
unemp_all.setOption(option);
var labor_all = echarts.init(document.getElementById("labor_all"));
labor_all.setOption(option);
var first_unemp_all = echarts.init(document.getElementById("first_unemp_all"));
first_unemp_all.setOption(option);
var resg_compare = echarts.init(document.getElementById("resg_compare"));
resg_compare.setOption(option);
var resg_all = echarts.init(document.getElementById("resg_all"));
resg_all.setOption(option);
var emp_new = echarts.init(document.getElementById("emp_new"));
emp_new.setOption(option);
var vct_new = echarts.init(document.getElementById("vct_new"));
vct_new.setOption(option);
var expd_all = echarts.init(document.getElementById("expd_all"));
expd_all.setOption(option);
var retail_compare = echarts.init(document.getElementById("retail_compare"));
retail_compare.setOption(option);
var retail_all = echarts.init(document.getElementById("retail_all"));
retail_all.setOption(option);
var retail_compare_without = echarts.init(document.getElementById("retail_compare_without"));
retail_compare_without.setOption(option);
var retail_all_without = echarts.init(document.getElementById("retail_all_without"));
retail_all_without.setOption(option);
var car_compare = echarts.init(document.getElementById("car_compare"));
car_compare.setOption(option);
var car_all = echarts.init(document.getElementById("car_all"));
car_all.setOption(option);    
var truct_compare = echarts.init(document.getElementById("truct_compare"));
truct_compare.setOption(option);
var truct_all = echarts.init(document.getElementById("truct_all"));
truct_all.setOption(option);
var conf_compare = echarts.init(document.getElementById("conf_compare"));
conf_compare.setOption(option);
var conf_all = echarts.init(document.getElementById("conf_all"));   
conf_all.setOption(option);
var money_supp = echarts.init(document.getElementById("money_supp"));
money_supp.setOption(option);
var house_begin_compare = echarts.init(document.getElementById("house_begin_compare"));
house_begin_compare.setOption(option);
var house_begin_all = echarts.init(document.getElementById("house_begin_all"));
house_begin_all.setOption(option);
var house_apprv_compare = echarts.init(document.getElementById("house_apprv_compare"));
house_apprv_compare.setOption(option);
var house_apprv_all = echarts.init(document.getElementById("house_apprv_all"));
house_apprv_all.setOption(option);
var cons_spend_all = echarts.init(document.getElementById("cons_spend_all"));
cons_spend_all.setOption(option);
var house_sell_compare = echarts.init(document.getElementById("house_sell_compare"));
house_sell_compare.setOption(option);
var house_sell_all = echarts.init(document.getElementById("house_sell_all"));
house_sell_all.setOption(option);
var pmi_manu_compare = echarts.init(document.getElementById("pmi_manu_compare"));
pmi_manu_compare.setOption(option);
var pmi_non_compare = echarts.init(document.getElementById("pmi_non_compare"));
pmi_non_compare.setOption(option);
var pmi_all = echarts.init(document.getElementById("pmi_all"));
pmi_all.setOption(option);
var indus_ratio_compare = echarts.init(document.getElementById("indus_ratio_compare"));
indus_ratio_compare.setOption(option);
var indus_ratio_all = echarts.init(document.getElementById("indus_ratio_all"));
indus_ratio_all.setOption(option);
var indus_prod_final_compare = echarts.init(document.getElementById("indus_prod_final_compare"));
indus_prod_final_compare.setOption(option);
var indus_prod_final_all = echarts.init(document.getElementById("indus_prod_final_all"));
indus_prod_final_all.setOption(option);
var indus_prod_auto_all = echarts.init(document.getElementById("indus_prod_auto_all"));
indus_prod_auto_all.setOption(option);
var manu_order_compare = echarts.init(document.getElementById("manu_order_compare"));
manu_order_compare.setOption(option);
var manu_order_all = echarts.init(document.getElementById("manu_order_all"));
manu_order_all.setOption(option);
var manu_dura_compare = echarts.init(document.getElementById("manu_dura_compare"));
manu_dura_compare.setOption(option);
var manu_dura_all = echarts.init(document.getElementById("manu_dura_all"));
manu_dura_all.setOption(option);
var manu_dura_unfi_compare = echarts.init(document.getElementById("manu_dura_unfi_compare"));
manu_dura_unfi_compare.setOption(option);
var manu_dura_unfi_all = echarts.init(document.getElementById("manu_dura_unfi_all"));
manu_dura_unfi_all.setOption(option);
var manu_dura_trans_all = echarts.init(document.getElementById("manu_dura_trans_all"));
manu_dura_trans_all.setOption(option);
var manu_dura_prod_all = echarts.init(document.getElementById("manu_dura_prod_all"));
manu_dura_prod_all.setOption(option);
var manu_dura_own_all = echarts.init(document.getElementById("manu_dura_own_all"));
manu_dura_own_all.setOption(option);
var trade_compare = echarts.init(document.getElementById("trade_compare"));
trade_compare.setOption(option);
var trade_goods_compare = echarts.init(document.getElementById("trade_goods_compare"));
trade_goods_compare.setOption(option);
var trade_service_compare = echarts.init(document.getElementById("trade_service_compare"));
trade_service_compare.setOption(option);
var trade_all = echarts.init(document.getElementById("trade_all"));
trade_all.setOption(option);
var cpi_all = echarts.init(document.getElementById("cpi_all"));
cpi_all.setOption(option);
var pce_all = echarts.init(document.getElementById("pce_all"));
pce_all.setOption(option);
var ppi_all = echarts.init(document.getElementById("ppi_all"));
ppi_all.setOption(option);
var gdpdefl_all = echarts.init(document.getElementById("gdpdefl_all"));
gdpdefl_all.setOption(option);
var inex_price_all = echarts.init(document.getElementById("inex_price_all"));
inex_price_all.setOption(option);


files.addEventListener("change", function () {
    var reader = new FileReader();
    reader.readAsText(files.files[1]);//发起异步请求
    reader.onload = function () {
        //读取完成后，数据保存在对象的result属性中
        gdp_data = this.result;
        gdp_data = JSON.parse(gdp_data);
        /******************************************************** gdp_data是大数据 *******************************************************/
        var gdp = [];
        var date = [];
        for (var i in gdp_data['real_gdp']) {
            if (gdp_data['real_gdp'][i] == null)
                continue;
            gdp.push(gdp_data['real_gdp'][i]);
            var this_date = new Date(gdp_data['gdp_time'][i]);
            date.push(this_date.getFullYear() + '年' + (this_date.getMonth() + 1) + '月');}

        var emp_time = []
        var emp_dta = []
        for (var i in gdp_data['emp_time']) {
            if (gdp_data['emp_time'][i] == null)
                continue;
            var this_date = new Date(gdp_data['emp_time'][i]);
            emp_time.push(this_date.getFullYear() + '年' + (this_date.getMonth() + 1) + '月');
            emp_dta.push(gdp_data['emp_people'][i])
        }

        var sal_index_time = new Array();
        var sal_index_data = new Array();
        for (var i in gdp_data['sal_index_time']) {
            if (gdp_data['sal_index_time'][i] == null)
                continue;
            var this_date = new Date(gdp_data['sal_index_time'][i]);
            sal_index_data.push(gdp_data['sal_index_data'][i]);
            sal_index_time.push(this_date.getFullYear() + '年' + (this_date.getMonth() + 1) + '月');
        }
        var unemp_time = new Array();
        var unemp = new Array();
        var labor = new Array();
        for (var i in gdp_data['unemp_time']) {
            if (gdp_data['unemp_time'][i] == null)
                continue;
            var this_date = new Date(gdp_data['unemp_time'][i]);
            unemp_time.push(this_date.getFullYear() + '年' + (this_date.getMonth() + 1) + '月');
            labor.push(gdp_data['labor'][i]);
            unemp.push(gdp_data['unemp'][i]);}


        var first_unemp_data = new Array();
        var first_unemp_time = new Array();
        for (var i in gdp_data['first_unemp_time']) {
            if (gdp_data['first_unemp_time'][i] == null)
                continue;
            var this_date = new Date(gdp_data['first_unemp_time'][i]);
            first_unemp_time.push(this_date.getFullYear() + '/' + (this_date.getMonth() + 1) + '/' + this_date.getDate());
            first_unemp_data.push(gdp_data['first_unemp_data'][i]);
        }

        first_unemp_all.setOption({
            title: {text: first_unemp_time[0] + '至' + first_unemp_time[first_unemp_time.length - 1] + "初请数据"},
            xAxis: {data: first_unemp_time},
            yAxis: {type: 'value', scale: true, name: '%', axisTick: { show: true }, splitNumber: 10},
            series: [{ name: "初请数", type: 'line', data: first_unemp_data }]
        })
        
        unemp_all.setOption({
            title: { text: unemp_time[0] + '至' + unemp_time[unemp_time.length - 1] + "失业率数据" },
            xAxis: { data: unemp_time },
            yAxis: { type: 'value', scale: true, name: '%', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "失业率", type: 'line', data: unemp }]
        })
        labor_all.setOption({
            title: { text:unemp_time[0] + '至' + unemp_time[unemp_time.length - 1] + "劳动参与率数据"},
            xAxis: { data: unemp_time },
            yAxis: { type: 'value', scale: true, name: '%', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "失业率", type: 'line', data: labor }]
        })   

        gdp_Chart.setOption({
            title: { text: "美国" + (this_year - year_gap) + "至" + this_year + "年实际GDP季度数据" },
            xAxis: { data: date.slice(gdp.length - 81, gdp.length - 1) },
            yAxis: {type: 'value',scale: true,name: 'GDP十亿美元',axisTick: {show: true},splitNumber: 10},
            series: [{name: 'Real GDP of USA',type: 'line',stack: '总量',data: gdp.slice(gdp.length - 81, gdp.length - 1)}]
        })

        emp_all.setOption({
            xAxis: { data: emp_time.slice(emp_dta.length - 121, emp_dta.length - 1) },
            yAxis: {type: 'value',scale: true,name: '千人',axisTick: {show: true},splitNumber: 10},
            series: [{
                name: '就业人口',
                type: 'line',
                data: emp_dta.slice(emp_dta.length - 121, emp_dta.length - 1)
            }]})
        sal_index.setOption({
            xAxis: { data: sal_index_time },
            yAxis: {
                type: 'value', scale: true, axisTick: { show: true }, splitNumber: 10,
                name: "薪金指数"
            },
            series: [{
                name: '就业人口',
                type: 'line',
                data: sal_index_data,
            }]})

        var sal_data = new Array();
        var sal_time = new Array();
        for (var i in gdp_data['sal_data']) {
            if (gdp_data['sal_data'][i] == null)
                continue;
            var this_date = new Date(gdp_data['emp_time'][i]);
            sal_data.push(gdp_data['sal_data'][i]);
            sal_time.push(this_date.getFullYear() + '年' + (this_date.getMonth() + 1) + '月');
        }
        sal_all.setOption({
            title: { text: sal_time[0] + '至' + sal_time[sal_time.length - 1] + "平均时薪数据" },
            xAxis: { data: sal_time },
            yAxis: { type: 'value', scale: true, name: '美元', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "私人非农企业全部员工平均时薪", type: 'line', data: sal_data }]
        })

        var vct_time = new Array();
        var vct_data = new Array();
        var emp_new_data = new Array();
        var resg_data = new Array();
        for (var i in gdp_data['vct_time']) {
            if (gdp_data['vct_time'][i] == null)
                continue;
            var this_date = new Date(gdp_data['vct_time'][i]);
            vct_time.push(this_date.getFullYear() + '年' + (this_date.getMonth() + 1) + '月');
            vct_data.push(gdp_data['vct_data'][i]);
            emp_new_data.push(gdp_data['emp_new_dta'][i]);
            resg_data.push(gdp_data['resg_data'][i]);
        }

            resg_all.setOption({
                title: { text: vct_time[0] + '至' + vct_time[vct_time.length - 1] + "离职率数据" },
                xAxis: { data: vct_time },
                yAxis: { type: 'value', scale: true, name: '%', axisTick: { show: true }, splitNumber: 10 },
                series: [{ name: "离职率", type: 'line', data: resg_data }]
            })
        emp_new.setOption({
            title: { text: vct_time[0] + '至' + vct_time[vct_time.length - 1] + "新增工作岗位数据" },
            xAxis: { data: vct_time },
            yAxis: { type: 'value', scale: true, name: '%', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "新增工作岗位", type: 'line', data: emp_new_data }]
        })
        vct_new.setOption({
                title: { text: vct_time[0] + '至' + vct_time[vct_time.length - 1] + "职位空缺数数据" },
                xAxis: { data: vct_time },
                yAxis: { type: 'value', scale: true, name: '%', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "职位空缺数", type: 'line', data: vct_data }]
            })
        
        var expd_time = new Array();
        var expd_dta = new Array();
        for (var i in gdp_data['expd_time']) {
            if (gdp_data['expd_time'][i] == null)
                continue;
            var this_date = new Date(gdp_data['expd_time'][i]);
            expd_time.push(this_date.getFullYear() + '年' + (this_date.getMonth() + 1) + '月');
            expd_dta.push(gdp_data['expd_dta'][i]);
        }
        expd_all.setOption({
            title: { text: expd_time[0] + '至' + expd_time[expd_time.length - 1] + "个人消费" },
            xAxis: { data: expd_time },
            yAxis: { type: 'value', scale: true, name: '十亿美元', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "个人消费", type: 'line', data: expd_dta }]
        })

        var rtl_time = new Array();
        var rtl_without = new Array();
        var rtl_dta = new Array();
        for(var i in gdp_data['rtl_time'])
        {
            if(gdp_data['rtl_time'][i]==null)
                continue;
            var this_date = new Date(gdp_data['rtl_time'][i]);
            rtl_time.push(this_date.getFullYear() + '年' + (this_date.getMonth() + 1) + '月');
            rtl_without.push(gdp_data['rtl_without'][i]);
            rtl_dta.push(gdp_data['rtl_dta'][i]);
        }
        retail_all.setOption({
            title: { text: rtl_time[0] + '至' + rtl_time[rtl_time.length - 1] + "零售总额" },
            xAxis: { data: rtl_time },
            yAxis: { type: 'value', scale: true, name: '十亿美元', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "零售总额", type: 'line', data: rtl_dta }]})
        
        retail_all_without.setOption({
            title: { text: rtl_time[0] + '至' + rtl_time[rtl_time.length - 1] + "零售总额(机动车除外)" },
            xAxis: { data: rtl_time },
            yAxis: { type: 'value', scale: true, name: '十亿美元', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "零售总额(机动车除外)", type: 'line', data: rtl_without }]
        })

        var car_dta = new Array();
        var truct_dta = new Array();
        var car_time = new Array();
        for(var i in gdp_data['car_time'])
        {
            if (gdp_data['car_time'][i] == null)
                continue;
            var this_date = new Date(gdp_data['car_time'][i]);
            car_time.push(this_date.getFullYear() + '年' + (this_date.getMonth() + 1) + '月');
            car_dta.push(gdp_data['car_dta'][i]);
            truct_dta.push(gdp_data['truct_dta'][i]);
        }
        car_all.setOption({
            title: { text: car_time[0] + '至' + car_time[car_time.length - 1] + "轿车销量" },
            xAxis: { data: car_time },
            yAxis: { type: 'value', scale: true, name: '十亿美元', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "轿车销量", type: 'line', data: car_dta }]
        })
        truct_all.setOption({
            title: { text: car_time[0] + '至' + car_time[car_time.length - 1] + "卡车销量" },
            xAxis: { data: car_time },
            yAxis: { type: 'value', scale: true, name: '十亿美元', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "卡车销量", type: 'line', data: truct_dta }]
        })

        var conf_dta = new Array();
        var conf_time = new Array();
        for(var i in gdp_data['conf_time'])
        {
            if(gdp_data['conf_time'][i]==null)
                continue;
            var this_date = new Date(gdp_data['conf_time'][i]);
            conf_time.push(this_date.getFullYear() + '年' + (this_date.getMonth() + 1) + '月');
            conf_dta.push(gdp_data['conf_dta'][i]);
        }
        conf_all.setOption({
                title: { text: conf_time[0] + '至' + conf_time[conf_time.length - 1] + "消费者信心指数" },
                xAxis: { data: conf_time },
                yAxis: { type: 'value', scale: true, name: '', axisTick: { show: true }, splitNumber: 10 },
                series: [{ name: "消费者信心指数", type: 'line', data: conf_dta }]
            })

        var money_time = new Array();
        var m1 = new Array();
        var m2 = new Array();
        for(var i in gdp_data['money_time'])
        {
            if(gdp_data['money_time'][i]==null)
                continue;
            var this_date = new Date(gdp_data['money_time'][i]);
            money_time.push(this_date.getFullYear() + '/' + (this_date.getMonth() + 1) + '/' + this_date.getDate());
            m1.push(gdp_data['m1'][i]);
            m2.push(gdp_data['m2'][i]);
        }

        money_supp.setOption({
            title: { text: money_time[0] + '至' + money_time[money_time.length - 1] + "美国货币供给" },
            legend: { data: ["M1","M2"], show: true, orient: 'horizontal' },
            tooltip:{trigger:'axis'},
            xAxis: { data: money_time },
            yAxis: { type: 'value', scale: true, name: '十亿美元', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "M1", type: 'line', data:m1 },
                { name: "M2", type: 'line', data: m2 }]});

        var house_time = new Array();
        var house_apprv = new Array();
        var house_begin = new Array();
        for (var i in gdp_data['house_time']) {
            if (gdp_data['house_time'][i] == null)
                continue;
            var this_date = new Date(gdp_data['house_time'][i]);
            house_time.push(this_date.getFullYear() + '年' + (this_date.getMonth() + 1) + '月');
            house_apprv.push(gdp_data['house_apprv'][i]);
            house_begin.push(gdp_data['house_begin'][i]);
        }
        house_apprv_all.setOption({
            title: { text: house_time[0] + '至' + house_time[house_time.length - 1] + "批准新建住宅数量" },
            xAxis: { data: house_time },
            yAxis: { type: 'value', scale: true, name: '千套', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "批准新建住宅数量", type: 'line', data: house_apprv }]
        });

        house_begin_all.setOption({
            title: { text: house_time[0] + '至' + house_time[house_time.length - 1] + "开工新建住宅数量" },
            xAxis: { data: house_time },
            yAxis: { type: 'value', scale: true, name: '千套', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "开工新建住宅数量", type: 'line', data: house_begin }]
        });

        var house_sell_time = new Array();
        var house_sell_dta = new Array();
        for (var i in gdp_data['house_sell_time']) {
            if (gdp_data['house_sell_time'][i] == null)
                continue;
            var this_date = new Date(gdp_data['house_sell_time'][i]);
            house_sell_time.push(this_date.getFullYear() + '年' + (this_date.getMonth() + 1) + '月');
            house_sell_dta.push(gdp_data['house_sell_dta'][i]);
        }
        house_sell_all.setOption({
            title: { text: house_sell_time[0] + '至' + house_sell_time[house_sell_time.length - 1] + "新建住房销售数量" },
            xAxis: { data: house_sell_time },
            yAxis: { type: 'value', scale: true, name: '千套', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "新建住房销售", type: 'line', data: house_sell_dta }]
        })
        var cons_spend_dta = new Array();
        var cons_spend_time = new Array();
        for (var i in gdp_data['cons_spend_time']) {
            if (gdp_data['cons_spend_time'][i] == null)
                continue;
            cons_spend_dta.push(gdp_data['cons_spend_dta'][i]);
            var this_date = new Date(gdp_data['cons_spend_time'][i]);
            cons_spend_time.push(this_date.getFullYear() + '年' + (this_date.getMonth() + 1) + '月');
        }
        cons_spend_all.setOption({
            title: { text: cons_spend_time[0] + '至' + cons_spend_time[cons_spend_time.length - 1] + "建造开支" },
            xAxis: { data: cons_spend_time },
            yAxis: { type: 'value', scale: true, name: '百万美元', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "建造开支", type: 'line', data: cons_spend_dta }]
        })

        var pmi_time = new Array();
        var pmi_dta = new Array();
        for(var i in gdp_data['pmi_time'])
        {
            if(gdp_data['pmi_time'][i]==null)
                continue;
            var this_date = new Date(gdp_data['pmi_time'][i]);
            pmi_time.push(this_date.getFullYear() + '年' + (this_date.getMonth() + 1) + '月');
            pmi_dta.push(gdp_data['pmi_dta'][i]);
        }
        pmi_all.setOption({
            title: { text: pmi_time[0] + '至' + pmi_time[pmi_time.length - 1] + "PMI指数" },
            xAxis: { data: pmi_time },
            yAxis: { type: 'value', scale: true, name: '', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "PMI指数", type: 'line', data: pmi_dta }]});
        
        var inds_time = new Array();
        var inds_ratio_dta = new Array();
        var inds_prod_final = new Array();
        var inds_prod_auto = new Array();
        for (var i in gdp_data['inds_time']) {
            if (gdp_data['inds_time'][i] == null)
                continue;
            var this_date = new Date(gdp_data['inds_time'][i]);
            inds_time.push(this_date.getFullYear() + '年' + (this_date.getMonth() + 1) + '月');
            inds_prod_auto.push(gdp_data['inds_prod_auto'][i]);
            inds_prod_final.push(gdp_data['inds_prod_final'][i]);
            inds_ratio_dta.push(gdp_data['inds_ratio_dta'][i]);
        }
        indus_ratio_all.setOption({
            title: { text: inds_time[0] + '至' + inds_time[inds_time.length - 1] + "工业产能利用率" },
            xAxis: { data: inds_time },
            yAxis: { type: 'value', scale: true, name: '%', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "工业产能利用率", type: 'line', data: inds_ratio_dta }]
        });
        indus_prod_final_all.setOption({
            title: { text: inds_time[0] + '至' + inds_time[inds_time.length - 1] + "工业总产值" },
            xAxis: { data: inds_time },
            yAxis: { type: 'value', scale: true, name: '十亿美元', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "工业总产值", type: 'line', data: inds_prod_final }]
        });
        indus_prod_auto_all.setOption({
            title: { text: inds_time[0] + '至' + inds_time[inds_time.length - 1] + "汽车产品总产值" },
            xAxis: { data: inds_time },
            yAxis: { type: 'value', scale: true, name: '十亿美元', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "汽车产品总产值", type: 'line', data: inds_prod_auto }]
        });

        var order_time = new Array();
        var manu_order_dta = new Array();
        var manu_dura_dta = new Array();
        var manu_dura_unfi = new Array();
        var manu_dura_trans = new Array();
        var manu_dura_prod = new Array();
        var manu_dura_own = new Array();
        for (var i in gdp_data['order_time']) {
            if (gdp_data['order_time'][i] == null)
                continue;
            var this_date = new Date(gdp_data['order_time'][i]);
            order_time.push(this_date.getFullYear() + '年' + (this_date.getMonth() + 1) + '月');
            manu_order_dta.push(gdp_data['manu_order_dta'][i]);
            manu_dura_dta.push(gdp_data['manu_dura_dta'][i]);
            manu_dura_unfi.push(gdp_data['manu_dura_unfi'][i]);
            manu_dura_trans.push(gdp_data['manu_dura_trans'][i]);
            manu_dura_prod.push(gdp_data['manu_dura_prod'][i]);
            manu_dura_own.push(gdp_data['manu_dura_own'][i]);
        }
        manu_order_all.setOption({
            title: { text: order_time[0] + '至' + order_time[order_time.length - 1] + "全部制造业新订单" },
            xAxis: { data: order_time },
            yAxis: { type: 'value', scale: true, name: '百万美元', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "全部制造业新订单", type: 'line', data: manu_order_dta }]
        });
        manu_dura_all.setOption({
            title: { text: order_time[0] + '至' + order_time[order_time.length - 1] + "耐用品新订单" },
            xAxis: { data: order_time },
            yAxis: { type: 'value', scale: true, name: '百万美元', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "耐用品新订单", type: 'line', data: manu_dura_dta }]
        });
        manu_dura_unfi_all.setOption({
            title: { text: order_time[0] + '至' + order_time[order_time.length - 1] + "耐用品未完成订单" },
            xAxis: { data: order_time },
            yAxis: { type: 'value', scale: true, name: '百万美元', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "耐用品未完成订单", type: 'line', data: manu_dura_unfi }]
        });

        manu_dura_trans_all.setOption({
            title: { text: order_time[0] + '至' + order_time[order_time.length - 1] + "除运输品外耐用制造业新增订单" },
            xAxis: { data: order_time },
            yAxis: { type: 'value', scale: true, name: '百万美元', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "除运输品外耐用制造业新增订单", type: 'line', data: manu_dura_trans }]
        });

        manu_dura_prod_all.setOption({
            title: { text: order_time[0] + '至' + order_time[order_time.length - 1] + "耐用品出货量" },
            xAxis: { data: order_time },
            yAxis: { type: 'value', scale: true, name: '百万美元', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "耐用品出货量", type: 'line', data: manu_dura_prod }]
        });

        manu_dura_own_all.setOption({
            title: { text: order_time[0] + '至' + order_time[order_time.length - 1] + "耐用品存货量" },
            xAxis: { data: order_time },
            yAxis: { type: 'value', scale: true, name: '百万美元', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "耐用品存货量", type: 'line', data: manu_dura_own }]
        });

        var trade_time = new Array();
        var trade_compare = new Array();
        var trade_goods_compare = new Array();
        var trade_service_compare = new Array();
        for (var i in gdp_data['trade_time']) {
            if (gdp_data['trade_time'][i] == null)
                continue;
            var this_date = new Date(gdp_data['trade_time'][i]);
            trade_time.push(this_date.getFullYear() + '年' + (this_date.getMonth() + 1) + '月');
            trade_compare.push(gdp_data['trade_compare'][i]);
            trade_goods_compare.push(gdp_data['trade_goods_compare'][i]);
            trade_service_compare.push(gdp_data['trade_service_compare'][i]);
        }
        trade_all.setOption({
            title: { text: trade_time[0] + '至' + trade_time[trade_time.length - 1] + "贸易差额数据" },
            tooltip: { trigger: "axis" }, toolbox: { feature: { saveAsImage: {} } },
            legend: { data: ['贸易差额（总计）', '贸易差额（商品）', '贸易差额（服务）'], orient: 'horizontal', show: true },
            xAxis: { data: trade_time },
            yAxis: { type: 'value', scale: true, name: '百万美元', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: '贸易差额（总计）', type: 'line', data: trade_compare },
            { name: '贸易差额（商品）', type: 'line', data: trade_goods_compare },
            { name: '贸易差额（服务）', type: 'line', data: trade_service_compare }
            ]
        });
        var inex_time = new Array();
        var in_dta = new Array();
        var out_dta = new Array();
        for (var i in gdp_data['inex_time']) {
            if (gdp_data['inex_time'][i] == null)
                continue;
            var this_date = new Date(gdp_data['inex_time'][i]);
            inex_time.push(this_date.getFullYear() + '年' + (this_date.getMonth() + 1) + '月');
            in_dta.push(gdp_data['in_dta'][i]);
            out_dta.push(gdp_data['ex_dta'][i]);
        }
        inex_price_all.setOption({
            title: { text: inex_time[0] + '至' + inex_time[inex_time.length - 1] + "进出口价格指数" },
            tooltip: { trigger: "axis" }, toolbox: { feature: { saveAsImage: {} } },
            legend: { data: ['进口品价格指数', '出口品价格指数'], orient: 'horizontal', show: true },
            xAxis: { data: inex_time },
            yAxis: { type: 'value', scale: true, name: '', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: '进口品价格指数', type: 'line', data: in_dta },
            { name: '出口品价格指数', type: 'line', data: out_dta }
            ]
        })
        var cpi_time = new Array();
        var cpi_dta = new Array();
        var cpi_core = new Array();
        for (var i in gdp_data['cpi_time']) {
            if (gdp_data['cpi_time'][i] == null)
                continue;
            var this_date = new Date(gdp_data['cpi_time'][i]);
            cpi_time.push(this_date.getFullYear() + '年' + (this_date.getMonth() + 1) + '月');
            cpi_dta.push(gdp_data['cpi_dta'][i]);
            cpi_core.push(gdp_data['cpi_core'][i]);
        }
        cpi_all.setOption({
            title: { text: cpi_time[0] + '至' + cpi_time[cpi_time.length - 1] + "CPI" },
            tooltip: { trigger: "axis" }, toolbox: { feature: { saveAsImage: {} } },
            legend: { data: ['CPI月度同比', '核心CPI月度同比'], orient: 'horizontal', show: true },
            xAxis: { data: cpi_time },
            yAxis: { type: 'value', scale: true, name: '%', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: 'CPI月度同比', type: 'line', data: cpi_dta },
            { name: '核心CPI月度同比', type: 'line', data: cpi_core }
            ]
        })
        var pce_time = new Array();
        var pce_dta = new Array();
        var pce_core = new Array();
        for (var i in gdp_data['pce_time']) {
            if (gdp_data['pce_time'][i] == null)
                continue;
            var this_date = new Date(gdp_data['pce_time'][i]);
            pce_time.push(this_date.getFullYear() + '年' + (this_date.getMonth() + 1) + '月');
            pce_dta.push(gdp_data['pce_dta'][i]);
            pce_core.push(gdp_data['pce_core'][i]);
        }
        pce_all.setOption({
            title: { text: pce_time[0] + '至' + pce_time[pce_time.length - 1] + "PCE" },
            tooltip: { trigger: "axis" }, toolbox: { feature: { saveAsImage: {} } },
            legend: { data: ['PCE月度同比', '核心PCE月度同比'], orient: 'horizontal', show: true },
            xAxis: { data: pce_time },
            yAxis: { type: 'value', scale: true, name: '%', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: 'PCE月度同比', type: 'line', data: pce_dta },
            { name: '核心PCE月度同比', type: 'line', data: pce_core }
            ]
        })
        var ppi_time = new Array();
        var ppi_dta = new Array();
        var ppi_core = new Array();
        for (var i in gdp_data['ppi_time']) {
            if (gdp_data['ppi_time'][i] == null)
                continue;
            var this_date = new Date(gdp_data['ppi_time'][i]);
            ppi_time.push(this_date.getFullYear() + '年' + (this_date.getMonth() + 1) + '月');
            ppi_dta.push(gdp_data['ppi_dta'][i]);
            ppi_core.push(gdp_data['ppi_core'][i]);
        }
        ppi_all.setOption({
            title: { text: ppi_time[0] + '至' + ppi_time[ppi_time.length - 1] + "PPI" },
            tooltip: { trigger: "axis" }, toolbox: { feature: { saveAsImage: {} } },
            legend: { data: ['PPI', '核心PPI'], orient: 'horizontal', show: true },
            xAxis: { data: ppi_time },
            yAxis: { type: 'value', scale: true, name: '%', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: 'PPI', type: 'line', data: ppi_dta },
            { name: '核心PPI', type: 'line', data: ppi_core }
            ]
        })

        var gdpdefl_time = new Array();
        var gdpdefl_dta = new Array();
        for (var i in gdp_data['gdpdefl_time']) {
            if (gdp_data['gdpdefl_time'][i] == null)
                continue;
            var this_date = new Date(gdp_data['gdpdefl_time'][i]);
            gdpdefl_time.push(this_date.getFullYear() + '年' + (this_date.getMonth() + 1) + '月');
            gdpdefl_dta.push(gdp_data['gdpdefl_dta'][i]);
        }
        gdpdefl_all.setOption({
            title: { text: gdpdefl_time[0] + '至' + gdpdefl_time[gdpdefl_time.length - 1] + "GDP平减指数" },
            xAxis: { data: gdpdefl_time },
            yAxis: { type: 'value', scale: true, name: '', axisTick: { show: true }, splitNumber: 10 },
            series: [{ name: "GDP_DEFL", type: 'line', data: gdpdefl_dta }]

        }) 


    /************************************************* SMALL READER BELOW ************************************************************/
    var small_reader = new FileReader();
    small_reader.readAsText(files.files[0]);//发起异步请求
    small_reader.onload = function () {
        //读取完成后，数据保存在对象的result属性中
        var month_data = this.result;
        month_data = JSON.parse(month_data);
        var emp_lists = new Array();
        for (var i = 0; i < 10; i++) {emp_lists.push([]);}

        var sal_lists = new Array();
        for (var i = 0; i < 10; i++) { sal_lists.push([]); }
        // 从今年的开始
        var resg_lists = new Array();
        for (var i = 0; i < 10; i++) { resg_lists.push([]); }

        var car_lists = new Array();
        for (var i = 0; i < 10; i++) { car_lists.push([]); } 
        var truct_lists = new Array();
        for (var i = 0; i < 10; i++) { truct_lists.push([]); }
        for (var i in month_data['car_pm0']) { car_lists[0].push(month_data['car_pm0'][i]); }
        for (var i in month_data['car_pm1']) { car_lists[1].push(month_data['car_pm1'][i]); }
        for (var i in month_data['car_pm2']) { car_lists[2].push(month_data['car_pm2'][i]); }
        for (var i in month_data['car_pm3']) { car_lists[3].push(month_data['car_pm3'][i]); }
        for (var i in month_data['car_pm4']) { car_lists[4].push(month_data['car_pm4'][i]); }
        for (var i in month_data['car_pm5']) { car_lists[5].push(month_data['car_pm5'][i]); }
        for (var i in month_data['car_pm6']) { car_lists[6].push(month_data['car_pm6'][i]); }
        for (var i in month_data['car_pm7']) { car_lists[7].push(month_data['car_pm7'][i]); }
        for (var i in month_data['car_pm8']) { car_lists[8].push(month_data['car_pm8'][i]); }
        for (var i in month_data['car_pm9']) { car_lists[9].push(month_data['car_pm9'][i]); } 
        for (var i in month_data['truct_pm0']) { truct_lists[0].push(month_data['truct_pm0'][i]); }
        for (var i in month_data['truct_pm1']) { truct_lists[1].push(month_data['truct_pm1'][i]); }
        for (var i in month_data['truct_pm2']) { truct_lists[2].push(month_data['truct_pm2'][i]); }
        for (var i in month_data['truct_pm3']) { truct_lists[3].push(month_data['truct_pm3'][i]); }
        for (var i in month_data['truct_pm4']) { truct_lists[4].push(month_data['truct_pm4'][i]); }
        for (var i in month_data['truct_pm5']) { truct_lists[5].push(month_data['truct_pm5'][i]); }
        for (var i in month_data['truct_pm6']) { truct_lists[6].push(month_data['truct_pm6'][i]); }
        for (var i in month_data['truct_pm7']) { truct_lists[7].push(month_data['truct_pm7'][i]); }
        for (var i in month_data['truct_pm8']) { truct_lists[8].push(month_data['truct_pm8'][i]); }
        for (var i in month_data['truct_pm9']) { truct_lists[9].push(month_data['truct_pm9'][i]); }

        car_compare.setOption({
            title: { text: years[9] + "至" + years[0] + "轿车销量" },
            tooltip: { trigger: 'axis' },
            xAxis: { data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], type: 'category', name: "时间" },
            yAxis: { type: 'value', scale: true, name: '辆', axisTick: { show: true }, splitNumber: 10 },
            legend: { data: years, show: true, orient: 'horizontal' },
            series: [{ name: years[0], type: 'line', data: car_lists[0] },
                { name: years[1], type: 'line', data: car_lists[1] },
                { name: years[2], type: 'line', data: car_lists[2] },
                { name: years[3], type: 'line', data: car_lists[3] },
                { name: years[4], type: 'line', data: car_lists[4] },
                { name: years[5], type: 'line', data: car_lists[5] },
                { name: years[6], type: 'line', data: car_lists[6] },
                { name: years[7], type: 'line', data: car_lists[7] },
                { name: years[8], type: 'line', data: car_lists[8] },
                { name: years[9], type: 'line', data: car_lists[9] }
        ]});

        truct_compare.setOption({
            title: { text: years[9] + "至" + years[0] + "卡车销量" },
            tooltip: { trigger: 'axis' },
            xAxis: { data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], type: 'category', name: "时间" },
            yAxis: { type: 'value', scale: true, name: '辆', axisTick: { show: true }, splitNumber: 10 },
            legend: { data: years, show: true, orient: 'horizontal' },
            series: [{ name: years[0], type: 'line', data: truct_lists[0] },
                { name: years[1], type: 'line', data: truct_lists[1] },
                { name: years[2], type: 'line', data: truct_lists[2] },
                { name: years[3], type: 'line', data: truct_lists[3] },
                { name: years[4], type: 'line', data: truct_lists[4] },
                { name: years[5], type: 'line', data: truct_lists[5] },
                { name: years[6], type: 'line', data: truct_lists[6] },
                { name: years[7], type: 'line', data: truct_lists[7] },
                { name: years[8], type: 'line', data: truct_lists[8] },
                { name: years[9], type: 'line', data: truct_lists[9] }
        ]});

        var conf_lists = new Array();
        for (var i = 0; i < 10; i++) { conf_lists.push([]); }
        for (var i in month_data['conf_pm0']) { conf_lists[0].push(month_data['conf_pm0'][i]); }
        for (var i in month_data['conf_pm1']) { conf_lists[1].push(month_data['conf_pm1'][i]); }
        for (var i in month_data['conf_pm2']) { conf_lists[2].push(month_data['conf_pm2'][i]); }
        for (var i in month_data['conf_pm3']) { conf_lists[3].push(month_data['conf_pm3'][i]); }
        for (var i in month_data['conf_pm4']) { conf_lists[4].push(month_data['conf_pm4'][i]); }
        for (var i in month_data['conf_pm5']) { conf_lists[5].push(month_data['conf_pm5'][i]); }
        for (var i in month_data['conf_pm6']) { conf_lists[6].push(month_data['conf_pm6'][i]); }
        for (var i in month_data['conf_pm7']) { conf_lists[7].push(month_data['conf_pm7'][i]); }
        for (var i in month_data['conf_pm8']) { conf_lists[8].push(month_data['conf_pm8'][i]); }
        for (var i in month_data['conf_pm9']) { conf_lists[9].push(month_data['conf_pm9'][i]); }
        conf_compare.setOption({
            title: { text: years[9] + "至" + years[0] + "消费者信心指数" },
            tooltip: { trigger: 'axis' },
            xAxis: { data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], type: 'category', name: "时间" },
            yAxis: { type: 'value', scale: true, name: '百万美元', axisTick: { show: true }, splitNumber: 10 },
            legend: { data: years, show: true, orient: 'horizontal' },
            series: [
                { name: years[0], type: 'line', data: conf_lists[0] },
                { name: years[1], type: 'line', data: conf_lists[1] },
                { name: years[2], type: 'line', data: conf_lists[2] },
                { name: years[3], type: 'line', data: conf_lists[3] },
                { name: years[4], type: 'line', data: conf_lists[4] },
                { name: years[5], type: 'line', data: conf_lists[5] },
                { name: years[6], type: 'line', data: conf_lists[6] },
                { name: years[7], type: 'line', data: conf_lists[7] },
                { name: years[8], type: 'line', data: conf_lists[8] },
                { name: years[9], type: 'line', data: conf_lists[9] },
            ]
        })

        var pmi_lists = new Array();
        var pmi_nones = new Array();
        for (var i = 0; i < 10; i++) {pmi_lists.push([]);} 
        for (var i = 0; i < 10; i++) { pmi_nones.push([]); } 
        for(var i in month_data['pmi0']) {pmi_lists[0].push(month_data['pmi0'][i]);}
        for (var i in month_data['pmi1']) { pmi_lists[1].push(month_data['pmi1'][i]); }
        for (var i in month_data['pmi2']) { pmi_lists[2].push(month_data['pmi2'][i]); }
        for (var i in month_data['pmi3']) { pmi_lists[3].push(month_data['pmi3'][i]); }
        for (var i in month_data['pmi4']) { pmi_lists[4].push(month_data['pmi4'][i]); }
        for (var i in month_data['pmi5']) { pmi_lists[5].push(month_data['pmi5'][i]); }
        for (var i in month_data['pmi6']) { pmi_lists[6].push(month_data['pmi6'][i]); }
        for (var i in month_data['pmi7']) { pmi_lists[7].push(month_data['pmi7'][i]); }
        for (var i in month_data['pmi8']) { pmi_lists[8].push(month_data['pmi8'][i]); }
        for (var i in month_data['pmi9']) { pmi_lists[9].push(month_data['pmi9'][i]); }
        for (var i in month_data['pmi_none0']) { pmi_nones[0].push(month_data['pmi_none0'][i]); } 
        for (var i in month_data['pmi_none1']) { pmi_nones[1].push(month_data['pmi_none1'][i]); } 
        for (var i in month_data['pmi_none2']) { pmi_nones[2].push(month_data['pmi_none2'][i]); } 
        for (var i in month_data['pmi_none3']) { pmi_nones[3].push(month_data['pmi_none3'][i]); } 
        for (var i in month_data['pmi_none4']) { pmi_nones[4].push(month_data['pmi_none4'][i]); } 
        for (var i in month_data['pmi_none5']) { pmi_nones[5].push(month_data['pmi_none5'][i]); } 
        for (var i in month_data['pmi_none6']) { pmi_nones[6].push(month_data['pmi_none6'][i]); } 
        for (var i in month_data['pmi_none7']) { pmi_nones[7].push(month_data['pmi_none7'][i]); } 
        for (var i in month_data['pmi_none8']) { pmi_nones[8].push(month_data['pmi_none8'][i]); } 
        for (var i in month_data['pmi_none9']) { pmi_nones[9].push(month_data['pmi_none9'][i]); } 
        pmi_manu_compare.setOption({
            title: { text: years[9] + "至" + years[0] + "制造业PMI" },
            tooltip: { trigger: 'axis' },
            xAxis: { data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], type: 'category', name: "时间" },
            yAxis: { type: 'value', scale: true, name: '', axisTick: { show: true }, splitNumber: 10 },
            legend: { data: years, show: true, orient: 'horizontal' },
            series: [
                { name: years[0], type: 'line', data: pmi_lists[0] },
                { name: years[1], type: 'line', data: pmi_lists[1] },
                { name: years[2], type: 'line', data: pmi_lists[2] },
                { name: years[3], type: 'line', data: pmi_lists[3] },
                { name: years[4], type: 'line', data: pmi_lists[4] },
                { name: years[5], type: 'line', data: pmi_lists[5] },
                { name: years[6], type: 'line', data: pmi_lists[6] },
                { name: years[7], type: 'line', data: pmi_lists[7] },
                { name: years[8], type: 'line', data: pmi_lists[8] },
                { name: years[9], type: 'line', data: pmi_lists[9] },
            ]});
        pmi_non_compare.setOption({
            title: { text: years[9] + "至" + years[0] + "非制造业PMI" },
            tooltip: { trigger: 'axis' },
            xAxis: { data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], type: 'category', name: "时间" },
            yAxis: { type: 'value', scale: true, name: '', axisTick: { show: true }, splitNumber: 10 },
            legend: { data: years, show: true, orient: 'horizontal' },
            series: [
                { name: years[0], type: 'line', data: pmi_nones[0] },
                { name: years[1], type: 'line', data: pmi_nones[1] },
                { name: years[2], type: 'line', data: pmi_nones[2] },
                { name: years[3], type: 'line', data: pmi_nones[3] },
                { name: years[4], type: 'line', data: pmi_nones[4] },
                { name: years[5], type: 'line', data: pmi_nones[5] },
                { name: years[6], type: 'line', data: pmi_nones[6] },
                { name: years[7], type: 'line', data: pmi_nones[7] },
                { name: years[8], type: 'line', data: pmi_nones[8] },
                { name: years[9], type: 'line', data: pmi_nones[9] },
            ]
        });

        var inds_rto_lists = new Array();
        var inds_fnl_lists = new Array();
        for (var i = 0; i < 10; i++) { inds_rto_lists.push([]); } 
        for (var i = 0; i < 10; i++) { inds_fnl_lists.push([]); } 
        for (var i in month_data['inds_rto0']) { inds_rto_lists[0].push(month_data['inds_rto0'][i]);}
        for (var i in month_data['inds_rto1']) { inds_rto_lists[1].push(month_data['inds_rto1'][i]); }
        for (var i in month_data['inds_rto2']) { inds_rto_lists[2].push(month_data['inds_rto2'][i]); }
        for (var i in month_data['inds_rto3']) { inds_rto_lists[3].push(month_data['inds_rto3'][i]); }
        for (var i in month_data['inds_rto4']) { inds_rto_lists[4].push(month_data['inds_rto4'][i]); }
        for (var i in month_data['inds_rto5']) { inds_rto_lists[5].push(month_data['inds_rto5'][i]); }
        for (var i in month_data['inds_rto6']) { inds_rto_lists[6].push(month_data['inds_rto6'][i]); }
        for (var i in month_data['inds_rto7']) { inds_rto_lists[7].push(month_data['inds_rto7'][i]); }
        for (var i in month_data['inds_rto8']) { inds_rto_lists[8].push(month_data['inds_rto8'][i]); }
        for (var i in month_data['inds_rto9']) { inds_rto_lists[9].push(month_data['inds_rto9'][i]); }

        for (var i in month_data['inds_fnl0']) { inds_fnl_lists[0].push(month_data['inds_fnl0'][i]); }
        for (var i in month_data['inds_fnl1']) { inds_fnl_lists[1].push(month_data['inds_fnl1'][i]); }
        for (var i in month_data['inds_fnl2']) { inds_fnl_lists[2].push(month_data['inds_fnl2'][i]); }
        for (var i in month_data['inds_fnl3']) { inds_fnl_lists[3].push(month_data['inds_fnl3'][i]); }
        for (var i in month_data['inds_fnl4']) { inds_fnl_lists[4].push(month_data['inds_fnl4'][i]); }
        for (var i in month_data['inds_fnl5']) { inds_fnl_lists[5].push(month_data['inds_fnl5'][i]); }
        for (var i in month_data['inds_fnl6']) { inds_fnl_lists[6].push(month_data['inds_fnl6'][i]); }
        for (var i in month_data['inds_fnl7']) { inds_fnl_lists[7].push(month_data['inds_fnl7'][i]); }
        for (var i in month_data['inds_fnl8']) { inds_fnl_lists[8].push(month_data['inds_fnl8'][i]); }
        for (var i in month_data['inds_fnl9']) { inds_fnl_lists[9].push(month_data['inds_fnl9'][i]); }

        indus_ratio_compare.setOption({
            title: { text: years[9] + "至" + years[0] + "工业产能利用率" },
            tooltip: { trigger: 'axis' },
            xAxis: { data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], type: 'category', name: "时间" },
            yAxis: { type: 'value', scale: true, name: '%', axisTick: { show: true }, splitNumber: 10 },
            legend: { data: years, show: true, orient: 'horizontal' },
            series: [
                { name: years[0], type: 'line', data: inds_rto_lists[0] },
                { name: years[1], type: 'line', data: inds_rto_lists[1] },
                { name: years[2], type: 'line', data: inds_rto_lists[2] },
                { name: years[3], type: 'line', data: inds_rto_lists[3] },
                { name: years[4], type: 'line', data: inds_rto_lists[4] },
                { name: years[5], type: 'line', data: inds_rto_lists[5] },
                { name: years[6], type: 'line', data: inds_rto_lists[6] },
                { name: years[7], type: 'line', data: inds_rto_lists[7] },
                { name: years[8], type: 'line', data: inds_rto_lists[8] },
                { name: years[9], type: 'line', data: inds_rto_lists[9] },
            ]});
        indus_prod_final_compare.setOption({
            title: { text: years[9] + "至" + years[0] + "工业总产值" },
            tooltip: { trigger: 'axis' },
            xAxis: { data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], type: 'category', name: "时间" },
            yAxis: { type: 'value', scale: true, name: '%', axisTick: { show: true }, splitNumber: 10 },
            legend: { data: years, show: true, orient: 'horizontal' },
            series: [
                { name: years[0], type: 'line', data: inds_fnl_lists[0] },
                { name: years[1], type: 'line', data: inds_fnl_lists[1] },
                { name: years[2], type: 'line', data: inds_fnl_lists[2] },
                { name: years[3], type: 'line', data: inds_fnl_lists[3] },
                { name: years[4], type: 'line', data: inds_fnl_lists[4] },
                { name: years[5], type: 'line', data: inds_fnl_lists[5] },
                { name: years[6], type: 'line', data: inds_fnl_lists[6] },
                { name: years[7], type: 'line', data: inds_fnl_lists[7] },
                { name: years[8], type: 'line', data: inds_fnl_lists[8] },
                { name: years[9], type: 'line', data: inds_fnl_lists[9] },
            ]});

        var order_lists = new Array();
        var dura_lists = new Array();
        var dura_unfis = new Array();
        for (var i = 0; i < 10; i++) { order_lists.push([]); }
        for (var i = 0; i < 10; i++) { dura_lists.push([]); }
        for (var i = 0; i < 10; i++) { dura_unfis.push([]); }
        for (var i in month_data['order_pm0']) { order_lists[0].push(month_data['order_pm0'][i]); }
        for (var i in month_data['order_pm1']) { order_lists[1].push(month_data['order_pm1'][i]); }
        for (var i in month_data['order_pm2']) { order_lists[2].push(month_data['order_pm2'][i]); }
        for (var i in month_data['order_pm3']) { order_lists[3].push(month_data['order_pm3'][i]); }
        for (var i in month_data['order_pm4']) { order_lists[4].push(month_data['order_pm4'][i]); }
        for (var i in month_data['order_pm5']) { order_lists[5].push(month_data['order_pm5'][i]); }
        for (var i in month_data['order_pm6']) { order_lists[6].push(month_data['order_pm6'][i]); }
        for (var i in month_data['order_pm7']) { order_lists[7].push(month_data['order_pm7'][i]); }
        for (var i in month_data['order_pm8']) { order_lists[8].push(month_data['order_pm8'][i]); }
        for (var i in month_data['order_pm9']) { order_lists[9].push(month_data['order_pm9'][i]); }
        for (var i in month_data['dura_pm0']) { dura_lists[0].push(month_data['dura_pm0'][i]); }
        for (var i in month_data['dura_pm1']) { dura_lists[1].push(month_data['dura_pm1'][i]); }
        for (var i in month_data['dura_pm2']) { dura_lists[2].push(month_data['dura_pm2'][i]); }
        for (var i in month_data['dura_pm3']) { dura_lists[3].push(month_data['dura_pm3'][i]); }
        for (var i in month_data['dura_pm4']) { dura_lists[4].push(month_data['dura_pm4'][i]); }
        for (var i in month_data['dura_pm5']) { dura_lists[5].push(month_data['dura_pm5'][i]); }
        for (var i in month_data['dura_pm6']) { dura_lists[6].push(month_data['dura_pm6'][i]); }
        for (var i in month_data['dura_pm7']) { dura_lists[7].push(month_data['dura_pm7'][i]); }
        for (var i in month_data['dura_pm8']) { dura_lists[8].push(month_data['dura_pm8'][i]); }
        for (var i in month_data['dura_pm9']) { dura_lists[9].push(month_data['dura_pm9'][i]); }
        for (var i in month_data['dura_unfi0']) { dura_unfis[0].push(month_data['dura_unfi0'][i]); }
        for (var i in month_data['dura_unfi1']) { dura_unfis[1].push(month_data['dura_unfi1'][i]); }
        for (var i in month_data['dura_unfi2']) { dura_unfis[2].push(month_data['dura_unfi2'][i]); }
        for (var i in month_data['dura_unfi3']) { dura_unfis[3].push(month_data['dura_unfi3'][i]); }
        for (var i in month_data['dura_unfi4']) { dura_unfis[4].push(month_data['dura_unfi4'][i]); }
        for (var i in month_data['dura_unfi5']) { dura_unfis[5].push(month_data['dura_unfi5'][i]); }
        for (var i in month_data['dura_unfi6']) { dura_unfis[6].push(month_data['dura_unfi6'][i]); }
        for (var i in month_data['dura_unfi7']) { dura_unfis[7].push(month_data['dura_unfi7'][i]); }
        for (var i in month_data['dura_unfi8']) { dura_unfis[8].push(month_data['dura_unfi8'][i]); }
        for (var i in month_data['dura_unfi9']) { dura_unfis[9].push(month_data['dura_unfi9'][i]); }
        

        manu_order_compare.setOption({
            title: { text: years[9] + "至" + years[0] + "全部制造业订单" },
            tooltip: { trigger: 'axis' },
            xAxis: { data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], type: 'category', name: "时间" },
            yAxis: { type: 'value', scale: true, name: '百万美元', axisTick: { show: true }, splitNumber: 10 },
            legend: { data: years, show: true, orient: 'horizontal' },
            series: [
                { name: years[0], type: 'line', data: order_lists[0] },
                { name: years[1], type: 'line', data: order_lists[1] },
                { name: years[2], type: 'line', data: order_lists[2] },
                { name: years[3], type: 'line', data: order_lists[3] },
                { name: years[4], type: 'line', data: order_lists[4] },
                { name: years[5], type: 'line', data: order_lists[5] },
                { name: years[6], type: 'line', data: order_lists[6] },
                { name: years[7], type: 'line', data: order_lists[7] },
                { name: years[8], type: 'line', data: order_lists[8] },
                { name: years[9], type: 'line', data: order_lists[9] },
            ]
        });

        manu_dura_compare.setOption({
            title: { text: years[9] + "至" + years[0] + "全部制造业订单" },
            tooltip: { trigger: 'axis' },
            xAxis: { data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], type: 'category', name: "时间" },
            yAxis: { type: 'value', scale: true, name: '百万美元', axisTick: { show: true }, splitNumber: 10 },
            legend: { data: years, show: true, orient: 'horizontal' },
            series: [
                { name: years[0], type: 'line', data: dura_lists[0] },
                { name: years[1], type: 'line', data: dura_lists[1] },
                { name: years[2], type: 'line', data: dura_lists[2] },
                { name: years[3], type: 'line', data: dura_lists[3] },
                { name: years[4], type: 'line', data: dura_lists[4] },
                { name: years[5], type: 'line', data: dura_lists[5] },
                { name: years[6], type: 'line', data: dura_lists[6] },
                { name: years[7], type: 'line', data: dura_lists[7] },
                { name: years[8], type: 'line', data: dura_lists[8] },
                { name: years[9], type: 'line', data: dura_lists[9] },
            ]});
        manu_dura_unfi_compare.setOption({
            title: { text: years[9] + "至" + years[0] + "全部制造业订单" },
            tooltip: { trigger: 'axis' },
            xAxis: { data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], type: 'category', name: "时间" },
            yAxis: { type: 'value', scale: true, name: '百万美元', axisTick: { show: true }, splitNumber: 10 },
            legend: { data: years, show: true, orient: 'horizontal' },
            series: [
                { name: years[0], type: 'line', data: dura_unfis[0] },
                { name: years[1], type: 'line', data: dura_unfis[1] },
                { name: years[2], type: 'line', data: dura_unfis[2] },
                { name: years[3], type: 'line', data: dura_unfis[3] },
                { name: years[4], type: 'line', data: dura_unfis[4] },
                { name: years[5], type: 'line', data: dura_unfis[5] },
                { name: years[6], type: 'line', data: dura_unfis[6] },
                { name: years[7], type: 'line', data: dura_unfis[7] },
                { name: years[8], type: 'line', data: dura_unfis[8] },
                { name: years[9], type: 'line', data: dura_unfis[9] },
            ]});

        var trade_lists = new Array();
        var trgoods_lists = new Array();
        var trser_lists = new Array();
        for (var i = 0; i < 10; i++) { trade_lists.push([]); } 
        for (var i = 0; i < 10; i++) { trgoods_lists.push([]); } 
        for (var i = 0; i < 10; i++) { trser_lists.push([]); } 
        for (var i in month_data['trade_pm0']) { trade_lists[0].push(month_data['trade_pm0'][i]);}
        for (var i in month_data['trade_pm1']) { trade_lists[1].push(month_data['trade_pm1'][i]); }
        for (var i in month_data['trade_pm2']) { trade_lists[2].push(month_data['trade_pm2'][i]); }
        for (var i in month_data['trade_pm3']) { trade_lists[3].push(month_data['trade_pm3'][i]); }
        for (var i in month_data['trade_pm4']) { trade_lists[4].push(month_data['trade_pm4'][i]); }
        for (var i in month_data['trade_pm5']) { trade_lists[5].push(month_data['trade_pm5'][i]); }
        for (var i in month_data['trade_pm6']) { trade_lists[6].push(month_data['trade_pm6'][i]); }
        for (var i in month_data['trade_pm7']) { trade_lists[7].push(month_data['trade_pm7'][i]); }
        for (var i in month_data['trade_pm8']) { trade_lists[8].push(month_data['trade_pm8'][i]); }
        for (var i in month_data['trade_pm9']) { trade_lists[9].push(month_data['trade_pm9'][i]); }
        for (var i in month_data['tr_good0']) { trgoods_lists[0].push(month_data['tr_good0'][i]); }
        for (var i in month_data['tr_good1']) { trgoods_lists[1].push(month_data['tr_good1'][i]); }
        for (var i in month_data['tr_good2']) { trgoods_lists[2].push(month_data['tr_good2'][i]); }
        for (var i in month_data['tr_good3']) { trgoods_lists[3].push(month_data['tr_good3'][i]); }
        for (var i in month_data['tr_good4']) { trgoods_lists[4].push(month_data['tr_good4'][i]); }
        for (var i in month_data['tr_good5']) { trgoods_lists[5].push(month_data['tr_good5'][i]); }
        for (var i in month_data['tr_good6']) { trgoods_lists[6].push(month_data['tr_good6'][i]); }
        for (var i in month_data['tr_good7']) { trgoods_lists[7].push(month_data['tr_good7'][i]); }
        for (var i in month_data['tr_good8']) { trgoods_lists[8].push(month_data['tr_good8'][i]); }
        for (var i in month_data['tr_good9']) { trgoods_lists[9].push(month_data['tr_good9'][i]); }
        for (var i in month_data['tr_ser0']) { trser_lists[0].push(month_data['tr_ser0'][i]); }
        for (var i in month_data['tr_ser1']) { trser_lists[1].push(month_data['tr_ser1'][i]); }
        for (var i in month_data['tr_ser2']) { trser_lists[2].push(month_data['tr_ser2'][i]); }
        for (var i in month_data['tr_ser3']) { trser_lists[3].push(month_data['tr_ser3'][i]); }
        for (var i in month_data['tr_ser4']) { trser_lists[4].push(month_data['tr_ser4'][i]); }
        for (var i in month_data['tr_ser5']) { trser_lists[5].push(month_data['tr_ser5'][i]); }
        for (var i in month_data['tr_ser6']) { trser_lists[6].push(month_data['tr_ser6'][i]); }
        for (var i in month_data['tr_ser7']) { trser_lists[7].push(month_data['tr_ser7'][i]); }
        for (var i in month_data['tr_ser8']) { trser_lists[8].push(month_data['tr_ser8'][i]); }
        for (var i in month_data['tr_ser9']) { trser_lists[9].push(month_data['tr_ser9'][i]); }

        trade_compare.setOption({
            title: { text: years[9] + "至" + years[0] + "贸易差额" },
            tooltip: { trigger: 'axis' },
            xAxis: { data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], type: 'category', name: "时间" },
            yAxis: { type: 'value', scale: true, name: '百万美元', axisTick: { show: true }, splitNumber: 10 },
            legend: { data: years, show: true, orient: 'horizontal' },
            series: [{ name: years[0], type: 'line', data: trade_lists[0] },
                { name: years[1], type: 'line', data: trade_lists[1] },
                { name: years[2], type: 'line', data: trade_lists[2] },
                { name: years[3], type: 'line', data: trade_lists[3] },
                { name: years[4], type: 'line', data: trade_lists[4] },
                { name: years[5], type: 'line', data: trade_lists[5] },
                { name: years[6], type: 'line', data: trade_lists[6] },
                { name: years[7], type: 'line', data: trade_lists[7] },
                { name: years[8], type: 'line', data: trade_lists[8] },
                { name: years[9], type: 'line', data: trade_lists[9] },
        ]});

        trade_goods_compare.setOption({
            title: { text: years[9] + "至" + years[0] + "商品贸易差额" },
            tooltip: { trigger: 'axis' },
            xAxis: { data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], type: 'category', name: "时间" },
            yAxis: { type: 'value', scale: true, name: '百万美元', axisTick: { show: true }, splitNumber: 10 },
            legend: { data: years, show: true, orient: 'horizontal' },
            series: [{ name: years[0], type: 'line', data: trgoods_lists[0] },
                { name: years[1], type: 'line', data: trgoods_lists[1] },
                { name: years[2], type: 'line', data: trgoods_lists[2] },
                { name: years[3], type: 'line', data: trgoods_lists[3] },
                { name: years[4], type: 'line', data: trgoods_lists[4] },
                { name: years[5], type: 'line', data: trgoods_lists[5] },
                { name: years[6], type: 'line', data: trgoods_lists[6] },
                { name: years[7], type: 'line', data: trgoods_lists[7] },
                { name: years[8], type: 'line', data: trgoods_lists[8] },
                { name: years[9], type: 'line', data: trgoods_lists[9] },
        ]});
        trade_service_compare.setOption({
            title: { text: years[9] + "至" + years[0] + "服务贸易差额" },
            tooltip: { trigger: 'axis' },
            xAxis: { data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], type: 'category', name: "时间" },
            yAxis: { type: 'value', scale: true, name: '百万美元', axisTick: { show: true }, splitNumber: 10 },
            legend: { data: years, show: true, orient: 'horizontal' },
            series: [{ name: years[0], type: 'line', data: trser_lists[0] },
                { name: years[1], type: 'line', data: trser_lists[1] },
                { name: years[2], type: 'line', data: trser_lists[2] },
                { name: years[3], type: 'line', data: trser_lists[3] },
                { name: years[4], type: 'line', data: trser_lists[4] },
                { name: years[5], type: 'line', data: trser_lists[5] },
                { name: years[6], type: 'line', data: trser_lists[6] },
                { name: years[7], type: 'line', data: trser_lists[7] },
                { name: years[8], type: 'line', data: trser_lists[8] },
                { name: years[9], type: 'line', data: trser_lists[9] },
        ]});

        var hs_apprv_lists = new Array();
        var hs_begin_lists = new Array();
        for (var i = 0; i < 10; i++) { hs_apprv_lists.push([]); } 
        for (var i = 0; i < 10; i++) { hs_begin_lists.push([]); } 
        for (var i in month_data['hs_app_pm0']){hs_apprv_lists[0].push(month_data['hs_app_pm0'][i]);}
        for (var i in month_data['hs_app_pm1']) { hs_apprv_lists[1].push(month_data['hs_app_pm1'][i]); }
        for (var i in month_data['hs_app_pm2']) { hs_apprv_lists[2].push(month_data['hs_app_pm2'][i]); }
        for (var i in month_data['hs_app_pm3']) { hs_apprv_lists[3].push(month_data['hs_app_pm3'][i]); }
        for (var i in month_data['hs_app_pm4']) { hs_apprv_lists[4].push(month_data['hs_app_pm4'][i]); }
        for (var i in month_data['hs_app_pm5']) { hs_apprv_lists[5].push(month_data['hs_app_pm5'][i]); }
        for (var i in month_data['hs_app_pm6']) { hs_apprv_lists[6].push(month_data['hs_app_pm6'][i]); }
        for (var i in month_data['hs_app_pm7']) { hs_apprv_lists[7].push(month_data['hs_app_pm7'][i]); }
        for (var i in month_data['hs_app_pm8']) { hs_apprv_lists[8].push(month_data['hs_app_pm8'][i]); }
        for (var i in month_data['hs_app_pm9']) { hs_apprv_lists[9].push(month_data['hs_app_pm9'][i]); }

        for (var i in month_data['hs_bgn_pm0']) { hs_begin_lists[0].push(month_data['hs_bgn_pm0'][i]); }
        for (var i in month_data['hs_bgn_pm1']) { hs_begin_lists[1].push(month_data['hs_bgn_pm1'][i]); }
        for (var i in month_data['hs_bgn_pm2']) { hs_begin_lists[2].push(month_data['hs_bgn_pm2'][i]); }
        for (var i in month_data['hs_bgn_pm3']) { hs_begin_lists[3].push(month_data['hs_bgn_pm3'][i]); }
        for (var i in month_data['hs_bgn_pm4']) { hs_begin_lists[4].push(month_data['hs_bgn_pm4'][i]); }
        for (var i in month_data['hs_bgn_pm5']) { hs_begin_lists[5].push(month_data['hs_bgn_pm5'][i]); }
        for (var i in month_data['hs_bgn_pm6']) { hs_begin_lists[6].push(month_data['hs_bgn_pm6'][i]); }
        for (var i in month_data['hs_bgn_pm7']) { hs_begin_lists[7].push(month_data['hs_bgn_pm7'][i]); }
        for (var i in month_data['hs_bgn_pm8']) { hs_begin_lists[8].push(month_data['hs_bgn_pm8'][i]); }
        for (var i in month_data['hs_bgn_pm9']) { hs_begin_lists[9].push(month_data['hs_bgn_pm9'][i]); }

        house_apprv_compare.setOption({
            title: { text: years[9] + "至" + years[0] + "批准新建住宅" },
            tooltip: { trigger: 'axis' },
            xAxis: { data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], type: 'category', name: "时间" },
            yAxis: { type: 'value', scale: true, name: '千套', axisTick: { show: true }, splitNumber: 10 },
            legend: { data: years, show: true, orient: 'horizontal' },
            series: [
                { name: years[0], type: 'line', data: hs_apprv_lists[0] },
                { name: years[1], type: 'line', data: hs_apprv_lists[1] },
                { name: years[2], type: 'line', data: hs_apprv_lists[2] },
                { name: years[3], type: 'line', data: hs_apprv_lists[3] },
                { name: years[4], type: 'line', data: hs_apprv_lists[4] },
                { name: years[5], type: 'line', data: hs_apprv_lists[5] },
                { name: years[6], type: 'line', data: hs_apprv_lists[6] },
                { name: years[7], type: 'line', data: hs_apprv_lists[7] },
                { name: years[8], type: 'line', data: hs_apprv_lists[8] },
                { name: years[9], type: 'line', data: hs_apprv_lists[9] },
            ]});

        house_begin_compare.setOption({
            title: { text: years[9] + "至" + years[0] + "开工新建住宅" },
            tooltip: { trigger: 'axis' },
            xAxis: { data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], type: 'category', name: "时间" },
            yAxis: { type: 'value', scale: true, name: '千套', axisTick: { show: true }, splitNumber: 10 },
            legend: { data: years, show: true, orient: 'horizontal' },
            series: [
                { name: years[0], type: 'line', data: hs_begin_lists[0] },
                { name: years[1], type: 'line', data: hs_begin_lists[1] },
                { name: years[2], type: 'line', data: hs_begin_lists[2] },
                { name: years[3], type: 'line', data: hs_begin_lists[3] },
                { name: years[4], type: 'line', data: hs_begin_lists[4] },
                { name: years[5], type: 'line', data: hs_begin_lists[5] },
                { name: years[6], type: 'line', data: hs_begin_lists[6] },
                { name: years[7], type: 'line', data: hs_begin_lists[7] },
                { name: years[8], type: 'line', data: hs_begin_lists[8] },
                { name: years[9], type: 'line', data: hs_begin_lists[9] },
            ]});
        // house_apprv_compare.setOption()

        var new_house_lists = new Array();
        for (var i = 0; i < 10; i++) { new_house_lists.push([]); } 
        for (var i in month_data['new_house0']) { new_house_lists[0].push(month_data['new_house0'][i]); }
        for (var i in month_data['new_house1']) { new_house_lists[1].push(month_data['new_house1'][i]); }
        for (var i in month_data['new_house2']) { new_house_lists[2].push(month_data['new_house2'][i]); }
        for (var i in month_data['new_house3']) { new_house_lists[3].push(month_data['new_house3'][i]); }
        for (var i in month_data['new_house4']) { new_house_lists[4].push(month_data['new_house4'][i]); }
        for (var i in month_data['new_house5']) { new_house_lists[5].push(month_data['new_house5'][i]); }
        for (var i in month_data['new_house6']) { new_house_lists[6].push(month_data['new_house6'][i]); }
        for (var i in month_data['new_house7']) { new_house_lists[7].push(month_data['new_house7'][i]); }
        for (var i in month_data['new_house8']) { new_house_lists[8].push(month_data['new_house8'][i]); }
        for (var i in month_data['new_house9']) { new_house_lists[9].push(month_data['new_house9'][i]); }
        house_sell_compare.setOption({
            title: { text: years[9] + "至" + years[0] + "新住宅销售" },
            tooltip: { trigger: 'axis' },
            xAxis: { data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], type: 'category', name: "时间" },
            yAxis: { type: 'value', scale: true, name: '千套', axisTick: { show: true }, splitNumber: 10 },
            legend: { data: years, show: true, orient: 'horizontal' },
            series: [{ name: years[0], type: 'line', data: new_house_lists[0] },
                { name: years[1], type: 'line', data: new_house_lists[1] },
                { name: years[2], type: 'line', data: new_house_lists[2] },
                { name: years[3], type: 'line', data: new_house_lists[3] },
                { name: years[4], type: 'line', data: new_house_lists[4] },
                { name: years[5], type: 'line', data: new_house_lists[5] },
                { name: years[6], type: 'line', data: new_house_lists[6] },
                { name: years[7], type: 'line', data: new_house_lists[7] },
                { name: years[8], type: 'line', data: new_house_lists[8] },
                { name: years[9], type: 'line', data: new_house_lists[9] },

            ]});

        var rtl_lists = new Array();
        for (var i = 0; i < 10; i++) { rtl_lists.push([]); } 
        for (var i in month_data['rtl_pm0']){rtl_lists[0].push(month_data['rtl_pm0'][i]);}
        for (var i in month_data['rtl_pm1']) { rtl_lists[1].push(month_data['rtl_pm1'][i]); }
        for (var i in month_data['rtl_pm2']) { rtl_lists[2].push(month_data['rtl_pm2'][i]); }
        for (var i in month_data['rtl_pm3']) { rtl_lists[3].push(month_data['rtl_pm3'][i]); }
        for (var i in month_data['rtl_pm4']) { rtl_lists[4].push(month_data['rtl_pm4'][i]); }
        for (var i in month_data['rtl_pm5']) { rtl_lists[5].push(month_data['rtl_pm5'][i]); }
        for (var i in month_data['rtl_pm6']) { rtl_lists[6].push(month_data['rtl_pm6'][i]); }
        for (var i in month_data['rtl_pm7']) { rtl_lists[7].push(month_data['rtl_pm7'][i]); }
        for (var i in month_data['rtl_pm8']) { rtl_lists[8].push(month_data['rtl_pm8'][i]); }
        for (var i in month_data['rtl_pm9']) { rtl_lists[9].push(month_data['rtl_pm9'][i]); }

        var rtl_without_lists = new Array();
        for (var i = 0; i < 10; i++) { rtl_without_lists.push([]); }
        for (var i in month_data['rtl_wht0']) { rtl_without_lists[0].push(month_data['rtl_wht0'][i]); }
        for (var i in month_data['rtl_wht1']) { rtl_without_lists[1].push(month_data['rtl_wht1'][i]); }
        for (var i in month_data['rtl_wht2']) { rtl_without_lists[2].push(month_data['rtl_wht2'][i]); }
        for (var i in month_data['rtl_wht3']) { rtl_without_lists[3].push(month_data['rtl_wht3'][i]); }
        for (var i in month_data['rtl_wht4']) { rtl_without_lists[4].push(month_data['rtl_wht4'][i]); }
        for (var i in month_data['rtl_wht5']) { rtl_without_lists[5].push(month_data['rtl_wht5'][i]); }
        for (var i in month_data['rtl_wht6']) { rtl_without_lists[6].push(month_data['rtl_wht6'][i]); }
        for (var i in month_data['rtl_wht7']) { rtl_without_lists[7].push(month_data['rtl_wht7'][i]); }
        for (var i in month_data['rtl_wht8']) { rtl_without_lists[8].push(month_data['rtl_wht8'][i]); }
        for (var i in month_data['rtl_wht9']) { rtl_without_lists[9].push(month_data['rtl_wht9'][i]); }
        retail_compare_without.setOption({
            title: { text: years[9] + "至" + years[0] + "零售额(不含机动车)" },
            tooltip: { trigger: 'axis' },
            xAxis: { data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], type: 'category', name: "时间" },
            yAxis: { type: 'value', scale: true, name: '百万美元', axisTick: { show: true }, splitNumber: 10 },
            legend: { data: years, show: true, orient: 'horizontal' },
            series: [
                { name: years[0], type: 'line', data: rtl_without_lists[0] },
                { name: years[1], type: 'line', data: rtl_without_lists[1] },
                { name: years[2], type: 'line', data: rtl_without_lists[2] },
                { name: years[3], type: 'line', data: rtl_without_lists[3] },
                { name: years[4], type: 'line', data: rtl_without_lists[4] },
                { name: years[5], type: 'line', data: rtl_without_lists[5] },
                { name: years[6], type: 'line', data: rtl_without_lists[6] },
                { name: years[7], type: 'line', data: rtl_without_lists[7] },
                { name: years[8], type: 'line', data: rtl_without_lists[8] },
                { name: years[9], type: 'line', data: rtl_without_lists[9] },]

        })
        
        retail_compare.setOption(
            {
                title: { text: "美国" + years[9] + "至" + years[0] + "零售额" },
                tooltip: { trigger: 'axis' },
                xAxis: { data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], type: 'category', name: "时间" },
                yAxis: { type: 'value', scale: true, name: '百万美元', axisTick: { show: true }, splitNumber: 10 },
                legend: { data: years, show: true, orient: 'horizontal' },
                series: [
                    { name: years[0], type: 'line', data: rtl_lists[0] },
                    { name: years[1], type: 'line', data: rtl_lists[1] },
                    { name: years[2], type: 'line', data: rtl_lists[2] },
                    { name: years[3], type: 'line', data: rtl_lists[3] },
                    { name: years[4], type: 'line', data: rtl_lists[4] },
                    { name: years[5], type: 'line', data: rtl_lists[5] },
                    { name: years[6], type: 'line', data: rtl_lists[6] },
                    { name: years[7], type: 'line', data: rtl_lists[7] },
                    { name: years[8], type: 'line', data: rtl_lists[8] },
                    { name: years[9], type: 'line', data: rtl_lists[9] },
                ]});


        
        for (var i in month_data['resg_pm0']) { resg_lists[0].push(month_data['resg_pm0'][i]); }
        for (var i in month_data['resg_pm1']) { resg_lists[1].push(month_data['resg_pm1'][i]); }
        for (var i in month_data['resg_pm2']) { resg_lists[2].push(month_data['resg_pm2'][i]); }
        for (var i in month_data['resg_pm3']) { resg_lists[3].push(month_data['resg_pm3'][i]); }
        for (var i in month_data['resg_pm4']) { resg_lists[4].push(month_data['resg_pm4'][i]); }
        for (var i in month_data['resg_pm5']) { resg_lists[5].push(month_data['resg_pm5'][i]); }
        for (var i in month_data['resg_pm6']) { resg_lists[6].push(month_data['resg_pm6'][i]); }
        for (var i in month_data['resg_pm7']) { resg_lists[7].push(month_data['resg_pm7'][i]); }
        for (var i in month_data['resg_pm8']) { resg_lists[8].push(month_data['resg_pm8'][i]); }
        for (var i in month_data['resg_pm9']) { resg_lists[9].push(month_data['resg_pm9'][i]); }

        resg_compare.setOption(
            {
                title: { text: "美国" + years[9] + "至" + years[0] + "年辞职率" },
                tooltip: { trigger: 'axis' },
                xAxis: { data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], type: 'category', name: "时间" },
                yAxis: { type: 'value', scale: true, name: '千人', axisTick: { show: true }, splitNumber: 10 },
                legend: { data: years, show: true, orient: 'horizontal' },
                series: [
                    { name: years[0], type: 'line', data: resg_lists[0] },
                    { name: years[1], type: 'line', data: resg_lists[1] },
                    { name: years[2], type: 'line', data: resg_lists[2] },
                    { name: years[3], type: 'line', data: resg_lists[3] },
                    { name: years[4], type: 'line', data: resg_lists[4] },
                    { name: years[5], type: 'line', data: resg_lists[5] },
                    { name: years[6], type: 'line', data: resg_lists[6] },
                    { name: years[7], type: 'line', data: resg_lists[7] },
                    { name: years[8], type: 'line', data: resg_lists[8] },
                    { name: years[9], type: 'line', data: resg_lists[9] }, 
                ]})

        for (var i in month_data['sal_pm0']) { sal_lists[0].push(month_data['sal_pm0'][i]); }
        for (var i in month_data['sal_pm1']) { sal_lists[1].push(month_data['sal_pm1'][i]); }
        for (var i in month_data['sal_pm2']) { sal_lists[2].push(month_data['sal_pm2'][i]); }
        for (var i in month_data['sal_pm3']) { sal_lists[3].push(month_data['sal_pm3'][i]); }
        for (var i in month_data['sal_pm4']) { sal_lists[4].push(month_data['sal_pm4'][i]); }
        for (var i in month_data['sal_pm5']) { sal_lists[5].push(month_data['sal_pm5'][i]); }
        for (var i in month_data['sal_pm6']) { sal_lists[6].push(month_data['sal_pm6'][i]); }
        for (var i in month_data['sal_pm7']) { sal_lists[7].push(month_data['sal_pm7'][i]); }
        for (var i in month_data['sal_pm8']) { sal_lists[8].push(month_data['sal_pm8'][i]); }
        for (var i in month_data['sal_pm9']) { sal_lists[9].push(month_data['sal_pm9'][i]); }

        

        for (var i in month_data['emp_pm0'])
            emp_lists[0].push(month_data['emp_pm0'][i]);
        for (var i in month_data['emp_pm1'])
            emp_lists[1].push(month_data['emp_pm1'][i]);
        for (var i in month_data['emp_pm2'])
            emp_lists[2].push(month_data['emp_pm2'][i]);
        for (var i in month_data['emp_pm3'])
            emp_lists[3].push(month_data['emp_pm3'][i]);
        for (var i in month_data['emp_pm4'])
            emp_lists[4].push(month_data['emp_pm4'][i]);
        for (var i in month_data['emp_pm5'])
            emp_lists[5].push(month_data['emp_pm5'][i]);
        for (var i in month_data['emp_pm6'])
            emp_lists[6].push(month_data['emp_pm6'][i]);
        for (var i in month_data['emp_pm7'])
            emp_lists[7].push(month_data['emp_pm7'][i]);
        for (var i in month_data['emp_pm8'])
            emp_lists[8].push(month_data['emp_pm8'][i]);
        for (var i in month_data['emp_pm9'])
            emp_lists[9].push(month_data['emp_pm9'][i]);

        emp_compare.setOption(
            {title: {text: "美国" + years[9] + "至" + years[0] + "年非农就业"},
                tooltip: {trigger: 'axis'},
                xAxis: {data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],type: 'category',name: "时间"},
                yAxis: {type: 'value', scale: true, name: '千人', axisTick: {show: true}, splitNumber: 10},
                legend: {data: years, show: true, orient: 'horizontal'},
                series: [
                    { name: years[0], type: 'line', data: emp_lists[0] },
                    { name: years[1], type: 'line', data: emp_lists[1] },
                    { name: years[2], type: 'line', data: emp_lists[2] },
                    { name: years[3], type: 'line', data: emp_lists[3] },
                    { name: years[4], type: 'line', data: emp_lists[4] },
                    { name: years[5], type: 'line', data: emp_lists[5] },
                    { name: years[6], type: 'line', data: emp_lists[6] },
                    { name: years[7], type: 'line', data: emp_lists[7] },
                    { name: years[8], type: 'line', data: emp_lists[8] },
                    { name: years[9], type: 'line', data: emp_lists[9] }]}
        
            // end of emp_compare setOption

        )
        sal_compare.setOption({
            title: { text: years[9] + "至" + years[0] + "年非农就业平均工资"},
            tooltip:{trigger:'axis'},
            xAxis: { data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], type: 'category', name: "时间" },
            yAxis: { type: 'value', scale: true, name: '千人', axisTick: { show: true }, splitNumber: 10 },
            legend: { data: years, show: true, orient: 'horizontal' },
            series:[
                { name: years[0], type: "line", data: sal_lists[0] },
                { name: years[1], type: "line", data: sal_lists[1] },
                { name: years[2], type: "line", data: sal_lists[2] },
                { name: years[3], type: "line", data: sal_lists[3] },
                { name: years[4], type: "line", data: sal_lists[4] },
                { name: years[5], type: "line", data: sal_lists[5] },
                { name: years[6], type: "line", data: sal_lists[6] },
                { name: years[7], type: "line", data: sal_lists[7] },
                { name: years[8], type: "line", data: sal_lists[8] },
                { name: years[9], type: "line", data: sal_lists[9] },
            ]})
    }})// end of reader.onload, reader that reads big data





