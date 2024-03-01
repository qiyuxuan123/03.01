// index.js

Page({
  data: {
    list:[]
  },

 async getlist(){
    const res=await wx.http.get('/api/getbanner')
    console.log(res);
  },
  onLoad(){
    this.getlist()
  },
})
