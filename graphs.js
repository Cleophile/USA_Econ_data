var gdp_Chart = echarts.init(document.getElementById("gdp_all"));
var date = new Date();
var this_year = date.getFullYear();
var year_gap = 20;
var points = year_gap * 40;
var gdp_data;
var files = document.getElementById('files');

// 80个季度
var option = {

    tooltip: {
        trigger: 'item'
    },
    legend: {
        data: ['Real GDP of USA']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: { feature: { saveAsImage: {} } },
    xAxis: {
        type: 'category',
        name: "时间",
        data: []
    },
    yAxis: {
        type: 'value',
        name: 'GDP十亿美元'
    },
    series: [
        {
            name: 'Real GDP of USA',
            type: 'line',
            stack: '总量',
            data: []
        }]
};
gdp_Chart.setOption(option);

var fed_defi_opt = {
    tooltip: { trigger: "axis" }, legend: { data: ['预算赤字', 'GDP占比'], orient: 'horizontal', show: true }, toolbox: { feature: { saveAsImage: {} } },
    xAxis: {
        type: 'category', name: "",
        data: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028]
    },
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
    tooltip: {
        trigger: 'item'
    },
    legend: {
        data: years
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        name: "时间",
    },
    yAxis: {
        type: 'value',
        name: '千人'
    },
    series: []
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
            date.push(this_date.getFullYear() + '年' + (this_date.getMonth() + 1) + '月');
        }

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
            sal_index_data.push(gdp_data['sal_index_data'][i]);
            sal_index_time.push(gdp_data['sal_index_time'][i]);
        }

        gdp_Chart.setOption({
            title: { text: "美国" + (this_year - year_gap) + "至" + this_year + "年实际GDP季度数据" },
            xAxis: { data: date.slice(gdp.length - 81, gdp.length - 1) },
            yAxis: {
                type: 'value',
                scale: true,
                name: 'GDP十亿美元',
                axisTick: {
                    show: true
                },
                splitNumber: 10
            },
            series: [
                {
                    name: 'Real GDP of USA',
                    type: 'line',
                    stack: '总量',
                    data: gdp.slice(gdp.length - 81, gdp.length - 1)
                }]
        })

        emp_all.setOption({
            xAxis: { data: emp_time.slice(emp_dta.length - 121, emp_dta.length - 1) },
            yAxis: {
                type: 'value',
                scale: true,
                name: '千人',
                axisTick: { show: true },
                splitNumber: 10
            },
            series: [{
                name: '就业人口',
                type: 'line',
                data: emp_dta.slice(emp_dta.length - 121, emp_dta.length - 1)
            }]
        })
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
            }]
        })
    }
    /************************************************* SMALL READER BELOW ************************************************************/
    var small_reader = new FileReader();
    small_reader.readAsText(files.files[0]);//发起异步请求
    small_reader.onload = function () {
        //读取完成后，数据保存在对象的result属性中
        var month_data = this.result;
        month_data = JSON.parse(month_data);
        var emp_lists = new Array();
        for (var i = 0; i < 10; i++) {
            emp_lists.push([]);
        }
        // 从今年的开始
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
            {
                title: {
                    text: "美国" + years[9] + "至" + years[0] + "年非农就业"
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    type: 'category',
                    name: "时间"
                },
                yAxis: {
                    type: 'value',
                    scale: true,
                    name: '千人',
                    axisTick: {
                        show: true
                    },
                    splitNumber: 10
                },
                legend: {
                    data: years,
                    show: true,
                    orient: 'horizontal'
                },
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
                    { name: years[9], type: 'line', data: emp_lists[9] }
                ]
            }
        )
    }
}) // end of reader.onload, reader that reads big data



            // 小数据不小，大数据不大


