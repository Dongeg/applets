// pages/component/searchBtn/searchBtn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toSearchPage:function(){
      wx.navigateTo({
        url: '../../pages/searchPage/searchPage'
      })
    }
  }
})
