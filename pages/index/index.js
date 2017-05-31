// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../libs/bmap-wx.min.js');
var wxMarkerData = [];
Page({
    data: {
        markers: [],
        latitude: '',
        longitude: '',
        address: '',
        weatherData: ''
    },

    onLoad: function() {
        this.getAdress();
    },

    //获取当前的地址
    getAdress: function() {
        var that = this;
        // 新建百度地图对象 
        var BMap = new bmap.BMapWX({
            ak: '3N3CUHbb64YSAoqCIcMaWwyAIPiiRjFb'
        });
        var fail = function(data) {
            console.log(data)
        };
        var success = function(data) {
                wxMarkerData = data.wxMarkerData;
                that.setData({
                    markers: wxMarkerData
                });
                that.setData({
                    latitude: wxMarkerData[0].latitude
                });
                that.setData({
                    longitude: wxMarkerData[0].longitude
                });
                that.setData({
                    address: wxMarkerData[0].address
                });

            }
            // 发起regeocoding检索请求 
        BMap.regeocoding({
            fail: fail,
            success: success,
            iconPath: '../../img/marker_red.png',
            iconTapPath: '../../img/marker_red.png'
        });
    }

})