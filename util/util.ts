export const copyToClipboard = async (text: string) => {
  await navigator.clipboard.writeText(text);
}
export const rouble = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  minimumFractionDigits: 0,
});

type graphKoef = {
  max: number
  count: number
  koef: number
}
export const graphGrowthData = (data: graphKoef): number[] => {
  const { max, count, koef } = data;
  const a = 0.05;
  const arr = new Array(count).fill(1);

  return arr.map((value) => a * max^2 + koef * max * Math.random());
}