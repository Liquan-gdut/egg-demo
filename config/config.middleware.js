'use strict';

module.exports = {
  middleware: [ 'token2user', 'gzip' ],
  token2user: {
    ignore: '/home', // 忽略首页的 token 校验，即不需要登录即可访问接口
  },
};
