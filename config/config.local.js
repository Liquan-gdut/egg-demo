'use strict';
const merge = require('object-assign');
const prod = require('./config.prod');

// // config/config.${env}.js
module.exports = merge(prod, {
  mysql: {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456789',
      // password: 'Aa668589..',
      // 数据库名
      database: 'egg_demo',
      dateStrings: true,
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  },
});
