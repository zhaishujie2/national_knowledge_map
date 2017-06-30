(function () {
    require.config({
        paths: {
            echarts: '../js'
        },
        packages: [
            {
                name: 'BMap',
                location: '../js',
                main: 'flight_path_info_main'
            }
        ]
    });

    require(
    [
        'echarts',
        'BMap',
        'echarts/chart/map'
    ],
    function (echarts, BMapExtension) {
        $('#main').css({
            height:$('body').height(),
            width: $('body').width()
        });

        // 初始化地图
        var BMapExt = new BMapExtension($('#main')[0], BMap, echarts,{
            enableMapClick: false
        });
        var map = BMapExt.getMap();
        var container = BMapExt.getEchartsContainer();

        var startPoint = {
            x:35.34742,
            y: 8.9784
        };

        var point = new BMap.Point(startPoint.x, startPoint.y);
        map.centerAndZoom(point, 4);
        map.enableScrollWheelZoom(true);
        // 地图自定义样式
        map.setMapStyle({
            styleJson: [
                  {
                       "featureType": "water",
                       "elementType": "all",
                       "stylers": {
                            "color": "#044161"
                       }
                  },
                  {
                       "featureType": "land",
                       "elementType": "all",
                       "stylers": {
                            "color": "#004981"
                       }
                  },
                  {
                       "featureType": "boundary",
                       "elementType": "geometry",
                       "stylers": {
                            "color": "#064f85"
                       }
                  },
                  {
                       "featureType": "railway",
                       "elementType": "all",
                       "stylers": {
                            "visibility": "off"
                       }
                  },
                  {
                       "featureType": "highway",
                       "elementType": "geometry",
                       "stylers": {
                            "color": "#004981"
                       }
                  },
                  {
                       "featureType": "highway",
                       "elementType": "geometry.fill",
                       "stylers": {
                            "color": "#005b96",
                            "lightness": 1
                       }
                  },
                  {
                       "featureType": "highway",
                       "elementType": "labels",
                       "stylers": {
                            "visibility": "off"
                       }
                  },
                  {
                       "featureType": "arterial",
                       "elementType": "geometry",
                       "stylers": {
                            "color": "#004981"
                       }
                  },
                  {
                       "featureType": "arterial",
                       "elementType": "geometry.fill",
                       "stylers": {
                            "color": "#00508b"
                       }
                  },
                  {
                       "featureType": "poi",
                       "elementType": "all",
                       "stylers": {
                            "visibility": "off"
                       }
                  },
                  {
                       "featureType": "green",
                       "elementType": "all",
                       "stylers": {
                            "color": "#056197",
                            "visibility": "off"
                       }
                  },
                  {
                       "featureType": "subway",
                       "elementType": "all",
                       "stylers": {
                            "visibility": "off"
                       }
                  },
                  {
                       "featureType": "manmade",
                       "elementType": "all",
                       "stylers": {
                            "visibility": "off"
                       }
                  },
                  {
                       "featureType": "local",
                       "elementType": "all",
                       "stylers": {
                            "visibility": "off"
                       }
                  },
                  {
                       "featureType": "arterial",
                       "elementType": "labels",
                       "stylers": {
                            "visibility": "off"
                       }
                  },
                  {
                       "featureType": "boundary",
                       "elementType": "geometry.fill",
                       "stylers": {
                            "color": "#029fd4"
                       }
                  },
                  {
                       "featureType": "building",
                       "elementType": "all",
                       "stylers": {
                            "color": "#1a5787"
                       }
                  },
                  {
                       "featureType": "label",
                       "elementType": "all",
                       "stylers": {
                            "visibility": "off"
                       }
                  }
            ]
        });

        option = {
            color: ['gold','aqua','lime'],
            title : {
                text: '近三日土耳其出入境航班',
                x:'center',
                textStyle : {
                    color: '#fff'
                }
            },
            tooltip : {
                trigger: 'item',
                formatter: function (v) {
                    return v[1].replace(':', ' > ');
                }
            },
            legend: {
                orient: 'vertical',
                x:20,
                y:20,
                data:['出境', '入境'],
                selectedMode: 'single',
                selected:{
                    '入境' : false,
                    
                },
                textStyle : {
                    color: '#fff'
                }
            },
            
            dataRange: {
                min : 0,
                max : 100,
                range: {
                    start: 3,
                    end: 100
                },
                x: 20,
                y:120,
                calculable : true,
                color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
                textStyle:{
                    color:'#fff'
                }
            },
            series : [
                {
                    name:'出境',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    geoCoord: {
                      'Canada':[-91.0446854927536, 53.51241372946854],
                      'Turkmenistan':[55.6840895, 39.0250705],
                      'Saint Helena':[-10.0197665, -11.9643835],
                      'Lithuania':[23.46534725, 55.36701975],
                      'Cambodia':[104.09790066666666, 11.84563],
                      'Ethiopia':[39.1680678, 11.448849800000001],
                      'Aruba':[-70.015198, 12.50138],
                      'Swaziland':[31.512227000000003, -26.442833],
                      'Argentina':[-64.3284497631579, -35.32433163157894],
                      'Bolivia':[-65.5829365, -15.764440000000002],
                      'Cameroon':[10.416839666666668, 3.5341753333333337],
                      'Burkina Faso':[-1.51241, 12.35319],
                      'Ghana':[-1.0988875, 6.6932495],
                      'Saudi Arabia':[42.44175599999999, 23.466178166666666],
                      'Laos':[103.8162005, 17.39371675],
                      'Cape Verde':[-23.596575, 16.1590175],
                      'Cocos (Keeling) Islands':[96.830559, -12.188611],
                      'Slovenia':[15.07187, 46.3517685],
                      'Guatemala':[-90.1968495, 15.7485405],
                      'Kuwait':[47.968922, 29.226561],
                      'Jordan':[35.66761033333333, 31.102286333333335],
                      'Virgin Islands, British':[-64.485199, 18.4456055],
                      'Spain':[-5.1126723023255805, 38.23208862790699],
                      'Liberia':[-10.3623, 6.233789],
                      'Netherlands':[-8.727016, 44.757269300000004],
                      'Timor-Leste (East Timor)':[125.524803, -8.54641],
                      'Jamaica':[-77.35039900000001, 18.2196845],
                      'Oman':[56.205429333333335, 22.267653],
                      'Tanzania':[35.29890525, -5.1239436666666665],
                      'Martinique':[-60.9963, 14.59222],
                      'Saint Kitts And Nevis':[-62.65555, 17.258094999999997],
                      'Costa Rica':[-84.72516825, 9.9408525],
                      'Seychelles':[55.521832, -4.67434],
                      'French Guiana':[-52.3619, 4.819722],
                      'Finland':[25.162684130434776, 63.36854078260869],
                      'New Zealand':[174.45450951612906, -39.30526783870968],
                      'Yemen':[44.62426, 14.152895000000001],
                      'Pakistan':[71.116566625, 31.061525874999997],
                      'Greenland':[-48.768181090909096, 67.04907918181817],
                      'Samoa':[-171.996994, -13.8296],
                      'United Arab Emirates':[55.06875855555555, 24.84445355555556],
                      'Guam':[144.797104, 13.48387],
                      'Kosovo':[21.03583, 42.572769],
                      'India':[79.87761119402987, 22.053577865671638],
                      'Azerbaijan':[47.673317600000004, 39.987183400000006],
                      'Namibia':[16.319195800000003, -22.9069398],
                      'Lesotho':[27.5525, -29.4622],
                      'Saint Vincent And The Grenadines':[-61.2108, 13.1443],
                      'Kenya':[36.9315155, -0.41765569999999996],
                      'South Korea':[127.57661138461539, 35.84767238461539],
                      'Tajikistan':[69.29647250000001, 38.65163925],
                      'Northern Mariana Islands':[145.48519900000002, 14.646675],
                      'Turkey':[35.34741737254902, 38.97840419607843],
                      'Afghanistan':[66.12786575, 34.249095000000004],
                      'Czech Republic':[15.86981475, 49.729547125],
                      'Mauritania':[-16.4972825, 19.619581500000002],
                      'Solomon Islands':[160.054703, -9.428],
                      'Saint Lucia':[-60.9727, 13.876705000000001],
                      'French Polynesia':[-146.00345472727273, -15.582555045454548],
                      'France':[2.3700802833333343, 45.89711331666668],
                      'Bermuda':[-64.678703, 32.36404],
                      'Slovakia':[19.0451585, 48.733565],
                      'Somalia':[45.304722, 2.014444],
                      'Peru':[-75.56807135294117, -9.938027117647056],
                      'Vanuatu':[168.59096766666667, -17.573767],
                      'Norway':[14.442467615384626, 65.78394109615385],
                      'Malawi':[34.377504, -14.73415],
                      'Cook Islands':[-159.78450049999998, -20.0168],
                      'Benin':[2.384353, 6.357228],
                      'Cuba':[-79.341591, 21.879899777777776],
                      'Montenegro':[18.987585, 42.3820245],
                      'Falkland Islands (Malvinas)':[-58.1124, -51.7542],
                      'Togo':[1.254511, 6.165611],
                      'China':[111.06351293258432, 33.80421405056179],
                      'Armenia':[44.395882, 40.14727],
                      'Dominican Republic':[-69.870310875, 18.838217],
                      'Mongolia':[106.766602, 47.843048],
                      'Ukraine':[30.740591875000003, 48.53757906250001],
                      'Bahrain':[50.63361, 26.27083],
                      'Tonga':[-174.55249750000002, -19.9113005],
                      'Cayman Islands':[-80.44353233333334, 19.546673333333334],
                      'Libya':[17.938728166666667, 32.435748],
                      'Indonesia':[115.93875177941176, -3.5231090441176462],
                      'Central African Republic':[18.51878, 4.398475],
                      'United States':[-101.35957616639483, 40.43393867862973],
                      'Democratic Republic Of The Congo':[21.48772, -7.988525],
                      'Sweden':[16.19026895348837, 60.6018048372093],
                      'Belarus':[26.746164, 53.032987999999996],
                      'Antigua And Barbuda':[-61.792599, 17.13674],
                      'Mali':[-7.94994, 12.53354],
                      'Russia':[69.1547051238938, 56.2700757256637],
                      'Bulgaria':[25.89933, 42.64116],
                      'Mauritius':[57.683601, -20.430201],
                      'Romania':[24.567605599999993, 46.17036973333333],
                      'Angola':[12.970648, -9.600048000000001],
                      'Portugal':[-18.657678789473678, 38.33051910526316],
                      'South Africa':[27.38210841666668, -28.53302045833334],
                      'Cyprus':[33.05529, 34.79657],
                      'Saint Pierre And Miquelon':[-56.174099, 46.76305],
                      'Malaysia':[109.723369, 4.262600966666666],
                      'Senegal':[-17.4902, 14.7397],
                      'Vietnam':[106.89954099999997, 14.1854434],
                      'Mozambique':[36.179762818181814, -18.232730000000004],
                      'Uganda':[32.443501, 0.042386],
                      'Japan':[135.4848338484848, 35.39345528787879],
                      'Niger':[2.183614, 13.48154],
                      'Brazil':[-49.05847257272727, -15.280388827272729],
                      'Turks And Caicos Islands':[-72.2658, 21.773621],
                      'Faroe Islands':[-7.27721, 62.063622],
                      'Guinea':[-13.6119, 9.576889],
                      'Panama':[-80.2199522, 8.744175799999999],
                      'Guyana':[-58.179655, 6.653143],
                      'Qatar':[51.608055, 25.273056],
                      'Luxembourg':[6.204444, 49.623329],
                      'Bahamas':[-76.88643325, 25.172018583333337],
                      'Gibraltar':[-5.34966, 36.151211],
                      'Ireland':[-8.25691875, 53.195935750000004],
                      'Italy':[12.189495794871792, 42.163418025641015],
                      'Nigeria':[6.9843253333333335, 6.746447333333332],
                      'Ecuador':[-82.00314999999999, -0.923968625],
                      'Bangladesh':[91.04051039999999, 23.1384342],
                      'Brunei':[114.928299, 4.9442],
                      'Australia':[138.68198878709677, -27.183934090322573],
                      'Iran':[52.33595377499999, 31.988003099999997],
                      'Algeria':[2.8820967142857143, 34.42326178571428],
                      'El Salvador':[-89.055702, 13.44094],
                      'Tuvalu':[179.196304, -8.525],
                      'Virgin Islands, Us':[-64.887497, 18.0194245],
                      'Marshall Islands':[171.272003, 7.06498],
                      'Chile':[-73.95434531250001, -33.826817625000004],
                      'Puerto Rico':[-66.27341716666666, 18.2743915],
                      'Belgium':[4.151203333333333, 50.867213],
                      'Thailand':[100.8603779354839, 13.779355354838707],
                      'Haiti':[-72.24360250000001, 19.156515499999998],
                      'Belize':[-88.308197, 17.539141],
                      '香港国际机场(赤腊角) ':[113.914703, 22.30888],
                      'Sierra Leone':[-13.1954, 8.616444],
                      'Georgia':[43.01146966666667, 41.816476],
                      'Gambia':[-16.652201, 13.33796],
                      'Philippines':[123.07466973333334, 11.225694866666666],
                      'Sao Tome And Principe':[6.712153, 0.378175],
                      'Moldova':[28.930969, 46.927738],
                      'Morocco':[-7.552272277777778, 31.82699855555556],
                      'Albania':[19.72056, 41.414742],
                      'Croatia':[16.039673333333337, 44.37511788888888],
                      'Malta':[14.4775, 35.857491],
                      'Guinea-Bissau':[-15.6536, 11.8947],
                      'Wallis And Futuna':[-176.197998, -13.2383],
                      'Switzerland':[8.279304624999998, 46.729285749999995],
                      'Grenada':[-61.786098, 12.00424],
                      'Cote D\'ivoire (Ivory Coast)':[-3.92629, 5.261386],
                      'Iraq':[45.11572339999999, 33.520327599999995],
                      'Chad':[15.03401, 12.13368],
                      'Estonia':[24.21586975, 58.735350499999996],
                      'Uruguay':[-55.5625, -34.8467505],
                      'Equatorial Guinea':[9.257199, 2.830368],
                      'Lebanon':[35.48838, 33.82093],
                      'Uzbekistan':[66.81961745454545, 40.28269172727273],
                      'Tunisia':[10.162134166666666, 35.2056205],
                      'Djibouti':[43.159481, 11.54733],
                      'Rwanda':[30.13945, -1.96862],
                      'Dominica':[-61.299999, 15.54702],
                      'Colombia':[-75.0146949090909, 6.227267954545455],
                      'Reunion':[55.51638, -20.889999],
                      'Burundi':[29.31851, -3.32401],
                      '桃园国际机场 ':[120.46258020000002, 24.0874509],
                      'Fiji':[178.09096172727268, -17.021642636363637],
                      'Barbados':[-59.492401, 13.0746],
                      'Madagascar':[48.53648366666667, -16.4009],
                      'Palau':[134.544205, 7.367303],
                      'Curacao':[-68.959801, 12.18885],
                      'Bhutan':[89.424599, 27.403191],
                      'Sudan':[33.796113999999996, 13.298375333333334],
                      'Nepal':[85.3591, 27.696581],
                      'Kiribati':[-157.348999, 1.986161],
                      'Micronesia':[152.7731475, 7.3257200000000005],
                      'Maldives':[73.21835536363636, 2.6842576363636366],
                      'Bosnia And Herzegovina':[18.0499025, 44.12689325],
                      'Suriname':[-55.187698, 5.452831],
                      'Anguilla':[-63.055, 18.20483],
                      'Venezuela':[-66.321803875, 10.051178750000002],
                      'Israel':[34.9215736, 31.2874014],
                      'Myanmar (Burma)':[96.59567125000001, 18.860221187500002],
                      'Iceland':[-18.352454692307695, 65.23499676923078],
                      'Zambia':[28.518312, -14.091899750000001],
                      'Austria':[14.147144833333334, 47.505093166666676],
                      'Papua New Guinea':[146.007675, -6.7617650000000005],
                      'Zimbabwe':[28.51656733333333, -18.681667333333333],
                      'Germany':[9.554654859999998, 51.48906655999999],
                      'Denmark':[10.588712, 55.80525207142857],
                      'Kazakhstan':[67.37375900000002, 48.00987942857143],
                      'Poland':[19.174811999999996, 51.988870066666664],
                      'Eritrea':[38.91066, 15.29185],
                      'Kyrgyzstan':[74.661288, 42.08611033333333],
                      'Mayotte':[45.280548, -12.8066],
                      'New Caledonia':[166.791397, -21.65578],
                      'Macedonia':[21.1818495, 41.5707855],
                      'North Korea':[125.670097, 39.22406],
                      'Sri Lanka':[80.502056, 6.730378],
                      'Latvia':[23.971109, 56.923611],
                      'Hungary':[19.02893, 46.91305483333334],
                      'Syria':[37.72321225, 35.50585375],
                      'Guadeloupe':[-62.47276300000001, 17.42305166666667],
                      'Honduras':[-87.22116833333332, 15.276773666666665],
                      'Mexico':[-100.78557772222221, 22.22352135185185],
                      'Egypt':[31.937958200000004, 27.6099439],
                      'Nicaragua':[-86.168098, 12.14149],
                      'Singapore':[103.9309995, 1.3835695000000001],
                      'Serbia':[21.081425, 44.0778595],
                      'Comoros':[43.271851, -11.5336],
                      'United Kingdom':[-2.6162356666666655, 53.934267898550715],
                      'Trinidad And Tobago':[-61.084649999999996, 10.872505],
                      'Antarctica':[2.466667, -71.957222],
                      'Congo':[13.56981, -4.53386],
                      'Greece':[24.3397445945946, 37.947591837837834],
                      'Paraguay':[-56.181217000000004, -25.3475385],
                      'Gabon':[9.412283, 0.4586],
                      'Botswana':[24.837226333333334, -20.786833666666666],
                      '北京首都国际机场':[116.584503,40.080109],
                      '上海浦东机场':[121.805199,31.14337],
                      '广州白云机场':[113.298698,23.392429]
                    },

                    markLine : {
                        smooth:true,
                        symbolSize:[0,5],
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                },
                                label:{
                                  show:false 
                                }
                                
                            }
                        },
                        data : [
                            [{name:'Turkey'},{name:'北京首都国际机场',value:3}],
                            [{name:'Turkey'},{name:'上海浦东机场',value:3}],
                            [{name:'Turkey'},{name:'广州白云机场',value:3}],
                            [{name:'Turkey'},{name:'Indonesia',value:3}],
                            [{name:'Turkey'},{name:'Germany',value:338}],
                            [{name:'Turkey'},{name:'Tanzania',value:6}],
                            [{name:'Turkey'},{name:'Nepal',value:2}],
                            [{name:'Turkey'},{name:'Romania',value:19}],
                            [{name:'Turkey'},{name:'Chad',value:1}],
                            [{name:'Turkey'},{name:'Norway',value:12}],
                            [{name:'Turkey'},{name:'Italy',value:73}],
                            [{name:'Turkey'},{name:'Bosnia And Herzegovina',value:10}],
                            [{name:'Turkey'},{name:'Libya',value:11}],
                            [{name:'Turkey'},{name:'Maldives',value:3}],
                            [{name:'Turkey'},{name:'Lebanon',value:28}],
                            [{name:'Turkey'},{name:'Spain',value:32}],
                            [{name:'Turkey'},{name:'Afghanistan',value:6}],
                            [{name:'Turkey'},{name:'Ethiopia',value:3}],
                            [{name:'Turkey'},{name:'Mauritius',value:1}],
                            [{name:'Turkey'},{name:'Slovenia',value:4}],
                            [{name:'Turkey'},{name:'Portugal',value:6}],
                            [{name:'Turkey'},{name:'Niger',value:2}],
                            [{name:'Turkey'},{name:'Japan',value:5}],
                            [{name:'Turkey'},{name:'Kuwait',value:24}],
                            [{name:'Turkey'},{name:'Czech Republic',value:13}],
                            [{name:'Turkey'},{name:'Estonia',value:2}],
                            [{name:'Turkey'},{name:'Kenya',value:3}],
                            //[{name:'Turkey'},{name:'China',value:9}],
                            [{name:'Turkey'},{name:'Rwanda',value:3}],
                            [{name:'Turkey'},{name:'Morocco',value:7}],
                            [{name:'Turkey'},{name:'Netherlands',value:46}],
                            [{name:'Turkey'},{name:'Jordan',value:13}],
                            [{name:'Turkey'},{name:'Saudi Arabia',value:53}],
                            [{name:'Turkey'},{name:'Philippines',value:3}],
                            [{name:'Turkey'},{name:'Malta',value:6}],
                            [{name:'Turkey'},{name:'Egypt',value:31}],
                            [{name:'Turkey'},{name:'Singapore',value:5}],
                            [{name:'Turkey'},{name:'Montenegro',value:3}],
                            [{name:'Turkey'},{name:'Ghana',value:4}],
                            [{name:'Turkey'},{name:'France',value:68}],
                            [{name:'Turkey'},{name:'Colombia',value:2}],
                            [{name:'Turkey'},{name:'Oman',value:3}],
                            [{name:'Turkey'},{name:'Greece',value:26}],
                            [{name:'Turkey'},{name:'Djibouti',value:3}],
                            [{name:'Turkey'},{name:'Iran',value:49}],
                            [{name:'Turkey'},{name:'Croatia',value:6}],
                            [{name:'Turkey'},{name:'United Kingdom',value:71}],
                            [{name:'Turkey'},{name:'Belarus',value:6}],
                            [{name:'Turkey'},{name:'Finland',value:8}],
                            [{name:'Turkey'},{name:'Armenia',value:1}],
                            [{name:'Turkey'},{name:'Benin',value:2}],
                            [{name:'Turkey'},{name:'Uzbekistan',value:10}],
                            [{name:'Turkey'},{name:'Pakistan',value:9}],
                            [{name:'Turkey'},{name:'Kazakhstan',value:19}],
                            [{name:'Turkey'},{name:'Russia',value:82}],
                            [{name:'Turkey'},{name:'Georgia',value:21}],
                            [{name:'Turkey'},{name:'Denmark',value:18}],
                            [{name:'Turkey'},{name:'Sweden',value:30}],
                            [{name:'Turkey'},{name:'United Arab Emirates',value:37}],
                            [{name:'Turkey'},{name:'Mali',value:1}],
                            [{name:'Turkey'},{name:'Bahrain',value:9}],
                            [{name:'Turkey'},{name:'Hungary',value:11}],
                            [{name:'Turkey'},{name:'Serbia',value:9}],
                            [{name:'Turkey'},{name:'Poland',value:9}],
                            [{name:'Turkey'},{name:'Malaysia',value:4}],
                            [{name:'Turkey'},{name:'Tunisia',value:10}],
                            [{name:'Turkey'},{name:'Ireland',value:8}],
                            [{name:'Turkey'},{name:'Seychelles',value:1}],
                            [{name:'Turkey'},{name:'Luxembourg',value:4}],
                            [{name:'Turkey'},{name:'Iraq',value:63}],
                            [{name:'Turkey'},{name:'Ukraine',value:50}],
                            [{name:'Turkey'},{name:'Sudan',value:3}],
                            [{name:'Turkey'},{name:'Burkina Faso',value:3}],
                            [{name:'Turkey'},{name:'Canada',value:7}],
                            [{name:'Turkey'},{name:'Albania',value:8}],
                            [{name:'Turkey'},{name:'Vietnam',value:3}],
                            [{name:'Turkey'},{name:'South Korea',value:9}],
                            [{name:'Turkey'},{name:'South Africa',value:6}],
                            [{name:'Turkey'},{name:'Thailand',value:6}],
                            [{name:'Turkey'},{name:'Bangladesh',value:3}],
                            [{name:'Turkey'},{name:'Kosovo',value:6}],
                            [{name:'Turkey'},{name:'Switzerland',value:32}],
                            [{name:'Turkey'},{name:'Belgium',value:31}],
                            [{name:'Turkey'},{name:'Israel',value:42}],
                            [{name:'Turkey'},{name:'Turkmenistan',value:9}],
                            [{name:'Turkey'},{name:'Qatar',value:22}],
                            [{name:'Turkey'},{name:'Austria',value:32}],
                            [{name:'Turkey'},{name:'桃园国际机场 ',value:3}],
                            [{name:'Turkey'},{name:'Nigeria',value:7}],
                            [{name:'Turkey'},{name:'Democratic Republic Of The Congo',value:2}],
                            [{name:'Turkey'},{name:'Kyrgyzstan',value:11}],
                            [{name:'Turkey'},{name:'Slovakia',value:2}],
                            [{name:'Turkey'},{name:'Brazil',value:3}],
                            [{name:'Turkey'},{name:'Azerbaijan',value:27}],
                            [{name:'Turkey'},{name:'香港国际机场(赤腊角) ',value:3}],
                            [{name:'Turkey'},{name:'India',value:7}],
                            [{name:'Turkey'},{name:'United States',value:36}],
                            [{name:'Turkey'},{name:'Tajikistan',value:2}],
                            [{name:'Turkey'},{name:'Bulgaria',value:8}],
                            [{name:'Turkey'},{name:'Lithuania',value:9}],

                            [{name:'Turkey'},{name:'Moldova',value:11}],
                            [{name:'Turkey'},{name:'Latvia',value:2}],
                            [{name:'Turkey'},{name:'Algeria',value:24}],
                            [{name:'Turkey'},{name:'Cameroon',value:4}],
                            [{name:'Turkey'},{name:'Mauritania',value:4}],
                            [{name:'Turkey'},{name:'Macedonia',value:9}]
                        ]
                    },
                    markPoint : {
                        symbol:'pin',
                        symbolSize : function (v){
                            return 4
                        },
                        itemStyle:{
                            normal:{
                                label:{
                                  show:true,
                                  position:'top',
                                  formatter:'{b}:{c}'
                            
                                }
                            }
                        },
                        
                        
                        data : [
                            {name:'北京首都国际机场',value:3},
                            {name:'上海浦东机场',value:3},
                            {name:'广州白云机场',value:3},
                            {name:'United Arab Emirates',value:37},
                            {name:'Niger',value:2},
                            {name:'Switzerland',value:32},
                            {name:'Kosovo',value:6},
                            {name:'Iraq',value:63},
                            {name:'Serbia',value:9},
                            {name:'Montenegro',value:3},
                            {name:'Lebanon',value:28},
                            {name:'Djibouti',value:3},
                            {name:'Tunisia',value:10},
                            {name:'Ethiopia',value:3},
                            {name:'United States',value:36},
                            {name:'Finland',value:8},
                            {name:'Burkina Faso',value:3},
                            {name:'South Korea',value:9},
                            {name:'Greece',value:26},
                            {name:'Morocco',value:7},
                            {name:'Bahrain',value:9},
                            {name:'Latvia',value:2},
                            {name:'Sudan',value:3},
                            {name:'Belarus',value:6},
                            {name:'Turkmenistan',value:9},
                            {name:'South Africa',value:6},
                            {name:'Nigeria',value:7},
                            {name:'India',value:7},
                            {name:'Slovenia',value:4},
                            {name:'Slovakia',value:2},
                            {name:'Indonesia',value:3},
                            {name:'Kyrgyzstan',value:11},
                            //{name:'China',value:9},
                            {name:'Belgium',value:31},
                            {name:'Russia',value:82},
                            {name:'Vietnam',value:3},
                            {name:'Moldova',value:11},
                            {name:'Italy',value:73},
                            {name:'Romania',value:19},
                            {name:'Democratic Republic Of The Congo',value:2},
                            {name:'Sweden',value:30},
                            {name:'Poland',value:9},
                            {name:'Singapore',value:5},
                            {name:'Canada',value:7},
                            {name:'Luxembourg',value:4},
                            {name:'Denmark',value:18},
                            {name:'Bosnia And Herzegovina',value:10},
                            {name:'Brazil',value:3},
                            {name:'Saudi Arabia',value:53},
                            {name:'Japan',value:5},
                            {name:'Malaysia',value:4},
                            {name:'Estonia',value:2},
                            {name:'Bangladesh',value:3},
                            {name:'Lithuania',value:9},
                            {name:'Thailand',value:6},
                            {name:'Georgia',value:21},
                            {name:'Philippines',value:3},
                            {name:'Kuwait',value:24},
                            {name:'Rwanda',value:3},
                            {name:'Tajikistan',value:2},
                            {name:'Seychelles',value:1},
                            {name:'Mauritania',value:4},
                            {name:'Libya',value:11},
                            {name:'Nepal',value:2},
                            {name:'Mauritius',value:1},
                            {name:'Pakistan',value:9},
                            {name:'Malta',value:6},
                            {name:'Portugal',value:6},
                            {name:'Maldives',value:3},
                            {name:'Algeria',value:24},
                            {name:'Ukraine',value:50},
                            {name:'Oman',value:3},
                            {name:'Spain',value:32},
                            {name:'Germany',value:338},
                            {name:'Colombia',value:2},
                            {name:'Egypt',value:31},
                            {name:'Israel',value:42},
                            {name:'Benin',value:2},
                            {name:'Norway',value:12},
                            {name:'Albania',value:8},
                            {name:'Netherlands',value:46},
                            {name:'Ghana',value:4},
                            {name:'Hungary',value:11},
                            {name:'Kazakhstan',value:19},
                            {name:'Qatar',value:22},
                            {name:'Croatia',value:6},
                            {name:'桃园国际机场 ',value:3},
                            {name:'Czech Republic',value:13},
                            {name:'Ireland',value:8},
                            {name:'France',value:68},
                            {name:'Afghanistan',value:6},
                            {name:'Macedonia',value:9},
                            {name:'United Kingdom',value:71},
                            {name:'Cameroon',value:4},
                            {name:'Mali',value:1},
                            {name:'Kenya',value:3},
                            {name:'Chad',value:1},
                            {name:'Uzbekistan',value:10},
                            {name:'Bulgaria',value:8},
                            {name:'Austria',value:32},
                            {name:'Iran',value:49},
                            {name:'Jordan',value:13},
                            {name:'Azerbaijan',value:27},
                            {name:'香港国际机场(赤腊角) ',value:3},
                            {name:'Armenia',value:1},
                            {name:'Tanzania',value:6}

                        ]
                    }

                },
                {
                    name:'入境',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        symbol:'arrow',
                        symbolSize:[5,0],
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                },
                                label:{
                                  show:false
                            
                                }
                            }
                            
                        },
                          
                        data : [
                            [{name:'北京首都国际机场'},{name:'Turkey',value:3}],
                            [{name:'上海浦东机场'},{name:'Turkey',value:4}],
                            [{name:'广州白云机场'},{name:'Turkey',value:3}],
                            [{name:'Uzbekistan'},{name:'Turkey',value:11}],
                            [{name:'Djibouti'},{name:'Turkey',value:3}],
                            [{name:'Japan'},{name:'Turkey',value:7}],
                            [{name:'Albania'},{name:'Turkey',value:8}],
                            [{name:'Georgia'},{name:'Turkey',value:22}],
                            [{name:'Sudan'},{name:'Turkey',value:3}],
                            [{name:'Iraq'},{name:'Turkey',value:59}],
                            [{name:'Macedonia'},{name:'Turkey',value:9}],
                            //[{name:'China'},{name:'Turkey',value:10}],
                            [{name:'Greece'},{name:'Turkey',value:26}],
                            [{name:'桃园国际机场 '},{name:'Turkey',value:4}],
                            [{name:'Bulgaria'},{name:'Turkey',value:8}],
                            [{name:'Qatar'},{name:'Turkey',value:22}],
                            [{name:'Czech Republic'},{name:'Turkey',value:15}],
                            [{name:'Belgium'},{name:'Turkey',value:34}],
                            [{name:'Canada'},{name:'Turkey',value:4}],
                            [{name:'Thailand'},{name:'Turkey',value:6}],
                            [{name:'Finland'},{name:'Turkey',value:7}],
                            [{name:'Tajikistan'},{name:'Turkey',value:2}],
                            [{name:'Armenia'},{name:'Turkey',value:1}],
                            [{name:'Pakistan'},{name:'Turkey',value:9}],
                            [{name:'Vietnam'},{name:'Turkey',value:4}],
                            [{name:'Lithuania'},{name:'Turkey',value:7}],
                            [{name:'Latvia'},{name:'Turkey',value:2}],
                            [{name:'Kuwait'},{name:'Turkey',value:23}],
                            [{name:'France'},{name:'Turkey',value:71}],
                            [{name:'Bangladesh'},{name:'Turkey',value:3}],
                            [{name:'Kyrgyzstan'},{name:'Turkey',value:13}],
                            [{name:'Kenya'},{name:'Turkey',value:7}],
                            [{name:'United Arab Emirates'},{name:'Turkey',value:38}],
                            [{name:'Azerbaijan'},{name:'Turkey',value:27}],
                            [{name:'Germany'},{name:'Turkey',value:340}],
                            [{name:'Spain'},{name:'Turkey',value:35}],
                            [{name:'Estonia'},{name:'Turkey',value:2}],
                            [{name:'Senegal'},{name:'Turkey',value:3}],
                            [{name:'Uganda'},{name:'Turkey',value:3}],
                            [{name:'Algeria'},{name:'Turkey',value:22}],
                            [{name:'Malaysia'},{name:'Turkey',value:4}],
                            [{name:'Libya'},{name:'Turkey',value:9}],
                            [{name:'Slovenia'},{name:'Turkey',value:3}],
                            [{name:'United States'},{name:'Turkey',value:35}],
                            [{name:'Belarus'},{name:'Turkey',value:6}],
                            [{name:'Portugal'},{name:'Turkey',value:8}],
                            [{name:'Turkmenistan'},{name:'Turkey',value:9}],
                            [{name:'Brazil'},{name:'Turkey',value:3}],
                            [{name:'Mauritius'},{name:'Turkey',value:2}],
                            [{name:'Philippines'},{name:'Turkey',value:4}],
                            [{name:'Cote D\'ivoire (Ivory Coast)'},{name:'Turkey',value:1}],
                            [{name:'香港国际机场(赤腊角) '},{name:'Turkey',value:4}],
                            [{name:'Jordan'},{name:'Turkey',value:13}],
                            [{name:'Maldives'},{name:'Turkey',value:3}],
                            [{name:'Chad'},{name:'Turkey',value:1}],
                            [{name:'Netherlands'},{name:'Turkey',value:46}],
                            [{name:'Seychelles'},{name:'Turkey',value:1}],
                            [{name:'Israel'},{name:'Turkey',value:44}],
                            [{name:'Tunisia'},{name:'Turkey',value:11}],
                            [{name:'Burkina Faso'},{name:'Turkey',value:3}],
                            [{name:'Singapore'},{name:'Turkey',value:5}],
                            [{name:'Ireland'},{name:'Turkey',value:6}],
                            [{name:'Kosovo'},{name:'Turkey',value:6}],
                            [{name:'Denmark'},{name:'Turkey',value:23}],
                            [{name:'Ghana'},{name:'Turkey',value:3}],

                            [{name:'Oman'},{name:'Turkey',value:3}],
                            [{name:'Romania'},{name:'Turkey',value:19}],
                            [{name:'Mali'},{name:'Turkey',value:1}],
                            [{name:'Iran'},{name:'Turkey',value:51}],
                            [{name:'Sweden'},{name:'Turkey',value:29}],
                            [{name:'India'},{name:'Turkey',value:7}],
                            [{name:'Bahrain'},{name:'Turkey',value:9}],
                            [{name:'Niger'},{name:'Turkey',value:1}],
                            [{name:'Hungary'},{name:'Turkey',value:12}],
                            [{name:'Luxembourg'},{name:'Turkey',value:2}],
                            [{name:'South Africa'},{name:'Turkey',value:8}],
                            [{name:'Afghanistan'},{name:'Turkey',value:6}],
                            [{name:'Gabon'},{name:'Turkey',value:1}],
                            [{name:'Nigeria'},{name:'Turkey',value:5}],
                            [{name:'Russia'},{name:'Turkey',value:93}],
                            [{name:'Poland'},{name:'Turkey',value:11}],
                            [{name:'Saudi Arabia'},{name:'Turkey',value:55}],
                            [{name:'Montenegro'},{name:'Turkey',value:3}],
                            [{name:'Cameroon'},{name:'Turkey',value:1}],
                            [{name:'Ukraine'},{name:'Turkey',value:52}],
                            [{name:'Italy'},{name:'Turkey',value:70}],
                            [{name:'Indonesia'},{name:'Turkey',value:4}],
                            [{name:'Slovakia'},{name:'Turkey',value:2}],
                            [{name:'Moldova'},{name:'Turkey',value:10}],
                            [{name:'Austria'},{name:'Turkey',value:25}],
                            [{name:'Norway'},{name:'Turkey',value:13}],
                            [{name:'Nepal'},{name:'Turkey',value:2}],
                            [{name:'Morocco'},{name:'Turkey',value:8}],
                            [{name:'Egypt'},{name:'Turkey',value:33}],
                            [{name:'South Korea'},{name:'Turkey',value:11}],
                            [{name:'Kazakhstan'},{name:'Turkey',value:19}],
                            [{name:'Lebanon'},{name:'Turkey',value:28}],
                            [{name:'Tanzania'},{name:'Turkey',value:3}],
                            [{name:'United Kingdom'},{name:'Turkey',value:69}],
                            [{name:'Malta'},{name:'Turkey',value:5}],
                            [{name:'Croatia'},{name:'Turkey',value:5}],
                            [{name:'Switzerland'},{name:'Turkey',value:35}],
                            [{name:'Ethiopia'},{name:'Turkey',value:3}],
                            [{name:'Bosnia And Herzegovina'},{name:'Turkey',value:11}],
                            [{name:'Panama'},{name:'Turkey',value:1}],
                            [{name:'Serbia'},{name:'Turkey',value:10}]

                        ]
                    },
                    markPoint : {
                        symbol:'pin',
                        symbolSize : function (v){
                            return 4
                        },
                        itemStyle:{
                            normal:{
                                label:{
                                  show:true,
                                  position:'top',
                                  formatter:'{b}:{c}'
                            
                                }
                            }
                        },
                        data : [
                            {name:'北京首都国际机场',value:3},
                            {name:'上海浦东机场',value:4},
                            {name:'广州白云机场',value:3},
                            {name:'United Arab Emirates',value:38},
                            {name:'Niger',value:1},
                            {name:'Uganda',value:3},
                            {name:'Switzerland',value:35},
                            {name:'Kosovo',value:6},
                            {name:'Iraq',value:59},
                            {name:'Serbia',value:10},
                            {name:'Italy',value:70},
                            {name:'Lebanon',value:28},
                            {name:'Djibouti',value:3},
                            {name:'Tunisia',value:11},
                            {name:'Ethiopia',value:3},
                            {name:'United States',value:35},
                            {name:'Finland',value:7},
                            {name:'Burkina Faso',value:3},
                            {name:'South Korea',value:11},
                            {name:'Greece',value:26},
                            {name:'Gabon',value:1},
                            {name:'Morocco',value:8},
                            {name:'Senegal',value:3},
                            {name:'Bahrain',value:9},
                            {name:'Latvia',value:2},
                            {name:'Sudan',value:3},
                            {name:'Belarus',value:6},
                            {name:'Turkmenistan',value:9},
                            {name:'South Africa',value:8},
                            {name:'Cote D\'ivoire (Ivory Coast)',value:1},
                            {name:'Poland',value:11},
                            {name:'India',value:7},
                            {name:'Slovenia',value:3},
                            {name:'Slovakia',value:2},
                            {name:'Indonesia',value:4},
                            {name:'Kyrgyzstan',value:13},
                            //{name:'China',value:10},
                            {name:'Belgium',value:34},
                            {name:'Russia',value:93},
                            {name:'Vietnam',value:4},
                            {name:'Moldova',value:10},
                            {name:'Montenegro',value:3},
                            {name:'Romania',value:19},
                            {name:'Sweden',value:29},
                            {name:'Nigeria',value:5},
                            {name:'Singapore',value:5},
                            {name:'Croatia',value:5},
                            {name:'Luxembourg',value:2},
                            {name:'Denmark',value:23},
                            {name:'Bosnia And Herzegovina',value:11},
                            {name:'Brazil',value:3},
                            {name:'Saudi Arabia',value:55},
                            {name:'Japan',value:7},
                            {name:'Malaysia',value:4},
                            {name:'Estonia',value:2},
                            {name:'Bangladesh',value:3},
                            {name:'Lithuania',value:7},
                            {name:'Thailand',value:6},
                            {name:'Georgia',value:22},
                            {name:'Philippines',value:4},
                            {name:'Kuwait',value:23},
                            {name:'Tajikistan',value:2},
                            {name:'Seychelles',value:1},
                            {name:'Libya',value:9},
                            {name:'Nepal',value:2},
                            {name:'Mauritius',value:2},
                            {name:'Pakistan',value:9},
                            {name:'Malta',value:5},
                            {name:'Portugal',value:8},
                            {name:'Maldives',value:3},
                            {name:'Algeria',value:22},
                            {name:'Ukraine',value:52},
                            {name:'Oman',value:3},
                            {name:'Spain',value:35},
                            {name:'Germany',value:340},
                            {name:'Egypt',value:33},
                            {name:'Israel',value:44},
                            {name:'Norway',value:13},
                            {name:'Albania',value:8},
                            {name:'Netherlands',value:46},
                            {name:'Ghana',value:3},
                            {name:'Hungary',value:12},
                            {name:'Kazakhstan',value:19},
                            {name:'Qatar',value:22},
                            {name:'Canada',value:4},
                            {name:'Panama',value:1},
                            {name:'桃园国际机场 ',value:4},
                            {name:'Czech Republic',value:15},
                            {name:'Ireland',value:6},
                            {name:'France',value:71},
                            {name:'Afghanistan',value:6},
                            {name:'Macedonia',value:9},
                            {name:'United Kingdom',value:69},
                            {name:'Cameroon',value:1},
                            {name:'Mali',value:1},
                            {name:'Kenya',value:7},
                            {name:'Chad',value:1},
                            {name:'Uzbekistan',value:11},
                            {name:'Bulgaria',value:8},
                            {name:'Austria',value:25},
                            {name:'Iran',value:51},
                            {name:'Jordan',value:13},
                            {name:'Azerbaijan',value:27},
                            {name:'香港国际机场(赤腊角) ',value:4},
                            {name:'Armenia',value:1},
                            {name:'Tanzania',value:3}


                        ]
                    }
                },
                {
                    name:'中国',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        symbol:'arrow',
                        symbolSize:[5,0],
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10,
                                    color:'red',
                                    width:3


                                },
                                label:{
                                  show: false

                            
                                }
                            }
                            
                        },
                          
                        data : [
                            [{name:'北京首都国际机场'},{name:'Turkey',value:3}],
                            [{name:'上海浦东机场'},{name:'Turkey',value:4}],
                            [{name:'广州白云机场'},{name:'Turkey',value:3}],                      
                            [{name:'桃园国际机场 '},{name:'Turkey',value:4}],
                            [{name:'香港国际机场(赤腊角) '},{name:'Turkey',value:4}],
                            [{name:'Turkey'},{name:'香港国际机场(赤腊角) ',value:3}],
                            [{name:'Turkey'},{name:'桃园国际机场 ',value:3}],
                            [{name:'Turkey'},{name:'北京首都国际机场',value:3}],
                            [{name:'Turkey'},{name:'上海浦东机场',value:3}],
                            [{name:'Turkey'},{name:'广州白云机场',value:3}]
                        ]
                    },

                    markPoint : {
                        symbol:'pin',
                        symbolSize : function (v){
                            return 8
                        },
                        itemStyle:{
                            normal:{
                                label:{
                                  show:false,
                            
                                },
                                color:'red'
                            }
                        },
                        data : [
                            {name:'北京首都国际机场',value:6},
                            {name:'上海浦东机场',value:7},
                            {name:'广州白云机场',value:6},
                            {name:'桃园国际机场 ',value:7},
                            {name:'香港国际机场(赤腊角) ',value:7},
                            //{name:'北京首都国际机场',value:4},
                        ]
                    }
                },

                
            ]
        };

        var myChart = BMapExt.initECharts(container);
        window.onresize = myChart.onresize;
        BMapExt.setOption(option);
    }
);
})();