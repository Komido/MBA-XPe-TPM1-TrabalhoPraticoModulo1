import express from "express";

import marcasRouter from "./routes/marcasRoutes";

class App {
  constructor() {
    this.server = express();

    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(marcasRouter);
  }
}

export default new App().server;
