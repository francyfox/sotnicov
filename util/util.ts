
export const copyToClipboard = async (text: string) => {
  await navigator.clipboard.writeText(text);
}
export const arrElementMoveToIndex = (arr: any[], fromIndex: number, toIndex: number) => {
  const element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  return arr.splice(toIndex, 0, element);
}