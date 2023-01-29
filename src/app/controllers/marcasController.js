import marcas from "../../data/car-list.json";
import MarcasFunctions from "../../utils/marcas";

class marcasController {
  async maisModelos(req, res) {
    const response = MarcasFunctions.maisModelos(marcas);

    return res.json(response);
  }

  async menosModelos(req, res) {
    const response = MarcasFunctions.menosModelos(marcas);

    return res.json(response);
  }

  async listaMaisModelos(req, res) {
    const { nr } = req.params;
    const response = MarcasFunctions.listaMaisModelos(marcas, nr);

    return res.json(response);
  }

  async listaMenosModelos(req, res) {
    const { nr } = req.params;
    const response = MarcasFunctions.listaMenosModelos(marcas, nr);

    return res.json(response);
  }

  async listaModelos(req, res) {
    const { marca } = req.params;
    const response = MarcasFunctions.listaModelos(marcas, marca);

    return res.json(response);
  }
}

export default new marcasController();
