const http = require("http");
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  // Set the CORS headers to allow any origin
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Proxy the request to the target API
  proxy.web(req, res, { target: "https://dictionaryapi.dev" });
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`CORS proxy server is running on port ${port}`);
});
