'use strict';

// // config/config.${env}.js
exports.mysql = {
  // 单数据库信息配置
  client: {
    // host
    host: 'xx.xx.xx.xx',
    // 端口号
    port: '3306',
    // 用户名
    user: 'egg-database-name',
    // 密码
    password: '123456',
    // 数据库名
    database: 'egg_demo',
    dateStrings: true,
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
};

exports.logger = {
  dir: '/export/Logs/lq-egg-servise-logs',
};
exports.APP_SECRET = {
  appCode: 'xxx',
  appToken: 'xxxx',
  key: 'xxxx',
  domain: 'www.xxx-pord.com',
};

