'use strict';
const Service = require('egg').Service;

class IndexService extends Service {
  async index() {
    // const { app } = this;
    // const sql = 'select * from test';
    // return await app.mysql.query(sql);
    const user = await this.app.mysql.get('user_info', { id: 0 });
    return { user };
  }

  async create(data) {
    console.log(data);
    // const { app } = this;
    // const {
    //   test,
    // } = data;
    // await app.mysql.insert('index', {
    //   test,
    // });
  }

  async update(data) {
    console.log(data);
    // const { app } = this;
    // const {
    //   id,
    //   name,
    // } = data;
    // await app.mysql.update(
    //   'index',
    //   {
    //     id,
    //     name,
    //   },
    //   {
    //     where: {
    //       id,
    //     },
    //   }
    // );
  }

  async destory(id) {
    console.log(id);
    // const { app } = this;
    // await app.mysql.delete('index', {
    //   id,
    // });
  }
}

module.exports = IndexService;
