const data = require('../data/zoo_data');

const getAnimalsWithoutParameter = () => {}; // não receba parâmetro;

const getAnimalsWithoutNames = (obj) => {}; // receba apenas o parâmetro {sex: female}; OU receba apenas o parâmetro {sex: female, sorted: true}.

const getAnimalsOnlyNames = (obj) => {}; // caso a função receba apenas o parâmetro {includeNames: true}

const getAnimalsWithoutSex = (obj) => {}; // caso a função receba o parâmetro {includeNames: true, sorted: true};

const getAnimaldWithoutSorted = (obj) => {}; // Retorne a espécie e o nome dos animais filtrado por sexo:

const getAnimalsWithAl = (obj) => {}; // aso o parâmetro da função seja {includeNames: true, sex: female, sorted: true}; OU aso o parâmetro da função seja {includeNames: true, sex: male, sorted: true};

const getAnimalsWithNames = (obj) => {
  let retorno;
  if (!obj.sorted && !obj.sex) {
    retorno = getAnimalsOnlyNames(obj);
  } else if (!obj.sex) {
    retorno = getAnimalsWithoutSex(obj);
  } else if (!obj.sorted) {
    retorno = getAnimaldWithoutSorted(obj);
  } else {
    retorno = getAnimalsWithAl(obj);
  }
  return retorno;
};

const getAnimalMap = (options) => {
  let retorno;
  if (!options) {
    retorno = getAnimalsWithoutParameter();
  } else if (!options.includesNames || (!options.includesNames && !options.sorted)) {
    retorno = getAnimalsWithoutNames(options);
  } else {
    retorno = getAnimalsWithNames(options);
  }

  return retorno;
};

module.exports = getAnimalMap;
