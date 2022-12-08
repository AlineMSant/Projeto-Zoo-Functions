const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const array = [];
  ids.forEach((code) => {
    const arraySpecies = data.species;
    arraySpecies.forEach((obj) => {
      if (obj.id === code) {
        array.push(obj);
      }
    });
  });
  return array;
};

module.exports = getSpeciesByIds;
