const { createProxyMiddleware } = require("http-proxy-middleware"); 
// console.log('createProxyMiddleware:', createProxyMiddleware);
module.exports = function (app) {
  app.use(
    ["/api", "/auth"],
    createProxyMiddleware({
      target: "#",
    })
  );
};