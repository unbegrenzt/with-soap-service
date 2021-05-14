const soap = require("soap");
const fs = require("fs");
const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

let myService = {
  Hello_Service: {
    Hello_Port: {
      sayHello: function (args) {
        console.log("sayHello called!");
        return {
          greeting: "Hello " + args.firstName.$value + "!"
        };
      }
    }
  }
};

let xml = fs.readFileSync(__dirname + "/public/HelloService.wsdl", "utf-8");

const server = express();

try {
  soap.listen(server, "/wsdl", myService, xml, function () {
    console.log("SOAP server initialized");
  });
} catch {
  console.log("SOAP server not initialized");
}

app.prepare().then(() => {
  server.get("/a", (req, res) => {
    return app.render(req, res, "/a", req.query);
  });

  server.get("/b", (req, res) => {
    return app.render(req, res, "/b", req.query);
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});