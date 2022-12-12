const data = require('../data/zoo_data');

// const entrant = [
//   { age: 5 },
//   { age: 50 },
// ];

const countEntrants = (entrants) => {
  // const child = entrants.reduce((acc, curr) => (curr.age < 18 ? acc += 1 : acc = acc), 0);

  // const adult = entrants.reduce((acc, curr) => (curr.age >= 18 ? acc += 1 && curr.age < 50 : acc = acc), 0);

  // const senior = entrants.reduce((acc, curr) => (curr.age >= 50 ? acc += 1 : acc = acc), 0);

  // return {
  //   adult,
  //   child,
  //   senior,
  // };
};

const calculateEntry = (entrants) => {
  let retorno;
  if (!entrants) {
    retorno = 0;
  } else if (entrants === {}) {
    retorno = 0;
  } else {
    const totalChild = countEntrants(entrants).child * data.prices.child;
    const totalAdult = countEntrants(entrants).adult * data.prices.adult;
    const totalSenior = countEntrants(entrants).senior * data.prices.senior;
    retorno = totalChild + totalAdult + totalSenior;
  }
  return retorno;
};

// console.log(calculateEntry(entrant));
module.exports = { calculateEntry, countEntrants };
