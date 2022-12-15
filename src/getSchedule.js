const data = require('../data/zoo_data');

const tuesday = () => ({
  officeHour: `Open from ${data.hours.Tuesday.open}am until ${data.hours.Tuesday.close}pm`,
  exhibition: data.species.filter((obj) =>
    obj.availability.includes('Tuesday')).map((obj2) => obj2.name),
});

const wednesday = () => ({
  officeHour: `Open from ${data.hours.Wednesday.open}am until ${data.hours.Wednesday.close}pm`,
  exhibition: data.species.filter((obj) =>
    obj.availability.includes('Wednesday')).map((obj2) => obj2.name),
});

const thursday = () => ({
  officeHour: `Open from ${data.hours.Thursday.open}am until ${data.hours.Thursday.close}pm`,
  exhibition: data.species.filter((obj) =>
    obj.availability.includes('Thursday')).map((obj2) => obj2.name),
});

const friday = () => ({
  officeHour: `Open from ${data.hours.Friday.open}am until ${data.hours.Friday.close}pm`,
  exhibition: data.species.filter((obj) =>
    obj.availability.includes('Friday')).map((obj2) => obj2.name),
});

const saturday = () => ({
  officeHour: `Open from ${data.hours.Saturday.open}am until ${data.hours.Saturday.close}pm`,
  exhibition: data.species.filter((obj) =>
    obj.availability.includes('Saturday')).map((obj2) => obj2.name),
});

const sunday = () => ({
  officeHour: `Open from ${data.hours.Sunday.open}am until ${data.hours.Sunday.close}pm`,
  exhibition: data.species.filter((obj) =>
    obj.availability.includes('Sunday')).map((obj2) => obj2.name),
});

const monday = () => ({
  officeHour: 'CLOSED',
  exhibition: 'The zoo will be closed!',
});

const getAllDays = () => ({
  Tuesday: tuesday(),
  Wednesday: wednesday(),
  Thursday: thursday(),
  Friday: friday(),
  Saturday: saturday(),
  Sunday: sunday(),
  Monday: monday(),
});

const ifIsWeekend = (dayWeekend) => {
  let retorno;
  if (dayWeekend === 'Saturday') {
    retorno = { Saturday: saturday() };
  } else if (dayWeekend === 'Sunday') {
    retorno = { Sunday: sunday() };
  }
  return retorno;
};

const ifItIsDay = (day) => {
  let retorno;
  if (day === 'Tuesday') {
    retorno = { Tuesday: tuesday() };
  } else if (day === 'Wednesday') {
    retorno = { Wednesday: wednesday() };
  } else if (day === 'Thursday') {
    retorno = { Thursday: thursday() };
  } else if (day === 'Friday') {
    retorno = { Friday: friday() };
  } else {
    retorno = ifIsWeekend(day);
  }

  return retorno;
};

const isItAnimalOrDay = (parameter) => {
  const animal = data.species.some((element) => element.name === parameter);
  const days = Object.keys(data.hours).some((day) => day === parameter);

  return (animal === true || days === true);
};

const getSchedule = (scheduleTarget) => {
  let retorno;
  if (!scheduleTarget || isItAnimalOrDay(scheduleTarget) === false) {
    retorno = getAllDays();
  } else if (data.species.some((element) => element.name === scheduleTarget)) {
    retorno = data.species.find((element) => element.name === scheduleTarget).availability;
  } else if (scheduleTarget === 'Monday') {
    retorno = { Monday: monday() };
  } else {
    retorno = ifItIsDay(scheduleTarget);
  }
  return retorno;
};

module.exports = getSchedule;
