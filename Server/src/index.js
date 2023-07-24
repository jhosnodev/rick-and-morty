const http = require("http");
const getCharById = require('./controllers/getCharById')
//const characters = require("./utils/data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url.startsWith("/rickandmorty/character")) {
      
      let param = parseInt(req.url.split("/")[3]);

      getCharById(res, param)
    }
  })
  .listen(3001, "localhost");
