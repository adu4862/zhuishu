// pages/book-discussion-detail/book-discussion-detail.js
var app = getApp()
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
      post:{},
      comments:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options);
      wx.setNavigationBarTitle({
          title: '详情',
      });
      //获取综合讨论区帖子详情
      var disscussionUrl = app.globalData.API_BASE_URL + "/post/" + options._id;
      //获取综合讨论区帖子详情内的评论列表
      var disscussionCommentUrl = app.globalData.API_BASE_URL + "/post/" + options._id +"/comment?start=0&limit=20";
      wx.request({
          url: disscussionUrl,
          success: (res) => {
              console.log(res.data);
              this.setData({
                  post: res.data.post
              });
          }

      });

      wx.request({
          url: disscussionCommentUrl,
          success: (res) => {
              console.log(res.data);
              this.setData({
                  comments: res.data.comments
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