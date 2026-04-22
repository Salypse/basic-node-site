const http = require("http");
const fs = require("fs");

function getFileData(url) {
   const file = "./pages" + (url == "/" ? "/index.html" : url + ".html");
   try {
      return fs.readFileSync(file, "utf8");
   } catch (err) {
      if (err.code == "ENOENT") {
         throw new Error("File not found");
      }
   }
}

const server = http.createServer((req, res) => {
   try {
      var data = getFileData(req.url);
      res.writeHead(200, { "content-type": "text/html" });
   } catch (err) {
      res.writeHead(404, { "content-type": "text/html" });
      if ((err = "File not found")) {
         var data = getFileData("/404");
      }
   }
   res.end(data);
});

server.listen(8080);
