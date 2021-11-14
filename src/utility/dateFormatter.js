const monthsShortName = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const dateFormatter = (paramDate) => {
  if (!paramDate) return "";

  const date = new Date(paramDate);

  const year = date?.getFullYear();

  const month = date?.getMonth();

  const shortMonth = `${monthsShortName[month]},`;

  const day = `${date?.getDate()}`?.padStart(2, "0");

  return [day, shortMonth, year]?.join(" ");
};
