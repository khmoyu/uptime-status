// 配置
window.Config = {

  // 显示标题
  SiteName: '墨宇站点监测',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'ur1360263-c27b61a773e8d8a7f8094873',
  ],

    // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 是否显示检测站点的链接
  ShowLink: true,

  // 导航栏菜单
  Navi: [
    {
      text: '主页',
      url: 'https://uptime.khmoyu.cn'
    },
    {
      text: '博客',
      url: 'https://khmoyu.cn'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/khmoyu/uptime-status'
    },
  ],
};
