// pages/book-list/book-list.js
var app = getApp()
const util = require('../../utils/util.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bookList:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log(options);
        wx.setNavigationBarTitle({
            title: '书单详情',
        });
        //获取书单详情
        var booListUrl = app.globalData.API_BASE_URL + "/book-list/" + options.id ;
        wx.request({
            url: booListUrl,
            success: (res) => {
                console.log(res.data);
                this.setData({
                    bookList: res.data.bookList
                });
            }

        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
       
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})