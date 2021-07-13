'use strict';
// todo: 完成 restAPI的几个接口

const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则
// const createRule = {
//   accesstoken: 'string',
//   title: 'string',
//   tab: { type: 'enum', values: [ 'ask', 'share', 'job' ], required: false },
//   content: 'string',
// };

class TopicsController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.validate(createRule, ctx.request.body);
    const result = await ctx.service.topics.index(ctx.request.body);
    ctx.status = 200;
    ctx.body = {
      code: 0,
      message: 'success',
      data: result,
    };
  }

  async show() {
    const { ctx } = this;
    const result = await ctx.service.topics.show(ctx.params);
    ctx.status = 200;
    ctx.body = {
      code: 0,
      message: 'success',
      data: result,
    };
  }

  async create() {
    const { ctx } = this;
    // ctx.validate(createRule, ctx.request.body);
    const id = await ctx.service.index.create(ctx.request.body);
    ctx.status = 200;
    ctx.body = {
      code: 0,
      message: 'success',
      data: id,
    };
    // todo: 待封装统一的异常处理 VO
    // try {

    // } catch (error) {
    //   console.log(error);
    //   ctx.status = 500;
    //   if (error.status === 422) {
    //     ctx.body = {
    //       code: 400,
    //       data: '参数不合法',
    //     };
    //     return;
    //   }
    //   ctx.body = {
    //     code: 500,
    //     data: '服务器错误',
    //   };
    // }
  }

  async update() {
    const { ctx } = this;
    try {
      await ctx.service.index.update(ctx.request.body);
      ctx.status = 200;
      ctx.body = {
        code: 200,
        data: '修改成功',
      };
    } catch (error) {
      console.log(error);
      ctx.status = 500;
      ctx.body = {
        code: -2,
        data: '修改失败',
      };
    }
  }

  async destory() {
    const { ctx } = this;
    try {
      await ctx.service.index.destory(ctx.params.id);
      ctx.status = 200;
      ctx.body = {
        code: 200,
        data: '删除成功',
      };
    } catch (error) {
      console.log(error);
      ctx.status = 500;
      ctx.body = {
        code: -2,
        data: '删除失败',
      };
    }
  }
}

module.exports = TopicsController;
