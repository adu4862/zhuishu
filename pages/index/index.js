//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
       bookList:[]
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function(options) {
        wx.setNavigationBarTitle({
            title: '书架',
        })
      
    },
    getUserInfo: function(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        var value = [];
        try {
            value = wx.getStorageSync('book-collection-list')
            if (value) {
                this.setData({
                    bookList: value
                });
            }
        } catch (e) {
            // Do something when catch error
        }
        console.log(value);
    },
})