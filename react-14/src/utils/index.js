export function logErrorReportingService(error, info) {
  console.log(error, info);
}

export function sortByProperty(objA, objB, property) {
  const propertyA = objA[property].toLocaleLowerCase();
  const propertyB = objB[property].toLocaleLowerCase();

  if (propertyA < propertyB) {
    return -1;
  }
  if (propertyA > propertyB) {
    return 1;
  }

  // names must be equal
  return 0;
}
