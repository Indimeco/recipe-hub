"use strict";

const Hapi = require("@hapi/hapi");
const Path = require("path");

const start = async () => {
  const server = Hapi.server({
    port: 146,
    routes: {
      files: {
        relativeTo: Path.join(__dirname, "../dist")
      }
    }
  });

  await server.register(require("@hapi/inert"));

  server.route({
    method: "GET",
    path: "/",
    handler: {
      file: "index.html"
    }
  });
  server.route({
    method: "GET",
    path: "/assets/bundle.js",
    handler: {
      file: "bundle.js"
    }
  });

  await server.start();

  console.log("Server running at:", server.info.uri);
};

start();
