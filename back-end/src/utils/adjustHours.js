const adjustHours = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear());
  date.setMonth(date.getMonth());
  date.setDate(date.getDate());
  date.setHours(date.getHours());
  date.setMinutes(date.getMinutes());
  date.setSeconds(date.getSeconds());
  date.setMilliseconds(date.getMilliseconds());
  return date;
};

module.exports = {
    adjustHours,
};
