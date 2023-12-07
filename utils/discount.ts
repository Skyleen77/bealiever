export const getPercentage = (oldPrice: number, newPrice: number) => {
  const percentage = Math.round(((oldPrice - newPrice) / oldPrice) * 100);
  return percentage;
};
