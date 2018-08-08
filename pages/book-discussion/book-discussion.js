// pages/book-discussion/book-discussion.js
var app = getApp()
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
      posts:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options);
      wx.setNavigationBarTitle({
          title: options.title,
      });
      //获取综合讨论区帖子详情
      var disscussionUrl = app.globalData.API_BASE_URL + "/post/by-block" 
      wx.request({
          url: disscussionUrl,
          data:{
              block: options.block,
              duration:"all",
              sort:"updated",
              type:"all",
              start:0,
              limit:20
          },
          success: (res) => {
              console.log(res.data);
              this.setData({
                  posts: res.data.posts
              });
          }

      });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})