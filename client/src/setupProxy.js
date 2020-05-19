const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/checkout/payment", {
      target: "http://localhost:5000",
    })
  );
};
