const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const arraySpecies = data.species;
  const objResidents = arraySpecies.find((obj) => obj.name === animal).residents;
  return objResidents.every((element) => element.age >= age);
};

module.exports = getAnimalsOlderThan;
