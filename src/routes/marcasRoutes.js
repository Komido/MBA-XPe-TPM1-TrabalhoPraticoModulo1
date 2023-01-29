import { Router } from "express";

import marcasController from "../app/controllers/marcasController";

const routes = Router();

routes.get("/maisModelos", marcasController.maisModelos);
routes.get("/menosModelos", marcasController.menosModelos);
routes.get("/listaMaisModelos/:nr", marcasController.listaMaisModelos);
routes.get("/listaMenosModelos/:nr", marcasController.listaMenosModelos);
routes.get("/listaModelos/:marca", marcasController.listaModelos);

export default routes;
