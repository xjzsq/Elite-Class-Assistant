// pages/assistant/assistant.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    main_height: "0",
    current_swiper: 1,
    bar_title: "发现",
    userInfo: {
      "avatarUrl": "/utils/images/MagicDragon.jpg",
      "name": "李魔龙",
      "stu_id": "Q19010199"
    },
    findList: [{
        "content":"信息公开",
        "icon":"info",
        "src":""
      },
      {
        "content":"作业提醒",
        "icon":"pencil",
        "src":""
      },
      {
        "content":"日程提醒",
        "icon":"time",
        "src":""
      },
      {
        "content":"课程表",
        "icon":"photo-wall",
        "src":""
      },
      {
        "content":"图书馆",
        "icon":"note",
        "src":""
      },
      {
        "content":"问题反馈",
        "icon":"comment",
        "src":""
      }
    ],
    homeList: [{
        "avatar": "pencil",
        "title": "填写信息通知",
        "time": 100,
        "content": "需要填写以下信息：家长联系方式",
        "read": "false"
      },
      {
        "avatar": "info",
        "title": "作业提醒",
        "time": 101,
        "content": "量子力学作业",
        "read": "true"
      }
    ],
    tabbarList: [{
        "text": "发现",
        "iconPath": "/utils/images/compass.png",
        "selectedIconPath": "/utils/images/compass_sel.png",
        dot: "true"
      },
      {
        "text": "首页",
        "iconPath": "/utils/images/home.png",
        "selectedIconPath": "/utils/images/home_sel.png",
        badge: "new"
      },
      {
        "text": "我的",
        "iconPath": "/utils/images/my.png",
        "selectedIconPath": "/utils/images/my_sel.png",
        dot: "true"
      }
    ],
    background: ["233", "666", "test"]
  },

  tabChange: function (e) {
    // console.log('tab change', e)
    if (this.data.current_swiper != (e.detail.index)) {
      this.setData({
        bar_title: this.data.tabbarList[e.detail.index]["text"],
        current_swiper: e.detail.index
      });
    }
  },

  swiperChange: function (e) {
    // console.log('swiper change', e)
    if (this.data.current_swiper != (e.detail.current))
      this.setData({
        bar_title: this.data.tabbarList[e.detail.current]["text"],
        current_swiper: e.detail.current
      });
  },

  navigateToInfo: function(e) {
    wx.navigateTo({
      url: '../information/information',
    })
  },

  navigateToNjupt: function(e) {
    wx.navigateTo({
      url: '../njupt/njupt',
    })
  },

  navigateToSetting: function(e) {
    wx.navigateTo({
      url: '../setting/setting',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      main_height: ((wx.getSystemInfoSync().windowHeight - 60 - wx.getSystemInfoSync().statusBarHeight - 48) * (750 / wx.getSystemInfoSync().windowWidth) - 0) + "rpx" //
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