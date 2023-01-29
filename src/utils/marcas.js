module.exports = {
  maisModelos(marcas) {
    let maxModels = -1;
    let brandsWithMaxModels = [];
    for (let i = 0; i < marcas.length; i++) {
      if (marcas[i].models.length > maxModels) {
        maxModels = marcas[i].models.length;
        brandsWithMaxModels = [marcas[i].brand];
      } else if (marcas[i].models.length === maxModels) {
        brandsWithMaxModels.push(marcas[i].brand);
      }
    }
    return brandsWithMaxModels.sort();
  },

  menosModelos(marcas) {
    let minModels = Number.MAX_SAFE_INTEGER;
    let brandsWithMinModels = [];
    for (let i = 0; i < marcas.length; i++) {
      if (marcas[i].models.length < minModels) {
        minModels = marcas[i].models.length;
        brandsWithMinModels = [marcas[i].brand];
      } else if (marcas[i].models.length === minModels) {
        brandsWithMinModels.push(marcas[i].brand);
      }
    }
    return brandsWithMinModels.sort();
  },

  listaMaisModelos(marcas, x) {
    let brands = marcas.map((brand) => {
      return {
        brand: brand.brand,
        models: brand.models.length,
      };
    });
    brands.sort((a, b) => {
      if (a.models === b.models) {
        return a.brand.localeCompare(b.brand);
      }
      return b.models - a.models;
    });
    return brands.slice(0, x);
  },

  listaMenosModelos(marcas, x) {
    let brands = marcas.map((brand) => {
      return {
        brand: brand.brand,
        models: brand.models.length,
      };
    });
    brands.sort((a, b) => {
      if (a.models === b.models) {
        return a.brand.localeCompare(b.brand);
      }
      return a.models - b.models;
    });
    return brands.slice(0, x);
  },

  listaModelos(marcas, marca) {
    let models = marcas.find(
      (m) => m.brand.toLowerCase() === marca.toLowerCase()
    ).models;
    return models.sort();
  },
};
