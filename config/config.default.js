/* eslint valid-jsdoc: "off" */

'use strict';
const merge = require('object-assign');
const onerror = require('./config.error'); // 统一异常处理
const constance = require('./config.constance'); // 全局静态变量
const middlewareConfig = require('./config.middleware'); // 中间件配置

const config = {
  onerror,
  security: {
    csrf: false,
  },
  email: {
    client: {
      host: 'smtp.qq.com', // 邮箱需要开启smtp服务
      secureConnection: true,
      port: 465,
      auth: {
        user: '', // 账号
        pass: '', // POP3/SMTP服务密码，密码获取方式： 以qq邮箱为例，设置->账户->POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务->开启POP3/SMTP服务-> 密码
      },
    },
  },
  cors: {
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    origin: ctx => ctx.get('origin'),
  },
  io: {
    init: {
      wsEngine: 'ws',
    }, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: [
          'auth', // 定义了默认middleware的文件
        ],
        packetMiddleware: [],
      },
      '/example': {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
    },

    // redis: {
    //   host: '127.0.0.1',
    //   port: 6379,
    // },
  },
  view: {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  },
  multipart: {
    fileExtensions: [ '.pdf', '.doc', '.docx', '.ppt', '.pptx', '.csv', '.rar', '.zip', '.xlsx', '.xls' ],
    // 增加对 json 扩展名的文件支持
    fileSize: '200mb',
    fieldSize: '200mb',
  },
  static: {
    prefix: '/',
    dir: [ 'app/public' ],
  },
};

module.exports = merge(config, middlewareConfig, constance);
