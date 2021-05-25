// pages/information/information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoType: {
      "基本信息": {
        "姓名": "name",
        "学号": "stu_id",
        "性别": "sex",
        "班级": "class",
        "学院": "college",
        "专业": "major",
        "手机1": "phone1",
        "手机2": "phone2",
        "身份证号": "ID",
        "QQ号": "qq",
        "微信号": "weixin"
      },
      "成绩信息": {
        "四级成绩": "CET4",
        "六级成绩": "CET6",
        "计算机等级考试": "NCRE",
        "大一绩点": "GPA_1",
        "当前绩点": "GPA"
      },
      "寝室信息": {
        "苑区": "domitory_yuan",
        "楼栋名称": "domitory_building",
        "寝室号": "domitory_no",
        "小寝室号": "domitory_no2",
        "床位号": "domitory_bed"
      },
      "父母或监护人信息": {
        "父母或监护人1姓名": "parent1_name",
        "父母或监护人1身份证件号码": "parent1_id",
        "父母或监护人2姓名": "parent2_name",
        "父母或监护人2身份证件号码": "parent2_id"
      },
      "详细信息": {
        "入学日期": "date_to_school",
        "生源地": "source_place",
        "录取专业": "admission_college",
        "录取专业": "admission_major",
      },
      "家庭住址": {
        "省份": "province",
        "市": "city",
        "县（区）": "county",
        "乡镇/街道": "township",
        "社区/村": "village"
      },
      "其他信息": {

      }
    },
    infoList: {
      "name": "李魔龙",
      "stu_id": "Q19010199",
      "sex": "?"
    }
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