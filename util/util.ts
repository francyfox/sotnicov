export const copyToClipboard = async (text: string) => {
  await navigator.clipboard.writeText(text);
}
export const rouble = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  minimumFractionDigits: 0,
});