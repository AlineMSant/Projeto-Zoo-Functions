const data = require('../data/zoo_data');

const getEmployeeByName = () => { // deve retornar por firstName ou lastName

  // return {
  //   id: "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
  //   fullName: "Sharonda Spry", // nome completo: firstName + lastName
  //   species: [ "otters", "frogs" ], // espécies as quais a pessoa é responsável
  //   locations: [ "SE", "SW" ], // Um array contendo todas as localizações das espécies
  // }
};

const getEmployeeById = () => {};

const getAllEmployees = () => {}; // retornar uma array de objetos.

const getEmployeesCoverage = (obj) => {
  let retorno;
  if (Object.keys(obj).length === 0) {
    retorno = getAllEmployees();
  } else if (!obj.id) {
    retorno = getEmployeeByName();
  } else if (!obj.name) {
    retorno = getEmployeeById();
  } else {
    // retorno = throw new Error('Informação inválida') //caso não encontre employee correspondente ao id, lastName ou fristName.
  }
  return retorno;
};

module.exports = getEmployeesCoverage;
