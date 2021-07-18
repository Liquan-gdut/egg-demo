/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1570367216778_7082';

  exports.security = {
    csrf: false,
  };

  exports.email = {
    client: {
      host: 'smtp.qq.com', // 邮箱需要开启smtp服务
      secureConnection: true,
      port: 465,
      auth: {
        user: '', // 账号
        pass: '', // POP3/SMTP服务密码，密码获取方式： 以qq邮箱为例，设置->账户->POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务->开启POP3/SMTP服务-> 密码
      },
    },
  };


  config.cors = {
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    origin: ctx => ctx.get('origin'),
  };
  // add your middleware config here
  config.middleware = [];

  config.io = {
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
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  const multipart = {
    fileExtensions: [ '.pdf', '.doc', '.docx', '.ppt', '.pptx', '.csv', '.rar', '.zip', '.xlsx', '.xls' ],
    // 增加对 json 扩展名的文件支持
    fileSize: '200mb',
    fieldSize: '200mb',
  };
  return {
    ...config,
    ...userConfig,
    multipart,
    static: {
      prefix: '/',
      dir: [ 'app/public' ],
    },
    onerror: {
      all(err, ctx) {
        // 在此处定义针对所有响应类型的错误处理方法
        // 注意，定义了 config.all 之后，其他错误处理方法不会再生效
        console.log('ctx');
        ctx.body = JSON.stringify({
          code: 500,
          message: '服务器错误',
        });
        // ctx.body = '服务器错误------';
        // ctx.body = {
        //   code: 500,
        //   message: '服务器错误------',
        // };
        ctx.status = 500;
      },
      html(err, ctx) {
        // html hander
        ctx.body = '<h3>error</h3>';
        ctx.status = 500;
      },
      json(err, ctx) {
        // json hander
        ctx.body = { message: 'error' };
        ctx.status = 500;
      },
    },
  };
};
