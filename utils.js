export const padZero = (n) => {
  if (n < 10) {
    return `0${n}`;
  } else {
    return n;
  }
};

export const getProgressPercentage = (total, curr, remaining = false) => {
  let res;
  if (remaining) {
    res = (curr / total) * 100 - 100;
  } else {
    res = (curr / total) * 100;
  }

  return res;
};
