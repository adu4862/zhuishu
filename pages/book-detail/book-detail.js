// pages/book-detail/book-detail.js
var app = getApp()
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
      bookData:{},
      updated:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options);
      var rankingUrl = app.globalData.API_BASE_URL + "/book/" + options._id;

      wx.request({
          url: rankingUrl,
          success: (res) => {
              console.log(res.data);
              var updatedData =  util.formatTime(new Date(res.data.updated));
              console.log(updatedData);
              this.setData({
                  bookData: res.data,
                  updated: updatedData
                  
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