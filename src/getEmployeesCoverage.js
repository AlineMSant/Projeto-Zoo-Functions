const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeeByName = (obj) => {
  const arrayFirstNameEmployees = data.employees.map((element) => element.firstName);
  const arrayLastNameEmployees = data.employees.map((element) => element.lastName);
  const array = [...arrayFirstNameEmployees, ...arrayLastNameEmployees];

  if (!array.includes(obj.name)) {
    throw new Error('Informações inválidas');
  }
  const employee = employees.find((element) =>
    element.firstName === obj.name || element.lastName === obj.name);

  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: employee.responsibleFor.map((idSpecies) =>
      data.species.find((objSpecies) => objSpecies.id === idSpecies).name),
    locations: employee.responsibleFor.map((idSpecies) =>
      data.species.find((objSpecies) => objSpecies.id === idSpecies).location),
  };
};

const getEmployeeById = (obj) => {
  const arrayIds = data.employees.map((element) => element.id);

  if (!arrayIds.includes(obj.id)) {
    throw new Error('Informações inválidas');
  }
  const employee = employees.find((element) =>
    element.id === obj.id);

  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: employee.responsibleFor.map((idSpecies) =>
      data.species.find((objSpecies) => objSpecies.id === idSpecies).name),
    locations: employee.responsibleFor.map((idSpecies) =>
      data.species.find((objSpecies) => objSpecies.id === idSpecies).location),
  };
};

const getAllEmployees = () => {
  const objeto = data.employees.map((obj) => ({
    id: obj.id,
    fullName: `${obj.firstName} ${obj.lastName}`,
    species: obj.responsibleFor.map((idSpecies) =>
      data.species.find((objSpecies) => objSpecies.id === idSpecies).name),
    locations: obj.responsibleFor.map((idSpecies) =>
      data.species.find((objSpecies) => objSpecies.id === idSpecies).location),
  }));
  return objeto;
};

const getEmployeesCoverage = (obj) => {
  let retorno;
  if (!obj) {
    retorno = getAllEmployees();
  } else if (!obj.id) {
    retorno = getEmployeeByName(obj);
  } else if (!obj.name) {
    retorno = getEmployeeById(obj);
  }
  return retorno;
};

module.exports = getEmployeesCoverage;
