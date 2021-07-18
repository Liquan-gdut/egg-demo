'use strict';

const Service = require('egg').Service;

class TopicService extends Service {
  async index() {
    const result = await this.app.mysql.select('topics');
    throw new Error('异常');
    return result;
  }
  async show(params) {
    const result = await this.app.mysql.select('topics', { where: params });
    return result;
  }
}

module.exports = TopicService;
