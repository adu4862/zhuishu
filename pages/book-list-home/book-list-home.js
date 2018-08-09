// pages/book-list-home/book-list-home.js
var app = getApp()
const util = require('../../utils/util.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {

        weekHotColor: '#ffffff',
        newColor: '#aaaaaa',
        mostColor: '#aaaaaa',
        duration: "last-seven-days",
        sort: "collectorCount",
        bookLists: []
    },

    tabOnclick: function(event) {
        console.log(event);
        switch (event.currentTarget.id) {
            case "1":
                this.setData({
                    weekHotColor: '#ffffff',
                    newColor: '#aaaaaa',
                    mostColor: '#aaaaaa'
                });

                break;
            case "2":
                this.setData({
                    weekHotColor: '#aaaaaa',
                    newColor: '#ffffff',
                    mostColor: '#aaaaaa'
                });

                break;
            case "3":
                this.setData({
                    weekHotColor: '#aaaaaa',
                    newColor: '#aaaaaa',
                    mostColor: '#ffffff'
                });

                break;
        }
        this.setData({
            duration: event.currentTarget.dataset.duration,
            sort: event.currentTarget.dataset.sort
        });
        this.getBookListData();
    },

    getBookListData :function(){
        var bookListUrl = app.globalData.API_BASE_URL + "/book-list" ;
        //书籍详情
        wx.showLoading({
            title: '加载中',
        })
        wx.request({
            url: bookListUrl,
            data: {
                start: 0,
                limit: 20,
                gender: "male",
                duration: this.data.duration,
                sort: this.data.sort
            },
            success: (res) => {
                console.log(res.data);
                this.setData({
                    bookLists: res.data.bookLists

                });
                wx.hideLoading();

            }
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        wx.setNavigationBarTitle({
            title: '主题书单',
        });
        this.getBookListData();
       
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