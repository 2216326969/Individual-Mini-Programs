// pages/exam1/exam1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    pno:0
  },
  skip:function(){
    wx.navigateTo({
      url: '/pages/details/details',
    })
  },
  check:function(event){
    var id=event.target.dataset.id;
    wx.navigateTo({
      url: '/pages/circumstance/circumstance?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that=this;
    wx.request({
      url: 'https://cnodejs.org/api/v1/topics',
      method:'get',
      header:{
        'content-type':'application/json'
      },
      success:res=>{
        this.setData({
          list:res.data.data
        })
        // console.log(res.data.data)
        // console.log(res.data.data[0])
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