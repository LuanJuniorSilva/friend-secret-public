export const encryptMath = (id: number): string => {
  return `${process.env.DEFAULT_TOKEN}${id}${process.env.DEFAULT_TOKEN}`
}

export const decryptMath =  (match: string): number => {
  let idString: string = match
  .replace(`${process.env.DEFAULT_TOKEN}`, '')
  .replace(`${process.env.DEFAULT_TOKEN}`, '');

  return parseInt(idString);
}