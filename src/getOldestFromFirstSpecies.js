const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const idFirstAnimal = data.employees.find((element) => element.id === id).responsibleFor[0];
  const arrayResidents = data.species.find((element) => element.id === idFirstAnimal).residents;
  const objOldestAnimal = arrayResidents.reduce((acc, curr) => acc.age > curr.age ? acc : curr);

  const retorno = [];
  retorno.push(objOldestAnimal.name);
  retorno.push(objOldestAnimal.sex);
  retorno.push(objOldestAnimal.age);

  return retorno;
};

module.exports = getOldestFromFirstSpecies;
