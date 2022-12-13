const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeeByName = (obj) => {
  const employee = employees.find((element) =>
    element.firstName === obj.name || element.lastName === obj.name);

  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: employee.responsibleFor,
    locations: employee.responsibleFor.map((idSpecies) =>
      data.species.find((objSpecies) => objSpecies.id === idSpecies).location),
  };
};

const getEmployeeById = () => {};

const getAllEmployees = () => {}; // retornar uma array de objetos.

const getEmployeesCoverage = (obj) => {
  let retorno;
  if (Object.keys(obj).length === 0) {
    retorno = getAllEmployees();
  } else if (!obj.id) {
    retorno = getEmployeeByName(obj);
  } else if (!obj.name) {
    retorno = getEmployeeById();
  } else {
    // retorno = throw new Error('Informação inválida') //caso não encontre employee correspondente ao id, lastName ou fristName.
  }
  return retorno;
};

console.log(getEmployeesCoverage({ name: 'Spry' }));
module.exports = getEmployeesCoverage;
