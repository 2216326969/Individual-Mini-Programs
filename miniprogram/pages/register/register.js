// pages/register/register.js
let app=getApp();
//获取云数据引用
const db=wx.cloud.database();
const landd=db.collection('landing');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    password:''
  },
  //输入用户名
  inputName:function(event){
    this.setData({
      name:event.detail.value
    })
  },
  //输入密码
  inputPassword:function(event){
    this.setData({
      password: event.detail.value
    })
  },
  
  register(){
    if(this.data.name==''){
      wx.showToast({
        title: '用户名不能为空',
      })
      return;
    }
    if(this.data.password==''){
      wx.showToast({
        title: '密码不能为空',
      })
      return;
    }
    let uname_reg= /^\w+$/;
    let pwd_reg= /^[0-9a-zA-Z]{6,12}$/
    if(!uname_reg.test(this.data.uname)){
      wx.showToast({
        title: '用户名格式不正确',
      })
      return
    }
    if(!pwd_reg.test(this.data.password)){
      wx.showToast({
        title: '密码格式不正确',
      })
      return
    }
    landd
    .where({
      name:this.data.name,
      password:this.data.password
    })
    .get()
    .then(res=>{
      if(res.data.length==0){
        landd.add({
          data:{
            name:this.data.name,
            password:this.data.password
          }
        })
        .then(res=>{
          wx.showToast({
            title: '注册成功',
          })
          wx.redirectTo({
            url: '/pages/land/land',
          })
        })
        .catch(err=>{
          console.log(err)
        })
      }else{
        wx.showToast({
          title: '用户名已存在',
        })
      }
    })
    .catch(err=>{
      console.log(err)
    })
  },
  // saveuserinfo:function(){
  //   let that=this;
  //   landd.add({
  //     data:{
  //       name:name,
  //       password:password
  //     }
  //   }).then(res=>{
  //     wx.showToast({
  //       title: '注册成功！',
  //       icon:'success',
  //       duration:3000
  //     })
  //     wx.redirectTo({
  //       url: '/pages/land/land',
  //     })
  //   })
  // },
  // skips:function(){
  //   wx.navigateTo({
  //     url: '/pages/land/land',
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