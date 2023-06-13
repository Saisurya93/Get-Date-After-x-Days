const addDays = require("date-fns/addDays");

const getDaysAfterXDays = (days) => {
  const newDate = addDays(new Date(2020, 8, 22), days);
  console.log(`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`);
};

module.exports = getDaysAfterXDays;
