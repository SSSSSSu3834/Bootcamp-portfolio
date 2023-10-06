export const getDate = (date) => {
  const _date = new Date(date);
  const yyyy = _date.getFullYear;
  const mm = _date.getMonth;
  const dd = _date.getDate;

  return `${yyyy}-${mm}-${dd}`;
};
