// pages/sub-category/sub-category.js
var app = getApp()
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
      newBookColor: '#ffffff',
      HotColor: '#aaaaaa',
      KoubeiColor: '#aaaaaa',
      overColor: '#aaaaaa',
      gender:'male',
      major:"",
      type:"new",
      books:[]
  },
    tabOnclick: function (event) {
        console.log(event);
        switch (event.currentTarget.id) {
            case "1":
                this.setData({
                    newBookColor: '#ffffff',
                    HotColor: '#aaaaaa',
                    KoubeiColor: '#aaaaaa',
                    overColor: '#aaaaaa'
                });

                break;
            case "2":
                this.setData({
                    newBookColor: '#aaaaaa',
                    HotColor: '#ffffff',
                    KoubeiColor: '#aaaaaa',
                    overColor: '#aaaaaa'
                });

                break;
            case "3":
                this.setData({
                    newBookColor: '#aaaaaa',
                    HotColor: '#aaaaaa',
                    KoubeiColor: '#ffffff',
                    overColor: '#aaaaaa'
                });

                break;
            case "4":
                this.setData({
                    newBookColor: '#aaaaaa',
                    HotColor: '#aaaaaa',
                    KoubeiColor: '#aaaaaa',
                    overColor: '#ffffff'
                });

                break;
        }
        this.setData({
            type: event.currentTarget.dataset.type,
        });
        this.getBookListData();
    },
    getBookListData: function () {
        var bookListUrl = app.globalData.API_BASE_URL + "/book/by-categories";
        //书籍详情
        wx.request({
            url: bookListUrl,
            data: {
                start: 0,
                limit: 20,
                gender: this.data.gender,
                major: this.data.major,
                type: this.data.type
            },
            success: (res) => {
                console.log(res.data);
                this.setData({
                    books: res.data.books

                });

            }
        });
    },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options);
      this.setData({
          gender: options.gender,
          major: options.major
      });
      this.getBookListData();

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