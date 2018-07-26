// pages/reading/reading.js
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bookChaptersData: [],
        content: "",
        hidden: true,
        chapters_hidden: true,
        textColor: '#34311f',
        textBackgroundColor: '#f0f0e1',
        day: true,
        themeText: "夜间",
        themeSrc: '/assets/icon/moon.png',
        chapterIndex: 0
    },

    onTextClick: function() {
        this.setData({
            hidden: !this.data.hidden
        });

    },
    onTopClick: function() {
        this.setData({
            hidden: !this.data.hidden
        });
        if (this.data.chapterIndex <= 0 ) {
            return;
        }
         this.setData({
            chapterIndex: --this.data.chapterIndex

        });

        console.log(this.data.chapterIndex);
        var link = this.data.bookChaptersData[this.data.chapterIndex].link;
        console.log(link);
        this.getChapterDetails(link);

    },
    onBottomClick: function() {
        this.setData({
            hidden: !this.data.hidden
        });
        if (this.data.chapterIndex >= this.data.bookChaptersData.length){
            return;
        }
         
        this.setData({
            chapterIndex: ++this.data.chapterIndex

        });

        console.log(this.data.chapterIndex);
        var link = this.data.bookChaptersData[this.data.chapterIndex].link;
        console.log(link);
        this.getChapterDetails(link);

    },
    gotoChapterClick: function(event) {
        console.log(event.currentTarget.id);
        this.setData({
            chapters_hidden: !this.data.chapters_hidden
        });
        this.getChapterDetails(event.currentTarget.id);

    },
    onChaptersClick: function() {
        this.setData({
            chapters_hidden: !this.data.chapters_hidden
        });


    },

    onThemeClick: function() {
        this.setData({
            day: !this.data.day

        });
        if (this.data.day) {
            this.setData({
                textColor: '#34311f',
                textBackgroundColor: '#f0f0e1',
                themeText: "夜间",
                themeSrc: '/assets/icon/moon.png'
            });
        } else {
            this.setData({
                textColor: '#444',
                textBackgroundColor: '#000',
                themeText: "日间",
                themeSrc: '/assets/icon/day.png'
            });

        }


    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log(options);
        var bookChaptersUrl = app.globalData.API_BASE_URL + "/mix-atoc/" + options._id + "?view=chapters";

        wx.request({
            url: bookChaptersUrl,
            success: (res) => {
                console.log(res.data);
                var link = res.data.mixToc.chapters[this.data.chapterIndex].link;
                this.setData({
                    bookChaptersData: res.data.mixToc.chapters

                });
                this.getChapterDetails(link);

            }
        });
    },

    getChapterDetails: function(link) {
        var linkUrl = "http://chapter2.zhuishushenqi.com/chapter/" + encodeURIComponent(link);
        wx.request({
            url: linkUrl,
            success: (res) => {
                this.setData({
                    content: res.data.chapter.body

                });
                wx.pageScrollTo({
                    scrollTop: 0
                })

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