var myChart = echarts.init(document.getElementById('mapchart'));

// 指定图表的配置项和数据
var data = [
 { name: '北京', value: 13 },
  { name: '上海', value: 29 },
  { name: '广州', value: 5 },
  { name: '武汉', value: 1 },
  { name: '南京', value: 3 },
  { name: '天津', value: 1 },
  { name: '苏州', value: 1 },
{ name: '长沙', value: 1 },
  { name: '青岛', value: 1},
  { name: '厦门', value: 1 },
  { name: '重庆', value: 8 },
  { name: '济南', value: 3 },
  { name: '延安', value: 2},
  { name: '张家口', value: 1 },
  { name: '桂林', value: 1 },
  { name: '淮阴', value: 1 },
  { name: '平山', value: 1 },
  { name: '平顶山', value: 1 },
  { name: '香港', value: 4 },

];
var geoCoordMap = {
北京:[116.41,40.19 ],
上海:[121.47,31.24], 
广州:[113.54,23.35],
武汉:[114.34,30.62], 
南京:[118.84,31.93],
天津:[117.33,39.29], 
苏州:[120.65,31.38],
长沙:[113.15,28.23], 
青岛:[120.14,36.45], 
厦门:[118.12,24.68], 
重庆:[107.87,30.06],
济南:[117.21 ,36.64], 
延安:[109.32 ,36.44],
张家口:[115.03 ,40.87], 
桂林:[110.51 , 25.35],
淮阴:[118.96 ,33.35],  
平山:[114.44 ,38.13],
平顶山:[113.01 , 33.80],
香港:[114.17,22.28],
};
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value:geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

option = {
    tooltip : {
        trigger:'items',
        formatter(params) {
            const {  name,value } = params;
                return `${name} : ${value[2]}`;
         },
        },
    legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {

            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series : [
        {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
             
            symbolSize: function (data) {
                return Math.sqrt(data[2]) / 0.1;
            },
            tooltip:{
                trigger:'item'
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            
                 },

        },
      
    ]
};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

