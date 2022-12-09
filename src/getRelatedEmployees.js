const data = require('../data/zoo_data');

const isManager = (id) => {
  const burId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const emeryId = 'b0dc644a-5335-489b-8a2c-4e086c7819a2';

  return id === burId || id === olaId || id === stephanieId || id === emeryId;
};

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === true) {
    const arrayEmployees = data.employees;
    const array = [];
    arrayEmployees.forEach((obj) => {
      const arrayManagers = obj.managers;
      arrayManagers.forEach((element) => {
        if (element === managerId) {
          array.push(`${obj.firstName} ${obj.lastName}`);
        }
      });
    });
    return array;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

// console.log(getRelatedEmployees('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = { isManager, getRelatedEmployees };
