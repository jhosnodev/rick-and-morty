const http = require("http");
const characters = require("./utils/data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url.startsWith("/rickandmorty/character")) {
      res.writeHead(200, { "Content-Type": "application/json" });
      let param = parseInt(req.url.split("/")[3]);

      const result = characters.find(({id}) => id === param);

 
      res.end(JSON.stringify(result));
    }
  })
  .listen(3001, "localhost");
