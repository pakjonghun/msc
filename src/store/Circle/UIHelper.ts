export function getRandomNum(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function getRandomColor(min: number, max: number) {
  const r = getRandomNum(min, max);
  const g = getRandomNum(min, max);
  const b = getRandomNum(min, max);
  return `rgb(${r},${g},${b})`;
}
