const data = require('../data/zoo_data');

// anotações dia-03-filter-reduce 'para incrementar valores dentro de um objeto a partir de uma array'
const ifNoParameter = () => data.species.reduce((acc, curr) => {
  if (!acc[curr]) {
    acc[curr.name] = curr.residents.length;
  }

  return acc;
}, {});

const countAnimals = (obj) => {
  if (!obj) {
    return ifNoParameter();
  }

  if (!obj.sex) {
    return data.species.find((element) => element.name === obj.species).residents.length;
  }
  const arrayResidents = data.species.find((element) => element.name === obj.species).residents;
  return arrayResidents.filter((resident) => resident.sex === obj.sex).length;
};

console.log(countAnimals());

module.exports = countAnimals;
