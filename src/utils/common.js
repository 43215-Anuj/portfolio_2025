export const getExperience = () => {
  const start = { year: 2021, month: 2 }; // March 2021 (0-indexed)
  const now = new Date();
  let expYears = now.getFullYear() - start.year;
  let expMonths = now.getMonth() - start.month;
  if (expMonths < 0) {
    expYears -= 1;
    expMonths += 12;
  }
  return `${expYears} year${expYears !== 1 ? "s" : ""} ${expMonths ? `and ${expMonths} month${expMonths !== 1 ? "s" : ""}` : ""}`;
};
