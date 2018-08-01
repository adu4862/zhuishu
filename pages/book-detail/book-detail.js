// pages/book-detail/book-detail.js
var app = getApp()
const util = require('../../utils/util.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bookData: {},
        updated: {},
        bestByBookComments: [],
        booklists: [],
        isCollection:false,
        updatecolor:'#3b99df',
        updateText:"追更新"
    },
    collection: function() {
        if (this.data.isCollection){
            return;
        }
        var value = [];
        try {
            value = wx.getStorageSync('book-collection-list')
            if (value) {
                console.log(value);
            } else {
                value = [];
            }
        } catch (e) {
            // Do something when catch error
        }
        console.log(this.data.bookData);
        var lists = value.concat(this.data.bookData);
        console.log(lists);
        try {
            wx.setStorageSync('book-collection-list', lists);
        } catch (e) {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log(options);

     

        var bookDetailsUrl = app.globalData.API_BASE_URL + "/book/" + options._id;
        var bestByBookUrl = app.globalData.API_BASE_URL + "/post/review/best-by-book?book=" + options._id;
        var bookListUrl = app.globalData.API_BASE_URL + "/book-list/" + options._id + "/recommend?limit=3";
        //书籍详情
        wx.request({
            url: bookDetailsUrl,
            success: (res) => {
                console.log(res.data);
                wx.setNavigationBarTitle({
                    title: res.data.title,
                })
                var updatedData = util.formatTime(new Date(res.data.updated));
                console.log(updatedData);
                this.setData({
                    bookData: res.data,
                    updated: updatedData

                });

                var value = wx.getStorageSync('book-collection-list')
                if (value) {
                    console.log("book-collection-list");
                    console.log(value);
                    for (let i = 0; i < value.length; i++) {
                       var item =  value[i];
                        if (item._id === this.data.bookData._id) {
                            //已经追更
                            this.setData({
                                isCollection: true,
                                updatecolor: '#b8b8b8',
                                updateText: "不追了"
                            });
                        }
                    }
                } 
            }
        });
        //最热书评
        wx.request({
            url: bestByBookUrl,
            success: (res) => {
                console.log(res.data);
                this.setData({
                    bestByBookComments: res.data.reviews
                });
            }

        });
        //   推荐书单
        wx.request({
            url: bookListUrl,
            success: (res) => {
                console.log(res.data);
                this.setData({
                    booklists: res.data.booklists
                });
            }

        })

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