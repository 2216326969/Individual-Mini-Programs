// pages/land/land.js
var app=getApp();
const db=wx.cloud.database();
var name=null;
var password=null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    password:''
  },
  register: function () {
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },
  inputName:function(event){
    // name=event.detail.value
    this.setData({
      name:event.detail.value
    })
  },
  inputPassword:function(event){
    // password=event.detail.value
    this.setData({
      password:event.detail.value
    })
  },
  login:function(a){
    var that=this;
    if(this.data.name.length==0){
      wx.showModal({
        title: '温馨提示',
        content: '用户名不能为空',
        showCancel:false
      })
    }else if(this.data.password.length == 0){
      wx.showModal({
        title: '温馨提示',
        content: '密码不能为空',
        showCancel: false
      })
    }else{
      db.collection('landing')
      .where({
        name:this.data.name,
        password:this.data.password
      })
      .get()
      .then(res=>{
        if(res.data.length==0){
          wx.showToast({
            title: '用户名或密码错误'
          })
        }else{
          wx.showToast({
            title: '登陆成功',
          })
          wx.switchTab({
            url: '/pages/exam1/exam1',
          })
        }
      })
      .catch(err=>{
        
      })
    }
  },
  // login(){
  //   var that=this; 
  //   landd.get({
  //     success:(res)=>{
  //       var user=res.data;
  //       for(var i=0;i<user.length;i++){
  //         if(name===user[i].name){
  //           if(password!==user[i].password){
  //             wx.showToast({
  //               title: '密码错误',
  //               icon:'success',
  //               duration:3000
  //             })
  //             console.log(123)
  //           }else{
  //             wx.showToast({
  //               title: '登陆成功',
  //               icon: 'success',
  //               duration: 3000
  //             })
  //             wx.switchTab({
  //               url: '/pages/exam1/exam1',
  //             })
  //           }
  //         }
  //       }
  //     }
  //   })
  // },
  // login:function(){
  //   wx.switchTab({
  //     url: '/pages/exam1/exam1',
  //   })
  // },
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