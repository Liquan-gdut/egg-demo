'use strict';

module.exports = () => {
  return async function(ctx, next) {
    const { token } = ctx.query;
    if (!token) ctx.throw(401, 'no authentication');
    const user = await ctx.service.RPC.getUserInfo(token);
    if (!user) ctx.throw(400, 'invalid openid');
    ctx.middlewareData = { user };
    await next();
  };
};
