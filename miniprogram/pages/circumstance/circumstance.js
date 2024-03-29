// pages/circumstance/circumstance.js
Page({

  /**
   * 页面的初始数据 
   */ 
  data: {
    lists:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (event,options) {
    var that = this;
    wx.request({
      url: `https://cnodejs.org/api/v1/topic/${event.id}`,
      method: 'get',
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        that.setData({
          lists: res.data.data
        })
        // console.log(res.data.data)
        console.log(res.data)
      }
    })
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