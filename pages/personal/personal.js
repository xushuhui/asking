const app = getApp();

Page({
  data: {
    userInfo: {},
    name: '',
    date: '',
    fortune: ''
  },
  onLoad: function () {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.setData({
                userInfo: res.userInfo
              });
            }
          });
        }
      }
    });
    const name = wx.getStorageSync('name');
    const date = wx.getStorageSync('date');
    if (name && date) {
      this.setData({
        name,
        date,
        fortune: calculateFortune(name, date)
      });
    }
  }
});
function calculateFortune(name, date) {
    // 这里可以添加您的算命算法，根据姓名和出生日期计算算命结果
    // 示例：简单计算算命结果
    const fortuneList = [
      '大吉',
      '中吉',
      '小吉',
      '吉',
      '凶',
      '大凶'
    ];
    const index = (name.length * date.split('-').join('').length) % fortuneList.length;
    return fortuneList[index];
  }
