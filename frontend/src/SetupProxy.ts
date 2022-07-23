import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = (app: any) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://api:4010",
      secure: false,
      changeOrigin: true,
      ws: true,
    })
  );
  app.use(
    "/socket.io",
    createProxyMiddleware({
      target: "http://api:4010",
      secure: false,
      changeOrigin: true,
      ws: true,
    })
  );
};
