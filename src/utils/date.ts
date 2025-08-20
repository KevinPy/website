export function getAge(): number {
  const birthDate = new Date(1988, 7, 19);
  const differenceInTime = Date.now() - birthDate.getTime();
  const convertTimeToDate = new Date(differenceInTime);
  return Math.abs(convertTimeToDate.getUTCFullYear() - 1970);
}
