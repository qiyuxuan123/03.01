
import validate from 'wechat-validate'
Page({

  behaviors: [validate],
  /**
   * 页面的初始数据
   */
  data: {
    mobile: '',
    code: ''
  },
  rules: {
    mobile: [{
        required: true,
        message: '请填写手机号码!'
      },
      {
        pattern: /^1[3-8]\d{9}$/,
        message: '请检查手机号码是否正确!'
      },
    ],
    code: [{
        required: true,
        message: '请填写短信验证码!'
      },
      {
        pattern: /^\d{4}$/,
        message: '请检查短信验证码是否正确!'
      }
    ]
  },
  async getCode() {
    // 单独只验证 mobile 这个数据
    const {
      valid,
      dataKey,
      message
    } = this.validate('mobile')
    if (!valid) wx.showToast({
      title: message,
      icon: 'none'
    })
    const res =await wx.http.get('/api/sms', {
      phone: this.data.mobile
    })
    console.log(res.list);
    // else do something
  },
  async sendForm() {
    // 验证码 rules 中定义的全部数据
    const isAllValid = this.validate()
    if (!isAllValid) return
    const res = await wx.http.post('/api/smslogin', {
      phone: this.data.mobile
    })
    console.log(res.list);
    // else request api
    wx.setStorageSync('token', res.list.token)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})