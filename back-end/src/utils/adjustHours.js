const adjustHours = () => {
  const date = new Date();
  date.setHours(date.getHours() - 3);
  return date;
};

module.exports = {
    adjustHours,
};
