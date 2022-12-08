const data = require('../data/zoo_data');

const getEmployeeByName = (name) => {
  const arrayEmployees = data.employees;
  if (!name) {
    return {};
  }
  return arrayEmployees.find((obj) => obj.firstName === name || obj.lastName === name);
};

module.exports = getEmployeeByName;
