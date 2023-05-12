Page({
    data: {
      name: '',
      date: '请选择出生日期'
    },
    onNameInput: function (e) {
      this.setData({
        name: e.detail.value
      });
    },
    onDateChange: function (e) {
      this.setData({
        date: e.detail.value
      });
    },
    onSubmit: function () {
      const { name, date } = this.data;
      if (!name || date === '请选择出生日期') {
        wx.showToast({
          title: '请填写完整信息',
          icon: 'none'
        });
        return;
      }
      // 保存用户信息
      wx.setStorageSync('name', name);
      wx.setStorageSync('date', date);
      // 跳转到个人页
      wx.switchTab({
        url: '/pages/personal/personal'
      });
    }
  });